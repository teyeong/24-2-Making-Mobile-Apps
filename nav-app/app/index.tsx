import { router, Stack } from "expo-router";
import { Button, Text, View } from "react-native";

var text_st = { fontSize: 20, margin: 10 };

export default function Index() {
  return (
    <View>
      <Text style={text_st}>Home Screen</Text>
      <View style={{ gap: 10 }}>
        <Button
          title="About"
          onPress={() => {
            router.navigate("/about");
          }}
        />
        <Button
          title="Hello"
          onPress={() => {
            router.navigate("/hello");
          }}
        />
        <Button
          title="구구단"
          onPress={() => {
            router.navigate("/multiply");
          }}
        />
      </View>
    </View>
  );
}
