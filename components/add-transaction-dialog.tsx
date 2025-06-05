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
import React, { useState, useContext } from "react";
import { Input, InputField } from "./ui/input";
import { View, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Toast, ToastDescription, ToastTitle, useToast } from "./ui/toast";
import { AddTransactionContext } from "@/contexts/addTransactionContext";
import { expenseCategories, incomeCategories } from "@/constants";

export default function AddTransactionDialog({
  showAddTransaction,
  setShowAddTransaction,
}: {
  showAddTransaction: boolean;
  setShowAddTransaction: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { handleAddTransactions } = useContext(AddTransactionContext);
  const [transactionType, setTransactionType] = useState("income");
  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    category: "food",
    currency: "USD",
    note: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const toast = useToast();

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
      note: "",
    });
    setTransactionType("expense");
    setErrors({});
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

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
      // await new Promise((resolve) => setTimeout(resolve, 1500));

      // Here you would typically save the transaction
      console.log("Transaction data:", { ...formData, type: transactionType });
      handleAddTransactions({ ...formData, type: transactionType });
      toast.show({
        placement: "bottom",
        duration: 3000,
        render: () => {
          return (
            <Toast action="success" variant="solid">
              <ToastTitle>Transaction Added Succesfully</ToastTitle>
              <ToastDescription>
                {formData.amount} has beed added succesfully to your account
              </ToastDescription>
            </Toast>
          );
        },
      });
      handleClose();
    } catch (error) {
      console.error("Error saving transaction:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const updateFormData = (field: string, value: string) => {
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
            <Text className="text-gray-700 font-semibold text-lg mb-1">
              Transaction Type
            </Text>
            <View className="flex flex-row my-2  items-center">
              <TouchableOpacity
                className={`
                  py-4 px-6 w-[50%] rounded-lg flex justify-center items-center
                  ${
                    transactionType === "income"
                      ? "bg-[#2F7E79] "
                      : "bg-gray-200"
                  }
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

          {/* Extra Notes Input */}
          <View className="flex flex-col space-y-2">
            <Text className="text-gray-700 font-semibold text-sm mb-1">
              Extra Notes
            </Text>
            <View className="flex flex-row items-center space-x-3">
              <View className="flex-1">
                <Input
                  variant="outline"
                  size="lg"
                  className={`border-2 rounded-xl bg-gray-50 shadow-sm border-gray-200 focus:border-blue-400`}
                >
                  <InputField
                    placeholder="Notes"
                    value={formData.note}
                    onChangeText={(value) => updateFormData("note", value)}
                    className="text-gray-900 font-semibold text-lg"
                    type="text"
                  />
                </Input>
              </View>
            </View>
          </View>
        </AlertDialogBody>

        <AlertDialogFooter className="px-6 pb-6 pt-2">
          <View className="flex flex-row space-x-3 w-full">
            <Button
              onPress={handleSubmit}
              size="lg"
              className={`flex-1 rounded-xl shadow-lg ${
                transactionType === "expense" ? "bg-red-500" : "bg-[#2F7E79] "
              }`}
              variant="solid"
              disabled={isLoading}
            >
              <ButtonText className="text-white font-semibold">
                {isLoading ? "Adding..." : `Add ${transactionType}`}
              </ButtonText>
            </Button>
          </View>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
