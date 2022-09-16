import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Provider } from "react-redux";

import RecentExpensesScreen from "./screens/RecentExpensesScreen";
import AllExpensesScreen from "./screens/AllExpensesScreen";
import ManageExpenseScreen from "./screens/ManageExpenseScreen";
import IconButton from "./components/IconButton";
import store from "./store/store";

export default function App() {
  const Stack = createNativeStackNavigator();
  const BottomTabs = createBottomTabNavigator();

  const addExpenseHandler = (navigation) => {
    navigation.navigate("ManageExpense", {
      id: "add",
      screenTitle: "Add Expense",
    });
  };

  const BottomTabsNavigator = () => {
    return (
      <BottomTabs.Navigator
        screenOptions={({ navigation }) => ({
          headerRight: ({ tintColor }) => (
            <IconButton
              icon="add"
              size={24}
              color={tintColor}
              onPress={addExpenseHandler.bind(this, navigation)}
            />
          ),
          // headerRightContainerStyle: { },
          headerTintColor: "#bcb8cf",
          headerStyle: { backgroundColor: "#2203a8" },
          tabBarStyle: { backgroundColor: "#2203a8" },
          tabBarActiveTintColor: "yellow",
          tabBarInactiveTintColor: "gray",
        })}
        sceneContainerStyle={{ backgroundColor: "#0c013d" }}
      >
        <BottomTabs.Screen
          name="RecentExpenses"
          component={RecentExpensesScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="hourglass" size={size} color={color} />
            ),
            headerTitle: "Recent Expenses",
            tabBarLabel: "Recent",
          }}
        />
        <BottomTabs.Screen
          name="AllExpenses"
          component={AllExpensesScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="calendar-sharp" size={size} color={color} />
            ),
            headerTitle: "All Expenses",
            tabBarLabel: "All Expenses",
          }}
        />
      </BottomTabs.Navigator>
    );
  };

  return (
    <>
      <StatusBar style="light" />
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="BottomTabs"
            screenOptions={{
              headerTintColor: "#bcb8cf",
              headerStyle: { backgroundColor: "#2203a8" },
              contentStyle: { backgroundColor: "#0c013d" },
            }}
          >
            <Stack.Screen
              name="BottomTabs"
              component={BottomTabsNavigator}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ManageExpense"
              component={ManageExpenseScreen}
              options={{ presentation: "modal" }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
