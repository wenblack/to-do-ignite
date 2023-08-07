import { GestureResponderEvent, Text, TouchableOpacity, View } from "react-native"

import { styles } from "./styles"

interface ParticipantProps {
  name: string
  pressed: (event: GestureResponderEvent) => void

}
export function Participant({ name, pressed }: ParticipantProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>
        {name}
      </Text>

      <TouchableOpacity style={styles.button} onPress={pressed}>
        <Text style={styles.buttonText}>
          -
        </Text>
      </TouchableOpacity>
    </View>
  )
}