import { DefaultTheme } from '@react-navigation/native';

export const DarkTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: '#091227',
        backgroundHeader: '#21293C',
        backgroundPlayer: '#3A4152',
        textPrimary: '#EAF0FF',
        textSecondary: '#A5C0FF',
        iconPrimary: '#EAF0FF',
        iconSecondary: '#8996B8',
        minimumTintColor: '#FFFFFF',
        maximumTintColor: '#555B6A',
    }
}
