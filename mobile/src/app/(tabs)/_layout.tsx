import { Tabs } from 'expo-router'

import { House, PencilSimple, User } from 'phosphor-react-native'

export default function TabsRoutes() {
  return (
    <Tabs
      initialRouteName="index"
      screenOptions={{ headerShown: false, tabBarShowLabel: false }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ size, color }) => <House size={size} color={color} />
        }}
      />

      <Tabs.Screen
        name="create-reminder"
        options={{
          tabBarIcon: ({ size, color }) => (
            <PencilSimple size={size} color={color} />
          )
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ size, color }) => <User size={size} color={color} />
        }}
      />
    </Tabs>
  )
}
