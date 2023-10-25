import React from "react";
import { Dogs, Cats } from "../components";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Image } from "react-native";

const Tab = createBottomTabNavigator();

const Navigation = () => {
     return (<Tab.Navigator>
          <Tab.Screen name="cats" component={Cats} options={{
               title: "Cats", tabBarIcon: ({ focused, color, size }) => {
                    return (<Image source={require("../images/gato.png")} style={{ width: size, height: size }} />)
               }
          }} />
          <Tab.Screen name="dogs" component={Dogs} options={{
               title: "Dogs", tabBarIcon: ({ focused, color, size }) => {
                    return (<Image source={require("../images/perro.png")} style={{ width: size, height: size }} />)
               }
          }} />
     </Tab.Navigator>);
}

export { Navigation }