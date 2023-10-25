import React, { useEffect, useState } from "react";
import { ScrollView, View, Text, Image, StyleSheet } from "react-native";

const apiKey = "live_jD8S9KqBt6TIX1uITA4hmzXq9lc3nT36HvIaOW1W6VbCsLPW9Agd4bdEby2TGjXf";
const apiURL = "https://api.thecatapi.com/v1/images/search?limit=30"

const Cats = () => {
     const [catImages, setCatImages] = useState([]);

     useEffect(() => {
          fetch(apiURL, {
               method: "GET",
               headers: {
                    "x-api-key": apiKey
               }
          })
               .then(response => response.json())
               .then(data => {
                    setCatImages(data);
               })
               .catch(error => {
                    console.error("Error al hacer la solicitud", error);
               });
     }, []);

     return catImages.length ? (
          <ScrollView style={styles.container}>
               {catImages.map((cat, index) => (
                    <View style={styles.catContainer} key={index}>
                         <Image source={{ uri: cat.url }} style={styles.catImage} />
                         <View style={styles.catDescription}>
                              <Text style={styles.title}>Raza: </Text>
                              <Text>{cat.breeds[0]?.name || "Desconocida"}</Text>
                              <Text style={styles.title}>Grupo: </Text>
                              <Text>{cat.breeds[0]?.breed_group || "Desconocido"}</Text>
                              <Text style={styles.title}>Temperamento: </Text>
                              <Text>{cat.breeds[0]?.temperament || "Desconocido"}</Text>
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
     catContainer: {
          flexDirection: "row",
          marginBottom: 20,
          paddingHorizontal: 10,
          width: "100%"
     },
     catDescription: {
          marginLeft: 20,
          width: "40%"
     },
     catImage: {
          width: 200,
          height: 200,
          marginBottom: 10,
     },
});

export { Cats }