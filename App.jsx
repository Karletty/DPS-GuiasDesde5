import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native';
import { Formulario, Pais } from "./src/components"

const App = () => {
     const [busqueda, setBusqueda] = useState({
          pais: ""
     });
     const [consultar, setConsultar] = useState(false);
     const [resultado, setResultado] = useState({});

     const mostrarAlerta = () => {
          Alert.alert('Error', 'No hay resultado intenta con otra ciudad o país'),
               [{ Text: 'Ok' }];
     };

     useEffect(() => {
          const { pais } = busqueda;
          const consultarPais = async () => {
               if (consultar) {
                    const url = `https://servicodados.ibge.gov.br/api/v1/paises/${pais}`;
                    const urlBandera = `https://restcountries.com/v3.1/alpha/${pais}`;

                    try {
                         const respuesta = await fetch(url);
                         const respuestaBandera = await fetch(urlBandera);
                         const result = await respuesta.json();
                         const result1 = await respuestaBandera.json();

                         setResultado([result, result1]);
                         setConsultar(false);
                    } catch (error) {
                         mostrarAlerta();
                    }
               }
          }

          consultarPais();
     }, [consultar]);

     return (
          <>
               <StatusBar style="auto" />
               <View style={styles.app}>
                    <View style={styles.contenido}>
                         <Formulario
                              busqueda={busqueda}
                              setBusqueda={setBusqueda}
                              setConsultar={setConsultar} />
                         <Pais resultado={resultado} />
                    </View>
               </View>
          </>
     );
}

const styles = StyleSheet.create({
     app: {
          flex: 1,
          justifyContent: "center",
          backgroundColor: "#4091D8",
     },
     contenido: {
          margin: "2.5%",
     },
})

export default App;