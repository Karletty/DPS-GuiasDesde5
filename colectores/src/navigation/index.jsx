import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AddColector, ColectorList } from "../screens";
import firebase from '../utils/firebase';
import 'firebase/compat/firestore';

const db = firebase.firestore(firebase);
const Tab = createBottomTabNavigator();

const Navigation = (props) => {
     const { user } = props;
     const [reloadData, setReloadData] = useState(false);

     return (<Tab.Navigator>
          <Tab.Screen name="add" component={AddColector} options={{ title: "AddScreen" }} initialParams={{ user, db }} />
          <Tab.Screen name="list" component={ColectorList} options={{ title: "ListScreen" }} initialParams={{ user, db, reloadData }} />
     </Tab.Navigator>);
}

export { Navigation };