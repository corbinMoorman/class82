import *as React from "react"
import BottomtabNavigator from "./bottomTabNav"
import {createDrawerNavigator} from "@react-navigation/drawer"

const Drawer = createDrawerNavigator()

const DrawerNavigator = () =>{
    return (
        <Drawer.Navigator>
            <Drawer.Screen name = "home" component={BottomTabNavigator}/>
        </Drawer.Navigator>
    )
}

export default DrawerNavigator