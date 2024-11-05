import { Button, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  box: {
    borderColor: "blue",
    borderWidth: 2,
    margin: 5,
    padding: 5,
  },
  text: {
    backgroundColor: "wheat",
    fontSize: 30,
    margin: 2,
    padding: 2,
  },
});

const BoxGroup = (props: any) => {
  return <View style={styles.box}>{props.children}</View>;
};

const Lab5 = () => {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <BoxGroup>
        <Text style={styles.text}>ABCD</Text>
        <Text style={styles.text}>123</Text>
        <Button title="OK" />
      </BoxGroup>
      <BoxGroup>
        <Text style={styles.text}>ABCD</Text>
        <Text style={styles.text}>123</Text>
        <Button title="OK" />
      </BoxGroup>
    </View>
  );
};
export default Lab5;
