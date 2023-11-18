import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Alert,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { Checkbox, IconButton } from 'react-native-paper';
import GoogleSignIn from '../../components/UIComponents/SocialLogin/Google';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { loginUser} from '../../utils/redux/reducers/userReducer';
import {width} from '../../style';

const LoginScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = React.useState(false);

  const dispatch = useDispatch();

  const handleLogin = async () => {
    if (email === '' || password === '') {
      Alert.alert('Lütfen tüm alanları doldurunuz',"Email ve parola alanları boş bırakılamaz",[
        {
          text: "Tamam",
        }
      ]);
      return;
    }
    let credentials = {
      email: email,
      password: password
    }
    dispatch(loginUser(credentials) as any);

    if(checked){
      await AsyncStorage.setItem('user-data', JSON.stringify(credentials));
    }
  }

  useEffect(() => {
    AsyncStorage.getItem('user-data').then((value) => {
      if (value !== null) {
        let data = JSON.parse(value);
        setEmail(data.email);
        setPassword(data.password);
        dispatch(loginUser(data) as any);
      }
    });
  }, []);

  return (
    <SafeAreaView>
      <ScrollView
      style={{height: '100%',width: '100%',backgroundColor: '#fff'}}
      contentContainerStyle={{flexGrow: 1,justifyContent: 'center',alignItems: 'center'}}
  keyboardShouldPersistTaps="handled"
>

      <View style={styles.logoContainer}>
        <Text style={styles.logo}>3 5 2'ye HOŞGELDİN</Text>
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
          secureTextEntry
        />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
            <Checkbox
              status={checked ? 'checked' : 'unchecked'}
              color='#007BFF'
              onPress={() => {
                setChecked(!checked);
              }}
            />
            <Text>Beni hatırla</Text>
          </View>
          <View>
            <Text
              style={{ alignSelf: 'flex-end', padding: 10 }}
              onPress={() => navigation.navigate("ForgotPassword")}
            >Şifreni mi unuttun ?</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Giriş Yap</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={{ alignSelf: 'center', fontSize: width* 0.09, padding: width* 0.05 }}> YA DA </Text>
        <Text style={{ alignSelf: 'center', fontSize: width* 0.04, paddingBottom: 10 }}>İstersen aşağıdakilerden birisini kullanarak da giriş yapabilirsin</Text>
        <View
          style={{
            backgroundColor: '#fff',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >

          {Platform.OS === 'ios' ?
            <>
              <GoogleSignIn />
            </>
            :
            <GoogleSignIn />
          }

          {/* <IconButton
            icon="facebook"
            size={width* 0.17}
            onPress={() => console.log("facebook")}
          /> */}
        </View>
      </View>
      <View>
        <Text
          style={{ color: '#007BFF', padding: width* 0.03, margin: width* 0.03 }}
          onPress={() => navigation.navigate("Register")}
        >
          Hala üyemiz değilsen, bana tıklayarak üye olabilirsin
        </Text>
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
    marginBottom: width* 0.06,
  },
  logo: {
    fontSize: width* 0.08,
    fontWeight: 'bold',
    color: '#333',
  },
  inputContainer: {
    width: '80%',
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingVertical: width* 0.025,
    paddingHorizontal: 5,
    marginBottom: width* 0.025,
  },
  loginButton: {
    backgroundColor: '#007BFF',
    padding: width* 0.04,
    borderRadius: 50,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: width* 0.04,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
