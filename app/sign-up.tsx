import { useState } from "react";
import {
  Alert,
  Button,
  Dimensions, 
  Keyboard, 
  Linking, 
  Pressable, 
  ScrollView, 
  StatusBar, 
  StyleSheet, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  View,
  
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




  const [isChecked, setIsChecked] = useState(false);

  const handleCreateAccount = async () => {
    if (!isChecked) {
      // Show an alert if the checkbox is not checked
      Alert.alert('Termos e Política de Privacidade', 'Você deve concordar com os Termos de Serviço e Política de Privacidade para continuar.');
    } else {
      // Proceed with account creation logic here
      Keyboard.dismiss();
      setError(null);
      const res = await signUp(email, password, confirmPassword);
      if (res.errorMessage) {
        setError(res.errorMessage);
      } else {
        router.replace("/(app)/");
      }
    }
  };

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



              <View>
                <Text style={{ fontSize: 16, color: "#121212", lineHeight: 24, textAlign: "justify", marginBottom: 10 }}>
                  {/* Ao criar uma conta, você concorda com nossos{' '} */}
                  Ao criar uma conta, você reconhece que leu estes{' '}
                  <Link 
                    style={{ color: 'rgb(37 99 235)', textDecorationLine: 'underline' }} 
                    href="/terms"
                    >
                      Termos de Serviço
                  </Link>
                   {" "}e{' '}
                  <Link 
                    style={{ color: 'rgb(37 99 235)', textDecorationLine: 'underline' }} 
                    href="/terms"
                    >
                      Política de Privacidade
                  </Link>
                  {" "}e concorda em participar desta vigilância.
                </Text>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 12 }}>
                  <TouchableOpacity onPress={() => setIsChecked(!isChecked)} style={{ width: 45, height: 45, justifyContent: "center" }}>
                    <View style={{
                      width: 24,
                      height: 24,
                      borderWidth: 2,
                      borderColor: isChecked ? '#008800' : 'gray',
                      backgroundColor: isChecked ? '#008800' : 'transparent',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 8,
                    }}>
                      {isChecked && <View style={{
                        width: 10,
                        height: 10,
                        backgroundColor: 'white',
                        borderRadius: 2,
                      }} />}
                    </View>
                  </TouchableOpacity>
                  <Text style={{ flexWrap: 'wrap', flex: 1, fontSize: 16 }}>
                    Eu oncordo com os Termos de Serviço e Política de Privacidade.
                  </Text>
                </View>

                {/* <Button title="Criar Conta" onPress={handleCreateAccount} /> */}
              </View>



              
              <Pressable style={estilos.button} onPress={handleCreateAccount}>
                <Text style={{ fontWeight: "600", color: "white", fontSize: 16, textAlign: "center" }}>
                  Criar Conta
                </Text>
              </Pressable>
              {/*  */}
              <View>
                <Text style={{ textAlign: "center", fontSize: 16 }}>
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