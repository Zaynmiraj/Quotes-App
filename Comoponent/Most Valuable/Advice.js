import { View, Text,FlatList,StyleSheet, TouchableOpacity, Image , Share } from 'react-native'
import React from 'react'
import Clipboard from '@react-native-clipboard/clipboard';
import Snackbar from 'react-native-snackbar';
import Tts from 'react-native-tts';

  const Data = [{"quote":"Never trust the advice of a man in difficulties.","author":"Aesop"},
  {"quote":"It is very difficult to live among people you love and hold back from offering them advice.","author":"Anne Tyler"},
  {"quote":"People who ask our advice almost never take it. Yet we should never refuse to give it, upon request, for it often helps us to see our own way more clearly.","author":"Brendan Francis"},
  {"quote":"Ask advice only of your equals.","author":"Danish Proverb"},
  {"quote":"Please give me some good advice in your next letter. I promise not to follow it.","author":"Edna St. Vincent Millay"},
  {"quote":"Don't give advice. It will come back and bite you in the [butt]. Don't take anyone's advice. So, my advice to you is to be true to yourself and everything will be fine.","author":"Ellen DeGeneres"},
  {"quote":"Write down the advice of him who loves you, though you like it not at present.","author":"English Proverb"},{"quote":"Advice is what we ask for when we already know the answer but wish we didn't.","author":"Erica Jong"},
  {"quote":"Good advice is something a man gives when he is too old to set a bad example.","author":"Francois de La Rochefoucauld"},
  {"quote":"I owe my success to having listened respectfully to the very best advice, and then going away and doing the exact opposite.","author":"G. K. Chesterton"},
  {"quote":"Never give advice unless asked.","author":"German Proverb"},
  {"quote":"Some people like my advice so much that they frame it upon the wall instead of using it.","author":"Gordon R. Dickson"},
  {"quote":"There is no human problem which could not be solved if people would simply do as I advise.","author":"Gore Vidal"},{"quote":"The true secret of giving advice is, after you have honestly given it, to be perfectly indifferent whether it is taken or not, and never persist in trying to set people right.","author":"Hannah Whitall Smith"},
  {"quote":"I have found the best way to give advice to your children is to find out what they want and then advise them to do it.","author":"Harry S Truman"},{"quote":"The only thing to do with good advice is pass it on. It is never any use to oneself.","author":"Oscar Wilde"},{"quote":"Don't try to solve serious matters in the middle of the night.","author":"Philip K. Dick"},{"quote":"The advice of friends must be received with a judicious reserve; we must not give ourselves up to it and follow it blindly, whether right or wrong.","author":"Pierre Charron"},{"quote":"Many receive advice, few profit by it.","author":"Publilius Syrus"},{"quote":"Advice is very easy to give, and even easier not to follow, so I don't fool with it.","author":"Sidney J. Harris"},{"quote":"It seems that bad advice that's fun will always be better known than than good advice that's dull-no matter how useless that fun advice is.","author":"Solon"},{"quote":"Never take the advice of someone who has not had your kind of trouble.","author":"Spanish Proverb"},{"quote":"In giving advice, seek to help, not please, your friend.","author":"Wil Wheaton"},{"quote":"Never advise anyone to go to war or to marry."},{"quote":"Don't be a dick!"}]

export default function Advice() {


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