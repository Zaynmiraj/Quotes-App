import { View, Text,FlatList,StyleSheet, TouchableOpacity, Image , Share } from 'react-native'
import React from 'react'
import Clipboard from '@react-native-clipboard/clipboard';
import Snackbar from 'react-native-snackbar';
import Tts from 'react-native-tts';


  const Data =[{"quote":"It is true that I was born in Iowa, but I can't speak for my twin sister.","author":"Abigail Van Buren"},{"quote":"Some people are born on third base and go through life thinking they hit a triple.","author":"Barry Switzer"},{"quote":"He not busy being born is busy dying.","author":"Bob Dylan"},{"quote":"There is no cure for birth and death save to enjoy the interval.","author":"George Santayana"},{"quote":"When I was born I was so surprised I didn't talk for a year and a half.","author":"Gracie Allen"},{"quote":"We are born charming, fresh and spontaneous and must be civilized before we are fit to participate in society.","author":"Judith Martin"},{"quote":"Somewhere on this globe, every ten seconds, there is a woman giving birth to a child. She must be found and stopped.","author":"Sam Levenson"},{"quote":"To my embarrassment I was born in bed with a lady.","author":"Wilson Mizner"}]

export default function Birthday() {
  return (
    <View>
      <FlatList 
      data={Data}
      renderItem={({item}) =>
        <TouchableOpacity onPress={() => { Clipboard.setString(item.quote);
          Snackbar.show({
          text: 'Copied',
          duration: Snackbar.LENGTH_SHORT,
        })} }>
          <View style={styles.FlexBox}> 
            <Text style={styles.quotes}>
            {item.quote}
            </Text>
            <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
            <Text style={styles.author}>
              _{item.author}
            </Text>
              <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                <TouchableOpacity onPress={() => Tts.speak(item.quote +"by"+ item.author, {
                                                  androidParams: {
                                                  KEY_PARAM_PAN: -2,
                                                  KEY_PARAM_VOLUME: 0.8,
                                                  KEY_PARAM_STREAM: 'STREAM_MUSIC',
                                                },
                                                })}>
                                                  <Image style={{width:20, padding:10, marginHorizontal:10, height: 20}} source={require('../photo/voice.png')}  /></TouchableOpacity>
                <TouchableOpacity onPress={() => {
                 const result = Share.share({ message: item.quote +' __by '+ item.author});
                  if (result.action === Share.sharedAction) {
                    if (result.activityType) {
                      // shared with activity type of result.activityType
                    } else {
                      // shared
                    }
                  } else if (result.action === Share.dismissedAction) {
                    // dismissed
                  }

                } }><Image style={{width:20, padding:10, marginHorizontal:20, height: 20}} source={require('../photo/send.png')}  /></TouchableOpacity>
               
              </View>
           
            </View>
        </View>
        </TouchableOpacity>
      }
      keyExtractor={item => Math.random(item)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
FlexBox:{
  backgroundColor:'white',
  elevation:20,
  padding: 5,
  margin: 5,
  marginHorizontal:10,
  shadowColor: 'gray',
  borderLeftColor:'#7d3cff',
  borderLeftWidth:5,
},
quotes:{
  color:'gray',
  fontSize:15,
  textAlign:'left',
  margin: 10,

},
author:{
  color:'grayblack',
  fontSize:12,
  marginHorizontal: 10,
  textAlign:'left',
  fontWeight:'700'
}
})