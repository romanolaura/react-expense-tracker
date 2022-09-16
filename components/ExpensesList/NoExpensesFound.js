import { View, Text, StyleSheet } from "react-native";

const NoExpensesFound = ({ message }) => (
  <View style={styles.messageContainer}>
    <Text style={styles.message}>{message}</Text>
  </View>
);

export default NoExpensesFound;

const styles = StyleSheet.create({
  messageContainer: {
    height: "82%",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 24,
  },
  message: {
    color: "#bcb8cf",
    fontSize: 14,
  },
});
