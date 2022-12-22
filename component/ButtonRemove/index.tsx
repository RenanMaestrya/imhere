import { TouchableOpacity, Text } from "react-native";
import { styles } from './styles';

export function ButtonRemove(){

    return(
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>
                -
            </Text>
        </TouchableOpacity>
    )
}