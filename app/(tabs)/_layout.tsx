import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import { Platform } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#549994",
        // tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            backgroundColor: "transparent",
            position: "absolute",
          },
          default: {
            backgroundColor: "#fff",
            elevation: 0,
            shadowOpacity: 0,
            height: 80,
            paddingTop: 16,
          },
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome
              size={30}
              name="home"
              color={color}
              onPress={() => console.log("test")}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="charts"
        options={{
          tabBarShowLabel: true,
          tabBarIcon: ({ color }) => (
            <FontAwesome size={30} name="area-chart" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="transactions"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome size={30} name="list" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
