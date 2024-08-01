import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

import HomeScreen from '../screen/HomeScreen'
import DetailsScreen from '../../App'
import PlayerScreen from '../screen/PlayerScreen'
import LikeScreen from '../screen/LikeScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

const DrawerStackNavigation = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
            <Stack.Screen name="Player" component={PlayerScreen} />
            <Stack.Screen name="Like" component={LikeScreen} />
        </Stack.Navigator>
    )
}

/*const TestHomeStackNavigator = () => {
    return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          //component={HomeScreen}
          options={({ navigation }) => ({
            headerTitle: (props) => <LogoTitle {...props} />,
            headerRight: () => <Button title="Update count" />,
            headerStyle: {
              backgroundColor: colors.backgroundHeader,
            },
          })}
        />
        <Stack.Screen 
          name="Details" 
          component={DetailsScreen} 
          options={{
            headerBackTitle: 'Custom Back',
            headerBackTitleStyle: { fontSize: 30 },
          }}
        />
        <Stack.Screen 
          name="PlayerScreen" 
          component={PlayerScreen} 
          options={{
            headerBackTitle: 'Custom Back',
            headerBackTitleStyle: { fontSize: 30 },
          }}
        />
      </Stack.Navigator>

    );
  }

  const HomeStackNavigator = () => {
    return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={ListScreen}
          //component={HomeScreen}
          options={({ navigation }) => ({
            headerTitle: (props) => <LogoTitle {...props} />,
            headerStyle: {
              backgroundColor: colors.backgroundHeader,
            },
          })}
        />
      </Stack.Navigator>
    );
  }
  
  const SettingsStackNavigator = () => {
    return (
      <SettingsStack.Navigator>
        <SettingsStack.Screen name="Settings" component={SettingsScreen} />
        <SettingsStack.Screen name="Profile" component={ProfileScreen} />
      </SettingsStack.Navigator>
    );
  }*/

export default DrawerStackNavigation
//export default {DrawerStackNavigation, TestHomeStackNavigator, HomeStackNavigator, SettingsStackNavigator}

const styles = StyleSheet.create({})