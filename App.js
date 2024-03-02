import { SafeAreaView} from 'react-native'
import React from 'react'
import {NavigationContainer, DefaultTheme} from '@react-navigation/native'
import Navigator from './Comoponent/Navigator'
import { BannerAd, BannerAdSize } from '@react-native-admob/admob'
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors='white',
  },
};
export default function App() {
  return (
    <SafeAreaView style={{flex:1, width:'100%'}}>
    <NavigationContainer theme={MyTheme}>
        <Navigator />
    </NavigationContainer>
    
    <BannerAd 
    size={BannerAdSize.ADAPTIVE_BANNER}
    unitId="ca-app-pub-1662853246746272/6453091697" 
    onAdFailedToLoad={(error) => console.error(error)}
    />
    </SafeAreaView>
  )
}


