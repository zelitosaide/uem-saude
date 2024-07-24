import { View, Text, StyleSheet } from "react-native";

export function Sucess({ content }: { content: string }) {
  return (
    <View style={estilos.container}>
      <Text style={estilos.text}>{content}</Text>    
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: "#D1ECF1",
    borderRadius: 10,
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 2,
  },
  text: {
    fontSize: 16,
    color: "#0C5460", // error
    paddingVertical: 13,
    paddingLeft: 10,
    paddingRight: 10,
    lineHeight: 22
  }
});