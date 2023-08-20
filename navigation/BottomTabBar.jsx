import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "../Screen/Home";
import { Feather } from '@expo/vector-icons'; 
import AllCrypto from "../Screen/allCrypto";
import FavouriteCoin from "../Screen/FavouriteCoin";

const Tab = createBottomTabNavigator();

const BottomTabBar = ()=>{
    return (
        <Tab.Navigator screenOptions={{headerShown:false,tabBarActiveTintColor:"blue", tabBarInactiveTintColor:"black"}} 
        
        >
          <Tab.Screen name="Home" component={Home} options={{tabBarIcon: ({focused,color})=> (<Feather name="home" color="black" size={25} style={{marginTop:10}} />)}}/>
          <Tab.Screen name="Favourite Coins" component={FavouriteCoin} options={{tabBarIcon: ()=> (<Feather name="star" color="black" size={25} style={{marginTop:10}} />)}}/>

        </Tab.Navigator>
      );

}

export default BottomTabBar;