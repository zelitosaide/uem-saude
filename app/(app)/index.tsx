import { useEffect, useState } from "react";
import { 
  Image, 
  Keyboard, 
  Linking, 
  Pressable, 
  StyleSheet, 
  Text, 
  TextInput, 
  View,
} from "react-native";
import notifee, { IntervalTrigger, TimeUnit, TriggerType } from "@notifee/react-native";
import * as SecureStore from "expo-secure-store";
import { useSession } from "../ctx";
import { Sucess } from "@/components/success";

export default function Index() {
  const { session } = useSession();
  const [completeRegistration, setCompleteRegistration] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [showInputField, setShowInputField] = useState(false);
  const [email, setEmail] = useState("");
  const [registou, setRegistou] = useState(false);

  useEffect(function() {
    async function registerForPushNotifications() {
      // Request permissions (required for iOS)
      await notifee.requestPermission();
  
      // Create a channel (required for Android)
      const channelId = await notifee.createChannel({
        id: "uem-saude",
        name: "UEM Saúde",
      });
  
      // Create a interval-based trigger
      const trigger: IntervalTrigger = {
        type: TriggerType.INTERVAL,
        timeUnit: TimeUnit.DAYS,
        interval: 7,
      };
  
      // Create a trigger notification
      await notifee.createTriggerNotification(
        {
          id: "uem-saude-notifee",
          title: "<strong>UEM-Saúde: Vigilância participativa</strong>",
          body: "Clique aqui para preencher o inquérito semanal de sinais e sintomas de doença respiratória.",
          android: {
            channelId,
          },
        },
        trigger,
      );
    }

    async function retrieveSecureValue() {
      const res = await SecureStore.getItemAsync("register-notification-v2");
      if (!res) {
        await SecureStore.setItemAsync("register-notification-v2", "registered");
        // register push notifications
        await registerForPushNotifications();
      } 
      // else {
      //   console.log({ msg: "ola" });
      // }
    }
    retrieveSecureValue();
  }, []);

  useEffect(function() {
    async function retrieveSecureValue() {
      const res = await SecureStore.getItemAsync("complete-registration-key");
      if (res) {
        setCompleteRegistration(true);
      } else {
        setCompleteRegistration(false);
      }
    }
    retrieveSecureValue();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 30 }}>
      {showNotification ? <Sucess content="Irá receber notificação semanal para proceder ao preenchimento do seguimento." /> : null}
      {registou ? <Sucess content="Registo efetuado com sucesso!" /> : null}
      <Image
        source={require("../../assets/images/logo.webp")}
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

      {!completeRegistration && (
        <Pressable
          style={{ ...styles.button, backgroundColor: "#FEE2E2" }}
          onPress={async () => {
            if (session === "zas@gmail.com" || session === "zasabdala@gmail.com") {
              setShowInputField(true);
            } else {
              await SecureStore.setItemAsync("complete-registration-key", "complete");
              setCompleteRegistration(true);
              Linking.openURL("https://redcap.uem.mz/surveys/?s=ADERF73MNP");
            }
          }}
        >
          <Text style={{ fontWeight: "600", color: "#971717", fontSize: 18, textAlign: "center" }}>
            Preenche o formulário de registo
          </Text>
        </Pressable>
      )}

      {showInputField ? (
        <View style={{ paddingTop: 20 }}>
          <View>
            <TextInput
              onChangeText={email => setEmail(email)}
              value={email}
              style={styles.textInput}
              textContentType="emailAddress"
              placeholder="Digite seu endereço de email"
              placeholderTextColor="#121212"
            />
          </View>
          
          <Pressable 
            style={styles.button}
            onPress={async () => {
              Keyboard.dismiss();
              setRegistou(true);
              await new Promise(resolve => setTimeout(resolve, 1000));
              setRegistou(false);
              setShowInputField(false);
            }}
          >
            <Text style={{ fontWeight: "600", color: "white", fontSize: 18, textAlign: "center" }}>
              Registar
            </Text>
          </Pressable>
        </View>
      ): null}
      
      <Pressable
        style={styles.button}
        onPress={async () => {
          if (session === "zas@gmail.com" || session === "zasabdala@gmail.com") {
            setShowNotification(true);
            await new Promise(resolve => setTimeout(resolve, 1000));
            setShowNotification(false);
          } else {
            Linking.openURL("https://redcap.uem.mz/surveys/?s=PK8LYW7K3E");
          }
        }}
      >
        <Text style={{ fontWeight: "600", color: "white", fontSize: 18, textAlign: "center" }}>
          Preenche o inquérito de seguimento
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 26,
    width: "100%",
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
});

// zas@gmail.com
