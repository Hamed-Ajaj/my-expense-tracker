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
import React, { useState } from "react";
import { Input, InputField } from "./ui/input";
import { View } from "react-native";
import { Picker } from "@react-native-picker/picker";
export default function AddTransactionDialog({
  showAddTransaction,
  setShowAddTransaction,
}) {
  const handleClose = () => setShowAddTransaction(false);
  const [selected, setSelected] = useState("food");
  return (
    <>
      <AlertDialog isOpen={showAddTransaction} onClose={handleClose} size="lg">
        <AlertDialogBackdrop />
        <AlertDialogContent className="h-[500px]">
          <AlertDialogHeader>
            <Heading className="text-typography-950 font-semibold" size="md">
              Add Transaction.
            </Heading>
          </AlertDialogHeader>
          <AlertDialogBody className="flex flex-col space-y-2 gap-4 mt-3 mb-4">
            <View className="flex flex-col my-2">
              <Text>Title</Text>
              <Input
                variant="outline"
                size="xl"
                isDisabled={false}
                isInvalid={false}
                isReadOnly={false}
              >
                <InputField placeholder="Enter Text here..." />
              </Input>
            </View>
            <View className="flex flex-col my-2">
              <Text>Title</Text>
              <Input
                variant="outline"
                size="xl"
                isDisabled={false}
                isInvalid={false}
                isReadOnly={false}
              >
                <InputField placeholder="Enter Text here..." type="text" />
              </Input>
            </View>
            <View className="flex flex-col my-2">
              <Text>Titles</Text>
              <Input
                variant="outline"
                size="xl"
                isDisabled={false}
                isInvalid={false}
                isReadOnly={false}
              >
                <InputField
                  placeholder="Enter Text..."
                  focusable
                  keyboardType="numeric"
                />
              </Input>
            </View>
            {/* Current Type */}
            <View className="flex gap-2 flex-col my-2">
              <Text>Currency</Text>
              <View className="border h-16 border-gray-300 rounded-md overflow-hidden">
                <Picker
                  selectedValue={selected}
                  onValueChange={(itemValue) => setSelected(itemValue)}
                  className="h-5"
                >
                  <Picker.Item label="Food" value="food" />
                  <Picker.Item label="Transport" value="transport" />
                  <Picker.Item label="Shopping" value="shopping" />
                </Picker>
              </View>
            </View>
          </AlertDialogBody>
          <AlertDialogFooter className="">
            <Button
              onPress={handleClose}
              size="xl"
              className="w-full rounded-lg "
              variant="solid"
            >
              <ButtonText>Add Transaction</ButtonText>
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
