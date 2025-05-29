import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
const Home = () => {
  return (
    <View className="flex px-6 py-14 flex-col ">
      {/* Greetings */}
      <View className="flex flex-row items-center justify-between">
        <View className="flex flex-col gap-2">
          <Text className="text-[12px] text-[#032371]">Good Day,</Text>
          <Text className="text-[16px] text-[#032371] font-semibold">
            Hamed Ajaj
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => console.log("Button Pressed")}
          className="bg-gray-200 p-2 rounded-md"
        >
          <Ionicons name="notifications-outline" size={24} color="#333" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
