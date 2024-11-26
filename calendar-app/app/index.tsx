import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { Button, View } from "react-native";
import CalendarPicker from "react-native-calendar-picker";

export default function Index() {
  var container = { flex: 1, padding: 5, gap: 20 };

  async function onDateChange(d: Date) {
    var key =
      d.getFullYear().toString() +
      (d.getMonth() + 1).toString() +
      d.getDate().toString();

    var val_expense = "";
    var val_memo = "";

    var date2 = d.toDateString();

    var value = (await AsyncStorage.getItem(key)) ?? "";
    var value_m = (await AsyncStorage.getItem(key + "m")) ?? "";

    if (value !== null) {
      val_expense = value;
      val_memo = value_m;
    }

    var myData = {
      date: key,
      date2: date2,
      expense: val_expense,
      memo: val_memo,
    };
    router.push({
      pathname: "./Memo",
      params: { token: JSON.stringify(myData) },
    });
  }
  return (
    <View style={container}>
      <CalendarPicker onDateChange={onDateChange} />
      <View
        style={{
          backgroundColor: "lightgray",
          borderRadius: 10,
          margin: 10,
          paddingVertical: 3,
        }}
      >
        <Button
          title="PHONE BOOK"
          onPress={() => router.navigate("/PhoneBook")}
        />
      </View>
    </View>
  );
}
