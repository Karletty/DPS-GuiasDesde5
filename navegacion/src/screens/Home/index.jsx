import React from "react";
import { View, Text, Button } from "react-native";

const Home = (props) => {
     const { navigation } = props;

     return (<View>
          <Text>Estamos en Home</Text>
          <Button title="Ir a About" onPress={() => navigation.navigate("about")} />
     </View>);
}

export { Home }