import { Platform, View } from "react-native";
import { Text } from "react-native-paper";
import { width } from "../../style";
import GoogleSignIn from "../../components/UIComponents/SocialLogin/GoogleLogin";
import AppleSignin from "../../components/UIComponents/SocialLogin/AppleLogin";

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
              <AppleSignin />
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