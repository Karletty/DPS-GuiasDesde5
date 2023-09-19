import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Footer(props) {
     const {calculate, clean} = props;
     return (
          <View style={styles.viewFooter}>
               <TouchableOpacity style={styles.button} onPress={calculate}>
                    <Text style={styles.text}>CALCULAR</Text>
               </TouchableOpacity>
               <TouchableOpacity style={styles.button} onPress={clean}>
                    <Text style={styles.text}>LIMPIAR</Text>
               </TouchableOpacity>
          </View>
     );
}
const styles = StyleSheet.create({
     viewFooter: {
          position: 'absolute',
          bottom: 0,
          width: '100%',
          backgroundColor: "#cdb4db",
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          alignItems: 'center',
          justifyContent: 'space-evenly',
     },
     button: {
          backgroundColor: "#cdb4db",
          padding: 16,
          borderRadius: 20,
          width: '45%',
     },
     text: {
          fontWeight: 'bold',
          fontSize: 18,
          color: '#fff',
          textAlign: 'center',
     },
});