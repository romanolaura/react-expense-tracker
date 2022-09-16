import { View, Text, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ExpenseItem = ({ id, description, amount, date }) => {
  const navigation = useNavigation();

  const manageExpenseHandler = () => {
    navigation.navigate("ManageExpense", {
      id: "edit",
      screenTitle: "Edit Expense",
      expenseId: id,
    });
  };
  date = new Date(date);

  return (
    <Pressable
      style={({ pressed }) => [styles.container, pressed && styles.itemPressed]}
      onPress={manageExpenseHandler}
    >
      <View>
        <Text style={[styles.whiteText, styles.title]}>{description}</Text>
        <Text style={[styles.whiteText]}>{`${date.getFullYear()}-${
          date.getMonth() + 1
        }-${date.getDate()}`}</Text>
      </View>
      <Text style={[styles.whiteText, styles.amount]}>{amount.toFixed(2)}</Text>
    </Pressable>
  );
};

export default ExpenseItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2203a8",
    marginBottom: 16,
    marginHorizontal: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
    borderRadius: 5,
  },
  whiteText: {
    color: "#bcb8cf",
    fontSize: 14,
  },
  title: {
    fontWeight: "bold",
    marginBottom: 4,
  },
  amount: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    color: "#3d27a3",
    fontWeight: "bold",
    // fontSize: ,
    backgroundColor: "white",
    borderRadius: 5,
  },
  itemPressed: {
    opacity: 0.7,
  },
});
