import { Text } from "@/components/ui/text";
import React, { useState } from "react";
import { Dimensions, TouchableOpacity, View } from "react-native";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";
const Charts = () => {
  const [transactionType, setTransactionType] = useState("income");

  return (
    <View className="py-14 px-3">
      <View className="flex flex-row my-2  items-center">
        <TouchableOpacity
          className={`
          py-4 px-6 w-[50%] rounded-lg flex justify-center items-center
          ${transactionType === "income" ? "bg-[#2F7E79] " : "bg-gray-200"}
            `}
          onPress={() => setTransactionType("income")}
        >
          <Text
            className={`${transactionType === "income" ? "text-white" : "text-black"}`}
          >
            income
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          className={`
          py-4 px-6 w-[50%] rounded-lg flex justify-center items-center

          ${
            transactionType === "expense"
              ? "bg-red-500 text-white"
              : "bg-gray-200"
          }`}
          onPress={() => setTransactionType("expense")}
        >
          <Text
            className={`${transactionType === "expense" ? "text-white" : "text-black"}`}
          >
            expense
          </Text>
        </TouchableOpacity>
      </View>
      {/* spending by category chart */}
      <View>
        <Text>Bezier Line Chart</Text>
        <BarChart
          data={{
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                ],
              },
            ],
          }}
          width={Dimensions.get("window").width} // from react-native
          height={220}
          yAxisLabel="$"
          yAxisSuffix="k"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#2F7E79",
            backgroundGradientFrom: "#2F7E79",
            backgroundGradientTo: "#2F7E79",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#ffa726",
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      </View>
      {/* spending by month chart */}
      <View>
        <Text>Bezier Line Chart</Text>
        <BarChart
          data={{
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                ],
              },
            ],
          }}
          width={Dimensions.get("window").width} // from react-native
          height={220}
          yAxisLabel="$"
          yAxisSuffix="k"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#2F7E79",
            backgroundGradientFrom: "#2F7E79",
            backgroundGradientTo: "#2F7E79",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#ffa726",
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      </View>
    </View>
  );
};

export default Charts;
