import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

var pbook = [
  { name: "Ewha", phone: "1234" },
  { name: "June", phone: "3347" },
  { name: "Jane", phone: "1111" },
  { name: "Nick", phone: "1212" },
];

var input_st = {
  fontSize: 20,
  borderWidth: 1,
  flex: 1,
  padding: 5,
  margin: 5,
};

var text_st = {
  fontSize: 20,
  borderWidth: 1,
  borderColor: "gray",
  flex: 1,
  padding: 5,
  margin: 2,
};

export default function PhoneBook() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [refresh, setRefresh] = useState(0);

  function add_item() {
    pbook.push({ name: name, phone: phone });
    setRefresh(refresh + 1);
    save_data();
  }

  async function load_data() {
    var value = await AsyncStorage.getItem("phonebook");
    console.log(value);
    if (value) {
      pbook = JSON.parse(value);
    }
    setRefresh(refresh + 1);
  }

  async function save_data() {
    await AsyncStorage.setItem("phonebook", JSON.stringify(pbook));
  }

  useEffect(function () {
    load_data();
  }, []);

  var L = [];

  for (var i = 0; i < pbook.length; i++) {
    var a = (
      <View key={i} style={{ flexDirection: "row" }}>
        <Text style={text_st}>{pbook[i].name}</Text>
        <Text style={text_st}>{pbook[i].phone}</Text>
      </View>
    );
    L.push(a);
  }

  return (
    <View>
      <View
        style={{
          margin: 10,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 40 }}>Phone Book</Text>
        {/* <Button title="SAVE" onPress={save_data} /> */}
        {/* <Button title="LOAD" onPress={load_data} /> */}
      </View>
      <View style={{ margin: 10, flexDirection: "row", alignItems: "center" }}>
        <TextInput style={input_st} onChangeText={setName} />
        <TextInput style={input_st} onChangeText={setPhone} />
        <View style={{ backgroundColor: "lightgray" }}>
          <Button title="Add" onPress={add_item} />
        </View>
      </View>
      <View style={{ margin: 10 }}>{L}</View>
    </View>
  );
}
