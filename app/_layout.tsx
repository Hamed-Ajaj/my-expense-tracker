import { SafeAreaProvider } from "react-native-safe-area-context";
import "../global.css";
import "./i18n";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { Stack } from "expo-router";
import { LogBox } from "react-native";
import { AddTransactionProvider } from "@/contexts/addTransactionContext";

LogBox.ignoreLogs(["Text strings must be rendered within a <Text> component"]);
export default function RootLayout() {
  return (
    <GluestackUIProvider mode="light">
      <AddTransactionProvider>
        <SafeAreaProvider>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          </Stack>
        </SafeAreaProvider>
      </AddTransactionProvider>
    </GluestackUIProvider>
  );
}
