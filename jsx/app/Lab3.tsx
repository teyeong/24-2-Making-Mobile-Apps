import { ScrollView, Text } from "react-native";

const Lab3 = () => {
  let L = [];
  for (let i = 2; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
      L.push(
        <Text key={`${i}${j}`}>
          {i} x {j} = {i * j}
        </Text>
      );
    }
  }
  return <ScrollView>{L}</ScrollView>;
};

export default Lab3;
