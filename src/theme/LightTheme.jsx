import { DefaultTheme } from '@react-navigation/native';

export const LightTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: '#F7FAFF',
        backgroundHeader: '#C5C8CC',
        backgroundPlayer: '#DEE1E5',
        textPrimary: '#091127',
        textSecondary: '#8996B8',
        iconPrimary: '#091127',
        iconSecondary: '#8996B8',
        minimumTintColor: '#091227',
        maximumTintColor: '#D3D7DF',
    }
}
