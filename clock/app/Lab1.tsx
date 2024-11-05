import { useEffect, useState } from "react";
import { Text, View } from "react-native";

const text_st = { fontSize: 20, padding: 10 };

const Lab1 = () => {
  const [d, setD] = useState(new Date());

  useEffect(() => {
    setInterval(run_everysec, 1000);
  }, []);

  const run_everysec = () => {
    const now = new Date();
    setD(now);
  };
  return (
    <View>
      <Text style={text_st}>{d.toString()}</Text>
    </View>
  );
};

export default Lab1;
