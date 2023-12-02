import React from 'react';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { IconButton } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { width } from '../../../style';
import { Alert } from 'react-native';
import baseAPI from '../../../utils/http/base';

export default function GoogleRegister({navigation}:any) {

    const handleRegister = async ({userData}:any) => {
        try {
          const response = await baseAPI.post('auth/sign-up-with-google', userData).then((res) => {
    if(res.status===200){
            Alert.alert(
              "Kayıt başarılı",
              "Kayıt işlemi başarılı bir şekilde gerçekleşti. \n Şimdi giriş yapabilirsin",
              [
                {
                  text: "Tamam,Beni giriş ekranına yönlendir",
                  onPress: () => {
                    navigation.navigate("Giriş Yap")
                  },
                  style: "default", // İptal düğmesini tanımlar
                },
              ]
            )
          }
        }).catch((err) => {
            console.log("ERROR IS: " + JSON.stringify(err));
            }
          )
        } catch (error: any) {
          if (error.response) {
            const errorMessage = error.response.data.message;
            if (errorMessage === 'Duplicate record') {
              Alert.alert(
                "Kayıt başarısız",
                "Belirttiğiniz e posta adresine sahip bir hesap var. \nHesap size aitse şifremi unuttum ekranını kullanabilirsiniz.",
                [
                      {
                        text: "Tamam",
                      },  
                  ]
                )
            } else {
              Alert.alert('Bilinmeyen bir hata oluştu',errorMessage)
            }
          } else {
            Alert.alert('Bir hata oluştu:', error.message);
          }
        }
      };

    return (
        <IconButton
            icon="google"
            size={width * 0.17}
            onPress={() => {
                GoogleSignin.hasPlayServices().then((hasPlayService) => {
                    if (hasPlayService) {
                        GoogleSignin.signIn().then((userInfo) => {
                            console.log("GOOGLE USER INFO: " + JSON.stringify(userInfo));
                            let user = {
                                givenName: userInfo.user.givenName,
                                familyName: userInfo.user.familyName,
                                idToken: userInfo.idToken,
                                email: userInfo.user.email,
                            }
                        handleRegister({user});
                        }
                        ).catch((e) => {
                            console.log("ERROR IS: " + JSON.stringify(e));
                        })
                    }

                }).catch((e) => {
                    console.log("ERROR IS: " + JSON.stringify(e));
                })
            }} />

    );
}
