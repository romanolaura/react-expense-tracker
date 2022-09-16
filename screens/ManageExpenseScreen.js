import { useLayoutEffect } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useDispatch } from "react-redux";

import IconButton from "../components/IconButton";
import { removeExpense } from "../store/expensesSlice";

const ManageExpenseScreen = ({ route, navigation }) => {
  const { id, screenTitle, expenseId } = route.params;

  const dispatch = useDispatch();

  useLayoutEffect(() => {
    navigation.setOptions({ title: screenTitle });
  }, [navigation, route]);

  const removeExpenseHandler = () => {
    dispatch(removeExpense({ expenseId: expenseId }));
    navigation.goBack();
  };

  const addExpenseHandler = () => {
    navigation.goBack();
  };

  const bottomBorderStyle =
    id === "edit" ? { borderBottomColor: "#bcb8cf", borderBottomWidth: 2 } : {};

  return (
    <View style={styles.container}>
      <View style={[styles.optionsContainer, bottomBorderStyle]}>
        <Pressable
          style={({ pressed }) => [styles.button, pressed && styles.pressed]}
          onPress={navigation.goBack}
        >
          <Text style={styles.buttonText}>Cancel</Text>
        </Pressable>
        <Pressable
          style={({ pressed }) => [
            styles.button,
            styles.updateButton,
            pressed && styles.pressed,
          ]}
          onPress={addExpenseHandler}
        >
          <Text style={styles.buttonText}>
            {id === "edit" ? "Update" : "Add"}
          </Text>
        </Pressable>
      </View>
      {id === "edit" && (
        <IconButton
          icon="ios-trash-sharp"
          size={34}
          color="#9e0202"
          onPress={removeExpenseHandler}
        />
      )}
    </View>
  );
};

export default ManageExpenseScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  optionsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    paddingVertical: 15,
    marginVertical: 8,
  },
  button: {
    justifyContent: "center",
    alignContent: "center",
    marginHorizontal: 10,
    width: 110,
    borderRadius: 5,
    backgroundColor: "transparent",
  },
  updateButton: {
    backgroundColor: "#2203a8",
  },
  buttonText: {
    color: "#bcb8cf",
    fontSize: 14,
    textAlign: "center",
    paddingVertical: 8,
  },
  pressed: {
    opacity: 0.7,
  },
  trashIcon: {},
});
