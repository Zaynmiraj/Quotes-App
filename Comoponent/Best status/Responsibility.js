import { View, Text,FlatList,StyleSheet, TouchableOpacity, Image , Share } from 'react-native'
import React from 'react'
import Clipboard from '@react-native-clipboard/clipboard';
import Snackbar from 'react-native-snackbar';
import Tts from 'react-native-tts';


  const Data = [{"quote":"You cannot escape the responsibility of tomorrow by evading it today.","author":"Abraham Lincoln"},
  {"quote":"To give up the task of reforming society is to give up one's responsibility as a free man.","author":"Alan Paton"},
  {"quote":"One can pass on responsibility, but not the discretion that goes with it. ","author":"Benvenuto Cellini"},
  {"quote":"I think of a hero as someone who understands the degree of responsibility that comes with his freedom.","author":"Bob Dylan"},
  {"quote":"The perfect bureaucrat everywhere is the man who manages to make no decisions and escape all responsibility.","author":"Brooks Atkinson"},{"quote":"There is a mysterious cycle in human events. To some generations much is given. Of other generations much is expected. This generation of Americans has a rendezvous with destiny.","author":"Franklin D. Roosevelt"},{"quote":"Action springs not from thought, but from a readiness for responsibility. ","author":"G. M. Trevelyan"},{"quote":"Liberty means responsibility. That is why most men dread it.","author":"George Bernard Shaw"},{"quote":"If you don't accept responsibility for your own actions, then you are forever chained to a position of defense.","author":"Holly Lisle"},{"quote":"So many new ideas are at first strange and horrible, though ultimately valuable that a very heavy responsibility rests upon those who would prevent their dissemination. ","author":"J. B. S. Haldane"},{"quote":"There is an expiry date on blaming your parents for steering you in the wrong direction. The moment you are old enough to take the wheel, the responsibility lies with you.","author":"J. K. Rowling"},{"quote":"In every child who is born under no matter what circumstances and of no matter what parents, the potentiality of the human race is born again, and in him, too, once more, and each of us, our terrific responsibility toward human life: toward the utmost idea of goodness, of the horror of terrorism, and of God.","author":"James Agee"},{"quote":"Character - the willingness to accept responsibility for one's own life - is the source from which self respect springs.","author":"Joan Didion"},{"quote":"The more freedom we enjoy, the greater the responsibility we bear, toward others as well as ourselves.","author":"Oscar Arias Sanchez"},{"quote":"We are at the very beginning of time for the human race. It is not unreasonable that we grapple with problems. But there are tens of thousands of years in the future. Our responsibility is to do what we can, learn what we can, improve the solutions, and pass them on.","author":"Richard Feynman"},{"quote":"The price of greatness is responsibility.","author":"Sir Winston Churchill"}]

export default function Responsibility() {


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
  borderLeftColor:'orange',
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