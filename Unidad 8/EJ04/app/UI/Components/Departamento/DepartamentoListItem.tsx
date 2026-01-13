import { Text, TouchableOpacity } from "react-native";
import { DepartamentoUIModel } from "../../Models/DepartamentoUIModel";

interface Props {
  departamento: DepartamentoUIModel;
  onPress: () => void;
}

export const DepartamentoListItem = ({ departamento, onPress }: Props) => (
  <TouchableOpacity onPress={onPress}>
    <Text>{departamento.nombre}</Text>
  </TouchableOpacity>
);
