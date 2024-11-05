import { useEffect, useState } from "react";
import { Text, View } from "react-native";

const text_st = { fontSize: 20, padding: 10 };

const Lab1a = () => {
  const [hh, setHh] = useState("");
  const [mm, setMm] = useState("");
  const [ss, setSs] = useState("");

  useEffect(() => {
    setInterval(run_everysec, 1000);
  }, []);

  const run_everysec = () => {
    const now = new Date();
    setHh(now.getHours().toString().padStart(2, "0"));
    setMm(now.getMinutes().toString().padStart(2, "0"));
    setSs(now.getSeconds().toString().padStart(2, "0"));
  };
  return (
    <View>
      <Text style={text_st}>
        {hh}:{mm}:{ss}
      </Text>
    </View>
  );
};

export default Lab1a;
