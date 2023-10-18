import { Alert } from "react-native";
import { View } from "react-native";
import { IconButton, Text } from "react-native-paper";
import { logoutSuccess } from '../../utils/redux/reducers/userReducer';
import { useDispatch } from "react-redux";

export default function LogoutScreen(){
    const dispatch = useDispatch();

    const handler = ()=>{
        Alert.alert(
            "GERÇEKTEN ÇIKACAK MISIN",
            "Gerçekten çıkmak istediğinden emin misin?",
            [
              {
                text: "Hayır",
                onPress: () => {
                  // "Hayır" butonuna tıklama işlevi
                  console.log("Çıkma işlemi iptal edildi.");
                },
                style: "cancel", // İptal düğmesini tanımlar
              },
              {
                text: "Evet",
                onPress: ()=> { 
                  // "Evet" butonuna tıklama işlevi
                  Alert.alert(
                    "Çıkış yapılıyor",
                    "Yine gel tamam mı"
                    ,
                    [
                        {
                            text: "Hayır gelmem",
                            onPress: () => {
                              dispatch(logoutSuccess());
                              Alert.alert("Bu beni üzer","Bir şikayetin varsa bana ulaşabilirsin");
                            },
                            style: "cancel", // İptal düğmesini tanımlar
                          },
                          {
                            text: "Tamam Gelirim",
                            onPress: () => {
                              dispatch(logoutSuccess());
                              // "Hayır" butonuna tıklama işlevi
                             Alert.alert("Tamam gel","Burada seni bekliyor olacağım");
                            },
                            style: "cancel", // İptal düğmesini tanımlar
                          },  
                      ]
                    )
                },
              },
            ]
          );
    }
    return (
        <View>
            <Text variant="headlineMedium" style={{padding:30}}>ÇIKIŞ YAPMAK İSTEDİĞİNİ SÖYLEDİN, DOĞRU MU </Text>
            <View>
                <Text style={{fontSize:30,alignSelf:'center'}}>Çıkış yapmak için aşağıdaki butona tıkla</Text>
                <IconButton
                icon='logout-variant'
                size={300}
                iconColor="red"
            onPress={() => handler()}
                />
            </View>
        </View>
    );
}