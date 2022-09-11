import *as React from 'react'
import FeedScreen from '../screens/feedscreen'
import { NavigationContainer } from "@react-navigation/native"
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs"
import CreateStoryScreen from '../screens/createStoryscreen'
import { StyleSheet } from 'react-native'
import Ionicons from "react-native-vector-icons"
import { RFValue } from "react-native-responsive-fontsize"
const Tab = createMaterialBottomTabNavigator()

const BottomtabNavigator = () => {
  return (
    <Tab.Navigator
    barStyle = {styles.bottomTabStyle}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Feed') {
            iconName = focused
              ? 'book'
              : 'book-outline';
          } else if (route.name === 'CreateStory') {
            iconName = focused ? 'create' : 'create-outline';
          }
          return <Ionicons style = {styles.icons} name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Feed" component={FeedScreen} options={{ headerShown: false }} />
      <Tab.Screen name="CreateStory" component={CreateStoryScreen} options={{ headerShown: false }} />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  bottomTabStyle: { backgroundColor: "#2f345d", height: "8%", borderTopLeftRadius: 30, borderTopRightRadius: 30, overflow: "hidden", position: "absolute" }, icons: { width: RFValue(30), height: RFValue(30) }

})


export default BottomtabNavigator
