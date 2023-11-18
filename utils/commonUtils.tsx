import messaging from '@react-native-firebase/messaging';
import {useEffect} from 'react';
import {Alert} from 'react-native';
import PushNotification from 'react-native-push-notification';
import 'react-native-gesture-handler';

export async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  // if (enabled) {
  //   console.log('Authorization status:', authStatus);
  // }
}

export const getToken = async () => {
  await messaging().registerDeviceForRemoteMessages();
  const token = await messaging().getToken();
  console.log('==============TOKEN START======================');
  console.log(token);
  console.log('==============TOKEN END======================');
  return token;
};

export const notificationListenr = () => {
  // Assume a message-notification contains a "type" property in the data payload of the screen to open
  messaging().onNotificationOpenedApp(remoteMessage => {
    console.log(
      'Notification caused app to open from background state:',
      remoteMessage.notification,
    );
  });

  // Check whether an initial notification is available
  messaging()
    .getInitialNotification()
    .then(remoteMessage => {
      if (remoteMessage) {
        console.log(
          'Notification caused app to open from quit state:',
          remoteMessage.notification,
        );
      }
    });
};

export const createLocalNotification = (title: string, msg: string) => {
  PushNotification.localNotification({
    channelId: 'notificationChannel01',
    title: title,
    message: msg,
  });
};

export const AlertNotification = () => {
  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert(
        JSON.stringify(remoteMessage.notification?.title!),
        JSON.stringify(remoteMessage.notification?.body!),
      );
      console.log(JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  }, []);
};

export const ALocalNotification = () => {
  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      createLocalNotification(
        remoteMessage.notification?.title!,
        remoteMessage.notification?.body!,
      );
      console.log(JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  }, []);
};

export const localNotificationSchedule = () => {
  PushNotification.localNotificationSchedule({
    channelId: 'notificationChannel01',
    title: 'My Notification Title',
    message: 'My Notification Message',
    date: new Date(Date.now() + 1 * 60000), // 1 dakika sonra
  });
};
