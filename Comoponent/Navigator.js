import { View, Text,Button, Share, Linking, Platform } from 'react-native'
import React from 'react'
import { createDrawerNavigator  ,
  DrawerItemList,
  DrawerItem,} from '@react-navigation/drawer'
import Home from './Drawer Nav/Home'
import About from './Drawer Nav/About'
import * as StoreReview from 'react-native-store-review';

StoreReview.requestReview();

const APP_STORE_LINK = `https://apps.apple.com/app/id=testingapp?action=write-review`;
const PLAY_STORE_LINK = `https://play.google.com/store/apps/details?id=com.testingapp`;

const STORE_LINK = Platform.select({
  ios: APP_STORE_LINK,
  android: PLAY_STORE_LINK,
});
 const openReviewInStore = () => Linking.openURL(STORE_LINK)


const Drawer = createDrawerNavigator();
export default function Navigator() {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props } /> }  screenOptions={{
      drawerStyle: {
      backgroundColor: 'white',
      },
      headerTitleAlign:'center',
      headerTitle:"BE INSPIRED",
      headerTintColor:'gray',
      headerStyle:{
        backgroundColor: 'white',
        shadowColor:'white'
      },
      drawerPosition:"left",
      drawerActiveBackgroundColor: "#eeea",
      drawerActiveTintColor:'black',
      drawerStatusBarAnimation:'slide',
      animationEnabled: false,
      headerShown: true,
    }}>
        <Drawer.Screen name="Home" component={Home}/>
        <Drawer.Screen name="About" component={About} />
    </Drawer.Navigator>
  )
}



function CustomDrawer(props) {
  return(
    <>
    <DrawerItemList {...props} />
    <DrawerItem label="Feedback" onPress={() => openReviewInStore()} />
    <DrawerItem label="Share" onPress={() => onShare()} />
    <DrawerItem label="Developer " onPress={()=> Linking.openURL('mailto:zayn.miraj@gmail.com') } />
    </>
  )
}




  const onShare = async () => {
    try {
      const result = await Share.share({
        message:'https://play.google.com/store/apps/details?id=com.testingapp'
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
