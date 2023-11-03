import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, StatusBar, LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import "firebase/compat/auth";
import firebase from './src/utils/firebase';
import { Auth } from "./src/screens";
import { Navigation } from "./src/navigation";

LogBox.ignoreAllLogs(['Setting a timer']);

export default function App() {
     const [user, setUser] = useState(undefined);

     useEffect(() => {
          firebase.auth().onAuthStateChanged((response) => {
               setUser(response);
          });
     }, []);

     if (user === undefined) return null;
     return (
          <>
               <StatusBar barStyle="light-content" />
               <SafeAreaView style={styles.background}>
                    {user ?
                         <NavigationContainer style={styles.background}>
                              <Navigation user={user} />
                         </NavigationContainer> :
                         <Auth />}
               </SafeAreaView>
          </>
     );
}

const styles = StyleSheet.create({
     background: {
          height: '100%',
     },
});
