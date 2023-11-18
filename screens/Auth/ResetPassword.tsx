import { Alert, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { Text, TextInput } from "react-native";
import { useState } from "react";
import baseAPI from "../../utils/http/base";
export default function ResetPassword (){
    const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleResetPassword = async (navigation: any) => {
    if (email === '' || name === '' || lastName === '') {
      Alert.alert('Lütfen tüm alanları doldurunuz', "Alanlar boş bırakılamaz", [
        {
          text: "Tamam",
        }
      ]);
      return;
    }
    try {
    baseAPI.post('auth/request-reset-password', {
        name,
        lastName,
        email,
        }).then(() => {
            Alert.alert(
                "Şifre sıfırlama başarılı",
                "Şifre sıfırlama talebiniz başarılı bir şekilde kaydedildi. \n Yeni şifreniz mail adresinize gönderilecektir.",
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
  })
} catch (error: any) {
    console.log(error);
}
};


    return (
        <SafeAreaView>
        <ScrollView
          style={{ height: '100%', width: '100%', backgroundColor: '#fff' }}
          contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.logoContainer}>
            <Text style={styles.logo}>3 5 2'ye HOŞGELDİN</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Adın"
              onChangeText={text => setName(text)}
              value={name}
            />
  
            <TextInput
              style={styles.input}
              placeholder="Soyadın"
              onChangeText={text => setLastName(text)}
              value={lastName}
            />
  
            <TextInput
              style={styles.input}
              placeholder="Email"
              onChangeText={text => setEmail(text)}
              value={email}
              autoCapitalize="none"
              keyboardType="email-address"
            />
           
            <TouchableOpacity style={styles.loginButton} onPress={()=>{handleResetPassword()}}>
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