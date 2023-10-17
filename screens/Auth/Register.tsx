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

const RegisterScreen = ({ navigation }: any) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');

    const dispatch = useDispatch();

    const handleRegister = async () => {
        try {
            const response = await baseAPI.post('sign-up', {
                name,
                surname,
                email,
                password,
            });
            console.log(response.data);
        } catch (error) {
            console.log(error);
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
                    placeholder="Name"
                    onChangeText={text => setName(text)}
                    value={name}
                    
                />

                <TextInput
                    style={styles.input}
                    placeholder="Surname"
                    onChangeText={text => setSurname(text)}
                    value={surname}
                />

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

                <TouchableOpacity style={styles.loginButton} onPress={handleRegister}>
                    <Text style={styles.loginButtonText}>Register</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text style={{ alignSelf: 'center', fontSize: 30, padding: 20 }}> OR</Text>
                <Text style={{ alignSelf: 'center', paddingBottom: 10 }}>Register with these apps</Text>
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
                    Are you already registered? You can login from press here
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

export default RegisterScreen;
