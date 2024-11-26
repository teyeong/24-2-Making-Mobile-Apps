import AsyncStorage from "@react-native-async-storage/async-storage";
import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

export default function Memo() {
  const mydata = useLocalSearchParams();

  var getData = JSON.parse(mydata.token);

  const [date, setDate] = useState(getData.date);
  const [date1, setDate1] = useState(getData.date2);
  const [expense, setExpense] = useState(getData.expense);
  const [memo, setMemo] = useState(getData.memo);

  var container = { flex: 1, padding: 5 };
  var text = { fontSize: 16 };
  var datetext = { fontSize: 20, marginVertical: 10 };
  var row_st = { flexDirection: "row", alignItems: "center" };
  var expense_st = {
    flex: 1,
    borderBottomWidth: 1,
    marginHorizontal: 10,
    fontSize: 16,
    color: "blue",
  };
  var memo_st = {
    borderBottomWidth: 1,
    fontSize: 16,
    marginTop: 10,
    color: "blue",
  };

  async function save_memo() {
    console.log(date);
    await AsyncStorage.setItem(date, expense);
    await AsyncStorage.setItem(date + "m", memo);
    router.back();
  }

  return (
    <View style={container}>
      <Text style={datetext}>{date1}</Text>
      <View style={row_st}>
        <Text style={text}>Expense</Text>
        <TextInput
          style={expense_st}
          keyboardType="numeric"
          onChangeText={setExpense}
          value={expense}
        />
        <Button title="SAVE" onPress={save_memo} />
      </View>
      <TextInput
        style={memo_st}
        placeholder="Memo"
        onChangeText={setMemo}
        value={memo}
      />
    </View>
  );
}
