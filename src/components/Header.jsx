import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Feather } from 'react-native-vector-icons/Feather'
import { iconSizes, spacing } from '../constants/dimensions'
import { useTheme } from '@react-navigation/native'
//import { useNavigation } from '@react-navigation/native'

const Header = () => {
  
  const {colors} = useTheme();
  /*const navigation = useNavigation();
  
  const toggleDrawer = () => {
    navigation.toggleDrawer();
  }*/

    return (
        <View style={styles.header}>
            <TouchableOpacity /*onPress={toggleDrawer}*/>
              <Feather name="menu" size={iconSizes.large} color={colors.iconPrimary} />
            </TouchableOpacity>
            <TouchableOpacity> 
              <Feather name="search" size={iconSizes.large} color={colors.iconPrimary} />
            </TouchableOpacity>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: spacing.medium,
      paddingTop: spacing.large,
      backgroundColor: colors.background,
      width: '100%'
    },
  })