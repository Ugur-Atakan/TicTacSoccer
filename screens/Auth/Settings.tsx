import { Button, Divider, Text } from 'react-native-paper';
import { SafeAreaView, ScrollView, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../utils/redux/stores/store';
import SliderComponent from '../../components/UIComponents/slider';
export default function SettingsScreen({ navigation }: any) {
    const userData = useSelector((state: RootState) => state.user.userData);
    const soundVolume = useSelector((state: RootState) => state.soundVolume.soundVolume);
    let volume = soundVolume * 2000;
    return (
        <SafeAreaView>
            <ScrollView>
                <Text variant="displayMedium" style={{ alignSelf: 'center' }}>Ayarlar</Text>
                <Divider />
                <View style={{ padding: 10 }}>
                    <Text variant="headlineMedium" style={{ alignSelf: 'center' }} >Müzik Sesi Seviyesi</Text>
                    <Text>Şu anki ses seviyesi: %{parseInt(volume.toString(), 10)}</Text>
                    <SliderComponent />
                </View>
                <Divider />
                <View style={{ padding: 10 }}>
                    <Text variant="headlineMedium" style={{ alignSelf: 'center' }} >Hesap Ayrıntıları</Text>
                    <Text>Adın Soyadın : {userData?.name + ' ' + userData?.lastName}</Text>
                    <Text>E-Posta Adresin: {userData?.email}</Text>
                </View>
                <Divider />
                <View style={{ padding: 10 }}>
                    <Text variant="headlineMedium" style={{ alignSelf: 'center' }}>Parola Değiştir</Text>
                    <Text>Parola değiştirmek için giriş ekranındaki şifremi unuttum kısmını kullanabilirsin</Text>
                </View>
                <Divider />
                <View style={{ padding: 10 }}>
                    <Text variant="headlineMedium" style={{ alignSelf: 'center' }}>Hesabı Sil</Text>
                    <Text>Hesabını silmek için aşağıdaki butonu kullanabilirsin</Text>
                    <Button textColor='#303F9F' onPress={() => navigation.navigate('DeleteAccount')}>Hesabımı Sil</Button>
                </View>
                <Divider />
                <View style={{ padding: 10 }}>
                    <TouchableOpacity style={{height:100,backgroundColor:'lightblue',justifyContent:'center'}}onPress={() => navigation.navigate('Logout')}>
                    <Text variant="headlineMedium" style={{ alignSelf: 'center'}}>Çıkış Yap</Text>
                    </TouchableOpacity>
                </View>
                <Divider />
            </ScrollView>
        </SafeAreaView>
    )

}