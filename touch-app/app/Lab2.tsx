import Dice5 from "@/components/lab/Dice5";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

const Lab2 = () => {
  const [N, setN] = useState(0);

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Text>Touched {N} times</Text>
      <TouchableOpacity onPress={() => setN(N + 1)}>
        <Dice5 />
      </TouchableOpacity>
    </View>
  );
};

export default Lab2;
