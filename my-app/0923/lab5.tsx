import { useState } from "react";
import { Button, Text, View } from "react-native";

const text_st = {
  fontSize: 30,
  backgroundColor: "lightgray",
  padding: 10,
  margin: 10,
};

const Lab5 = () => {
  const [val, setVal] = useState(0);
  return (
    <View>
      <Text style={text_st}>{val}</Text>

      <View style={{ margin: 20, gap: 10 }}>
        <Button title="Count Up" onPress={() => setVal(val + 1)} />
        <Button title="Count Down" onPress={() => setVal(val - 1)} />
      </View>
    </View>
  );
};

export default Lab5;
