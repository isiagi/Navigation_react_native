import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Ionicons } from "@expo/vector-icons";

import WelcomeScreen from "./screens/WelcomeScreen";
import UserScreen from "./screens/UserScreen";

const BottomTab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          tabBarActiveBackgroundColor: "#f0e1ff",
          tabBarActiveTintColor: "#3c0a6b",
          headerStyle: { backgroundColor: "#3c0a6b" },
          headerTintColor: "white",
        }}
      >
        <BottomTab.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            tabBarIcon: ({color, size}) => <Ionicons name='home' color={color} size={size} />
          }}
        />
        <BottomTab.Screen
          name="User"
          component={UserScreen}
          options={{
            tabBarIcon: ({color, size}) => <Ionicons name='person' color={color} size={size} />
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}
