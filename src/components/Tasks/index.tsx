import { Text, Image, View, TouchableOpacity } from "react-native"
import { styles } from "./styles"
import { useState } from "react"

interface TaskProps {
  title: string
  completedFunction: () => void
  createdFunction:()=> void
  deleteFunction: ()=>void
}
export function Task({ title, completedFunction, deleteFunction, createdFunction }: TaskProps) {
  const [completed, setIsCompleted] = useState(false)
  
  function changeStatusTask (){
    if(completed){
      setIsCompleted(false)
      createdFunction()
    }else {
      setIsCompleted(true)
      completedFunction()
    }
  }

  if (completed) {
    return (
      <View style={styles.divider}>
        <TouchableOpacity
          onPress={changeStatusTask}
        >
          <Image style={styles.imgCheckBox} source={require('../../assets/checked.png')} />
        </TouchableOpacity>
        <Text onPress={changeStatusTask} style={styles.textTaskCompleted}>{title}</Text>
        <TouchableOpacity
          onPress={deleteFunction}
        >
          <Image source={require('../../assets/trash.png')} style={styles.imgTrashIcon} />
        </TouchableOpacity>
      </View>
    )
  }
  return (
    <View style={styles.divider}>
      <TouchableOpacity
        onPress={changeStatusTask}
      >
        <Image style={styles.imgCheckBox} source={require('../../assets/check.png')} />
      </TouchableOpacity>
      <Text onPress={changeStatusTask} style={styles.textTaskCreated}>{title}</Text>
      <TouchableOpacity
        onPress={deleteFunction}
      >
        <Image source={require('../../assets/trash.png')} style={styles.imgTrashIcon} />
      </TouchableOpacity>
    </View>
  )
}