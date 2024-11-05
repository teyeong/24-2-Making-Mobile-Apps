import { useEffect, useState } from "react";
import { View } from "react-native";
import Blank from "./Blank";
import Circle from "./Circle";

const st_dice = {
  backgroundColor: "rgb(255, 240, 200)",
  padding: 10,
};

interface diceProps {
  num: number;
}

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

export default Dice;
