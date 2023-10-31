import React from 'react';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { IconButton } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../../../utils/redux/reducers/userReducer';
import { width } from '../../../style';

export default function GoogleSignIn() {
    const dispatch = useDispatch();

    return (
        <IconButton
            icon="google"
            size={width* 0.17}
            onPress={() => {
                GoogleSignin.hasPlayServices().then((hasPlayService) => {
                    if (hasPlayService) {
                        GoogleSignin.signIn().then((userInfo) => {

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
