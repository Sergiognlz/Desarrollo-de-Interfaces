import { Text, TouchableOpacity } from "react-native";
import { PersonaUIModel } from "../../Models/PersonaUIModel";

interface Props {
  persona: PersonaUIModel;
  onPress: () => void;
}

export const PersonaListItem = ({ persona, onPress }: Props) => (
  <TouchableOpacity onPress={onPress}>
    <Text>{persona.nombreCompleto} - {persona.edad} años</Text>
  </TouchableOpacity>
);
