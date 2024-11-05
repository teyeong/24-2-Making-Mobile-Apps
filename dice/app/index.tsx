import { Button, Text, View } from "react-native";
import { useEffect, useState } from "react";

interface diceProps {
  num: number;
}

const st_text = {
  fontSize: 20,
  margin: 5,
};

const st_dice = {
  backgroundColor: "rgb(255, 240, 200)",
  padding: 10,
};

const st_circle = {
  width: 40,
  height: 40,
  borderRadius: 50,
  backgroundColor: "rgb(0, 200, 255)",
  borderWidth: 1,
  margin: 2,
};

const Circle = () => {
  return <View style={st_circle} />;
};

const Blank = () => {
  return (
    <View
      style={[
        st_circle,
        { backgroundColor: "rgb(255, 240, 200)", borderWidth: 0 },
      ]}
    />
  );
};

const Dice = ({ num }: diceProps) => {
  const [arr, setArr] = useState([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]);
  let key = 0;

  useEffect(() => {
    switch (num) {
      case 1:
        setArr([
          [0, 0, 0],
          [0, 1, 0],
          [0, 0, 0],
        ]);
        break;
      case 2:
        setArr([
          [1, 0, 0],
          [0, 0, 0],
          [0, 0, 1],
        ]);
        break;
      case 3:
        setArr([
          [1, 0, 0],
          [0, 1, 0],
          [0, 0, 1],
        ]);
        break;
      case 4:
        setArr([
          [1, 0, 1],
          [0, 0, 0],
          [1, 0, 1],
        ]);
        break;
      case 5:
        setArr([
          [1, 0, 1],
          [0, 1, 0],
          [1, 0, 1],
        ]);
        break;
      case 6:
        setArr([
          [1, 0, 1],
          [1, 0, 1],
          [1, 0, 1],
        ]);
        break;
    }
  }, [num]);

  return (
    <View style={st_dice}>
      {arr.map((item) => {
        return (
          <View style={{ flexDirection: "row" }} key={`view_${key}`}>
            {item.map((it) => {
              key = key + 1;
              if (it == 0) {
                return <Blank key={`blank_${key}`} />;
              }
              return <Circle key={`circle_${key}`} />;
            })}
          </View>
        );
      })}
    </View>
  );
};

export default function Index() {
  const [N1, setN1] = useState(1);
  const [N2, setN2] = useState(1);
  return (
    <View style={{ flex: 1 }}>
      <Text style={[st_text, { textAlign: "center" }]}>Double Dice</Text>
      <Text style={{ textAlign: "center", fontSize: 18, marginVertical: 5 }}>
        {N1 + N2}
      </Text>
      <View style={{ flexDirection: "row", justifyContent: "center", gap: 30 }}>
        <Dice num={N1} />
        <Dice num={N2} />
      </View>
      <View style={{ marginHorizontal: 100, marginVertical: 30 }}>
        <Button
          title="Roll"
          onPress={() => {
            setN1(Math.floor(Math.random() * 6 + 1));
            setN2(Math.floor(Math.random() * 6 + 1));
          }}
        />
      </View>
    </View>
  );
}
