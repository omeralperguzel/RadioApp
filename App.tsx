import * as React from 'react';
import 'react-native-gesture-handler'
import { Button, View, Text, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
//import TrackPlayer, { Event } from 'react-native-track-player';
import {colors} from "./src/constants/colors.js";
import Feather from "react-native-vector-icons/Feather";
import HomeScreen2 from "./src/screen/HomeScreen";

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
    <View style={styles.container}>
      <Text style = {{color: "white"}}>Home Screen</Text>
      <Text style = {{color: "white"}}>Count: {count}</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style = {{color: "white"}}>Details Screen</Text>
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
    <View style={styles.container}>
      <Text style = {{color: "white"}}>Profile Screen</Text>
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style = {{color: "white"}}>Settings Screen</Text>
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
      style={{ width: 40, height: 40, alignItems: 'center' }}
      source={require('./radioicon.png')}
    />
  );
}

/*const PlayerInfo = () => {
  const [trackTitle, setTrackTitle] = useState<string>();

  // do initial setup, set initial trackTitle..

  useTrackPlayerEvents([Event.PlaybackTrackChanged], async event => {
      if (event.type === Event.PlaybackTrackChanged && event.nextTrack != null) {
          const track = await TrackPlayer.getTrack(event.nextTrack);
          const {title} = track || {};
          setTrackTitle(title);
      }
  });

  return (
      <Text>{trackTitle}</Text>
  );
}*/

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const SettingsStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'center' 
  }
})

/*<NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={SettingsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>*/

    export default function App() {
      /*React.useEffect(() => {
        await TrackPlayer.setupPlayer();
        console.log('Track player setup done');
        });
      }*/
      return (
        <NavigationContainer>
          <Tab.Navigator screenOptions={{ tabBarStyle: {
                backgroundColor: colors.backgroundHeader,
              }, headerShown: false }}>
            <Tab.Screen name="Homepage" component={HomeStackNavigator} options={{
              tabBarIcon: ({ color, size }) => (
                <Feather name="home" color={colors.iconPrimary} size={20} />
              )
              }} />
            <Tab.Screen name="Explore" component={HomeScreen2} options={{
              tabBarIcon: ({ color, size }) => (
                <Feather name="map" color={colors.iconPrimary} size={20} />
              )
              }}/>
            <Tab.Screen name="Setting" component={SettingsStackNavigator} options={{
              tabBarIcon: ({ color, size }) => (
                <Feather name="settings" color={colors.iconPrimary} size={20} />
              )
              }}/>
          </Tab.Navigator>
        </NavigationContainer>
      );
    }
    
    function HomeStackNavigator() {
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
        </Stack.Navigator>
      );
    }
    
    function HomeDrawerNavigator() {
      //return null;
      return (
        <Drawer.Navigator initialRouteName="HomeContent">
          <Drawer.Screen name="HomeContent" component={HomeScreen} />
          <Drawer.Screen name="Notifications" component={SettingsScreen} />
        </Drawer.Navigator>
      );
    }
    
    function SettingsStackNavigator() {
      return (
        <SettingsStack.Navigator>
          <SettingsStack.Screen name="Settings" component={SettingsScreen} />
          <SettingsStack.Screen name="Profile" component={ProfileScreen} />
        </SettingsStack.Navigator>
      );
    }