import { IconButton } from "react-native-paper";
import { width } from "../../../style";
import { appleAuth } from '@invertase/react-native-apple-authentication';
import { Alert } from "react-native";
import baseAPI from "../../../utils/http/base";
export default function AppleRegister({navigation}:any) {

  const handleRegister = async ({userData}:any) => {
    try {
      const response = await baseAPI.post('auth/sign-up-with-apple', userData).then((res) => {
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


  const onAppleButtonPress = () => {
    try {
      return appleAuth.performRequest({
        requestedOperation: appleAuth.Operation.LOGIN,
        requestedScopes: [appleAuth.Scope.FULL_NAME, appleAuth.Scope.EMAIL],
      }).then((appleAuthRequestResponse) => {
        let { identityToken, nonce } = appleAuthRequestResponse;

        if (!appleAuthRequestResponse.identityToken) {
          throw new Error('Apple Sign-In failed - no identify token returned');
        }

        if (identityToken && nonce) {
          let userInfo = appleAuthRequestResponse;
          console.log("USER INFO IS: " + JSON.stringify(userInfo));
        //   let user = {
        //     givenName: userInfo.user.givenName,
        //     familyName: userInfo.user.familyName,
        //     idToken: userInfo.idToken,
        //     email: userInfo.user.email,
        // }
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





