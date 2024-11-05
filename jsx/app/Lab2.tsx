import { Image, Text, View } from "react-native";

const Lab2 = () => {
  let L = [<Text key="t1">Hello</Text>, <Text key="t2">Ewha</Text>];

  for (let i = 0; i < 10; i++) {
    L.push(<Text key={`t${i + 3}`}>count {i}</Text>);
  }

  for (let i = 0; i < 3; i++) {
    L.push(
      <Image
        key={`i${i + 1}`}
        style={{ width: 100, height: 100 }}
        source={require("../assets/images/cat-icon.png")}
      />
    );
  }
  return <View>{L}</View>;
};

export default Lab2;
