import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Quotes from '../StackNav/Quotes'
import Caption from '../StackNav/Caption'
import BestStatus from '../StackNav/BestStatus'
import Valuable from '../StackNav/Valuable'












//Quote component  //
import Quote_1 from '../Quote/Quote_1'
import Quote_2 from '../Quote/Quote_2'
import Quote_3 from '../Quote/Quote_3'
import Quote_4 from '../Quote/Quote_4'


//most valuable component 

import Advice from '../Most Valuable/Advice'
import Attitude from '../Most Valuable/Attitude'
import Angry from '../Most Valuable/Angry'
import Personality from '../Most Valuable/Personality'
import Love from '../Most Valuable/Love'
import Morality from '../Most Valuable/Morality'


//Best status component 

import Happiness from '../Best status/Happy'
import Married from '../Best status/Marred'
import Lonliness from '../Best status/Lonliness'
import Success from '../Best status/Success'
import Birthday from '../Best status/Birthday'
import Responsibility from '../Best status/Responsibility'



const Stack = createNativeStackNavigator();
export default function Home() {
  return (
      <Stack.Navigator screenOptions={{
      statusBarColor:'tomato',
      statusBarAnimation:'fade',
      }} >
      <Stack.Screen name="Main" component={Main}  options={{headerShown:false}}/>
      <Stack.Screen name="Quotes" component={Quotes} options={{headerShown:false}}/>
      <Stack.Screen name="Caption" component={Caption} options={{headerShown:false}}/>
      <Stack.Screen name='BestStatus' component={BestStatus} options={{headerShown:false}}/>
      <Stack.Screen name="Valuable" component={Valuable} options={{headerShown:false}}/>
       
      <Stack.Screen name="Quote_1" component={Quote_1} options={{headerShown:false}}/>
      <Stack.Screen name="Quote_2" component={Quote_2} options={{headerShown:false}}/>
      <Stack.Screen name="Quote_3" component={Quote_3} options={{headerShown:false}}/>
      <Stack.Screen name="Quote_4" component={Quote_4} options={{headerShown:false}}/>

      <Stack.Screen name="Advice" component={Advice} options={{headerShown:false}}/>
      <Stack.Screen name="Attitude" component={Attitude} options={{headerShown:false}}/>
      <Stack.Screen name="Angry" component={Angry} options={{headerShown:false}}/>
      <Stack.Screen name="Personality" component={Personality} options={{headerShown:false}}/>
      <Stack.Screen name="Love" component={Love}  options={{headerShown:false}}/>
      <Stack.Screen name="Morality" component={Morality} options={{headerShown:false}} />


      <Stack.Screen name="Happiness" component={Happiness} options={{headerShown:false}} />
      <Stack.Screen name="Married" component={Married} options={{headerShown:false}} />
      <Stack.Screen name="Lonliness" component={Lonliness} options={{headerShown:false}} />
      <Stack.Screen name="Birthday" component={Birthday} options={{headerShown:false}} />
      <Stack.Screen name="Responsibility" component={Responsibility} options={{headerShown:false}} />
      <Stack.Screen name="Success" component={Success} options={{headerShown:false}} />


    </Stack.Navigator>
  )
}




const Main = ({navigation}) =>{
  return(
  <View style={styles.container}>
    <Text style={styles.title} >Hello, You're welcome</Text>
      <View style={styles.block}>
          <View style={styles.Inner_block}>
            <TouchableOpacity style={styles.TouchableOpacity} onPress={() => navigation.navigate('BestStatus')}>
              <Text style={styles.inner}>Best status</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.TouchableOpacity} onPress={() => navigation.navigate('Valuable')}>
              <Text style={styles.inner}>Most Valuable</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.Inner_block}>
          <TouchableOpacity style={styles.TouchableOpacity} onPress={() => navigation.navigate('Quotes')}>
              <Text style={styles.inner}>Quotes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.TouchableOpacity} onPress={() => navigation.navigate('Caption')}>
              <Text style={styles.inner}>Author Names</Text>
            </TouchableOpacity>
          </View>
      </View>
    </View>
    
  )

}


const styles = StyleSheet.create({
  title : {
    fontSize: 30,
    marginTop: -80,
    marginBottom: 30,
    elevation:10,
    shadowColor:'black'
  },
  container:{
    flex:1,
    justifyContent:'center',
    backgroundColor:'white',
    margin:'auto',
    alignItems:'center'


  },
  block:{
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
    hieght:'auto',

  },
  TouchableOpacity: {
    justifyContent:'center',
    alignItems:'center',
    width:150,
    height: 150,
    marginTop:10,
    borderRadius:20,
    elevation: 15,
    backgroundColor:'white',
    shadowColor:'black',
    shadowOpacity:1.0,
    shadowOffset: {
      width: 24,
      height:24
    },
    shadowRadius: 20,
      },
      inner:{
        fontSize:18,
        fontFamily:'Arial-black',
        fontStyle:'normal',
        fontWeight:'bold',
        padding: 10,
      },
      Inner_block: {
        justifyContent:'center',
        alignItems:'center',
        margin: 10,
        
      }
})