import { View, Text,FlatList,StyleSheet, TouchableOpacity, Image , Share } from 'react-native'
import React from 'react'
import Clipboard from '@react-native-clipboard/clipboard';
import Snackbar from 'react-native-snackbar';
import Tts from 'react-native-tts';

  const Data =[{"quote":"Being assertive does not mean attacking or ignoring others feelings. It means that you are willing to hold up for yourself fairly-without attacking others.","author":"Edith Sitwell"},{"quote":"Eccentricity is not, as dull people would have us believe, a form of madness. It is often a kind of innocent pride, and the man of genius and the aristocrat are frequently regarded as eccentrics because genius and aristocrat are entirely unafraid of and uninfluenced by the opinions and vagaries of the crowd.","author":"Herm Albright"},{"quote":"A positive attitude may not solve all your problems, but it will annoy enough people to make it worth the effort.","author":"Lisa Alther"},{"quote":"I happen to feel that the degree of a person's intelligence is directly reflected by the number of conflicting attitudes she can bring to bear on the same topic.","author":"Lynn Johnston"},{"quote":"Complaining is good for you as long as you're not complaining to the person you're complaining about.","author":"Martha Washington"},{"quote":"I am still determined to be cheerful and happy, in whatever situation I may be; for I have also learned from experience that the greater part of our happiness or misery depends upon our dispositions, and not upon our circumstances.","author":"Patricia Neal"},{"quote":"A strong positive mental attitude will create more miracles than any wonder drug.","author":"William James"},{"quote":"Human beings, by changing the inner attitudes of their minds, can change the outer aspects of their lives.","author":"William James"},{"quote":"The greatest discovery of my generation is that a human being can alter his life by altering his attitudes of mind."}]

export default function Attitude() {


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
  shadowColor: 'gray'
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