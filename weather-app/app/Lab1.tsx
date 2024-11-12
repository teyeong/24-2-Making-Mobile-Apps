// import { API_URL } from "@env";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";

const Lab1 = () => {
  const [data, setData] = useState([]);

  const url = process.env.EXPO_PUBLIC_API_URL ?? "";

  useEffect(() => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        console.log(json);
        setData(json);
      })
      .then((error) => {
        console.error(error);
      });
  }, []);

  return (
    <View>
      <Text>{JSON.stringify(data)}</Text>
    </View>
  );
};

export default Lab1;
