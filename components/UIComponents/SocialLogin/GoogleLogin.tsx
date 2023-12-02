import React from 'react';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { IconButton } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../../../utils/redux/reducers/userReducer.duck';
import { width } from '../../../style';
import { GoogleLogin } from '../../../utils/redux/actions/user';

export default function GoogleSignIn() {
    const dispatch = useDispatch();

    return (
        <IconButton
            icon="google"
            size={width * 0.17}
            onPress={() => {
                GoogleSignin.hasPlayServices().then((hasPlayService) => {
                    if (hasPlayService) {
                        GoogleSignin.signIn().then((userInfo) => {
                           
                            let user = {
                                givenName: userInfo.user.givenName,
                                familyName: userInfo.user.familyName,
                                idToken: userInfo.idToken,
                                email: userInfo.user.email,
                            }
                            console.log("USER INFO IS: " + JSON.stringify(userInfo));
                            dispatch(GoogleLogin(user) as any);
                        }).catch((e) => {
                            console.log("ERROR IS: " + JSON.stringify(e));
                        })
                    }
                }).catch((e) => {
                    console.log("ERROR IS: " + JSON.stringify(e));
                })
            }} />

    );
}
