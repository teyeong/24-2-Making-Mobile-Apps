import { Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" />
      <Tabs.Screen name="Lab1" />
      <Tabs.Screen name="Lab1a" />
      <Tabs.Screen name="Lab1b" />
    </Tabs>
  );
}
