import { Alert, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { Text, TextInput } from "react-native";
import { useState } from "react";
import baseAPI from "../../utils/http/base";
export default function ResetPassword() {
  const [email, setEmail] = useState('');

  const handleResetPassword = async () => {
    if (email === '') {
      Alert.alert('Lütfen tüm alanları doldurunuz', "Alanlar boş bırakılamaz", [
        {
          text: "Tamam",
        }
      ]);
      return;
    }
    try {
      const response = await baseAPI.post('auth/request-reset-password', {
        email,
      }).then((res) => {
        if (res.status == 200) {
          Alert.alert(
            "Şifre sıfırlama başarılı",
            "Şifre sıfırlama talebiniz başarılı bir şekilde kaydedildi. \n Yeni şifreniz mail adresinize gönderilecektir.",
            [
              {
                text: "Tamam",
                style: "default",
              },
            ]
          )
        }
      })
    } catch (error: any) {
      if (error.response) {
        const errorMessage = error.response.data.message;
        const errorStatus = error.response.status;
        if (errorStatus === 400) {
          Alert.alert(
            "Şifre sıfırlama başarısız",
            "Belirttiğiniz e posta adresine zaten bir şifre sıfırlama epostası gönderilmiş. \n \n Lütfen e posta adresinizi kontrol ediniz. \n Her 24 saatte bir şifre sıfırlama talebi oluşturabilirsiniz.",
            [
              {
                text: "Tamam",
                style: "default",
              },
            ]
          )
        } else if (errorStatus === 404) {
          Alert.alert(
            "Şifre sıfırlama başarısız",
            "Belirttiğiniz e posta adresine sahip bir hesap bulunamadı. \n \n Lütfen e posta adresinizi kontrol ediniz. \n Hesabınız yoksa kayıt olabilirsiniz.",
            [
              {
                text: "Tamam",
                style: "default",
              },
            ]
          )
        }

        else {
          Alert.alert('Bilinmeyen bir hata meydana geldi', errorMessage)
        }
      } else {
        Alert.alert('Bir hata meydana geldi', error.message)
      }
    }
  }

  return (
    <SafeAreaView>
      <ScrollView
        style={{ height: '100%', width: '100%', backgroundColor: '#fff' }}
        contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.logoContainer}>
          <Text style={styles.logo}>Şifreni Sıfırla</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={text => setEmail(text)}
            value={email}
            autoCapitalize="none"
            keyboardType="email-address"
          />

          <TouchableOpacity style={styles.loginButton} onPress={handleResetPassword}>
            <Text style={styles.loginButtonText}>GÖNDER</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logoContainer: {
    marginBottom: 30,
  },
  logo: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#333',
  },
  inputContainer: {
    width: '80%',
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 10,
    paddingHorizontal: 5,
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
})