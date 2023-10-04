import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Button, Modal, FlatList } from 'react-native';
import { Card, ListItem } from './src/components';

const App = () => {
     const [modalVisible, setModalVisible] = useState(false);
     return (
          <>
               <StatusBar style="auto" />
               <ScrollView>
                    <Modal
                         transparent={true}
                         animationType="slide"
                         visible={modalVisible}
                         onRequestClose={() => {
                              alert("Modal has been closed.");
                         }}>
                         <View style={styles.viewModal}>
                              <View style={styles.modal}>
                                   <Text style={styles.title}>Actividades a realizar en los alrededores</Text>
                                   <ScrollView style={{marginBottom: 30}}>
                                        <ListItem
                                             details="En Playa San Marcelino, puedes probar la deliciosa comida local. Hay muchos restaurantes y puestos de comida en la playa que ofrecen mariscos frescos y platos típicos salvadoreños. Puedes probar el ceviche, los camarones al ajillo, el pescado frito y muchas otras delicias locales."
                                             key={0}
                                             title="Probar la comida local"
                                             imgSrc={require("./src/img/comidaLocal.jpg")} />
                                        <ListItem
                                             details="Playa San Marcelino está rodeada de naturaleza. Puedes caminar por los senderos cercanos y explorar la flora y fauna local. También puedes visitar el Parque Nacional El Imposible, que se encuentra a pocos kilómetros de distancia. El parque es el hogar de muchas especies de animales y plantas y cuenta con hermosas cascadas y senderos para caminar."
                                             key={1}
                                             title="Explorar la naturaleza"
                                             imgSrc={require("./src/img/parqueNacionalImposible.jpeg")} />
                                        <ListItem
                                             details="Si te gusta la adrenalina, Playa San Marcelino es el lugar perfecto para practicar deportes acuáticos. Puedes alquilar una tabla de surf y surfear en las olas o alquilar un kayak y remar en el mar. También puedes practicar el snorkel y explorar la vida marina local."
                                             key={2}
                                             title="Practicar deportes acuáticos"
                                             imgSrc={require("./src/img/surf.jpeg")} />
                                   </ScrollView>
                                   <Button title="Cerrar" onPress={() => { setModalVisible(prev => !prev) }} />
                              </View>
                         </View>
                    </Modal>
                    <View style={{ flexDirection: "row" }}>
                         <Image style={styles.banner} source={require("./src/img/banner.jpg")} />
                    </View>
                    <View style={styles.container}>
                         <Text style={styles.title}>Hotel El Salvador</Text>
                         <Button onPress={() => setModalVisible(prev => !prev)} title="Actividades cercanas que realizar" />
                    </View>
                    <View style={styles.container}>
                         <Text style={styles.subtitle}>Servicios básicos</Text>
                         <ScrollView horizontal>
                              <Card title="Desayuno" imgSrc={require("./src/img/desayuno.webp")} />
                              <Card title="Almuerzo" imgSrc={require("./src/img/almuerzo.webp")} />
                              <Card title="Cena" imgSrc={require("./src/img/cena.webp")} />
                         </ScrollView>
                    </View>
                    <View style={styles.container}>
                         <Text style={styles.subtitle}>Instalaciones y servicios adicionales</Text>
                         <ScrollView horizontal>
                              <Card title="Somos Pet-Friendly" imgSrc={require("./src/img/petFriendly.webp")} />
                              <Card title="Acceso anticipado a las instalaciones" imgSrc={require("./src/img/accesoAnticipado.webp")} />
                              <Card title="Salida tardía de las instalaciones" imgSrc={require("./src/img/salidaTardia.webp")} />
                              <Card title="Translado al aeropuerto" imgSrc={require("./src/img/translado.jpeg")} />
                         </ScrollView>
                    </View>
                    <View style={styles.container}>
                         <Text style={styles.subtitle}>Habitaciones</Text>
                         <ScrollView horizontal>
                              <Card title="Habitación Superior" imgSrc={require("./src/img/superior.webp")} />
                              <Card title="Habitación Superior con Terraza Privada" imgSrc={require("./src/img/superiorTerraza.webp")} />
                              <Card title="Habitación en Segunda Planta con Balcón" imgSrc={require("./src/img/segundaPlantaBalcon.webp")} />
                         </ScrollView>
                    </View>
               </ScrollView>
          </>
     );
}

const styles = StyleSheet.create({
     container: {
          flex: 1,
          backgroundColor: '#fff',
          paddingVertical: 10,
          paddingHorizontal: 20,
     },
     banner: {
          height: 200,
          flex: 1,
     },
     title: {
          fontSize: 25,
          fontWeight: "bold",
          marginBottom: 20,
          textAlign: "center",
     },
     subtitle: {
          fontSize: 20,
          fontWeight: "bold",
          marginBottom: 15,
     },
     viewModal: {
          backgroundColor: "#000000aa",
          flex: 1,
     },
     modal: {
          backgroundColor: "#fff",
          marginVertical: 50,
          marginHorizontal: 30,
          padding: 40,
          borderRadius: 10,
          flex: 1,
     },
});

export default App;
