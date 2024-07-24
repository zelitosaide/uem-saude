import "expo-router/entry";

import notifee, { EventType } from "@notifee/react-native";
import { Linking } from "react-native";

notifee.onBackgroundEvent(async ({ type, detail }) => {
  switch (type) {
    case EventType.DISMISSED:
      console.log("User dismissed notification", detail.notification);
      break;
    case EventType.PRESS:
      // console.log("User pressed notification", detail.notification);
      Linking.openURL("https://redcap.uem.mz/surveys/?s=PK8LYW7K3E");
      break;
  }
  // App launched, remove the badge count
  notifee.setBadgeCount(0).then(() => console.log("Badge count removed"));
});