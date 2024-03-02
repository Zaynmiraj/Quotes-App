import { View, Text,FlatList,StyleSheet, TouchableOpacity, Image , Share } from 'react-native'
import React from 'react'
import Clipboard from '@react-native-clipboard/clipboard';
import Snackbar from 'react-native-snackbar';
import Tts from 'react-native-tts';

  const Data = [{"quote":"The best measure of a man's honesty isn't his income tax return. It's the zero adjust on his bathroom scale.","author":"Arthur C. Clarke"},{"quote":"Where is there dignity unless there is honesty?","author":"Cicero"},
  {"quote":"Maybe coming clean is the ultimate selfish act. A way to absolve yourself by hurting someone who doesn't deserve to be hurt.","author":"Don Marquis"},{"quote":"Honesty is a good thing, but it is not profitable to its possessor unless it is kept under control.","author":"Euripides"},{"quote":"The day is for honest men, the night for thieves.","author":"John F. Kennedy"},{"quote":"I would rather be accused of breaking precedents than breaking promises.","author":"Kin Hubbard"},{"quote":"Honesty pays, but it doesn't seem to pay enough to suit some people.","author":"Lois McMaster Bujold"},{"quote":"If the truth doesn't save us, what does that say about us?","author":"Mark Twain"},{"quote":"Honesty is the best policy - when there is money in it.","author":"Mark Twain"},{"quote":"If you tell the truth you don't have to remember anything.","author":"Mark Twain"},{"quote":"When in doubt, tell the truth.","author":"Mary MacCracken"},{"quote":"Level with your child by being honest. Nobody spots a phony quicker than a child.","author":"Pamela Ribon"},{"quote":"When something that honest is said it usually needs a few minutes of silence to dissipate.","author":"Sam Rayburn"},{"quote":"Son, always tell the truth. Then you'll never have to remember what you said the last time.","author":"Samuel Butler"},{"quote":"Any fool can tell the truth, but it requires a man of some sense to know how to lie well.","author":"Thomas Jefferson"},{"quote":"An honest man can feel no pleasure in the exercise of power over his fellow citizens.","author":"Thomas Sowell"},{"quote":"There are only two ways of telling the complete truth--anonymously and posthumously.","author":"Tom Wilson"},{"quote":"Honesty is the best image.","author":"Walter Anderson"},{"quote":"Our lives improve only when we take chances - and the first and most difficult risk we can take is to be honest with ourselves.","author":"Will Rogers"},{"quote":"I have always noticed that people will never laugh at anything that is not based on truth.","author":"William Shakespeare"},{"quote":"Every man has his fault, and honesty is his.","author":"William Shakespeare"},{"quote":"I thank God I am as honest as any man living that is an old man and no honester than I.","author":"William Shakespeare"},{"quote":"No legacy is so rich as honesty.","author":"William Shakespeare"},{"quote":"Though I am not naturally honest, I am so sometimes by chance."}]
export default function Personality() {


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