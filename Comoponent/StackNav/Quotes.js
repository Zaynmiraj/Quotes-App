import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Quotes({navigation}) {
  return (
        <View styles={styles.container}>
          <View style={styles.inner}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Quote_1")}>
              <Text style={{fontSize:17}}> New quote </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Quote_2")}>
              <Text style={{fontSize:17}}> Best quote</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Quote_3")}>
              <Text style={{fontSize:17}}> Popular quote</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Quote_4")}>
              <Text style={{fontSize:17}}> Mind Changing quote</Text>
            </TouchableOpacity>
          </View>
        </View>
  )
}


const styles = StyleSheet.create({
  container:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'white'
  },
  inner:{
    display:'flex',
    height: '100%',
    justifyContent:'center',
    alignItems:'center',
  },
  button:{
    width:'80%',
    backgroundColor:'white',
    height:100,
    margin: 10,
    borderLeftColor:'orange',
    borderLeftWidth:10,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    shadowColor:'black',
    shadowOffset:{
      width:10, height: 10
    },
    shadowRadius:10,
    elevation:20,
    borderBottomRightRadius:100,
    
  }
})