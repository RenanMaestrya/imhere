import { Text, View, TextInput } from "react-native";
import { styles } from "./style";
import { ButtonAdd } from "../../../component/ButtonAdd";
import { Participant } from "../../../component/Participant";

export default function Home() {
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
        <ButtonAdd/>
      </View>
      <Participant name="Renan"/>
      <Participant name="João"/>
      <Participant name="Jose"/>
      <Participant name="Maria"/>
    </View>
  )
}