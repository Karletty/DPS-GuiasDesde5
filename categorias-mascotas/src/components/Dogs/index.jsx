import React, { useEffect, useState } from "react";
import { ScrollView, View, Text, Image, StyleSheet } from "react-native";

const apiKey = "live_5jIqHxokNpzVOrNNLX0kgGurYhAmH0RfgGyXOP2sGdmNgVjCkRhrG8iUymwIQ8Mh";
const apiURL = "https://api.thedogapi.com/v1/images/search?limit=30"

const Dogs = () => {
     const [dogImages, setDogImages] = useState([]);

     useEffect(() => {
          fetch(apiURL, {
               method: "GET",
               headers: {
                    "x-api-key": apiKey
               }
          })
               .then(response => response.json())
               .then(data => {
                    setDogImages(data);
               })
               .catch(error => {
                    console.error("Error al hacer la solicitud", error);
               });
     }, []);

     return dogImages.length ? (
          <ScrollView style={styles.container}>
               {dogImages.map((dog, index) => (
                    <View style={styles.dogContainer} key={index}>
                         <Image source={{ uri: dog.url }} style={styles.dogImage} />
                         <View style={styles.dogDescription}>

                              <Text style={styles.title}>Raza: </Text>
                              <Text>{dog.breeds[0]?.name || "Desconocida"}</Text>
                              <Text style={styles.title}>Grupo: </Text>
                              <Text>{dog.breeds[0]?.breed_group || "Desconocido"}</Text>
                              <Text style={styles.title}>Temperamento: </Text>
                              <Text>{dog.breeds[0]?.temperament || "Desconocido"}</Text>
                         </View>
                    </View>
               ))}
          </ScrollView>
     ) : <></>;
}

const styles = StyleSheet.create({
     container: {
          marginTop: 25,
          flex: 1,
     },
     title: {
          fontWeight: "bold",
     },
     dogContainer: {
          flexDirection: "row",
          marginBottom: 20,
          paddingHorizontal: 10,
          width: "100%"
     },
     dogDescription: {
          marginLeft: 20,
          width: "40%"
     },
     dogImage: {
          width: 200,
          height: 200,
          marginBottom: 10,
     },
});

export { Dogs }