import { Pressable, StyleSheet, Text, View } from "react-native";
import { useSession } from "../ctx";

export default function TabNotificationsScreen() {
  const { signOut } = useSession();

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.button}
        onPress={() => {
          // The `app/(app)/_layout.tsx` will redirect to the sign-in screen.
          signOut();
        }}
      >
        <Text style={{ fontWeight: "600", color: "#971717", fontSize: 18, textAlign: "center" }}>
          Sign Out
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "flex-start",
    padding: 30,
  },
  button: {
    // flex: 1,
    width: "100%",
    borderRadius: 16,
    padding: 14,
    // backgroundColor: "#1B9A19",
    backgroundColor: "#FEE2E2",
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 2,
  },
});


{/* <Pressable
  style={{ ...styles.button, backgroundColor: "#FEE2E2" }}
  onPress={async () => {
    await SecureStore.setItemAsync("complete-registration-key", "complete");
    setCompleteRegistration(true);
    Linking.openURL("https://redcap.uem.mz/surveys/?s=ADERF73MNP");
  }}
>
  <Text style={{ fontWeight: "600", color: "#971717", fontSize: 18, textAlign: "center" }}>
    Preenche o formulário de registo
  </Text>
</Pressable> */}

