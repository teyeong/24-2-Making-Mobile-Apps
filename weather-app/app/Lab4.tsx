import { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";

var st_text = { fontSize: 20, flexShrink: 1 };

const Lab4 = () => {
  const [data, setData] = useState<string[][]>([]);

  const url = process.env.EXPO_PUBLIC_API_V2_URL ?? "";

  useEffect(() => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setData(
          json.list.map((it: any) => {
            const icon = `http://openweathermap.org/img/w/${it.weather[0].icon}.png`;
            return [it.dt_txt, icon, it.main.temp, it.weather[0].description];
          })
        );
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <View style={{ gap: 20 }}>
      {data.map((it) => {
        return (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
            }}
            key={it[0]}
          >
            <Image style={{ width: 40, height: 40 }} source={{ uri: it[1] }} />
            <Text style={st_text}>{it[0]}</Text>
            <Text style={st_text}>{it[2]}</Text>
            <Text style={st_text}>{it[3]}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default Lab4;
