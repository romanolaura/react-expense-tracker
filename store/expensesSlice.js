import { createSlice, isPending } from "@reduxjs/toolkit";

const expensesSlice = createSlice({
  name: "expesesCtx",
  initialState: {
    expenses: [
      {
        id: 1,
        description: "A book",
        date: new Date(2022, 8, 1).toString(),
        amount: 14.99,
      },
      {
        id: 2,
        description: "Another book",
        date: new Date(2022, 8, 2).toString(),
        amount: 18.59,
      },
      {
        id: 3,
        description: "A book",
        date: new Date(2022, 8, 3).toString(),
        amount: 18.59,
      },
      {
        id: 4,
        description: "Another book",
        date: new Date(2022, 8, 4).toString(),
        amount: 18.59,
      },
      {
        id: 5,
        description: "Recent expense",
        date: new Date(2022, 8, 11).toString(),
        amount: 15.88,
      },
      {
        id: 6,
        description: "Old expense",
        date: new Date(2022, 7, 4).toString(),
        amount: 30.7,
      },
      {
        id: 7,
        description: "Another expense",
        date: new Date(2022, 8, 5).toString(),
        amount: 3.27,
      },
    ],
  },
  reducers: {
    addExpense: (state, action) => {
      state.expenses.push(action.payload.newExpense);
    },
    updateExpense: (state, action) => {
      const updateExpenseId = state.expenses.indexOf(action.payload.expenseId);
      state.expenses[updateExpenseId] = action.payload.expense;
    },
    removeExpense: (state, action) => {
      state.expenses = state.expenses.filter(
        (expense) => expense.id !== action.payload.expenseId
      );
    },
    totalExpenses: () => {},
  },
});

export const addExpense = expensesSlice.actions.addExpense;
export const updateExpense = expensesSlice.actions.updateExpense;
export const removeExpense = expensesSlice.actions.removeExpense;
export const totalExpenses = expensesSlice.actions.totalExpenses;
export default expensesSlice.reducer;
