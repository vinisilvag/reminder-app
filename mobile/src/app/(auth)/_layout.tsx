import { Stack } from 'expo-router'

export default function StackRoutes() {
  return (
    <Stack initialRouteName="sign-in">
      <Stack.Screen name="sign-in" />
      <Stack.Screen name="sign-up" />
    </Stack>
  )
}
