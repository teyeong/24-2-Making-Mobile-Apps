import { useEffect, useState } from "react";
import { Text, View } from "react-native";

const text_st = { fontSize: 40, padding: 10, backgroundColor: "lightblue" };

const Lab1b = () => {
  const [hh, setHh] = useState("");
  const [mm, setMm] = useState("");
  const [ss, setSs] = useState("");
  const [ap, setAp] = useState("");

  useEffect(() => {
    setInterval(run_everysec, 1000);
  }, []);

  const run_everysec = () => {
    const now = new Date();
    setHh(now.getHours().toString().padStart(2, "0"));
    setMm(now.getMinutes().toString().padStart(2, "0"));
    setSs(now.getSeconds().toString().padStart(2, "0"));

    if (now.getHours() > 12) {
      setAp("pm");
      setHh((now.getHours() - 12).toString().padStart(2, "0"));
    } else if (now.getHours() < 12) {
      setAp("am");
    } else {
      setAp("pm");
    }
  };

  return (
    <View>
      <Text style={text_st}>
        <Text style={{ fontWeight: 600 }}>
          {hh}:{mm}
        </Text>
        :{ss} {ap}
      </Text>
    </View>
  );
};

export default Lab1b;
