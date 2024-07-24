import React, { useEffect, useState, ReactNode } from 'react';
import { View, ActivityIndicator } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [fontsLoaded, setFontsLoaded] = useState(true);

  useEffect(() => {
    // Here you would typically load fonts if needed. We assume fonts are already linked.
    SplashScreen.hide();
  }, []);

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }

  return (
    <View style={{ flex: 1 }}>
      {children}
    </View>
  );
};

export default Layout;
