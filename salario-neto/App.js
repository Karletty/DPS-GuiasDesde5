import React, { useState, useEffect } from 'react';
import {
     SafeAreaView,
     StatusBar,
     StyleSheet,
     Text,
} from 'react-native';
import Form from "./src/components/Forms";
import Result from './src/components/Result';
import Footer from './src/components/Footer';

export default function App() {
     const [employeeName, setEmployeeName] = useState(null);
     const [salary, setSalary] = useState(null);
     const [errorMsg, setErrorMsg] = useState("");

     const clean = () => {
          setErrorMsg(null);
          setSalary(null);
          setEmployeeName("");
     }

     const calculate = () => {
          let errors = [];
          console.log(employeeName, salary, "Hola");
          if (!employeeName) {
               errors.push("Debe ingresar el nombre del empleado");
          }
          if (!salary) {
               errors.push("Debe ingresar un salario");
          } else if (salary <= 0) {
               errors.push("Debe ingresar un salario válido");
          }
          setErrorMsg(errors.join(". "))
     }

     return (
          <>
               <StatusBar barStyle="light-content" />
               <SafeAreaView style={styles.Header}>
                    <Text style={styles.HeadApp}>Cotizador de Salario Neto</Text>
                    <Form setEmployeeName={setEmployeeName} setSalary={setSalary} />
               </SafeAreaView>
               <Result employeeName={employeeName} baseSalary={salary} errorMsg={errorMsg} />
               <Footer calculate={calculate} clean={clean} />
          </>
     );
}

const styles = StyleSheet.create({
     Header: {
          backgroundColor: "#cdb4db",
          height: 250,
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
          alignItems: "center"
     },
     HeadApp: {
          fontSize: 25,
          fontWeight: "bold",
          color: "#FFFFFF",
          marginTop: 15,
     }
});
