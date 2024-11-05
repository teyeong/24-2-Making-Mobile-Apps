import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const Mult = () => {
  const [A, setA] = useState("");
  const [B, setB] = useState("");

  const style = StyleSheet.create({
    text: { marginHorizontal: 20, fontSize: 30 },
    view: { flexDirection: "row", padding: 10, alignItems: "center" },
    input: {
      padding: 15,
      paddingVertical: 20,
      borderWidth: 1,
      fontSize: 30,
      minWidth: 50,
    },
  });

  return (
    <View style={style.view}>
      <TextInput onChangeText={setA} style={style.input} />
      <Text style={style.text}>x</Text>
      <TextInput onChangeText={setB} style={style.input} />
      <Text style={style.text}>=</Text>
      <Text style={style.text}>{Number(A) * Number(B)}</Text>
    </View>
  );
};

export default Mult;
