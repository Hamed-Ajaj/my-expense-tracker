import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogBody,
  AlertDialogBackdrop,
} from "@/components/ui/alert-dialog";
import { Button, ButtonText } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import React, { useState, useEffect } from "react";
import { Input, InputField } from "./ui/input";
import { View, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";

export default function AddTransactionDialog({
  showAddTransaction,
  setShowAddTransaction,
}) {
  const [transactionType, setTransactionType] = useState("income");
  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    category: "food",
    currency: "USD",
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const expenseCategories = [
    { label: "🍔 Food & Dining", value: "food" },
    { label: "🚗 Transportation", value: "transport" },
    { label: "🏠 Housing", value: "housing" },
    { label: "🛍️ Shopping", value: "shopping" },
    { label: "💊 Healthcare", value: "healthcare" },
    { label: "🎯 Entertainment", value: "entertainment" },
    { label: "📚 Education", value: "education" },
    { label: "💼 Business", value: "business" },
    { label: "📱 Utilities", value: "utilities" },
    { label: "🎁 Gifts", value: "gifts" },
    { label: "📊 Other", value: "other" },
  ];

  const incomeCategories = [
    { label: "💼 Salary", value: "salary" },
    { label: "💰 Freelance", value: "freelance" },
    { label: "🏢 Business", value: "business" },
    { label: "📈 Investment", value: "investment" },
    { label: "🎁 Gift", value: "gift" },
    { label: "💸 Bonus", value: "bonus" },
    { label: "🏠 Rental", value: "rental" },
    { label: "💎 Dividend", value: "dividend" },
    { label: "📊 Other", value: "other" },
  ];
  const category =
    transactionType === "expense" ? expenseCategories : incomeCategories;
  const handleClose = () => {
    setShowAddTransaction(false);
    // Reset form on close
    setFormData({
      title: "",
      amount: "",
      category: "food",
      currency: "USD",
    });
    setTransactionType("expense");
    setErrors({});
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = "Title is required";
    }

    if (!formData.amount.trim()) {
      newErrors.amount = "Amount is required";
    } else if (
      isNaN(parseFloat(formData.amount)) ||
      parseFloat(formData.amount) <= 0
    ) {
      newErrors.amount = "Please enter a valid amount";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Here you would typically save the transaction
      console.log("Transaction data:", { ...formData });

      handleClose();
    } catch (error) {
      console.error("Error saving transaction:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const updateFormData = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  return (
    <AlertDialog isOpen={showAddTransaction} onClose={handleClose} size="lg">
      <AlertDialogBackdrop className="bg-black/60" />
      <AlertDialogContent className="mx-4 max-w-md w-full bg-white rounded-2xl shadow-2xl border-0">
        <AlertDialogHeader className="pb-2 pt-6 px-6">
          <View className="flex w-full flex-row items-center justify-between">
            <Heading className="text-gray-900 font-bold text-xl">
              Add Transaction
            </Heading>
            <View>
              <TouchableOpacity
                onPress={handleClose}
                className="w-8 h-8 rounded-full bg-gray-100 items-center justify-center"
              >
                <Text className="text-gray-500 font-bold text-lg">×</Text>
              </TouchableOpacity>
            </View>
          </View>
        </AlertDialogHeader>

        <AlertDialogBody className="px-6 py-4 space-y-5">
          {/* Transaction Type Toggle */}
          <View className="flex flex-col space-y-2">
            <Text className="text-gray-700 font-semibold text-sm mb-1">
              Transaction Type
            </Text>
            <View className="flex flex-row gap-2 items-center">
              <TouchableOpacity
                className={
                  transactionType === "income"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200"
                }
                onPress={() => setTransactionType("income")}
              >
                <Text>income</Text>
              </TouchableOpacity>
              <TouchableOpacity
                className={
                  transactionType === "expense"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200"
                }
                onPress={() => setTransactionType("expense")}
              >
                <Text>expense</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Title Input */}
          <View className="flex flex-col space-y-2">
            <Text className="text-gray-700 font-semibold text-sm">Title</Text>
            <Input
              variant="outline"
              size="lg"
              className={`border-2 rounded-xl bg-gray-50 shadow-sm ${
                errors.title
                  ? "border-red-400"
                  : "border-gray-200 focus:border-blue-400"
              }`}
            >
              <InputField
                placeholder="e.g., Lunch at restaurant"
                value={formData.title}
                onChangeText={(value) => updateFormData("title", value)}
                className="text-gray-900 font-medium"
              />
            </Input>
            {errors.title && (
              <Text className="text-red-500 text-xs font-medium">
                {errors.title}
              </Text>
            )}
          </View>

          {/* Amount Input */}
          <View className="flex flex-col space-y-2">
            <Text className="text-gray-700 font-semibold text-sm">Amount</Text>
            <View className="flex flex-row items-center space-x-3">
              <View className="flex-1">
                <Input
                  variant="outline"
                  size="lg"
                  className={`border-2 rounded-xl bg-gray-50 shadow-sm ${
                    errors.amount
                      ? "border-red-400"
                      : "border-gray-200 focus:border-blue-400"
                  }`}
                >
                  <InputField
                    placeholder="0.00"
                    value={formData.amount}
                    onChangeText={(value) => updateFormData("amount", value)}
                    keyboardType="numeric"
                    className="text-gray-900 font-semibold text-lg"
                  />
                </Input>
              </View>
            </View>
            {errors.amount && (
              <Text className="text-red-500 text-xs font-medium">
                {errors.amount}
              </Text>
            )}
          </View>

          <View className="w-full my-2">
            <Text className="text-gray-700 font-semibold text-sm">
              Currency
            </Text>
            <View className="border-2 border-gray-200 rounded-xl bg-gray-50 overflow-hidden shadow-sm">
              <Picker
                selectedValue={formData.currency}
                onValueChange={(value) => updateFormData("currency", value)}
                className="h-12"
              >
                <Picker.Item label="USD" value="USD" />
                <Picker.Item label="LBP" value="LBP" />
                <Picker.Item label="EUR" value="EUR" />
              </Picker>
            </View>
          </View>

          {/* Category Selection */}
          <View className="flex flex-col space-y-2">
            <Text className="text-gray-700 font-semibold text-sm">
              Category
            </Text>
            <View className="border-2 border-gray-200 rounded-xl bg-gray-50 overflow-hidden shadow-sm">
              <Picker
                selectedValue={formData.category}
                onValueChange={(value) => updateFormData("category", value)}
                className="h-12"
              >
                {category.map((category) => (
                  <Picker.Item
                    key={category.value}
                    label={category.label}
                    value={category.value}
                  />
                ))}
              </Picker>
            </View>
          </View>
        </AlertDialogBody>

        <AlertDialogFooter className="px-6 pb-6 pt-2">
          <View className="flex flex-row space-x-3 w-full">
            <Button
              onPress={handleSubmit}
              size="lg"
              className={`flex-1 rounded-xl shadow-lg ${
                formData.type === "expense"
                  ? "bg-red-500 hover:bg-red-600"
                  : "bg-green-500 hover:bg-green-600"
              }`}
              variant="solid"
              disabled={isLoading}
            >
              <ButtonText className="text-white font-semibold">
                {isLoading ? "Adding..." : `Add`}
              </ButtonText>
            </Button>
          </View>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
