import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../../../screens";

const Stack = createStackNavigator();

const HomeStack = () => {
     return (
          <Stack.Navigator>
               <Stack.Screen name="home" component={Home} options={{ title: "Home" }} />
          </Stack.Navigator>
     );
}

export { HomeStack }