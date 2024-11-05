import { Text, View } from "react-native";

const Lab4a = () => {
  let text_st = {
    fontSize: 20,
    borderWidth: 1,
    borderColor: "gray",
    flex: 1,
    padding: 5,
    margin: 2,
  };

  let N = ["Ewha", "June", "Jane", "Nick"];
  let P = [1234, 3347, 1111, 1212];

  let L = [];

  for (let i = 0; i < N.length; i++) {
    let a = (
      <View key={i} style={{ flexDirection: "row" }}>
        <Text style={text_st}>{N[i]}</Text>
        <Text style={text_st}>{P[i]}</Text>
      </View>
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

export default Lab4a;
