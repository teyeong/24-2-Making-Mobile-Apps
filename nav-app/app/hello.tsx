import { Button, Text, View } from "react-native";
import { useEffect, useState } from "react";
import { TextInput } from "react-native";

export default function Hello() {
  const text_st = {
    fontSize: 30,
    backgroundColor: "lightgray",
    padding: 10,
    margin: 10,
  };
  const input_st = {
    fontSize: 30,
    borderWidth: 1,
    padding: 10,
    margin: 10,
  };
  const [hello, setHello] = useState("Hello");
  const [name, setName] = useState("User");

  useEffect(() => {
    if (!name) {
      setName("User");
    }
  }, [name]);

  return (
    <View>
      <Text style={text_st}>
        {hello}, {name}
      </Text>
      <TextInput style={input_st} onChangeText={setName}></TextInput>
      <View
        style={{
          margin: 10,
          flexDirection: "row-reverse",
          gap: 10,
        }}
      >
        <Button title="Nice" onPress={() => setHello("Nice to meet you")} />
        <Button title="Hello" onPress={() => setHello("Hi")} />
      </View>
    </View>
  );
}
