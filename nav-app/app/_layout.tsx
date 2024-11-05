import { Tabs } from "expo-router";
import { Drawer } from "expo-router/drawer";

export default function RootLayout() {
  return (
    <Drawer>
      <Drawer.Screen name="index" options={{ title: "Home" }} />
      <Drawer.Screen name="about" options={{ title: "About" }} />
      <Drawer.Screen name="hello" options={{ title: "Hello" }} />
      <Drawer.Screen name="multiply" options={{ title: "구구단" }} />
    </Drawer>
  );
}
