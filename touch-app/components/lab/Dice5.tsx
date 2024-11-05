import { View } from "react-native";

const st_dice = {
  backgroundColor: "rgb(255, 240, 200)",
  padding: 10,
};

const st_circle = {
  width: 40,
  height: 40,
  borderRadius: 50,
  backgroundColor: "rgb(0, 200, 255)",
  borderWidth: 1,
  margin: 2,
};

const Circle = () => {
  return <View style={st_circle} />;
};

const Blank = () => {
  return (
    <View
      style={[
        st_circle,
        { backgroundColor: "rgb(255, 240, 200)", borderWidth: 0 },
      ]}
    />
  );
};

const Dice5 = () => {
  return (
    <View style={st_dice}>
      <View style={{ flexDirection: "row" }}>
        <Circle />
        <Blank />
        <Circle />
      </View>
      <View style={{ flexDirection: "row" }}>
        <Blank />
        <Circle />
        <Blank />
      </View>
      <View style={{ flexDirection: "row" }}>
        <Circle />
        <Blank />
        <Circle />
      </View>
    </View>
  );
};

export default Dice5;
