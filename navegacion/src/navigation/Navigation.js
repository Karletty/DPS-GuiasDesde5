import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AboutStack, ContactStack, HomeStack } from "./Stacks";
import { About, Contact, Home } from "../screens"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Navigation = () => {
     return (
          <Tab.Navigator>
               <Tab.Screen name="home" component={Home} options={{ title: "Home" }} />
               <Tab.Screen name="about" component={About} options={{ title: "About" }} />
               <Tab.Screen name="contact" component={Contact} options={{ title: "Contact" }} />
          </Tab.Navigator>
     );
}

export { Navigation };