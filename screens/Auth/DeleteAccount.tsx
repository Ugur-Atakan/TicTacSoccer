import { Alert, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { Text, TextInput } from "react-native";
import { useState } from "react";
import baseAPI from "../../utils/http/base";

export default function DeleteAccount({ navigation }: any) {
  const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

  const handleDeleteAccount = async () => {
    if (email === '' || password === '') {
      Alert.alert('Lütfen tüm alanları doldurunuz', "Alanlar boş bırakılamaz", [
        {
          text: "Tamam",
        }
      ]);
      return;
    }
    Alert.alert(
      "Hesabınızı silmek üzeresiniz",
      "Hesabınızı silmek istediğinize emin misiniz? \n Bu işlem geri alınamaz ve tüm verileriniz silinecektir.",
      [
        {
          text: "Hayır",
          style: "cancel",
        },
        {
          text: "Evet",
          onPress: () => deleteAccount(),
        },
      ]
    )
  }
  const deleteAccount = async () => {
    try {
      const response = await baseAPI.post('auth/delete-account', {
        email,
        password
      }).then((res) => {
        if (res.status == 200) {
          Alert.alert(
            "Hesap silme başarılı",
            "Hesabınız başarılı bir şekilde silindi. \n Dilerseniz yeni bir hesap oluşturabilirsiniz",
            [
              {
                text: "Tamam",
                style: "default",
              },
            ]
          )
        }
      }).then(() => {
        navigation.navigate("Giriş Yap")
      }
        )
    } catch (error: any) {
      if (error.response) {
        const errorMessage = error.response.data.message;
        const errorStatus = error.response.status;
        if (errorStatus === 401) {
          Alert.alert(
            "Hesap silme başarısız",
            " Girmiş olduğunuz e-posta adresi veya parola hatalı \n \n Lütfen e posta adresinizi ve parolanızı kontrol ediniz.",
            [
              {
                text: "Tamam",
                style: "default",
              },
            ]
          )
        } else if (errorStatus === 404) {
          Alert.alert(
            "Hesap silme başarısız",
            "Belirttiğiniz e posta adresine sahip bir hesap bulunamadı. \n \n Lütfen e posta adresinizi kontrol ediniz.",
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
        <View>
          <Text>Hesabınızı silmek için email adresinizi ve parolanızı giriniz </Text>
        </View>
        <View style={styles.logoContainer}>
          <Text style={styles.logo}>Hesabını Sil</Text>
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
           <TextInput
            style={styles.input}
            placeholder="Parola"
            onChangeText={text => setPassword(text)}
            value={password}
            autoCapitalize="none"
            keyboardType="default"
            secureTextEntry
          />

          <TouchableOpacity style={styles.loginButton} onPress={handleDeleteAccount}>
            <Text style={styles.loginButtonText}>GÖNDER</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text>Bu işlem tamamen sizin sorumluluğunuzdadır. </Text>
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