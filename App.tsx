import * as React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler'
import { Button, View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TrackPlayer, { Event } from 'react-native-track-player';
import Feather from "react-native-vector-icons/Feather";

import {colors} from "./src/constants/colors.js";
import Header from './src/components/Header.jsx';
import { fontSize, iconSizes, spacing } from './src/constants/dimensions.js';
import { fontFamilies } from './src/constants/fonts.js';

import ChannelCard from './src/components/ChannelCard.jsx';
import ChannelCardWithCategory from './src/components/ChannelCardWithCategory.jsx';
import FloatingPlayer from './src/components/FloatingPlayer.jsx';
import HomeScreen2 from "./src/screen/HomeScreen";
import LikeScreen from './src/screen/LikeScreen.jsx';
import PlayerScreen from './src/screen/PlayerScreen.jsx';
import DrawerNavigator from './src/navigation/DrawerNavigator.jsx';
import BottomTabNavigator from './src/navigation/TabNavigator.jsx';
import TabNavigator from './src/navigation/TabNavigator.jsx';
import { songsWithCategory } from './src/data/songsWithCategory.js';
import { useSetupPlayer } from './src/hooks/useSetupTrackPlayer.jsx';

//const navigation = useNavigation()

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
      <Text style = {{color: "white", alignItems: 'center', justifyContent: 'center'}}>Home Screen</Text>
      <Text style = {{color: "white", alignItems: 'center', justifyContent: 'center'}}>Count: {count}</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function ListScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
            <TouchableOpacity /*onPress={toggleDrawer}*/>
              <Feather name="menu" size={iconSizes.medium} color={colors.iconPrimary} />
            </TouchableOpacity>
            <TouchableOpacity> 
              <Feather name="search" size={iconSizes.medium} color={colors.iconPrimary} />
            </TouchableOpacity>
        </View>
      <FlatList 
      data = {songsWithCategory} 
      renderItem={ChannelCardWithCategory}
      //contentContainerStyle={{paddingBottom: 400}}
      />
      <FloatingPlayer />
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
      <Text style = {styles.headingText}> Recommended for you </Text>
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
      <Text style = {{color: "white", alignItems: 'center', justifyContent: 'center'}}>Settings Screen</Text>
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
    //alignItems: 'center', 
    //justifyContent: 'center' 
  },
  headingText: {
    fontSize: fontSize.xlarge,
    color: colors.textPrimary,
    fontFamily: "Gilroy-Bold",
    paddingVertical: spacing.medium,
    paddingHorizontal: spacing.medium,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.medium,
    paddingTop: spacing.large,
    backgroundColor: colors.background,
    width: '100%'
  },
})

/*<NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={SettingsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>*/

    export default function App() {
      
      /*React.useEffect(() => {
        setupPlayer();
      }, []);
      const setupPlayer = async () => {
        await TrackPlayer.setupPlayer();
        console.log('Track player setup done');
      }*/
     const onLoad = () => {
        console.log('Before useSetupPlayer: Track player setup loaded');
      }
      useSetupPlayer({onLoad});

      return (
        <GestureHandlerRootView style = {{flex: 1}}>
        <NavigationContainer>
        <Tab.Navigator screenOptions={{ tabBarStyle: {
            backgroundColor: colors.backgroundHeader,
          }, headerShown: false }}>
        <Tab.Screen name="Homepage" component={TestHomeStackNavigator} options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" color={colors.iconPrimary} size={20} />
          )
          }} />
        <Tab.Screen name="List" component={HomeStackNavigator} options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" color={colors.iconPrimary} size={20} />
          )
          }}/>
        <Tab.Screen name="Explore" component={LikeScreen} options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="map" color={colors.iconPrimary} size={20} />
          )
          }}/>
        <Tab.Screen name="Setting" component={PlayerScreen} options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="settings" color={colors.iconPrimary} size={20} />
          )
          }}/>
      </Tab.Navigator>
        </NavigationContainer>
        </GestureHandlerRootView>
      );
    }

    function TestHomeStackNavigator() {
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

    function HomeStackNavigator() {
      return (
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={ListScreen}
            //component={HomeScreen}
            options={({ navigation }) => ({
              headerShown: false,
              //headerTitle: (props) => <LogoTitle {...props} />,
              /*headerStyle: {
                backgroundColor: colors.backgroundHeader,
              },*/
            })}
          />
        </Stack.Navigator>
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