import '@styles/globals.css'

import { Slot } from 'expo-router'

export default function Root() {
  return <Slot initialRouteName="sign-in" />
}
