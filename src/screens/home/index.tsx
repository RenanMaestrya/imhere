import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from "react-native";
import { styles } from "./style";
import { Participant } from "../../../component/Participant";

export default function Home() {
  const [participants, setParticipants] = useState<string[]>([])
  const [participantsName, setParticipantsName] = useState('')


  function handleParticipantAdd(){
    if(participants.includes(participantsName)){
      return Alert.alert("Participante existe", "Já existe um participante na lista com esse nome!")
    }

    setParticipants(prevState => [...prevState, participantsName])
    setParticipantsName('')
  }
  function handleParticipantRemove(name: string){

    Alert.alert("Remover", `Remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => setParticipants(prevState => prevState.filter(participant => participant !== name))
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
          onChangeText={setParticipantsName}
          value={participantsName}
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
            <Text style={styles.buttonText}>
                +
            </Text>
        </TouchableOpacity>
      </View>
      
      <FlatList
        data={participants}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <Participant 
          key={item}
          name={item} 
          onRemove={() => handleParticipantRemove(item)}/>
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento? Adicione participantes a sua lista de presença.
          </Text>
        )}
      />
    </View>
  )
}