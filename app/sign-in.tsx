import { useState } from "react";
import {
  Dimensions, 
  Keyboard,
  Pressable, 
  ScrollView, 
  StatusBar, 
  StyleSheet, 
  Text, 
  TextInput, 
  View 
} from "react-native";
import DismissKeyboard from "@/components/dismiss-keyboard";
import { Warn } from "@/components/warn";
import { useSession } from "./ctx";
import { Link, router } from "expo-router";

const { height } = Dimensions.get("window");

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const { signIn } = useSession();

  return (
    <DismissKeyboard>
      <ScrollView keyboardShouldPersistTaps="always">
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />
        <View 
          style={{
            height: height,
            backgroundColor: "#F7F7F7",
          }}
        >
          <View 
            style={{
              marginLeft: 30,
              marginRight: 30,
            }}
          >
            <Text 
              style={{
                fontSize: 24,
                fontWeight: "bold",
                color: "#121212",
                textAlign: "center",
                marginTop: 100,
              }}
            >
              Iniciar sessão para o inquérito
            </Text>
            {error ? <Warn content={error} /> : null}
            <View style={{ paddingTop: 40 }}>
              <View>
                <TextInput
                  onChangeText={email => setEmail(email)}
                  value={email}
                  style={styles.textInput}
                  placeholder="Endereço de email"
                  textContentType="emailAddress"
                  placeholderTextColor="#121212"
                  // onFocus={() => setShowError(false)}
                />
              </View>
              <View>
                <TextInput
                  onChangeText={password => setPassword(password)}
                  value={password}
                  style={styles.textInput}
                  secureTextEntry={true}
                  placeholder="Senha"
                  placeholderTextColor="#121212"
                  // onFocus={() => setShowError(false)}
                />
              </View>
              
              <View
                style={{
                  alignItems: "flex-end",
                  marginTop: -14,
                  marginBottom: 34,
                }}
              >
                <Link
                  href="/forgot-password"
                  // href="/sign-up"
                  style={{
                    fontSize: 14,
                    textDecorationLine: "underline",
                    color: "rgb(37 99 235)",
                    paddingTop: 15,
                    paddingBottom: 15,
                    // backgroundColor: "red",
                  }}
                >
                  Esqueceu sua senha?
                </Link>
              </View>
              
              <Pressable 
                style={styles.button}
                onPress={async () => {
                  Keyboard.dismiss();
                  setError(null);
                  const res = await signIn(email, password);
                  if (res.errorMessage) {
                    setError(res.errorMessage);
                  } else {
                    router.replace("/(app)/");
                  }
                }}
              >
                <Text style={{ fontWeight: "600", color: "white", fontSize: 18, textAlign: "center" }}>
                  Iniciar sessão
                </Text>
              </Pressable>

              <View>
                <Text style={{ textAlign: "center", fontSize: 14 }}>
                  Precisa de uma conta?{" "}
                  <Link style={{ color: "rgb(37 99 235)" }} href="/sign-up">inscrever-se.</Link>
                </Text>
              </View>

              {/* <View>
                <Text style={{ textAlign: "center", fontSize: 14 }}>
                  <Link style={{ color: "rgb(37 99 235)" }} href="/">Inicial</Link>
                </Text>
              </View> */}
            </View>
          </View>
        </View>
      </ScrollView>
    </DismissKeyboard>
  );
}

const styles = StyleSheet.create({
  textInput: {
    marginBottom: 26,
    color: "#121212",
    fontSize: 16,
    borderRadius: 8,
    padding: 14,
    backgroundColor: "white",
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 2,
  },
  button: {
    marginBottom: 26,
    borderRadius: 8,
    padding: 14,
    // backgroundColor: "#1B9A19",
    // backgroundColor: "#1faf1d",
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