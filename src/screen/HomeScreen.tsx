import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {colors} from "../constants/colors"
import Feather from 'react-native-vector-icons/Feather'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { iconSizes, spacing } from '../constants/dimensions'
import Header from '../components/Header'

const HomeScreen = () => {
    return (
        <View style = {styles.container}>
          <Header></Header>
          <Text style = {styles.headingText}> Recommended for you </Text>
        </View>
      )
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
  }
})