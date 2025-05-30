import { SafeAreaProvider } from "react-native-safe-area-context";
import "../global.css";
import "./i18n";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <GluestackUIProvider mode="light">
      <SafeAreaProvider>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </SafeAreaProvider>
    </GluestackUIProvider>
  );
}
