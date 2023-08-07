import { Text, TextInput, View, TouchableOpacity, FlatList, Alert, Image } from "react-native"
import { styles } from "./styles"
import { Participant } from "../../components/Participants"
import { useState } from "react"
import { TaskCount } from "../../components/TaskCount"


export function Home() {
  const [peoples, setPeople] = useState<string[]>([])
  const [name, setName] = useState('')


  function handleParticipantAdd() {
    if (peoples.includes(name)) {
      return Alert.alert('Participante já existe', 'Já existe um participante na lista com esse nome')
    }
    setPeople(prevState => [...prevState, name])
    setName('')
  }

  function handleParticipantRemove(name: string) {

    function deleteParticipant() {
      setPeople(prevState => prevState.filter(peoples => peoples != name))
      Alert.alert('Deletado')
    }
    Alert.alert('Remover', `Tem certeza que deseja remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: deleteParticipant,
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
          value={name}
          onSubmitEditing={handleParticipantAdd}
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Image style={styles.plusIcon} source={require('../../assets/plus.png')} />
        </TouchableOpacity>
      </View>

      <View style={styles.countContainer}>
        <TaskCount
          type="created"
          count={0}
        />
        <TaskCount
          type="completed"
          count={0}
        />
      </View>
      <View style={styles.divider} />

      <FlatList
        data={peoples}
        keyExtractor={item => item}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <View style={styles.listEmptyText}>
            <Image source={require('../../assets/Clipboard.png')}></Image>
            <Text style={styles.listEmptyTitle}>
              Você ainda não tem tarefas cadastradas
            </Text>
            <Text style={styles.listEmptySubtitle}>
              Crie tarefas e organize seus itens a fazer
            </Text>
          </View>
        )}
        renderItem={({ item, index }) => (
          <Participant
            name={item}
            key={index}
            pressed={() => handleParticipantRemove(item)}
          />
        )}
      />




    </View>
  )
}
