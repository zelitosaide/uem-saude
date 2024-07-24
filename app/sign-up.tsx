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
import { Link, router } from "expo-router";
import { useSession } from "./ctx";

const { height } = Dimensions.get("window");

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const { signUp } = useSession();

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
              Criar Conta
            </Text>
            {error ? <Warn content={error} /> : null}
            <View style={{ paddingTop: 40 }}>
              <View>
                <TextInput
                  onChangeText={email => setEmail(email)}
                  value={email}
                  style={estilos.textInput}
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
                  style={estilos.textInput}
                  secureTextEntry={true}
                  placeholder="Senha"
                  placeholderTextColor="#121212"
                  // onFocus={() => setShowError(false)}
                />
              </View>
              <View>
                <TextInput
                  onChangeText={confirmPassword => setConfirmPassword(confirmPassword)}
                  value={confirmPassword}
                  style={estilos.textInput}
                  secureTextEntry={true}
                  placeholder="Confirme sua senha"
                  placeholderTextColor="#121212"
                  // onFocus={() => setShowError(false)}
                />
              </View>
              
              <Pressable 
                style={estilos.button}
                onPress={async () => {
                  Keyboard.dismiss();
                  setError(null);
                  const res = await signUp(email, password, confirmPassword);
                  if (res.errorMessage) {
                    setError(res.errorMessage);
                  } else {
                    router.replace("/(app)/");
                  }
                }}
              >
                <Text style={{ fontWeight: "600", color: "white", fontSize: 18, textAlign: "center" }}>
                  Criar Conta
                </Text>
              </Pressable>

              <View>
                <Text style={{ textAlign: "center", fontSize: 14 }}>
                  Já tem uma conta?{" "}
                  <Link style={{ color: "rgb(37 99 235)" }} href="/sign-in">entrar.</Link>
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </DismissKeyboard>
  );
}

const estilos = StyleSheet.create({
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
    marginTop: 10,
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