import { Text, View, TextInput, TouchableOpacity, FlatList } from "react-native";
import { styles } from "./style";
import { Participant } from "../../../component/Participant";

export default function Home() {
  const participants = ['Renan', 'Rogerio', 'Rafael', 'Gloria', 'dasdsa', 'asdd', 'test', 'gfdgdgd']

  function handleParticipantAdd(){
    console.log("Voce clicou no botao de add")
  }
  function handleParticipantRemove(name: string){
    console.log(`Voce clicou em remover o participante ${name}`)
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
          onRemove={() => handleParticipantRemove("renan")}/>
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