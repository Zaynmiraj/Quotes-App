import { View, Text,FlatList,StyleSheet, TouchableOpacity, Image,Share } from 'react-native'
import React from 'react'
import Clipboard from '@react-native-clipboard/clipboard';
import Snackbar from 'react-native-snackbar';
import Tts from 'react-native-tts';


  const Data = [{"quote":"Pray that your loneliness may spur you into finding something to live for, great enough to die for.","author":"Dag Hammarskjold"},{"quote":"When you close your doors, and make darkness within, remember never to say that you are alone, for you are not alone; nay, God is within, and your genius is within. And what need have they of light to see what you are doing?","author":"Epictetus"},{"quote":"To be an adult is to be alone.","author":"Jean Rostand"},{"quote":"People drain me, even the closest of friends, and I find loneliness to be the best state in the union to live in.","author":"Margaret Cho"},{"quote":"The worst loneliness is not to be comfortable with yourself.","author":"Mark Twain"},{"quote":"Inside myself is a place where I live all alone and that's where you renew your springs that never dry up.","author":"Pearl Buck"},{"quote":"They are never alone that are accompanied with noble thoughts.","author":"Sir Philip Sidney"},{"quote":"To be alone is to be different, to be different is to be alone.","author":"Suzanne Gordon"},{"quote":"No matter how lonely you get or how many birth announcements you receive, the trick is not to get frightened. There's nothing wrong with being alone.","author":"Wendy Wasserstein"}]

export default function Lonliness() {


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
  borderLeftColor:'#e1b382',
  borderLeftWidth:5,
},
quotes:{
  color:'gray',
  fontSize:18,
  textAlign:'left',
  margin: 10,

},
author:{
  color:'grayblack',
  fontSize:15,
  textAlign:'right'
}
})