import { Button, Text, View } from "react-native";
import { useState } from "react";
import Dice from "./Dice";

const st_text = {
  fontSize: 20,
  margin: 5,
};

export default function Index() {
  const [N1, setN1] = useState(1);
  const [N2, setN2] = useState(1);
  return (
    <View style={{ flex: 1 }}>
      <Text style={[st_text, { textAlign: "center" }]}>Double Dice</Text>
      <Text style={{ textAlign: "center", fontSize: 18, marginVertical: 5 }}>
        {N1 + N2}
      </Text>
      <View style={{ flexDirection: "row", justifyContent: "center", gap: 30 }}>
        <Dice num={N1} />
        <Dice num={N2} />
      </View>
      <View style={{ marginHorizontal: 100, marginVertical: 30 }}>
        <Button
          title="Roll"
          onPress={() => {
            setN1(Math.floor(Math.random() * 6 + 1));
            setN2(Math.floor(Math.random() * 6 + 1));
          }}
        />
      </View>
    </View>
  );
}
