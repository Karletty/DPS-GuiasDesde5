import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Result(props) {
     const { employeeName, baseSalary, errorMsg } = props;
     return (
          <View style={styles.content}>
               {errorMsg?
                    (<View>
                         <Text style={styles.error}>{errorMsg}</Text>
                    </View>) :
                    employeeName && baseSalary > 0 && (<View style={styles.boxResult}>
                         <Text style={styles.title}>SALARIO NETO DE {`${employeeName}`}</Text>
                         <DataResult title="Salario Base:" value={`$${parseFloat(baseSalary).toFixed(2).replace('.', ',')}`} />
                         <DataResult title="Deducciones:" />
                         <DataResult title="ISS - 3%" value={`-$${(baseSalary * 0.03).toFixed(2).replace('.', ',')}`} />
                         <DataResult title="AFP - 4%" value={`-$${(baseSalary * 0.04).toFixed(2).replace('.', ',')}`} />
                         <DataResult title="Renta - 5%" value={`-$${(baseSalary * 0.05).toFixed(2).replace('.', ',')}`} />
                         <DataResult title="Salario Neto:" value={`$${(baseSalary * 0.88).toFixed(2).replace('.', ',')}`} />
                    </View>
                    )}
          </View>
     );
}

function DataResult(props) {
     const { title, value } = props;
     return (
          <View style={styles.value}>
               <Text>{title}</Text>
               <Text>{value}</Text>
          </View>
     );
}

const styles = StyleSheet.create({
     content: {
          marginHorizontal: 40,
     },
     boxResult: {
          padding: 30,
     },
     title: {
          fontSize: 25,
          textAlign: 'center',
          fontWeight: 'bold',
          marginBottom: 20,
     },
     value: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 20,
     },
     error: {
          textAlign: 'center',
          color: '#f00',
          fontWeight: 'bold',
          fontSize: 20,
     },
});