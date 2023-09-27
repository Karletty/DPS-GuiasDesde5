import React from 'react';
import { Text, StyleSheet, View, TouchableHighlight } from 'react-native';

const Reserva = ({ item, eliminarPaciente }) => {
     const dialogoEliminar = id => {
          console.log('eliminando....', id);
          eliminarPaciente(id);
     }

     return (
          <View style={styles.reserva}>
               <View>
                    <Text style={styles.label}>Nombre: </Text>
                    <Text style={styles.texto}>{item.name}</Text>
               </View>
               <View>
                    <Text style={styles.label}>Fecha y hora: </Text>
                    <Text style={styles.texto}>{item.date} - {item.hour}</Text>
               </View>
               <View>
                    <Text style={styles.label}>Cantidad de personas: </Text>
                    <Text style={styles.texto}>{item.quantity}</Text>
               </View>
               <View>
                    <Text style={styles.label}>Tipo de sección: </Text>
                    <Text style={styles.texto}>{item.section}</Text>
               </View>
               <View>
                    <TouchableHighlight onPress={() => dialogoEliminar(item.id)}
                         style={styles.btnEliminar}>
                         <Text style={styles.textoEliminar}> Eliminar &times; </Text>
                    </TouchableHighlight>
               </View>
          </View>
     );
}

const styles = StyleSheet.create({
     reserva: {
          backgroundColor: '#FFF',
          borderBottomColor: '#e1e1e1',
          borderStyle: 'solid',
          borderBottomWidth: 1,
          paddingVertical: 20,
          paddingHorizontal: 10
     },
     label: {
          fontWeight: 'bold',
          fontSize: 18,
          marginTop: 20
     },
     texto: {
          fontSize: 18,
     },
     btnEliminar: {
          padding: 10,
          backgroundColor: 'red',
          marginVertical: 10
     },
     textoEliminar: {
          color: '#FFF',
          fontWeight: 'bold',
          textAlign: 'center'
     }
});

export default Reserva;