import { useState } from "react";
import {
  Text,
  TouchableHighlight,
  TouchableNativeFeedback,
  View,
} from "react-native";

const text_st = { fontSize: 30, padding: 10, margin: 10 };
const button_st = { color: "dodgerblue" };

const Lab4 = () => {
  const [N, setN] = useState(0);

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Text style={text_st}>Touched {N} times</Text>
      <TouchableHighlight underlayColor="orange" onPress={() => setN(N + 1)}>
        <View>
          <Text style={[text_st, button_st]}>High, Touch Me</Text>
        </View>
      </TouchableHighlight>

      <TouchableNativeFeedback onPress={() => setN(N + 1)}>
        <View>
          <Text style={[text_st, button_st]}>High, Touch Me</Text>
        </View>
      </TouchableNativeFeedback>

      {/* <TouchableNativeFeedback
        onPress={() => setN(N - 1)}
        background={TouchableNativeFeedback.Ripple("#2196F3", false)}
      >
        <View>
          <Text style={[text_st, button_st]}>Low, Touch Me</Text>
        </View>
      </TouchableNativeFeedback> */}
    </View>
  );
};

export default Lab4;
