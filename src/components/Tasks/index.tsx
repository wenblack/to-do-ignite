import { Text, Image, View, TouchableOpacity } from "react-native"
import { styles } from "./styles"
import { useState } from "react"

interface TaskProps {
  title: string
  completedFunction: () => void
  deleteFunction: () => void
}
export function Task({ title, completedFunction, deleteFunction }: TaskProps) {
  const [completed, setIsCompleted] = useState(false)
  function pressed() {
    if (completed) {
      setIsCompleted(false),
        completedFunction
    }
  }
  if (completed) {
    return (
      <View style={styles.divider}>
        <TouchableOpacity
          onPress={() => {
            setIsCompleted(false), completedFunction()
          }}
        >
          <Image source={require('../../assets/checked.png')} />
        </TouchableOpacity>
        <Text style={styles.textTaskCompleted}>{title}</Text>
        <TouchableOpacity
          onPress={deleteFunction}
        >
          <Image source={require('../../assets/trash.png')} />
        </TouchableOpacity>
      </View>
    )
  }
  return (
    <View style={styles.divider}>
      <TouchableOpacity
        onPress={() => {
          setIsCompleted(true), completedFunction()
        }}
      >
        <Image source={require('../../assets/check.png')} />
      </TouchableOpacity>
      <Text style={styles.textTaskCreated}>{title}</Text>
      <TouchableOpacity
        onPress={deleteFunction}
      >
        <Image source={require('../../assets/trash.png')} />
      </TouchableOpacity>
    </View>
  )
}