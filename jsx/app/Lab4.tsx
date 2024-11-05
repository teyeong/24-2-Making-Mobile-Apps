import { Text, View } from "react-native";

const Lab4 = () => {
  let N = ["Ewha", "June", "Jane", "Nick"];
  let P = [1234, 3347, 1111, 1212];

  let L = [];

  for (let i = 0; i < N.length; i++) {
    let a = (
      <Text key={i}>
        {N[i]}: {P[i]}
      </Text>
    );
    L.push(a);
  }
  return (
    <View>
      <Text style={{ fontSize: 40 }}>Phone Book</Text>
      {L}
    </View>
  );
};

export default Lab4;
