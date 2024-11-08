import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

let N = ["Ewha", "June", "Jane", "Nick"];
let P = ["1234", "3347", "1111", "1212"];

const text_st = {
  fontSize: 20,
  borderWidth: 1,
  borderColor: "gray",
  flex: 1,
  padding: 5,
  margin: 2,
};

const input_st = {
  fontSize: 20,
  borderWidth: 1,
  flex: 1,
  padding: 5,
  margin: 5,
};

const Lab6 = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [refresh, setRefresh] = useState(0);

  const add_item = () => {
    N.push(name);
    P.push(phone);
    setRefresh(refresh + 1);
  };

  let L = [];

  for (let i = 0; i < N.length; i++) {
    let a = (
      <View key={i} style={{ flexDirection: "row" }}>
        <Text style={text_st}>{N[i]}</Text>
        <Text style={text_st}>{P[i]}</Text>
      </View>
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

export default Lab6;
