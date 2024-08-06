import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { fontSize, iconSizes, spacing } from '../constants/dimensions'
import Header from '../components/Header'
import FloatingPlayer from '../components/FloatingPlayer'
import ChannelCardWithCategory from '../components/ChannelCardWithCategory'
import { songsWithCategory } from '../data/songsWithCategory'
import { useTheme } from '@react-navigation/native'
import { useThemeStore } from '../store/themeStore'
import { DarkTheme } from '../theme/DarkTheme'
import { LightTheme } from '../theme/LightTheme'

const HomeScreen = () => {
  const {colors} = useTheme();
  const {isDarkMode, toggleAppTheme} = useThemeStore();

  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      <View style={[styles.header, {backgroundColor: colors.background}]}>
            <TouchableOpacity /*onPress={toggleDrawer}*/>
              <Feather name="menu" size={iconSizes.medium} color = {colors.iconPrimary} />
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleAppTheme}> 
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

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center', 
    //justifyContent: 'center' 
  },
  headingText: {
    fontSize: fontSize.xlarge,
    fontFamily: "Gilroy-Bold",
    paddingVertical: spacing.medium,
    paddingHorizontal: spacing.medium,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.medium,
    paddingTop: spacing.large,
    width: '100%'
  },
})