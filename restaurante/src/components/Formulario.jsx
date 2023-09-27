import React, { useState } from 'react';
import {
     Text, StyleSheet, View, TextInput, Button, TouchableHighlight, Alert, ScrollView
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from 'react-native-modal-datetime-picker';
import shortid from "react-id-generator";

const Formulario = ({ reservas, setReservas, setMostrarForm, setReservasStorage }) => {
     //variables para el formulario
     const [name, setName] = useState('');
     const [quantity, setQuantity] = useState('');
     const [section, setSection] = useState('');
     const [date, setFecha] = useState('');
     const [hour, setHour] = useState('');
     const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
     const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

     const showDatePicker = () => {
          setDatePickerVisibility(true);
     };

     const hideDatePicker = () => {
          setDatePickerVisibility(false);
     };

     const confirmFecha = date => {
          const opciones = { year: 'numeric', month: 'long', day: "2-digit" };
          setFecha(date.toLocaleDateString('es-ES', opciones));
          hideDatePicker();
     };

     // Muestra u oculta el Time Picker
     const showTimePicker = () => {
          setTimePickerVisibility(true);
     };

     const hideTimePicker = () => {
          setTimePickerVisibility(false);
     };

     const confirmHour = hour => {
          const opciones = { hour: 'numeric', minute: '2-digit', hour12: false };
          setHour(hour.toLocaleString('es-ES', opciones));
          hideTimePicker();
     };

     // Crear nueva reserva
     const crearNuevaReserva = () => {
          // Validar
          if (name.trim() === '' ||
               quantity.trim() === '' ||
               section.trim() === '' ||
               date.trim() === '' ||
               hour.trim() === '' ) {
               // Falla la validación
               mostrarAlerta();
               return;
          }

          // Crear una nueva reserva
          const reserva = { name, quantity, section, date, hour };
          reserva.id = shortid();
          // console.log(reserva);
          // Agregar al state
          const reservasNuevo = [...reservas, reserva];
          setReservas(reservasNuevo);

          // Pasar las nuevas reservas a storage
          setReservasStorage(JSON.stringify(reservasNuevo));
          // Ocultar el formulario
          setMostrarForm(false);
          // Resetear el formulario
          setQuantity('');
          setName('');
          setHour('');
          setFecha('');
          setSection('');
     }

     // Muestra la alerta si falla la validación
     const mostrarAlerta = () => {
          Alert.alert(
               'Error', // Titulo
               'Todos los campos son obligatorios', // mensaje
               [{
                    text: 'OK' // Arreglo de botones
               }]
          )
     }

     return (
          <>
               <ScrollView style={styles.formulario}>
                    <View>
                         <Text style={styles.label}>Nombre:</Text>
                         <TextInput
                              style={styles.input}
                              onChangeText={texto => setName(texto)}
                         />
                    </View>
                    <View>
                         <Text style={styles.label}>Cantidad de personas:</Text>
                         <TextInput
                              keyboardType='numeric'
                              style={styles.input}
                              onChangeText={texto => setQuantity(texto)}
                         />
                    </View>
                    <View>
                         <Text style={styles.label}>Tipo de sección:</Text>
                         <Picker
                              selectedValue={section}
                              style={styles.input}
                              onValueChange={(itemVal) => setSection(itemVal)}
                         >
                              <Picker.Item label="No fumadores" value="no-fumadores" />
                              <Picker.Item label="Fumadores" value="fumadores" />
                         </Picker>
                    </View>
                    <View>
                         <Text style={styles.label}>Fecha:</Text>
                         <Button title="Seleccionar Fecha" onPress={showDatePicker} />
                         <DateTimePicker
                              isVisible={isDatePickerVisible}
                              mode="date"
                              onConfirm={confirmFecha}
                              onCancel={hideDatePicker}
                              locale='es_ES'
                              headerTextIOS="Elige la fecha"
                              cancelTextIOS="Cancelar"
                              confirmTextIOS="Confirmar"
                         />
                         <Text>{date}</Text>
                    </View>
                    <View>
                         <Text style={styles.label}>Hora:</Text>
                         <Button title="Seleccionar Hora" onPress={showTimePicker} />
                         <DateTimePicker
                              isVisible={isTimePickerVisible}
                              mode="time"
                              onConfirm={confirmHour}
                              onCancel={hideTimePicker}
                              locale='es_ES'
                              headerTextIOS="Elige una Hora"
                              cancelTextIOS="Cancelar"
                              confirmTextIOS="Confirmar"
                         />
                         <Text>{hour}</Text>
                    </View>
                    <View>
                         <TouchableHighlight onPress={() => crearNuevaReserva()}
                              style={styles.btnSubmit}>
                              <Text style={styles.textoSubmit}>Crear Nueva Reserva</Text>
                         </TouchableHighlight>
                    </View>
               </ScrollView>
          </>
     );
}

const styles = StyleSheet.create({
     formulario: {
          backgroundColor: '#FFF',
          paddingHorizontal: 20,
          paddingVertical: 15,
          flex: 1
     },
     label: {
          fontWeight: 'bold',
          fontSize: 18,
          marginTop: 20
     },
     input: {
          marginTop: 10,
          height: 50,
          borderColor: '#e1e1e1',
          borderWidth: 1,
          borderStyle: 'solid'
     },
     btnSubmit: {
          padding: 10,
          backgroundColor: "#373F47",
          marginTop: 10,
          marginBottom: 30
     },
     textoSubmit: {
          color: '#FFF',
          fontWeight: 'bold',
          textAlign: 'center'
     }
});

export default Formulario;