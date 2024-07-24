import React from 'react';
import { Text, StyleSheet } from 'react-native';

// Define the props interface
interface LogoTitleProps {
  children: string;
  tintColor?: string;
}

// Define the LogoTitle component
const LogoTitle: React.FC<LogoTitleProps> = ({ children, tintColor }) => {
  return (
    <Text style={[styles.title, { color: tintColor }]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default LogoTitle;