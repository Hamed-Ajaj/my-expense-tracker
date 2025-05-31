import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity, View } from "react-native";

const FloatingAddButton = ({
  showAddTransaction,
  setShowAddTransaction,
}: {
  showAddTransaction: boolean;
  setShowAddTransaction: (value: boolean) => void;
}) => {
  return (
    <View className="absolute bottom-6 right-6">
      <TouchableOpacity
        className="bg-[#2F7E79] rounded-full p-4"
        onPress={() => setShowAddTransaction(!showAddTransaction)}
      >
        <Ionicons name="add" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default FloatingAddButton;
