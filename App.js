import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import UserScreen from "./screens/UserScreen";
import Wischlist from "./screens/Wischlist";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Header from "./components/Header";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import book from './reducers/books';

import { FontAwesome } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const store = configureStore({
  reducer: { book },
});

export default function App() {
  return (
    <Provider store={store}>
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName = "";

              if (route.name === "wischlist") {
                iconName = "bookmark-o";
              } else if (route.name === "home") {
                iconName = "book";
              } else if (route.name === "user") {
                iconName = "user";
              }

              return <FontAwesome name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "#574DFF",
            tabBarInactiveTintColor: "#ECEBFF",
            headerShown: false,
            tabBarStyle: {
              height: 55,
              paddingHorizontal: 7,
              paddingTop: 2,
              paddingBottom: 5,
              backgroundColor: "rgba(34,36,40,1)",
              position: "absolute",
              borderTopWidth: 0,
            },
          })}
        >
          <Tab.Screen
            name="wischlist"
            component={Wischlist}
            options={{
              headerShown: true,
              headerTitle: () => <Header name="BookList" />,
              headerStyle: {
                backgroundColor: "black",
                height: 120,
              },
            }}
          />
          <Tab.Screen
            name="home"
            component={HomeScreen}
            options={{
              headerShown: true,
              headerTitle: () => <Header name="BookList" />,
              headerStyle: {
                backgroundColor: "black",
                height: 120,
              },
            }}
          />
          <Tab.Screen
            name="user"
            component={UserScreen}
            options={{
              headerShown: true,
              headerTitle: () => <Header name="BookList" />,
              headerStyle: {
                backgroundColor: "black",
                height: 120,
              },
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
    </Provider>
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
