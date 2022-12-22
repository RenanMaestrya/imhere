import { View, Text } from "react-native";
import { ButtonRemove } from "../ButtonRemove";
import { styles } from "./styles";

type Props = {
    name: string;
}

export function Participant({ name }: Props){
    return(
        <View style={styles.container}>
            <Text style={styles.name}>
                {name}
            </Text>
            <ButtonRemove/>
        </View>

    )
}