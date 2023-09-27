import React, { useState, useEffect } from 'react';
import {
     Text, StyleSheet, View, FlatList, TouchableHighlight, TouchableWithoutFeedback,
     Keyboard
} from 'react-native';
import Reserva from "./src/components/Reserva"
import Formulario from './src/components/Formulario';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
     // definir el state de reservas
     const [reservas, setReservas] = useState([]);
     const [mostrarform, setMostrarForm] = useState(false);

     useEffect(() => {
          const obtenerReservasStorage = async () => {
               try {
                    const reservasStorage = await AsyncStorage.getItem('reservas');
                    if (reservasStorage) {
                         setReservas(JSON.parse(reservasStorage))
                    }
               } catch (error) {
                    console.log(error);
               }
          }
          obtenerReservasStorage();
     }, []);

     // Elimina los pacientes del state
     const eliminarPaciente = id => {
          const reservasFiltradas = reservas.filter(reserva => reserva.id !== id);
          setReservas(reservasFiltradas);
          setReservasStorage(JSON.stringify(reservasFiltradas));
     }
     // Muestra u oculta el Formulario
     const mostrarFormulario = () => {
          setMostrarForm(prev => !prev);
     }
     // Ocultar el teclado
     const cerrarTeclado = () => {
          Keyboard.dismiss();
     }
     // Almacenar las reservas en storage
     const setReservasStorage = async (reservasJSON) => {
          try {
               await AsyncStorage.setItem('reservas', reservasJSON);
          } catch (error) {
               console.log(error);
          }
     }
     return (
          <TouchableWithoutFeedback onPress={() => cerrarTeclado()}>
               <View style={styles.contenedor}>
                    <Text style={styles.titulo}>Administrador de Reservas de Restaurante</Text>
                    <View>
                         <TouchableHighlight onPress={mostrarFormulario}
                              style={styles.btnMostrarForm}>
                              <Text style={styles.textoMostrarForm}> {mostrarform ? 'Cancelar Crear Reserva' : 'Crear Nueva Reserva'} </Text>
                         </TouchableHighlight>
                    </View>
                    <View style={styles.contenido}>
                         {mostrarform ? (
                              <>
                                   <Text style={styles.titulo}>Crear Nueva Reserva</Text>
                                   <Formulario
                                        reservas={reservas}
                                        setReservas={setReservas}
                                        setMostrarForm={setMostrarForm}
                                        setReservasStorage={setReservasStorage}
                                   />
                              </>
                         ) : (
                              <>
                                   <Text style={styles.titulo}> {reservas.length > 0 ? 'Administra tus reservas' : 'No hay reservas, agrega una'} </Text>
                                   <FlatList
                                        style={styles.listado}
                                        data={reservas}
                                        renderItem={({ item }) => <Reserva item={item}
                                             eliminarPaciente={eliminarPaciente} />}
                                        keyExtractor={reserva => reserva.id}
                                   />
                              </>
                         )}
                    </View>
               </View>
          </TouchableWithoutFeedback>
     );
};
const styles = StyleSheet.create({
     contenedor: {
          backgroundColor: "#C3C9E9",
          flex: 1,
          paddingBottom: 40
     },
     titulo: {
          color: '#FFF',
          marginTop: 60,
          marginBottom: 20,
          fontSize: 24,
          fontWeight: 'bold',
          textAlign: 'center'
     },
     contenido: {
          flex: 1,
          marginHorizontal: '2.5%',
     },
     listado: {
          flex: 1,
     },
     btnMostrarForm: {
          padding: 10,
          backgroundColor: "#373F47",
          marginVertical: 10
     },
     textoMostrarForm: {
          color: '#AAABBC',
          fontWeight: 'bold',
          textAlign: 'center'
     }
});
export default App;