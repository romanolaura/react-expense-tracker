import { FlatList, StyleSheet } from "react-native";

import ExpenseItem from "./ExpenseItem";

const ExpensesList = ({expenses}) => {
  return (
    <FlatList style={styles.container}
      data={expenses}
      keyExtractor={(expense) => expense.id}
      renderItem={({ item }) => <ExpenseItem {...item}/>}
    />
  );
};

export default ExpensesList;

const styles = StyleSheet.create({
  container: {
    marginBottom: "16%",
    marginTop: 8
  }
})