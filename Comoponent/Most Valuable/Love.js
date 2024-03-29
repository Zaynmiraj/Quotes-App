import { View, Text,FlatList,StyleSheet, TouchableOpacity, Image , Share } from 'react-native'
import React from 'react'
import Clipboard from '@react-native-clipboard/clipboard';
import Snackbar from 'react-native-snackbar';
import Tts from 'react-native-tts';

  const Data =[{"quote":"Never pretend to a love which you do not actually feel, for love is not ours to command.","author":"Alan Watts"},
  {"quote":"Such is the inconsistency of real love, that it is always awake to suspicion, however unreasonable; always requiring new assurances from the object of its interest.","author":"Ann Radcliffe"},
  {"quote":"To love deeply in one direction makes us more loving in all others.","author":"Anne-Sophie Swetchine"},
  {"quote":"Perhaps the feelings that we experience when we are in love represent a normal state. Being in love shows a person who he should be.","author":"Anton Chekhov"},
  {"quote":"To fear love is to fear life, and those who fear life are already three parts dead.","author":"Bertrand Russell"},
  {"quote":"Love is not enough. It must be the foundation, the cornerstone - but not the complete structure. It is much too pliable, too yielding.","author":"Bette Davis"},
  {"quote":"Clarity of mind means clarity of passion, too; this is why a great and clear mind loves ardently and sees distinctly what it loves.","author":"Blaise Pascal"},
  {"quote":"The meeting of two personalities is like the contact of two chemical substances: if there is any reaction, both are transformed.","author":"Carl Jung"},
  {"quote":"Nothing takes the taste out of peanut butter quite like unrequited love.","author":"Charles M. Schulz"},
  {"quote":"There's an evolutionary imperative why we give a crap about our family and friends. And there's an evolutionary imperative why we don't give a crap about anybody else. If we loved all people indiscriminately, we couldn't function.","author":"David Viscott"},
  {"quote":"To love and be loved is to feel the sun from both sides.","author":"Diane Ackerman"},
  {"quote":"Couples are jigsaw puzzles that hang together by touching in just enough points. They're never total fits or misfits.","author":"Diane Frolov and Andrew Schneider"},
  {"quote":"There's a lot to be said for self-delusionment when it comes to matters of the heart.","author":"Dorothy Parker"},
  {"quote":"Oh, life is a glorious cycle of song,<br> A medley of extemporanea; <br>And love is a thing that can never go wrong; <br>And I am Marie of Romania.","author":"Ella Wheeler Wilcox"},
  {"quote":"One's first love is always perfect until one meets one's second love.","author":"Erica Jong"},
  {"quote":"All love that has not friendship for its base, is like a mansion built upon sand.","author":"Euripides"},
  {"quote":"Love is everything it's cracked up to be�It really is worth fighting for, being brave for, risking everything for.","author":"Friedrich Nietzsche"},{"quote":"People are such great mysteries. Just when we think we have understood them, a wonderful new aspect shows in them.","author":"Friedrich Nietzsche"},{"quote":"When love is in excess it brings a man no honor nor worthiness.","author":"H. L. Mencken"},{"quote":"There is always some madness in love. But there is also always some reason in madness.","author":"Henry Bromel"},{"quote":"What else is love but understanding and rejoicing in the fact that another person lives, acts, and experiences otherwise than we do�?","author":"Henry David Thoreau"},{"quote":"They wouldn't call it falling in love if you didn't get hurt sometimes, but you just pick yourself up and move on.","author":"Hugh Elliott"},{"quote":"Love is the triumph of imagination over intelligence.","author":"Ice T"},{"quote":"Sometimes when you look back on a situation, you realize it wasn't all you thought it was. A beautiful girl walked into your life. You fell in love. Or did you? Maybe it was only a childish infatuation, or maybe just a brief moment of vanity.","author":"Iris Murdoch"},{"quote":"There is no remedy for love but to love more.","author":"Iris Murdoch"},{"quote":"Just because you love someone doesn't mean you have to be involved with them. Love is not a bandage to cover wounds.","author":"J. K. Rowling"},{"quote":"Passion makes the world go round. Love just makes it a safer place."},{"quote":"Love is the difficult realization that something other than oneself is real."},{"quote":"We can only learn to love by loving."},{"quote":"When you have seen as much of life as I have, you will not underestimate the power of obsessive love."}]

  export default function Love() {


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