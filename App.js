import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Primary from "./src/pages/Primary";
import Secondary from "./src/pages/Secondary";

import UserProvider from "./src/context/Provider";

const Tab = createBottomTabNavigator();

const Router = () => {
  return (
    <UserProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Primary" component={Primary} />
          <Tab.Screen name="Secondary" component={Secondary} />
        </Tab.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
};

export default Router;
