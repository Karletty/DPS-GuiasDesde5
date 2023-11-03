import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const AddColector = ({ navigation, route }) => {
     const user = route.params?.user;
     const db = route.params?.db;
     const [formData, setFormData] = useState({ title: "", description: "", value: "" });
     const [formError, setFormError] = useState({});

     const onChange = (e, type) => {
          setFormData(({ ...formData, [type]: e.nativeEvent.text }));
     }

     const onSubmit = () => {
          let errors = {};
          if (!formData.title || !formData.description || !formData.value) {
               if (!formData.title) errors.title = true;
               if (!formData.description) errors.description = true;
               if (!formData.value) errors.value = true;
          } else {
               const data = formData;
               db.collection(user.uid)
                    .add(data)
                    .then(() => {
                         setFormData({ title: "", description: "", value: "" });
                         navigation.setParams({
                              reloadData: true,
                         })
                    })
                    .catch(() => {
                         setFormError({
                              database: true,
                         })
                    })
          }

          setFormError(errors);
     }

     return (<View style={styles.container}>
          <Text style={styles.title}>Agregar colector</Text>
          <TextInput
               value={formData.title}
               style={[styles.input, formError.title && styles.error]}
               placeholder="Título"
               placeholderTextColor="#969696"
               onChange={(e) => onChange(e, 'title')}
          />
          {formError.title && <Text style={styles.errorTxt}>Ingrese un título</Text>}
          <TextInput
               value={formData.description}
               style={[styles.input, formError.description && styles.error]}
               placeholder="Descripción"
               placeholderTextColor="#969696"
               onChange={(e) => onChange(e, 'description')}
          />
          {formError.description && <Text style={styles.errorTxt}>Ingrese una descripción</Text>}
          <TextInput
               value={formData.value}
               style={[styles.input, formError.value && styles.error]}
               placeholder="ID"
               placeholderTextColor="#969696"
               onChange={(e) => onChange(e, 'value')}
          />
          {formError.value && <Text style={styles.errorTxt}>Ingrese un id</Text>}
          {formError.db && <Text style={styles.errorTxt}>Ocurrió un error</Text>}
          <TouchableOpacity style={styles.btn} onPress={onSubmit}>
               <Text style={styles.btnText}>Agregar</Text>
          </TouchableOpacity>
     </View>)
}

const styles = StyleSheet.create({
     container: {
          flexDirection: "column",
          alignItems: "center",
     },
     title: {
          fontSize: 30,
          marginBottom: 10,
          marginTop: 30,
     },
     input: {
          height: 50,
          color: '#000',
          width: '80%',
          marginTop: 25,
          paddingHorizontal: 20,
          borderRadius: 50,
          fontSize: 18,
          borderWidth: 1,
          borderColor: '#1e3040',
     },
     btn: {
          backgroundColor: "#2E5077",
          paddingVertical: 10,
          paddingHorizontal: 40,
          borderRadius: 20,
          marginTop: 20,
     },
     btnText: {
          color: '#fff',
          fontWeight: "bold",
          fontSize: 18,
     },
     error: {
          borderColor: '#940c0c',
     },
     errorTxt: {
          color: "#900000",
          fontSize: 14,
          fontWeight: "bold"
     }
});
export { AddColector }