/**
 * @format
 */
import 'react-native-gesture-handler';
import {Alert, AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Linking } from 'react-native';
import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';
import messaging from '@react-native-firebase/messaging';
import firebase from '@react-native-firebase/app';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { createChannel, NotifeeRequestPermission } from './utils/FirebaseNotifications';

if (!firebase.apps.length) {
    firebase.initializeApp({});
  }
  GoogleSignin.configure({
    offlineAccess: true,
    webClientId: '1063264802770-suc70vs78uqn1s1bv7eoa633klrn5u8l.apps.googleusercontent.com',
    androidClientId:'1063264802770-30m085fq92j9d9gt04s70ugstj5d12rl.apps.googleusercontent.com',
    iosClientId:'1063264802770-dfvl17vpmd1cvoroerbk02pm8nj0gmve.apps.googleusercontent.com'
  });

  

  const requestNotificationPermission = async () => {
  os = Platform.OS;
  if (os === 'ios') {
    const result = await check(PERMISSIONS.IOS.POST_NOTIFICATIONS);
    if (result === RESULTS.GRANTED) {
      console.log('Bildirimlere izin verildi');
      // Bildirimleri kullanabilirsiniz
    } else if (result === RESULTS.DENIED) {
      console.log('Bildirimlere izin verilmedi');
      Linking.openSettings();
    }
  } else{
    try {
      const result = await check(PERMISSIONS.ANDROID.POST_NOTIFICATIONS, {
        title: 'Bildirimlere izin verin',
        message:
          'Bu uygulama sana gerektiğinde bildirimler gönderecek ' +
          'Bildirimleri almak ister misin? (Bence evet)' +
          'Bu izin olmadan uygulama çalışmaz',
        buttonNeutral: 'Daha sonra sor',
        buttonNegative: 'İptal',
        buttonPositive: 'Tamam',
      });
      if (result === RESULTS.GRANTED) {
        console.log('Bildirimlere izin verildi');
        // Bildirimleri kullanabilirsiniz
      } else {
        console.log('Bildirimlere izin verilmedi');
        Alert.alert('Bildirimlere izin verilmedi', 'Bildirimleri alamazsınız', [
          {
            text: 'Tamam',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'Ayarlar', onPress: () => Linking.openSettings()},
        ]);
      }
    } catch (err) {
      console.log(err);
    }
  }
};
  requestNotificationPermission();
  
  NotifeeRequestPermission();
  createChannel();
  
  //Genel Bildirimlere üye ettim.
  messaging().subscribeToTopic('genel_bildirimler');


AppRegistry.registerComponent(appName, () => App);

