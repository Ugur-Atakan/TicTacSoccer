import React from 'react';

import { useDispatch } from 'react-redux';
import { loginSuccess } from '../../../utils/redux/reducers/userReducer';
import { width } from '../../../style';
import { appleAuth, AppleButton } from '@invertase/react-native-apple-authentication';




export default function AppleSignin() {
    const dispatch = useDispatch();

    let user = null;

    async function fetchAndUpdateCredentialState(updateCredentialStateForUser) {
      if (user === null) {
        updateCredentialStateForUser('N/A');
      } else {
        const credentialState = await appleAuth.getCredentialStateForUser(user);
        if (credentialState === appleAuth.State.AUTHORIZED) {
          updateCredentialStateForUser('AUTHORIZED');
        } else {
          updateCredentialStateForUser(credentialState);
        }
      }
    }
    
    /**
     * Starts the Sign In flow.
     */
    async function onAppleButtonPress(updateCredentialStateForUser) {
      console.warn('Beginning Apple Authentication');
      try {
        const appleAuthRequestResponse = await appleAuth.performRequest({
          requestedOperation: appleAuth.Operation.LOGIN,
          requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
        });
    
        console.log('appleAuthRequestResponse', appleAuthRequestResponse);
    
        const {
          user: newUser,
          email,
          nonce,
          identityToken,
          realUserStatus /* etc */,
        } = appleAuthRequestResponse;
    
        user = newUser;
    
        fetchAndUpdateCredentialState(updateCredentialStateForUser).catch(error =>
          updateCredentialStateForUser(`Error: ${error.code}`),
        );
    
        if (identityToken) {
          // e.g. sign in with Firebase Auth using `nonce` & `identityToken`
          console.log(nonce, identityToken);
        } else {
          // no token - failed sign-in?
        }
    
        if (realUserStatus === appleAuth.UserStatus.LIKELY_REAL) {
          console.log("I'm a real person!");
        }
    
        console.log(`Apple Authentication Completed, ${user}, ${email}`);
      } catch (error) {
        if ((error as any).code === appleAuth.Error.CANCELED) {
          console.warn('User canceled Apple Sign in.');
        } else {
          console.error(error);
        }
      }
    }
    
    const [credentialStateForUser, updateCredentialStateForUser] = useState(-1);
    useEffect(() => {
      if (!appleAuth.isSupported) return;
    
      fetchAndUpdateCredentialState(updateCredentialStateForUser).catch(error =>
        updateCredentialStateForUser(`Error: ${error.code}`),
      );
    }, []);
    
    useEffect(() => {
      if (!appleAuth.isSupported) return;
    
      return appleAuth.onCredentialRevoked(async () => {
        console.warn('Credential Revoked');
        fetchAndUpdateCredentialState(updateCredentialStateForUser).catch(error =>
          updateCredentialStateForUser(`Error: ${error.code}`),
        );
      });
    }, []);

    return (
<AppleButton
        style={{ width: width* 0.17, height: width* 0.17 }}
        cornerRadius={5}
        buttonStyle={AppleButton.Style.BLACK}
        buttonType={AppleButton.Type.SIGN_IN}
        onPress={() => onAppleButtonPress(updateCredentialStateForUser)
            .then(userInfo => {
            dispatch(loginSuccess({
                user: {
                    userId: userInfo.user.id,
                    name: userInfo.user.givenName,
                    lastName: userInfo.user.familyName,
                    email: userInfo.user.email,
                    profilePicture: userInfo.user.photo,
                },
                accessToken: userInfo.idToken || "",
            }));
        }
        )}
        onCredentialRevoked={async () => {
                console.warn('Credential Revoked');
                fetchAndUpdateCredentialState(updateCredentialStateForUser).catch(error =>
                    updateCredentialStateForUser(`Error: ${error.code}`),
                );
            }
        }
    />
    );
}





