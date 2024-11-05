import Mult from "@/components/lab/Mult";
import { Text, View } from "react-native";

const Lab1 = () => {
  return (
    <View>
      <Text style={{ fontSize: 30, textAlign: "center", margin: 20 }}>
        make {`<`}Mult{`>`} component
      </Text>
      <Mult />
      <Mult />
      <Mult />
    </View>
  );
};

export default Lab1;
