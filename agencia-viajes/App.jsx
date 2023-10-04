import React, { useState } from 'react';
import { StyleSheet, View, Image, StatusBar, Text, ScrollView, Modal, Button, TouchableHighlight } from 'react-native';

const App = () => {
     const [modalVisibleToDo1, setModalVisibleToDo1] = useState(false);
     const [modalVisibleFood1, setModalVisibleFood1] = useState(false);
     const [modalVisibleRoute1, setModalVisibleRoute1] = useState(false);
     return (<>
          <StatusBar style="auto" />
          <ScrollView>
               <Modal
                    transparent={true}
                    animationType="slide"
                    visible={modalVisibleToDo1}
                    onRequestClose={() => {
                         alert("Modal has been closed.");
                    }}>
                    <View style={styles.viewModal}>
                         <View style={styles.modal}>
                              <Text style={styles.subtitle}>Ir a la playa</Text>
                              <Text style={styles.textModal}>El Salvador cuenta con hermosas playas a nivel de Centroamérica.</Text>
                              <Button title="Cerrar" onPress={() => { setModalVisibleToDo1(prev => !prev) }} />
                         </View>
                    </View>
               </Modal>
               <Modal
                    transparent={true}
                    animationType="slide"
                    visible={modalVisibleFood1}
                    onRequestClose={() => {
                         alert("Modal has been closed.");
                    }}>
                    <View style={styles.viewModal}>
                         <View style={styles.modal}>
                              <Text style={styles.subtitle}>Comer pupusas</Text>
                              <Text style={styles.textModal}>Las pupusas salvadoreñas son deliciosas debido a su combinación única de sabores y texturas. Están hechas con masa de maíz rellena de una variedad de ingredientes como queso, chicharrón (cerdo desmenuzado), frijoles, y más.
                              </Text>
                              <Text style={styles.textModal}>La masa se cocina a la perfección, creando una capa exterior crujiente mientras que el relleno se derrite en el interior, creando una armonía de sabores. Las pupusas suelen servirse con curtido (ensalada en vinagre) y salsa de tomate, que añaden un toque ácido y picante que complementa maravillosamente la suavidad de la masa y el relleno.</Text>
                              <Text style={styles.textModal}> Esta combinación de ingredientes y sabores hace que las pupusas salvadoreñas sean irresistiblemente deliciosas.</Text>
                              <Button title="Cerrar" onPress={() => { setModalVisibleFood1(prev => !prev) }} />
                         </View>
                    </View>
               </Modal>
               <Modal
                    transparent={true}
                    animationType="slide"
                    visible={modalVisibleRoute1}
                    onRequestClose={() => {
                         alert("Modal has been closed.");
                    }}>
                    <View style={styles.viewModal}>
                         <View style={styles.modal}>
                              <Text style={styles.subtitle}>Viajar en El Salvador</Text>
                              <Text style={styles.textModal}>Hacer una ruta turística en El Salvador es una experiencia única debido a su diversidad natural y cultural. Este pequeño país de América Central ofrece playas hermosas en el Pacífico, volcanes imponentes, selvas tropicales exuberantes y pueblos coloniales encantadores.</Text>
                              <Text style={styles.textModal}>Además, la cálida hospitalidad de su gente y la rica gastronomía, que incluye las famosas pupusas, son aspectos que hacen que una visita a El Salvador sea memorable. La combinación de belleza natural, historia y cultura hace que una ruta turística en El Salvador sea una experiencia enriquecedora y emocionante para los viajeros.</Text>
                              <Button title="Cerrar" onPress={() => { setModalVisibleRoute1(prev => !prev) }} />
                         </View>
                    </View>
               </Modal>
               <View style={{ flexDirection: "row" }}>
                    <Image
                         style={styles.banner}
                         source={require("./src/img/bg.jpg")} />
               </View>
               <View style={styles.container}>
                    <Text style={styles.title}>Qué hacer en El Salvador</Text>
                    <ScrollView horizontal>
                         <View>
                              <TouchableHighlight onPress={() => { setModalVisibleToDo1(prev => !prev) }}>
                                   <Image
                                        style={styles.city}
                                        source={require("./src/img/actividad1.jpg")} />
                              </TouchableHighlight>
                         </View>
                         <View>
                              <Image
                                   style={styles.city}
                                   source={require("./src/img/actividad2.jpg")} />
                         </View>
                         <View>
                              <Image
                                   style={styles.city}
                                   source={require("./src/img/actividad3.jpg")} />
                         </View>
                         <View>
                              <Image
                                   style={styles.city}
                                   source={require("./src/img/actividad4.jpg")} />
                         </View>
                         <View>
                              <Image
                                   style={styles.city}
                                   source={require("./src/img/actividad5.jpg")} />
                         </View>
                    </ScrollView>
               </View>
               <View style={styles.container}>
                    <Text style={styles.title}>Platillos Salvadoreños</Text>
                    <View>
                         <View>
                              <TouchableHighlight onPress={() => { setModalVisibleFood1(prev => !prev) }}>
                                   <Image
                                        style={styles.best}
                                        source={require("./src/img/mejores1.jpg")} />
                              </TouchableHighlight>
                         </View>
                         <View>
                              <Image
                                   style={styles.best}
                                   source={require("./src/img/mejores2.jpg")} />
                         </View>
                         <View>
                              <Image
                                   style={styles.best}
                                   source={require("./src/img/mejores3.jpg")} />
                         </View>
                    </View>
               </View>
               <View style={styles.container}>
                    <Text style={styles.title}>Rutas Turísticas</Text>
                    <View style={styles.list}>
                         <View style={styles.listItem}>
                              <TouchableHighlight onPress={() => { setModalVisibleRoute1(prev => !prev) }}>
                                   <Image
                                        style={styles.best}
                                        source={require("./src/img/ruta1.jpg")} />
                              </TouchableHighlight>
                         </View>
                         <View style={styles.listItem}>
                              <Image
                                   style={styles.best}
                                   source={require("./src/img/ruta2.jpg")} />
                         </View>
                         <View style={styles.listItem}>
                              <Image
                                   style={styles.best}
                                   source={require("./src/img/ruta3.jpg")} />
                         </View>
                         <View style={styles.listItem}>
                              <Image
                                   style={styles.best}
                                   source={require("./src/img/ruta4.jpg")} />
                         </View>
                    </View>
               </View>
          </ScrollView>
     </>)
};

const styles = StyleSheet.create({
     banner: {
          height: 250,
          flex: 1,
     },
     title: {
          fontWeight: "bold",
          fontSize: 24,
          marginVertical: 10,
     },
     container: {
          marginHorizontal: 10,
     },
     city: {
          width: 250,
          height: 300,
          marginRight: 10,
     },
     best: {
          width: "100%",
          height: 200,
          marginVertical: 5,
     },
     list: {
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
     },
     listItem: {
          flexBasis: "49%"
     },
     viewModal: {
          backgroundColor: "#000000aa",
          flex: 1,
     },
     modal: {
          backgroundColor: "#fff",
          margin: 50,
          padding: 40,
          borderRadius: 10,
          flex: 1,
     },
     subtitle: {
          fontWeight: "bold",
          fontSize: 14,
          justifyContent: "center",
          marginBottom: 15
     },
     textModal: {
          marginBottom: 20,
     }
});

export default App
