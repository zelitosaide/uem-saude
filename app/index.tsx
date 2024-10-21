import { Redirect, useRouter } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

import { useSession } from "./ctx";

export default function Index() {
  const { session } = useSession();
  const router = useRouter();

  // Only require authentication within the (app) group"s layout as users
  // need to be able to access the (auth) group and sign in again.
  if (session) {
    // On web, static rendering will stop here as the user is not authenticated
    // in the headless Node process that the pages are rendered in.
    return <Redirect href="/(app)/" />;
  }

  return (
    <View 
      style={{ 
        flex: 1, 
        justifyContent: "center", 
        alignItems: "center", 
        padding: 30,
        backgroundColor: "#F7F7F7", 
      }}
    >
      <Image
        source={require("../assets/images/logo.webp")}
        style={{
          width: 208,
          height: 120,
          resizeMode: "contain",
          alignSelf: "center",
        }}
      />

      <Text
        style={{
          fontSize: 16,
          textAlign: "center",
          fontWeight: "bold",
          color: "#146F12",
        }}
      >
        Vigilância Participativa Digital de Saúde em Moçambique (UEM - Saúde)
      </Text>

      <Text
        style={{
          fontSize: 14,
          textAlign: "center",
          lineHeight: 22,
          color: "#146F12",
          backgroundColor: "#E2F0E2",
          marginTop: 20,
          padding: 16
        }}
      >
        Bem-vindo(a). Este aplicativo é da UEM para Vigilância de doenças respiratórias na comunidade universitária (estudantes, docentes, investigadores e CTA) e familiares desta.
      </Text>

      <View style={{ flexDirection: "row", justifyContent: "space-between", width: "100%", gap: 20 }}>
        <Pressable style={styles.button} onPress={() => router.push("/sign-in")}>
          <Text style={{ fontWeight: "600", color: "white", fontSize: 16, textAlign: "center" }}>
            Iniciar sessão
          </Text>
        </Pressable>

        <Pressable
          style={{ ...styles.button, backgroundColor: "#E2F0E2", borderColor: "#008800", borderWidth: 2 }}
          onPress={() => router.push("/sign-up")}
        >
          <Text style={{ fontWeight: "600", color: "#000000", fontSize: 16, textAlign: "center" }}>
            Criar conta
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    marginTop: 26,
    borderRadius: 16,
    padding: 14,
    backgroundColor: "#008800",
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