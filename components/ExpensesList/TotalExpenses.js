import { StyleSheet, View, Text } from "react-native";

const TotalExpenses = ({ text, amount }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <Text style={styles.amount}>{`$${amount.toFixed(2)}`}</Text>
    </View>
  );
};

export default TotalExpenses;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#c6bdf2",
    padding: 12,
    marginHorizontal: 24,
    marginTop: 18,
    borderRadius: 8
  },
  text: {
    fontSize: 12,
    color: "#8e7be8",
    fontWeight: "bold",
  },
  amount: {
    fontSize: 16,
    color: "#3d27a3",
    fontWeight: "bold",
  },
});
