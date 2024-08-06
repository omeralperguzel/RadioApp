import * as React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler'
import { Button, View, Text, Image, StyleSheet, FlatList, TouchableOpacity, useColorScheme } from 'react-native';
import { NavigationContainer, useNavigation, useTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TrackPlayer, { Event } from 'react-native-track-player';
import Feather from "react-native-vector-icons/Feather";

import Header from './src/components/Header.jsx';
import { fontSize, iconSizes, spacing } from './src/constants/dimensions.js';
import { fontFamilies } from './src/constants/fonts.js';
import { colors } from './src/constants/colors.js';

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
import useLikeSongs from './src/store/likeStore.jsx';
import { DarkTheme } from './src/theme/DarkTheme.jsx';
import { LightTheme } from './src/theme/LightTheme.jsx';
import { useThemeStore } from './src/store/themeStore.jsx';

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

function ListScreen() {
  
  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      <View style={[styles.header, {backgroundColor: colors.background}]}>
            <TouchableOpacity /*onPress={toggleDrawer}*/>
              <Feather name="menu" size={iconSizes.medium} color={colors.iconPrimary} />
            </TouchableOpacity>
            <TouchableOpacity> 
              <Feather name="search" size={iconSizes.medium} color={colors.iconPrimary} />
            </TouchableOpacity>
        </View>
      <FlatList 
      data = {songsWithCategory} 
      renderItem={({item}) => <ChannelCardWithCategory item = {item}/>}
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

      const scheme = useColorScheme();

      const {isDarkMode, toggleAppTheme} = useThemeStore((state) => state);
      const {loadLikeSongs} = useLikeSongs();

      var BottomBarBackgroundColor = colors.backgroundHeaderLight;
      var BottomBarIconColor = colors.iconPrimaryLight
      if (isDarkMode == true) {
        BottomBarBackgroundColor = colors.backgroundHeaderDark;
        BottomBarIconColor = colors.iconPrimary;
      }
      else if (isDarkMode == false) {
        BottomBarBackgroundColor = colors.backgroundHeaderLight;
        BottomBarIconColor = colors.iconPrimaryLight;
      }

      React.useEffect(() => {
        loadLikeSongs();
        scheme === "light" ? toggleAppTheme(false) : toggleAppTheme(true);
      }, [scheme])

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
        <NavigationContainer theme={isDarkMode ? DarkTheme : LightTheme}>
        <Tab.Navigator screenOptions={{ tabBarStyle: {backgroundColor: BottomBarBackgroundColor,
          }, headerShown: false }}>
        <Tab.Screen name="Main" component={HomeStackNavigator} options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" color={BottomBarIconColor} size={20} />
          )
          }} />
        <Tab.Screen name="List" component={LikeScreen} options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="heart" color={BottomBarIconColor} size={20} />
          )
          }}/>
        <Tab.Screen name="Explore" component={TestHomeStackNavigator} options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="map" color={BottomBarIconColor} size={20} />
          )
          }}/>
        <Tab.Screen name="Setting" component={PlayerScreen} options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="settings" color={BottomBarIconColor} size={20} />
          )
          }}/>
      </Tab.Navigator>
        </NavigationContainer>
        </GestureHandlerRootView>
      );
    }

    function TestHomeStackNavigator() {

      return (
        <Stack.Navigator initialRouteName="Test">
          <Stack.Screen
            name="Test"
            component={HomeScreen}
            //component={HomeScreen}
            options={({ navigation }) => ({
              //headerTitle: (props) => <LogoTitle {...props} />,
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

    function HomeStackNavigator() {
      return (
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            //component={ListScreen}
            component={HomeScreen2}
            options={({ navigation }) => ({
              headerShown: false,
              //headerTitle: (props) => <LogoTitle {...props} />,
              /*headerStyle: {
                backgroundColor: colors.backgroundHeader,
              },*/
            })}
          />
          <Stack.Screen 
            name="PlayerScreen" 
            component={PlayerScreen} 
            options={({ navigation }) => ({
              headerShown: false,
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