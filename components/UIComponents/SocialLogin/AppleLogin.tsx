import { IconButton } from "react-native-paper";
import { width } from "../../../style";
import { appleAuth } from '@invertase/react-native-apple-authentication';
import { useDispatch } from "react-redux";
import { AppleLogin } from "../../../utils/redux/actions/user";
export default function AppleSignin() {
const dispatch = useDispatch();
  const onAppleButtonPress = () => {
    try {
      return appleAuth.performRequest({
        requestedOperation: appleAuth.Operation.REFRESH,
        requestedScopes: [appleAuth.Scope.FULL_NAME, appleAuth.Scope.EMAIL],
      }).then((appleAuthRequestResponse) => {
        let { identityToken, nonce } = appleAuthRequestResponse;

        if (!appleAuthRequestResponse.identityToken) {
          throw new Error('Apple Sign-In failed - no identify token returned');
        }

        if (identityToken && nonce) {
          dispatch(AppleLogin(identityToken) as any);
        }
      }
      ).catch((error) => {
        console.log("ERROR IS: " + JSON.stringify(error));
      });

    } catch (error) {
      console.log('Apple ile giriş yaparken bir hata meydana geldi. HATA =>', error);
    }
  }


  return (
    <IconButton
      icon="apple"
      size={width * 0.17}
      onPress={onAppleButtonPress}
    />

  )
}





