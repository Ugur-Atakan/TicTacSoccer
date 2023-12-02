#import "AppDelegate.h"
#import <Firebase.h>
#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>
#import <UserNotifications/UserNotifications.h> // UserNotifications eklenmiştir

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  [FIRApp configure];

  // FCM token'ını yeniden almak için aşağıdaki satırı ekleyin
  [self registerForRemoteNotifications];

  self.moduleName = @"game352";
  // You can add your custom initial props in the dictionary below.
  // They will be passed down to the ViewController used by React Native.
  self.initialProps = @{};

  return [super application:application didFinishLaunchingWithOptions:launchOptions];
}

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index"];
#else
  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
}

// FCM token'ını yeniden almak için bir fonksiyon ekleyin
- (void)registerForRemoteNotifications
{
    if (UIApplication.sharedApplication.registeredForRemoteNotifications) {
        // Uygulama zaten push bildirimleri için kayıtlı ise FCM token'ını alabilirsiniz.
        [self getFCMToken];
    } else {
        // Uygulama push bildirimleri için kayıtlı değilse, kayıt işlemi başlatılır.
        UNUserNotificationCenter *center = [UNUserNotificationCenter currentNotificationCenter];
        UNAuthorizationOptions options = (UNAuthorizationOptionSound | UNAuthorizationOptionAlert | UNAuthorizationOptionBadge);
        [center requestAuthorizationWithOptions:options
                              completionHandler:^(BOOL granted, NSError * _Nullable error) {
            if (granted) {
                dispatch_async(dispatch_get_main_queue(), ^{
                    [[UIApplication sharedApplication] registerForRemoteNotifications];
                });
            }
        }];
    }
}

// FCM token'ını alma fonksiyonu
- (void)getFCMToken
{
    [[FIRMessaging messaging] tokenWithCompletion:^(NSString * _Nullable token, NSError * _Nullable error) {
        if (error != nil) {
            NSLog(@"Error getting FCM registration token: %@", error);
        } else {
            NSLog(@"FCM registration token: %@", token);
            // Token'ı kullanmak veya sunucuya iletmek için burada uygun işlemleri yapabilirsiniz.
        }
    }];
}

@end
