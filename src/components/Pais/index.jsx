import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Card } from "react-native-elements";

const Pais = ({ resultado }) => {
     const [info, setInfo] = useState([]);
     const [nombre, setNombre] = useState();
     const [capital, setCapital] = useState();
     const [region, setRegion] = useState();
     const [medida, setMedida] = useState();
     const [lengua, setLengua] = useState([]);
     const [bandera, setBandera] = useState();

     useEffect(() => {
          if (resultado.length) {
               setInfo(resultado[0]);
               lengua.length = 0;
               Object.values(info).map(e => {
                    setNombre(e.nome.abreviado);
                    setCapital(e.governo.capital.nome);
                    setRegion(e.localizacao.regiao.nome);
                    setMedida(e.area.total * 1000);
                    setBandera(resultado[1][0].flags.png);

                    Object.values(e.linguas).map(l => {
                         lengua.push(l.nome);
                    });
               });
          }
     });

     return info.length ? (<Card>
          <Card.Title>{nombre}</Card.Title>
          <Card.Divider />
          <View style={styles.cardBody}>
               <View style={styles.w50}>
                    <Image source={{ uri: bandera }} style={styles.flag} />
               </View>
               <View style={styles.w50}>
                    <Text>Capital: {capital}</Text>
                    <Text>Region: {region}</Text>
                    <Text>Lengua: {lengua.toString()}</Text>
                    <Text>Medida: {medida}m²</Text>
               </View>
          </View>
     </Card>) : (<></>);
}

const styles = StyleSheet.create({
     cardBody: {
          flexDirection: "row",
          gap: 15
     },
     w50: {
          width: "50%",
          flex: 1
     },
     flag: {
          flex: 1
     }
})

export { Pais };