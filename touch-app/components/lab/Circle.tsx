import { View } from "react-native";

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

export default Circle;
