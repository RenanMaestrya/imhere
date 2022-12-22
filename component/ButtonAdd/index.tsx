import { TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";

export function ButtonAdd(){

    function handleParticipantAdd(){
        console.log("Voce clicou no botao de add")
    }

    return(
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
            <Text style={styles.buttonText}>
                +
            </Text>
        </TouchableOpacity>
    )
}