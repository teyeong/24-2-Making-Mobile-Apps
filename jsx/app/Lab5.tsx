import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

/*
let N = ["Ewha", "June", "Jane", "Nick"];
let P = ["1234", "3347", "1111", "1212"];
*/

let pbook = [
  { name: "Ewha", phone: "1234" },
  { name: "June", phone: "3347" },
  { name: "Jane", phone: "1111" },
  { name: "Nick", phone: "1212" },
];

const input_st = {
  fontSize: 20,
  borderWidth: 1,
  flex: 1,
  padding: 5,
  margin: 5,
};

const Lab5 = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [refresh, setRefresh] = useState(0);

  const add_item = () => {
    // N.push(name);
    // P.push(phone);
    pbook.push({ name: name, phone: phone });
    setRefresh(refresh + 1);
  };

  let L = [];

  for (let i = 0; i < pbook.length; i++) {
    let a = (
      <Text key={i}>
        {pbook[i].name}: {pbook[i].phone}
      </Text>
    );
    L.push(a);
  }

  return (
    <View>
      <Text style={{ fontSize: 40 }}>Phone Book</Text>
      <View style={{ margin: 10, flexDirection: "row", alignItems: "center" }}>
        <TextInput style={input_st} onChangeText={setName} />
        <TextInput style={input_st} onChangeText={setPhone} />
        <Button title="Add" onPress={add_item} />
      </View>
      {L}
    </View>
  );
};

export default Lab5;
