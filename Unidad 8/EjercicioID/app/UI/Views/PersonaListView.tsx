import { observer } from "mobx-react-lite";
import React from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { PersonasViewModel } from "../ViewModels/PersonasViewModel";

const personaVM = new PersonasViewModel();

export const PersonaListView = observer(() => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Lista de Personas</Text>

            <FlatList
                data={personaVM.personas}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.item}
                        onPress={() => personaVM.selectPersona(item)}
                    >
                        <Text>{item.nombre} {item.apellidos}</Text>
                    </TouchableOpacity>
                )}
            />

            {personaVM.selectedPersona && (
                <View style={styles.selected}>
                    <Text>Persona seleccionada:</Text>
                    <Text style={styles.selectedName}>
                        {personaVM.selectedPersona.nombre} {personaVM.selectedPersona.apellidos}
                    </Text>
                </View>
            )}
        </View>
    );
});

export default PersonaListView;

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16 },
    title: { fontSize: 20, fontWeight: "bold", marginBottom: 16 },
    item: { padding: 12, borderBottomWidth: 1, borderColor: "#ccc" },
    selected: { marginTop: 24, padding: 12, backgroundColor: "#e0f7fa", borderRadius: 8 },
    selectedName: { fontSize: 16, fontWeight: "bold" },
});
