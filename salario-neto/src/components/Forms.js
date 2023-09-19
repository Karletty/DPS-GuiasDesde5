import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

export default function Form(props) {
     const { setEmployeeName, setSalary } = props
     return (
          <View style={styles.viewForm}>
               <View style={styles.viewInputs}>
                    <TextInput
                         placeholder="Nombre del empleado"
                         keyboardType="default"
                         style={styles.input}
                         onChange={(e) => setEmployeeName(e.nativeEvent.text)}
                    />
                    <TextInput
                         placeholder="Salario base ($)"
                         keyboardType="numeric"
                         style={[styles.input]}
                         onChange={(e) => setSalary(e.nativeEvent.text)}
                    />
               </View>
          </View>
     );
}

const styles = StyleSheet.create({
     viewForm: {
          position: 'absolute',
          bottom: 0,
          width: '95%',
          paddingHorizontal: 50,
          borderRadius: 30,
          height: 180,
          justifyContent: 'center',
     },
     viewInputs: {
          flexDirection: 'column',
     },
     input: {
          height: 50,
          backgroundColor: '#fff',
          borderWidth: 1,
          borderColor: "#cdb4db",
          borderRadius: 5,
          width: '100%',
          margin: 5,
          marginBottom: 10,
          color: '#000',
          paddingHorizontal: 20,
     },
});
const picketSelectStyles = StyleSheet.create({
     inputIOS: {
          fontSize: 16,
          paddingVertical: 12,
          paddingHorizontal: 10,
          borderWidth: 1,
          borderColor: 'grey',
          borderRadius: 4,
          color: 'black',
          paddingRight: 30,
          backgroundColor: '#fff',
          marginLeft: -5,
          marginRight: -5,
     },
     inputAndroid: {
          fontSize: 16,
          paddingHorizontal: 10,
          paddingVertical: 8,
          borderWidth: 0.5,
          borderColor: 'grey',
          borderRadius: 8,
          color: 'black',
          paddingRight: 30,
          backgroundColor: '#fff',
     },
});