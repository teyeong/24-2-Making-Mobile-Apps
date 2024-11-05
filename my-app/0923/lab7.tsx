import { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";

const text_st = {
  fontSize: 30,
  backgroundColor: "lightgray",
  padding: 10,
  margin: 10,
};
const Lab7 = () => {
  const [A, setA] = useState(0);
  const [B, setB] = useState(0);
  const [result, setResult] = useState(0);
  useEffect(() => {
    setResult(A * B);
  }, [A, B]);
  return (
    <View>
      <View style={{ flexDirection: "row" }}>
        <Text style={text_st}>{A}</Text>
        <Text style={{ margin: 20, fontSize: 30 }}>x</Text>
        <Text style={text_st}>{B}</Text>
        <Text style={{ margin: 20, fontSize: 30 }}>=</Text>
        <Text style={text_st}>{result}</Text>
      </View>
      <View style={{ bottom: 5 }}>
        <Text style={text_st}>
          {A} x {B} = {result}
        </Text>
      </View>
      <View style={{ gap: 80, flexDirection: "row", left: 10 }}>
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

export default Lab7;
