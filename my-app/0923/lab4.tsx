import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import { ScrollView } from "react-native";

const Lab4 = () => {
  const head_st = {
    fontSize: 40,
    color: "blue",
    backgroundColor: "lightblue",
    padding: 10,
    margin: 10,
  };
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

  const action = () => {
    setHello("Hello");
  };

  return (
    <ScrollView
      contentContainerStyle={{
        borderColor: "pink",
        borderWidth: 10,
        height: "100%",
      }}
      style={{ borderColor: "lightblue", borderWidth: 10 }}
    >
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
        <Button title="Hello" onPress={() => setHello("Hello")} />
      </View>
    </ScrollView>
  );
};

export default Lab4;
