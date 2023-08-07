import { Text, TextInput, View, TouchableOpacity, FlatList, Alert, Image } from "react-native"
import { styles } from "./styles"
import { useState } from "react"
import { TaskCount } from "../../components/TaskCount"
import { Task } from "../../components/Tasks"

export function Home() {
  const [tasks, setTask] = useState<string[]>([])
  const [createdTasks, setCreatedTask] = useState(0)
  const [completedTask, setCompletedTask] = useState(0)
  const [newTask, setName] = useState('')
  const [lastTaskType,setLastTaskType] = useState('')

  function handleAddTask() {
    if (tasks.includes(newTask)) {
      return Alert.alert('Tarefa já cadastrada', 'Já existe uma tarefa com esse nome')
    }
    setTask(prevState => [...prevState, newTask])
    setName('')
    setCreatedTask(prevState => prevState + 1)
    setLastTaskType('created')
  }

  function completeTask() {
    setCreatedTask(createdTasks - 1)
    setCompletedTask(completedTask + 1)
    setLastTaskType('completed')
  }

  function setNewTask() {
    setCreatedTask(createdTasks + 1)
    setCompletedTask(completedTask - 1)
    setLastTaskType('created')
  }



  function handleRemovTask(name: string) {
    function deleteTask() {
      setTask(prevState => prevState.filter(tasks => tasks != name))
      Alert.alert('Deletado')
      if(lastTaskType==='created'){
        setCreatedTask(createdTasks-1)
      }else{
        setCompletedTask(completedTask-1)
      }
    }
    Alert.alert('Remover', `Tem certeza que deseja remover a tarefa ${name}?`, [
      {
        text: 'Sim',
        onPress: deleteTask,
      },
      {
        text: 'Não',
        style: 'cancel'
      }

    ])
  }
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer} />
      <Image
        source={require('../../assets/Logo.png')}
        style={styles.logo}
      />
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#808080"
          onChangeText={setName}
          value={newTask}
          onSubmitEditing={handleAddTask}
        />

        <TouchableOpacity style={styles.button} onPress={handleAddTask}>
          <Image style={styles.plusIcon} source={require('../../assets/plus.png')} />
        </TouchableOpacity>
      </View>

      <View style={styles.countContainer}>
        <TaskCount
          type="created"
          count={createdTasks}
        />
        <TaskCount
          type="completed"
          count={completedTask}
        />
      </View>
      <View style={styles.divider} />

      <FlatList
        data={tasks}
        keyExtractor={item => item}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <View style={styles.listEmptyText}>
            <Image style={styles.imgListEmpty} source={require('../../assets/Clipboard.png')}></Image>
            <Text style={styles.listEmptyTitle}>
              Você ainda não tem tarefas cadastradas
            </Text>
            <Text style={styles.listEmptySubtitle}>
              Crie tarefas e organize seus itens a fazer
            </Text>
          </View>
        )}
        renderItem={({ item, index }) => (
          <Task
            title={item}
            key={index}
            completedFunction={completeTask}
            createdFunction={setNewTask}
            deleteFunction={() => handleRemovTask(item)}
          />
        )}
      />
    </View>
  )
}
