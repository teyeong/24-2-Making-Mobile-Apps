import { router } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-around",
      }}
    >
      <Button
        title="(lab1) box in box"
        onPress={() => router.navigate("/Lab1")}
      />
      <Button
        title="(lab2) build screen by programming"
        onPress={() => router.navigate("/Lab2")}
      />
      <Button
        title="(lab3) square, 구구단"
        onPress={() => router.navigate("/Lab3")}
      />
      <Button
        title="(lab4) Phone book (array data -> tags)"
        onPress={() => router.navigate("/Lab4")}
      />
      <Button
        title="(lab4a) add styles, layout of tags"
        onPress={() => router.navigate("/Lab4a")}
      />
      <Button
        title="(lab5) Add new item"
        onPress={() => router.navigate("/Lab5")}
      />
      <Button
        title="(lab6) lab4a + lab5"
        onPress={() => router.navigate("/Lab6")}
      />
      <Button
        title="(lab7) delete button"
        onPress={() => router.navigate("/Lab7")}
      />
    </View>
  );
}
