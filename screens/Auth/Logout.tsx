import { Alert } from "react-native";
import { View } from "react-native";
import { IconButton, Text } from "react-native-paper";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../utils/redux/actions/user";
import { width } from "../../style";

export default function LogoutScreen(){
    const dispatch = useDispatch();

    const handler = async ()=>{
        Alert.alert(
            "GERÇEKTEN ÇIKACAK MISIN",
            "Gerçekten çıkmak istediğinden emin misin? \n Çıkış yaptığında kayıtlı oturum verilerin silinecek ve yeniden giriş yapman gerekecek",
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
                              dispatch(logoutUser() as any);
                              Alert.alert("Bu beni üzer","Bir şikayetin varsa bana ulaşabilirsin");
                            },
                            style: "cancel", // İptal düğmesini tanımlar
                          },
                          {
                            text: "Tamam Gelirim",
                            onPress: () => {
                              dispatch(logoutUser() as any);
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
            <Text variant="headlineMedium" style={{padding:width*0.05}}>ÇIKIŞ YAPMAK İSTEDİĞİNİ SÖYLEDİN, DOĞRU MU </Text>
            <View>
                <Text style={{fontSize:width*0.05,alignSelf:'center'}}>Çıkış yapmak için aşağıdaki butona tıkla</Text>
                <IconButton
                icon='logout-variant'
                size={width*0.6}
                iconColor="red"
            onPress={handler}
                />
            </View>
        </View>
    );
}