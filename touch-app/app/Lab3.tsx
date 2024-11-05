import Dice from "@/components/lab/Dice";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

const Lab3 = () => {
  const [num, setNum] = useState(1);

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Text>Dice {num}</Text>
      <TouchableOpacity
        onPress={() => setNum(Math.floor(Math.random() * 6 + 1))}
      >
        <Dice num={num} />
      </TouchableOpacity>
    </View>
  );
};

export default Lab3;
