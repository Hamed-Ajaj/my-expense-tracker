import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false, // hide header (or set true if you want a top bar)
      }}
    />
  );
}
