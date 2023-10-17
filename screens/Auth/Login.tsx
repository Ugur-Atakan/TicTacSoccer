import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Image,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../../utils/redux/reducers/userReducer';
import { Checkbox, IconButton } from 'react-native-paper';
import baseAPI from '../../utils/http/base';

const LoginScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = React.useState(false);

  const dispatch = useDispatch();

  const handleLogin = async () => {
    try {
      const response = await baseAPI.post('sign-in', {
        email,
        password,
      });
  
      dispatch(loginSuccess({
        user: {
          name: response.data.name,
          lastName: response.data.lastName,
        },
        accessToken: response.data.accessToken,
      }));
    } catch (error) {
    }
  };
  

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={styles.logoContainer}>
        <Text style={styles.logo}>Our Logo</Text>
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
          placeholder="Password"
          onChangeText={text => setPassword(text)}
          value={password}
          secureTextEntry
        />
       <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
        <View style={{flexDirection:'row', justifyContent:'flex-start', alignItems:'center'}}>
      <Checkbox
      status={checked ? 'checked' : 'unchecked'}
      color='#007BFF'
      onPress={() => {
        setChecked(!checked);
      }}
    />
  <Text>Remember Me</Text>
        </View>
       <View>
          <Text
          style={{alignSelf:'flex-end',padding:10}}
          onPress={() => navigation.navigate("ForgotPassword")}
          >Forgot Password?</Text>
       </View>
        </View>
  
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={{alignSelf:'center',fontSize:30,padding:20}}> OR</Text>
        <Text style={{alignSelf:'center',paddingBottom:10}}>Login with these apps</Text>
        <View
          style={{
            backgroundColor: '#fff',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}
        >

          {Platform.OS === 'ios' ?
            <>
              <IconButton
                icon="apple"
                size={50}
                onPress={() => console.log("twitter")}
              />
              <IconButton
                icon="google"
                size={50}
                onPress={() => console.log("google")}
              />
            </>
            :
            <IconButton
              icon="google"
              size={50}
              onPress={() => console.log("google")
            }
            />
          }

          <IconButton
            icon="facebook"
            size={50}
            onPress={() => console.log("facebook")}
          />
        </View>
      </View>
      <View>
        <Text
          style={{ color: '#007BFF', padding: 10, margin: 10 }}
          onPress={() => navigation.navigate("Register")}
        >
          Are you not registered? You can register from press here
        </Text>
      </View>
    </KeyboardAvoidingView>
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
});

export default LoginScreen;
