import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Home = () => {
  return (
    <View className="flex  flex-col">
      {/* top header container */}
      <View className="h-[300px] rounded-b-[40px] shadow-md px-5 py-16 bg-[#2F7E79] relative">
        {/* Greetings */}
        <View className="flex flex-row items-center justify-between">
          <View className="flex flex-col gap-2">
            <Text className="text-[12px] text-white">Good Day,</Text>
            <Text className="text-[16px] text-white font-semibold">
              Hamed Ajaj
            </Text>
          </View>
          {/* notification icon */}
          <TouchableOpacity
            onPress={() => console.log("Button Pressed")}
            className="bg-gray-200 p-2 rounded-md"
          >
            <Ionicons name="notifications-outline" size={24} color="#333" />
          </TouchableOpacity>
        </View>
        <View className="absolute -bottom-14 w-[250px] h-[250px] bg-gray-300 left-[80px]"></View>
      </View>
    </View>
  );
};

export default Home;
