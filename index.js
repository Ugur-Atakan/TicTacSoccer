/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Linking } from 'react-native';
import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';
import messaging from '@react-native-firebase/messaging';
import firebase from '@react-native-firebase/app';
import PushNotification from 'react-native-push-notification';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

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
    const result = await check(PERMISSIONS.IOS.NOTIFICATIONS);
    if (result === RESULTS.GRANTED) {
      console.log('Bildirimlere izin verildi');
      // Bildirimleri kullanabilirsiniz
    } else if (result === RESULTS.DENIED) {
      console.log('Bildirimlere izin verilmedi');
      // Kullanıcıyı ayarlara yönlendirme
      Linking.openSettings();
    }
  } else{
    try {
      const result = await request(PERMISSIONS.IOS.NOTIFICATIONS, {
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
      } else {
        console.log('Bildirimlere izin verilmedi');
      }
    } catch (err) {
      console.warn(err);
    }
  }
};
  requestNotificationPermission();
  
  // Create channel for notification
  PushNotification.createChannel(
    {
      channelId: 'notificationChannel01',
      channelName: 'notificationChannel01',
    },
    created => console.log(`createChannel returned '${created}'`),
  );
  
  // Register background handler
  messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Message handled in the background!', remoteMessage);
  });
  //Genel Bildirimlere üye ettim.
  messaging().subscribeToTopic('genel_bildirimler');

AppRegistry.registerComponent(appName, () => App);
