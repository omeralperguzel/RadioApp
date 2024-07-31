import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import {colors} from "../constants/colors"
import Feather from 'react-native-vector-icons/Feather'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { iconSizes, spacing } from '../constants/dimensions'
import Header from '../components/Header'
import FloatingPlayer from '../components/FloatingPlayer'
import ChannelCardWithCategory from '../components/ChannelCardWithCategory'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList 
      data = {[1,2,3,4,5]} 
      renderItem={ChannelCardWithCategory}
      //contentContainerStyle={{paddingBottom: 400}}
      />
      <FloatingPlayer />
    </View>
  );
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
  },
  headingText: {
    fontSize: 24,
    color: colors.textPrimary,
    fontFamily: "Gilroy-Bold",
  }
})