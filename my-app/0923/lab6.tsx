import { useState } from "react";
import { Button, Text, View } from "react-native";

const text_st = {
  fontSize: 30,
  backgroundColor: "lightgray",
  padding: 10,
  margin: 10,
};

const Lab6 = () => {
  const [A, setA] = useState(0);
  const [B, setB] = useState(0);
  return (
    <View>
      <View style={{ flexDirection: "row" }}>
        <Text style={text_st}>{A}</Text>
        <Text style={text_st}>{B}</Text>
      </View>
      <View style={{ gap: 30, flexDirection: "row", left: 10 }}>
        <View style={{ gap: 20, flexDirection: "column", width: 30 }}>
          <Button title="+" onPress={() => setA(A + 1)} />
          <Button title="-" onPress={() => setA(A - 1)} />
        </View>
        <View style={{ gap: 20, flexDirection: "column", width: 30 }}>
          <Button title="+" onPress={() => setB(B + 1)} />
          <Button title="-" onPress={() => setB(B - 1)} />
        </View>
      </View>
    </View>
  );
};

export default Lab6;
