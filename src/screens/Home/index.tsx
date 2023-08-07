import { Text, TextInput, View, TouchableOpacity, FlatList, Alert } from "react-native"
import { styles } from "./styles"
import { Participant } from "../../components/Participants"
import { useState } from "react"

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
      <Text style={styles.eventName}>
        Nome do evento
      </Text>

      <Text style={styles.eventDate}>
        Sexta, 4 de Novembro de 2022.
      </Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
          onChangeText={setName}
          value={name}
          onSubmitEditing={handleParticipantAdd}
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>




      <FlatList
        data={peoples}
        keyExtractor={item => item}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>Ninguém chegou ao evento ainda? Adicione participantes a sua lista de presença.</Text>
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
