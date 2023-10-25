import * as React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Navigation } from "./src/navigation/Navigation";

const App = () => {
     return (
          <NavigationContainer>
               <Navigation></Navigation>
          </NavigationContainer>
     );
}

export default App;