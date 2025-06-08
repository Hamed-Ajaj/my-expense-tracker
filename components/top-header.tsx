import { AddTransactionContext } from "@/contexts/addTransactionContext";
import { Ionicons } from "@expo/vector-icons";
import React, { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";

const HomeTopHeader = () => {
  const { totalBalance, income, expenses } = useContext(AddTransactionContext);
  return (
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
          className="bg-white/10 p-2 rounded-md"
        >
          <Ionicons name="notifications-outline" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
      {/* Bank Account money */}
      <View className="absolute flex flex-col justify-center gap-8 py-10 px-6 -bottom-14 w-[90%] h-[190px] rounded-[14px] bg-[#1B5C55] left-[40px]">
        {/* Total balance */}
        <View className="flex  flex-col gap-2">
          <Text className="text-white text-[16px] font-semibold">
            Total Balance
          </Text>
          <Text className="text-[25px] font-bold text-white">
            $ {totalBalance ? totalBalance : 0}
          </Text>
        </View>
        {/* expense & income */}
        <View className="flex flex-row  justify-between items-center">
          <View className="flex flex-col gap-2">
            <View className="flex flex-row gap-2 items-center">
              <View className="flex justify-center items-center w-6 h-6 bg-white/20 rounded-full">
                <Ionicons name="arrow-down" size={12} color="#fff" />
              </View>
              <Text className="text-white font-medium">Income</Text>
            </View>
            {/* value */}
            <Text className="text-white text-[20px] font-semibold">
              ${" "}
              {income
                ? income.reduce((acc, item) => acc + parseFloat(item.amount), 0)
                : 0}
            </Text>
          </View>
          <View className="flex flex-col gap-2">
            <View className="flex flex-row gap-2 items-center">
              <View className="flex justify-center items-center w-6 h-6 bg-white/20 rounded-full">
                <Ionicons name="arrow-up" size={12} color="#fff" />
              </View>
              <Text className="text-white font-medium">Expenses</Text>
            </View>
            {/* value */}
            <Text className="text-white text-end text-[20px] font-semibold">
              ${" "}
              {expenses
                ? expenses.reduce(
                    (acc, item) => acc + parseFloat(item.amount),
                    0,
                  )
                : 0}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HomeTopHeader;
