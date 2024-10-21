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
import { Link } from "expo-router";
import { Sucess } from "@/components/success";

const { height } = Dimensions.get("window");

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [message, setMessage] = useState<string | null>(null);
  const { resetPassword } = useSession();

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
                marginTop: 100
              }}
            >
              Redefinição de Senha
            </Text>
            {error ? <Warn content={error} /> : null}
            {message ? <Sucess content={message} /> : null}
            <View style={{ paddingTop: 40 }}>
              <View>
                <TextInput
                  onChangeText={email => setEmail(email)}
                  value={email}
                  style={styles.textInput}
                  textContentType="emailAddress"
                  placeholder="Digite seu endereço de email"
                  placeholderTextColor="#121212"
                  // onFocus={() => setShowError(false)}
                />
              </View>
              
              <Pressable 
                style={styles.button}
                onPress={async () => {
                  Keyboard.dismiss();
                  setError(null);
                  setMessage(null);
                  const res = await resetPassword(email);
                  if (res.errorMessage) {
                    setError(res.errorMessage);
                  } else {
                    setMessage("Por favor, consulte sua caixa de entrada e siga as instruções fornecidas no e-mail para concluir o processo de redefinição de senha.");
                  }
                }}
              >
                <Text style={{ fontWeight: "600", color: "white", fontSize: 16, textAlign: "center" }}>
                  Redefinir a Senha
                </Text>
              </Pressable>

              <View>
                <Text style={{ textAlign: "center", fontSize: 14 }}>
                  Precisa de uma conta?{" "}
                  <Link style={{ color: "rgb(37 99 235)" }} href="/sign-up">inscrever-se.</Link>
                </Text>
              </View>
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