import { View, Text,FlatList,StyleSheet, TouchableOpacity, Image , Share } from 'react-native'
import React from 'react'
import Clipboard from '@react-native-clipboard/clipboard';
import Snackbar from 'react-native-snackbar';
import Tts from 'react-native-tts';

  const Data = [{"quote":"Eat a third and drink a third and leave the remaining third of your stomach empty. Then, when you get angry, there will be sufficient room for your rage.","author":"Babylonian Talmud"},{"quote":"Anger makes you smaller, while forgiveness forces you to grow beyond what you were.","author":"Cherie Carter-Scott"},{"quote":"When anger rises, think of the consequences.","author":"Confucius"},{"quote":"Anger makes dull men witty, but it keeps them poor.","author":"Elizabeth I"},{"quote":"Anger as soon as fed is dead- <br> 'Tis starving makes it fat.","author":"Emily Dickinson"},{"quote":"If you do not wish to be prone to anger, do not feed the habit; give it nothing which may tend to its increase.","author":"Epictetus"},{"quote":"If you would cure anger, do not feed it. Say to yourself: 'I used to be angry every day; then every other day; now only every third or fourth day.' When you reach thirty days offer a sacrifice of thanksgiving to the gods.","author":"Epictetus"},{"quote":"I have seen a peaceful expression turn to anger as fast as a whip cracks, and so the look on the face might mean less than what it seems to be.","author":"Greg Evans"},{"quote":"Anger at lies lasts forever. Anger at truth can't last.","author":"Harriet Lerner"},{"quote":"Anger is a signal, and one worth listening to.","author":"Henry Ward Beecher"},{"quote":"Never forget what a man says to you when he is angry.","author":"Joan Lunden"},{"quote":"Holding on to anger, resentment and hurt only gives you tense muscles, a headache and a sore jaw from clenching your teeth. Forgiveness gives you back the laughter and the lightness in your life.","author":"Laurence J. Peter"},{"quote":"Speak when you are angry--and you will make the best speech you'll ever regret.","author":"Malcolm X"},{"quote":"Usually when people are sad, they don't do anything. They just cry over their condition. But when they get angry, they bring about a change.","author":"Mario Puzo"},{"quote":"Never get angry. Never make a threat. Reason with people.","author":"Maxine Waters"},{"quote":"I have a right to my anger, and I don't want anybody telling me I shouldn't be, that it's not nice to be, and that something's wrong with me because I get angry."}];

export default function Angry() {


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