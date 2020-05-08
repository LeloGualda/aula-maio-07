import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createStackNavigator } from "react-navigation-stack";

import Exemplo from "./Component/Exemplo";
import hora from "./helpers/hora";

const SettingsStack = createDrawerNavigator({
  SettingsList:{
    screen: Exemplo,
    navigationOptions:{
      headerTitle:"Setting"
    }
  }
})


const AuthStack = createSwitchNavigator({
  Landing: {
    screen: Exemplo,
    navigationOptions: {
      headerTitle: "Landing",
    },
  },
  Login: {
    screen: Exemplo,
    navigationOptions: {
      headerTitle: "Login",
    },
  },
  CreateAccount: {
    screen: Exemplo,
    navigationOptions: {
      headerTitle: "Sig in",
    },
  },
  MsgResetPass: {
    screen: Exemplo,
    navigationOptions: {
      headerTitle: "reset password",
    },
  },
  ResetPass: {
    screen: Exemplo,
    navigationOptions: {
      headerTitle: "reset password",
    },
  },
});

// const C = 
const MainTabs = createBottomTabNavigator({
  Feed: {
    screen: Exemplo,
    navigationOptions: {
      tabBarLabel:" Feed"
    }
  },
  Search: {
    screen: Exemplo,
    navigationOptions: {
      tabBarLabel:" Search"
    }
  }
})

const MainDrawer = createStackNavigator({
  MainTab: MainTabs,
  Settings: SettingsStack
})
export default createAppContainer(
  createSwitchNavigator({
    Loading: {
      screen: Exemplo,
    },
    Credenciais: {
      screen: AuthStack,
    },
    App: {
      screen: MainDrawer,
    },
  })  
);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
