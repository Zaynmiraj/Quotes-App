import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Valuable({navigation}) {
  return (
        <View styles={styles.container}>
          <View style={styles.inner}>
            <View style={styles.grid}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Advice")}>
              <Text style={styles.text}> Advice</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Attitude")}>
              <Text style={styles.text}> Attitude</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.grid}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Love")}>
              <Text style={styles.text}> Love</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Morality")}>
              <Text style={styles.text}> Morality</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.grid}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Angry")}>
              <Text style={styles.text}> Angry</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Personality")}>
              <Text style={styles.text}> Honesty</Text>
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
    height: '100%',
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
    borderBottomEndRadius:40,
    borderTopLeftRadius:40,
    
  },
  text:{
    fontSize:20,
    fontWeight:'bold'
  }
})