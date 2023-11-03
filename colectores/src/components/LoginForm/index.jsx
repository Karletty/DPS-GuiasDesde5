import { Text, TextInput, TouchableOpacity, View, StyleSheet } from "react-native";
import { validateEmail } from "../../utils/validations";
import firebase from "../../utils/firebase"
import React, { useState } from "react";

const LoginForm = (props) => {
     const { changeForm } = props;
     const [formData, setFormData] = useState({ email: "", pass: "" });
     const [formError, setFormError] = useState({});

     const login = () => {
          let errors = {};

          if (!formData.email || !formData.pass) {
               if (!formData.email) errors.email = true;
               if (!formData.pass) errors.pass = true;
          } else if (!validateEmail(formData.email)) {
               errors.emailForm = true;
          } else {
               firebase
                    .auth()
                    .signInWithEmailAndPassword(formData.email, formData.pass)
                    .catch(() => {
                         setFormError({
                              credentials: true,
                         });
                    });
          }

          setFormError(errors);
     }

     const onChange = (e, type) => {
          setFormData({...formData, [type]: e.nativeEvent.text})
     }

     return (
          <View style={styles.container}>
               <Text style={styles.title}>Login</Text>
               <TextInput
                    style={[styles.input, (formError.email || formError.emailForm || formError.credentials) && styles.error]}
                    placeholder="Correo electronico"
                    placeholderTextColor="#969696"
                    onChange={(e) => onChange(e, "email")}
               />
               {formError.email && <Text style={styles.errorTxt}>Ingrese su email</Text>}
               {formError.emailForm && <Text style={styles.errorTxt}>Ingrese un email válido</Text>}
               <TextInput
                    style={[styles.input, (formError.pass || formError.credentials) && styles.error]}
                    placeholder="Contraseña"
                    placeholderTextColor="#969696"
                    secureTextEntry={true}
                    onChange={(e) => onChange(e, "pass")}
               />
               {formError.pass && <Text style={styles.errorTxt}>Ingrese su contraseña</Text>}
               {formError.credentials && <Text style={[styles.errorTxt, { marginTop: 20 }]}>Credenciales incorrectas</Text>}
               <TouchableOpacity style={styles.btn} onPress={login}>
                    <Text style={styles.btnText}>Iniciar sesión</Text>
               </TouchableOpacity>
               <TouchableOpacity style={styles.btn} onPress={changeForm}>
                    <Text style={styles.btnText}>Registrate</Text>
               </TouchableOpacity>
          </View>
     )
}

const styles = StyleSheet.create({
     container: {
          flexDirection: "column",
          alignItems: "center",
     },
     title: {
          fontSize: 30,
          marginBottom: 10,
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

export { LoginForm };