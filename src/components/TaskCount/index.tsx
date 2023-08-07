import { Text, View } from "react-native"
import { styles } from "./styles"

interface TaskCountProps {
  type: "created" | "completed"
  count: number
}
export function TaskCount({ type, count }: TaskCountProps) {
  if (type === 'created') {
    return (
      <View style={styles.container}>
        <Text style={styles.createdTask}>Criadas</Text>
        <Text style={styles.count}>{count}</Text>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <Text style={styles.completedTask}>Concluídas</Text>
      <Text style={styles.count}>{count}</Text>
    </View>
  )
}