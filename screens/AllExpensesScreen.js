import { View } from "react-native";
import { useSelector } from "react-redux";

import ExpensesList from "../components/ExpensesList/ExpensesList";
import TotalExpenses from "../components/ExpensesList/TotalExpenses";
import NoExpensesFound from "../components/ExpensesList/NoExpensesFound";

const AllExpensesScreen = () => {
  const allExpenses = useSelector((state) => state.expenses.expenses);

  const totalExpenses = allExpenses.reduce(
    (total, expense) => total + expense.amount,
    0
  );

  return (
    <View>
      <TotalExpenses text="Total" amount={totalExpenses} />
      {allExpenses.length > 0 ? (
        <ExpensesList expenses={allExpenses} />
      ) : (
        <NoExpensesFound message="No expenses registered." />
      )}
    </View>
  );
};

export default AllExpensesScreen;
