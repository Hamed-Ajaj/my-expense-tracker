import { Transaction } from "@/types/transactions";
import React from "react";
import { Text, View } from "react-native";

const TransactionCard = ({ item }: any) => {
  return (
    <View className=" my-2 flex-row  p-3 bg-gray-50 rounded-md justify-between items-center">
      {/* title */}
      <View className="flex flex-col gap-1">
        <Text className="font-medium">{item.title}</Text>
        <Text className="text-[13px] text-[#666666]">
          {item.date.toLocaleDateString()}
        </Text>
      </View>

      {/* amount */}
      <View className="flex flex-row gap-1.5">
        <Text
          className={`text-[18px] font-semibold ${item.transactionType === "expense" ? "text-red-500" : "text-green-500"}`}
        >
          {item.transactionType === "expense" ? "-" : "+"}
        </Text>
        <Text
          className={`text-[18px] font-semibold ${item.transactionType === "expense" ? "text-red-500" : "text-green-500"}`}
        >
          ${" " + item.amount}
        </Text>
      </View>
    </View>
  );
};

export default TransactionCard;
