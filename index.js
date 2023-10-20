/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {PermissionsAndroid} from 'react-native';

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
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
        {
          title: 'Bildirimlere izin verin',
          message:
            'Bu uygulama sana gerektiğinde bildirimler gönderecek ' +
            'Bildirimleri almak ister misin?(Bence evet)' +
            'Bu izin olmadan uygulama çalışmaz',
          buttonNeutral: 'Daha sonra sor',
          buttonNegative: 'İptal',
          buttonPositive: 'Tamam',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Bildirimlere izin verildi');
      } else {
        console.log('Bildirimlere izin verilmedi');
      }
    } catch (err) {
      console.warn(err);
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
