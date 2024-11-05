import { Audio } from "expo-av";
import { ImageBackground, View } from "react-native";

const key_st = {
  flex: 1,
  margin: 5,
  backgroundColor: "rgba(100, 100, 100, 0.2)",
};

const play00 = async () => {
  const s = await Audio.Sound.createAsync(
    require("../assets/keyfiles/note00.m4a")
  );
  s.sound.playAsync();
};

const play02 = async () => {
  const s = await Audio.Sound.createAsync(
    require("../assets/keyfiles/note02.m4a")
  );
  s.sound.playAsync();
};

const play04 = async () => {
  const s = await Audio.Sound.createAsync(
    require("../assets/keyfiles/note04.m4a")
  );
  s.sound.playAsync();
};

const play05 = async () => {
  const s = await Audio.Sound.createAsync(
    require("../assets/keyfiles/note05.m4a")
  );
  s.sound.playAsync();
};

const play07 = async () => {
  const s = await Audio.Sound.createAsync(
    require("../assets/keyfiles/note07.m4a")
  );
  s.sound.playAsync();
};

const play09 = async () => {
  const s = await Audio.Sound.createAsync(
    require("../assets/keyfiles/note09.m4a")
  );
  s.sound.playAsync();
};

const play11 = async () => {
  const s = await Audio.Sound.createAsync(
    require("../assets/keyfiles/note11.m4a")
  );
  s.sound.playAsync();
};

const play12 = async () => {
  const s = await Audio.Sound.createAsync(
    require("../assets/keyfiles/note12.m4a")
  );
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
        <View style={key_st} onTouchStart={play00} />
        <View style={key_st} onTouchStart={play02} />
        <View style={key_st} onTouchStart={play04} />
        <View style={key_st} onTouchStart={play05} />
        <View style={key_st} onTouchStart={play07} />
        <View style={key_st} onTouchStart={play09} />
        <View style={key_st} onTouchStart={play11} />
        <View style={key_st} onTouchStart={play12} />
      </ImageBackground>
    </View>
  );
};

export default Piano;
