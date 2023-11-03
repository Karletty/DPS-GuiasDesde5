import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { LoginForm, RegisterForm } from "../../components";

const Auth = () => {
     const [isLogin, setIsLogin] = useState(true);

     const changeForm = () => {
          setIsLogin(prev => !prev);
     }

     return (
     <View style={styles.view}>
          {isLogin ?
               <LoginForm changeForm={changeForm} /> :
               <RegisterForm changeForm={changeForm} />}
     </View>)
}

const styles = StyleSheet.create({
     view: {
          flexDirection: "column",
          flex: 1,
          justifyContent: "center",
     },
});

export { Auth };