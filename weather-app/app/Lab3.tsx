import { useEffect, useState } from "react";
import { Text, View, Image } from "react-native";

var st_text = { fontSize: 20 };

const Lab3 = () => {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [temp, setTemp] = useState("");
  const [weather, setWeather] = useState("");
  const [wind, setWind] = useState("");
  const [icon, setIcon] = useState("");

  const url = process.env.EXPO_PUBLIC_API_URL ?? "";

  useEffect(() => {
    fetch(url ?? "")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        console.log(json);
        setCity(json.name);
        setCountry(json.sys.country);
        setTemp(json.main.temp);
        setWeather(json.weather[0].description);
        setWind(json.wind.speed);
        setIcon(`http://openweathermap.org/img/w/${json.weather[0].icon}.png`);
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={st_text}>City: {city}</Text>
      <Text style={st_text}>Country: {country}</Text>
      <Text style={st_text}>Temp: {temp}</Text>
      <Text style={st_text}>Weather: {weather}</Text>
      <Text style={st_text}>Wind: {wind}</Text>
      <Image style={{ width: 100, height: 100 }} source={{ uri: icon }} />
    </View>
  );
};

export default Lab3;
