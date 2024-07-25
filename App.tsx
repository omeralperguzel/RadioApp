import * as React from 'react';
import { Button, View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

function HomeScreen({ navigation }) {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    // Use `setOptions` to update the button that we previously specified
    // Now the button includes an `onPress` handler to update the count
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => setCount((c) => c + 1)} title="Update count" />
      ),
    });
  }, [navigation]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Text>Count: {count}</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details')}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen</Text>
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Settings Screen</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
}

function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50, alignItems: 'center' }}
      source={require('./radioicon.png')}
    />
  );
}

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const SettingsStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

/*<NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={SettingsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>*/

    export default function App() {
      return (
        <NavigationContainer>
          <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Homepage" component={HomeStackNavigator} />
            <Tab.Screen name="Setting" component={SettingsStackNavigator} />
          </Tab.Navigator>
        </NavigationContainer>
      );
    }
    
    function HomeStackNavigator() {
      return (
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            //component={HomeDrawerNavigator}
            component={HomeScreen}
            options={({ navigation }) => ({
              headerTitle: (props) => <LogoTitle {...props} />,
              headerRight: () => <Button title="Update count" />,
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
        </Stack.Navigator>
      );
    }
    
    function HomeDrawerNavigator() {
      return null;
      /*return (
        <Drawer.Navigator initialRouteName="HomeContent">
          <Drawer.Screen name="HomeContent" component={HomeScreen} />
          <Drawer.Screen name="Notifications" component={SettingsScreen} />
        </Drawer.Navigator>
      );*/
    }
    
    function SettingsStackNavigator() {
      return (
        <SettingsStack.Navigator>
          <SettingsStack.Screen name="Settings" component={SettingsScreen} />
          <SettingsStack.Screen name="Profile" component={ProfileScreen} />
        </SettingsStack.Navigator>
      );
    }
