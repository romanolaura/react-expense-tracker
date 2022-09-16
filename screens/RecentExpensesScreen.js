import { View } from "react-native";
import { useSelector } from "react-redux";

import ExpensesList from "../components/ExpensesList/ExpensesList";
import NoExpensesFound from "../components/ExpensesList/NoExpensesFound";
import TotalExpenses from "../components/ExpensesList/TotalExpenses";

const RecentExpensesScreen = () => {
  const expenses = useSelector((state) => state.expenses.expenses);

  const today = new Date();
  const thresholdDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() - 7
  );

  const recentExpenses = expenses.filter(
    (expense) => new Date(expense.date) >= thresholdDate
  );

  const totalExpenses = recentExpenses.reduce(
    (total, expense) => total + expense.amount,
    0
  );

  return (
    <View>
      <TotalExpenses text="Last 7 Days" amount={totalExpenses} />
      {recentExpenses.length > 0 ? (
        <ExpensesList expenses={recentExpenses} />
      ) : (
        <NoExpensesFound message="No expenses registered for the last 7 days." />
      )}
    </View>
  );
};

export default RecentExpensesScreen;
