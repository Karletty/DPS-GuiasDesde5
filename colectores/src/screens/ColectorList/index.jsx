import React, { useEffect, useState } from "react";
import { StyleSheet, Text, ScrollView } from "react-native";
import { Colector } from "../../components/Colector"

const ColectorList = ({ navigation, route }) => {
     const user = route.params?.user;
     const db = route.params?.db;
     const reloadData = route.params?.reloadData;
     const [colectors, setColectors] = useState([]);

     const getCollectors = () => {
          setColectors([]);

          db.collection(user.uid)
               .orderBy("value", "asc")
               .get()
               .then((response) => {
                    const itemsArray = [];

                    response.forEach((doc) => {
                         const data = doc.data();
                         data.id = doc.id;
                         itemsArray.push(data);
                    });

                    setColectors(itemsArray);
               });

          navigation.setParams({
               reloadData: false,
          });
     }

     useEffect(() => {
          getCollectors();
     }, [reloadData])

     return (<ScrollView style={styles.container}>
          <Text style={styles.title}>Lista de colectores</Text>
          {colectors.map((colector) => {
               return (
                    <Colector key={colector.id} title={colector.title} description={colector.description} value={colector.value} />
               )
          })}
     </ScrollView>)
}

const styles = StyleSheet.create({
     container: {
          flexDirection: "column",
          paddingHorizontal: 20
     },
     title: {
          fontSize: 30,
          marginBottom: 10,
          marginTop: 30,
     }
});

export { ColectorList }