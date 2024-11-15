import { Audio } from "expo-av";
import { ImageBackground, TouchableOpacity, View } from "react-native";

const key_st = {
  flex: 1,
  backgroundColor: "rgba(100, 100, 100, 0.3)",
};

const getSoundSource = (num: number) => {
  switch (num) {
    case 0:
      return require("../assets/keyfiles/note00.m4a");
    case 2:
      return require("../assets/keyfiles/note02.m4a");
    case 4:
      return require("../assets/keyfiles/note04.m4a");
    case 5:
      return require("../assets/keyfiles/note05.m4a");
    case 7:
      return require("../assets/keyfiles/note07.m4a");
    case 9:
      return require("../assets/keyfiles/note09.m4a");
    case 11:
      return require("../assets/keyfiles/note11.m4a");
    case 12:
      return require("../assets/keyfiles/note12.m4a");
  }
};

const play = async (num: number) => {
  const src = getSoundSource(num);
  const s = await Audio.Sound.createAsync(src);
  s.sound.playAsync();
};

const Piano = () => {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        style={{ height: "100%", width: "100%" }}
        resizeMode="stretch"
        source={require("../assets/keyfiles/keyboard.png")}
      >
        <TouchableOpacity style={key_st} onPress={() => play(0)} />
        <TouchableOpacity style={key_st} onPress={() => play(2)} />
        <TouchableOpacity style={key_st} onPress={() => play(4)} />
        <TouchableOpacity style={key_st} onPress={() => play(5)} />
        <TouchableOpacity style={key_st} onPress={() => play(7)} />
        <TouchableOpacity style={key_st} onPress={() => play(9)} />
        <TouchableOpacity style={key_st} onPress={() => play(11)} />
        <TouchableOpacity style={key_st} onPress={() => play(12)} />
      </ImageBackground>
    </View>
  );
};

export default Piano;
