import 'react-native-gesture-handler';
import messaging from '@react-native-firebase/messaging';
import { useEffect } from 'react';
import { Alert } from 'react-native';
import notifee from '@notifee/react-native';

export const  NotifeeRequestPermission =() => {
  try {
      return notifee.requestPermission();
  } catch (error) {
      console.log(error);
  }
}

export  const showNotification = async (title: string, message: string) => {
  await notifee.displayNotification({
      title,
      body: message,
      android: {
          channelId: 'notificationChannel01',
          smallIcon: 'ic_launcher',
      },
      ios: {
          sound: 'default',
      },
  });
}

export const  createChannel = async ()=> {
  await notifee.createChannel({
      id: 'notificationChannel01',
      name: 'Default Notification Channel',
  }).then(() => console.log('Channel created'));
}

 export const cancelAllNotifications = async () =>{
  await notifee.cancelAllNotifications();
}

export const requestUserPermission = async () => {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
  }
}

export const getToken = async () => {
  await messaging().registerDeviceForRemoteMessages();
  const token = await messaging().getToken();
  console.log('==============TOKEN START======================');
  console.log(token);
  console.log('==============TOKEN END======================');
  return token;
};

export const notificationListener = () => {
  // Assume a message-notification contains a "type" property in the data payload of the screen to open
  messaging().onNotificationOpenedApp(remoteMessage => {
    console.log(
      'Notification caused app to open from background state:',
      remoteMessage.notification,
    );
  });
  messaging().getInitialNotification().then(remoteMessage => {
    if (remoteMessage) {
      console.log(
        'Notification caused app to open from quit state:',
        remoteMessage.notification,
      )
    }
  })
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

export const PushNotification = () => {
  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      showNotification(
        remoteMessage.notification?.title!,
        remoteMessage.notification?.body!,
      );
    });

    return unsubscribe;
  }, []);
};

export const onTokenRefreshListener = () => {
  messaging().onTokenRefresh(token => {
    console.log('A new FCM token refreshed with token:', token);
  });
}
