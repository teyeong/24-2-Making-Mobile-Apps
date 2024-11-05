import { Text, View } from "react-native";

const Lab1 = () => {
  const name = "Ewha";
  let element = <Text>{name}</Text>;

  element = <View style={{ borderWidth: 1, padding: 10 }}>{element}</View>;
  element = <View style={{ borderWidth: 1, padding: 10 }}>{element}</View>;

  for (let i = 0; i < 5; i++) {
    element = <View style={{ borderWidth: 1, padding: 10 }}>{element}</View>;
  }
  return <View>{element}</View>;
};

export default Lab1;
