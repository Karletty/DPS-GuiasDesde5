import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableWithoutFeedback, Animated, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const Formulario = ({ busqueda, setBusqueda, setConsultar }) => {
     const { pais } = busqueda;
     const [animacionBoton] = useState(new Animated.Value(1));

     const consultarPais = () => {
          if (pais.trim() === "") {
               mostrarAlerta();
               return;
          }

          setConsultar(true);
     }

     const mostrarAlerta = () => {
          Alert.alert("Error", "Debe seleccionar un país", [{ Text: "Entendido" }]);
     }

     const animacionEntrada = () => {
          Animated.spring(animacionBoton, {
               toValue: 1.5,
               useNativeDriver: true
          }).start();
     }

     const animacionSalida = () => {
          Animated.spring(animacionBoton, {
               toValue: 1,
               useNativeDriver: true
          }).start();
     }


     const estiloAnimacion = {
          transform: [{
               scale: animacionBoton
          }]
     }

     return (
          <>
               <StatusBar style="auto" />
               <View>
                    <View>
                         <Text style={styles.input}>Pais</Text>
                    </View>
                    <View>
                         <Picker
                              selectedValue={pais}
                              onValueChange={pais => setBusqueda({ ...busqueda, pais })}
                              style={styles.itempais}>
                              <Picker.Item label="--seleccione un país--" value="" />
                              <Picker.Item label="Canada" value="ca" />
                              <Picker.Item label="El Salvador" value="sv" />
                              <Picker.Item label="Guatemala" value="gt" />
                              <Picker.Item label="Honduras" value="hn" />
                              <Picker.Item label="Nicaragua" value="ni" />
                              <Picker.Item label="Panamá" value="pa" />
                              <Picker.Item label="Costa Rica" value="cr" />
                              <Picker.Item label="México" value="mx" />
                              <Picker.Item label="Argentina" value="ar" />
                              <Picker.Item label="Estados Unidos" value="us" />
                              <Picker.Item label="Colombia" value="co" />
                              <Picker.Item label="España" value="es" />
                              <Picker.Item label="Perú" value="pe" />
                         </Picker>
                    </View>
                    <TouchableWithoutFeedback
                         onPress={consultarPais}
                         onPressIn={animacionEntrada}
                         onPressOut={animacionSalida}>
                         <Animated.View style={[styles.btnBuscar, estiloAnimacion]}>
                              <Text style={styles.textoBuscar}>Buscar País</Text>
                         </Animated.View>
                    </TouchableWithoutFeedback>
               </View>
          </>
     );
}

const styles = StyleSheet.create({
     input: {
          padding: 10,
          height: 50,
          fontSize: 20,
          marginBottom: 20,
          textAlign: "center",
          color: "#000",
     },
     itempais: {
          height: 60,
          backgroundColor: "#fff",
     },
     btnBuscar: {
          marginTop: 50,
          height: 50,
          backgroundColor: "#000",
          fontSize: 20,
          marginBottom: 20,
          textAlign: "center",
     },
     textoBuscar: {
          color: "#fff",
          fontWeight: "bold",
          textTransform: "uppercase",
          textAlign: "center",
          fontSize: 18,
     },
});

export { Formulario }