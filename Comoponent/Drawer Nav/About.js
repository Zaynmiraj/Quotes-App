import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
export default function About() {


  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <View style={styles.FlexBox}>
        <Text style={{fontFamily:'arial', fontSize:17,padding:20, textAlign:'center', }}> Quote 2023 The app totally developed with own content. and in this app I have included more then 3000 facebook status , best quotes , caption, etc , and designed very dynamically. also included more then 100 most popular Author names and their about. So You will be able learn a lot of quote and meaning and author name. Thank you: _ZaYn Miraj   </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
FlexBox:{
  width:"85%",
  height:'44%',
  padding: 10,
  backgroundColor:'white',
  elevation:20,
  padding: 5,
  margin: 5,
  marginHorizontal:10,
  shadowColor: 'gray',
  borderTopColor:'#5cbdb9',
  borderToptWidth:5,
}
})