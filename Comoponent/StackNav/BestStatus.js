import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

export default function BestStatus({navigation}) {
  return (
        <View styles={styles.container}>
          <View style={styles.inner}>
            <View style={styles.grid}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Happiness")}>
              <Text style={styles.text}> Happiness</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Lonliness")}>
              <Text style={styles.text}> Lonliness</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.grid}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Responsibility")}>
              <Text style={styles.text}> Responsibility</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Success")}>
              <Text style={styles.text}> Success</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.grid}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Married")}>
              <Text style={styles.text}> Married </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Birthday")}>
              <Text style={styles.text}> Birthday</Text>
            </TouchableOpacity>
            </View>
          </View>
        </View>
  )
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'white'
  },
  inner:{
    height:'100%',
    justifyContent:'center',
    alignItems:'center',
  },
  grid:{
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row'

  }
  ,
  button:{
    width:150,
    backgroundColor:'white',
    height:150,
    margin: 10,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    shadowColor:'black',
    shadowOffset:{
      width:10, height: 10
    },
    shadowRadius:10,
    elevation:20,
    borderBottomEndRadius:60,

    
  },
  text:{
    fontSize:20,
    fontWeight:'bold'
  }
})