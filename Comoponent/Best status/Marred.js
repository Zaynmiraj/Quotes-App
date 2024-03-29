import { View, Text,FlatList,StyleSheet, TouchableOpacity, Image , Share } from 'react-native'
import React from 'react'
import Clipboard from '@react-native-clipboard/clipboard';
import Snackbar from 'react-native-snackbar';
import Tts from 'react-native-tts';


  const Data =[{"quote":"The conception of two people living together for twenty-five years without having a cross word suggests a lack of spirit only to be admired in sheep.","author":"Alan Patrick Herbert"},
  {"quote":"A successful marriage is an edifice that must be rebuilt every day.","author":"Andre Maurois"},
  {"quote":"All married couples should learn the art of battle as they should learn the art of making love. Good battle is objective and honest - never vicious or cruel. Good battle is healthy and constructive, and brings to a marriage the principle of equal partnership.","author":"Ann Landers"},
  {"quote":"A simple enough pleasure, surely, to have breakfast alone with one's husband, but how seldom married people in the midst of life achieve it.","author":"Anne Morrow Lindbergh"},
  {"quote":"I used to believe that marriage would diminish me, reduce my options. That you had to be someone less to live with someone else when, of course, you have to be someone more.","author":"Candice Bergen"},
  {"quote":"All marriages are mixed marriages.","author":"Chantal Saperstein"},
  {"quote":"There's only one way to have a happy marriage and as soon as I learn what it is I'll get married again.","author":"Clint Eastwood"},
  {"quote":"A great marriage is not when the 'perfect couple' comes together. It is when an imperfect couple learns to enjoy their differences.","author":"Dave Meurer"},
  {"quote":"Though we marry as adults, we don't marry adults. We marry children who have grown up and still rejoice in being children, especially if we're creative.","author":"Diane Ackerman"},
  {"quote":"Marriage. It's like a cultural hand-rail. It links folks to the past and guides them to the future.","author":"Diane Frolov and Andrew Schneider"},
  {"quote":"I wonder, among all the tangles of this mortal coil, which one contains tighter knots to undo, and consequently suggests more tugging, and pain, and diversified elements of misery, than the marriage tie.","author":"Edith Wharton"},
  {"quote":"What is right for one couple is wrong for another. I would say that there are many more important factors to a happy marriage.","author":"Euripides"},
  {"quote":"When a man is ready to marry, he is often not too particular about the lady.","author":"Euripides"},{"quote":"Man's best possession is a sympathetic wife.","author":"Helen Rowland"},{"quote":"Never say that marriage has more of joy than pain.","author":"J. R. R. Tolkien"},{"quote":"One man's folly is another man's wife.","author":"Jane Austen"},{"quote":"Nearly all marriages, even happy ones, are mistakes: in the sense that almost certainly (in a more perfect world, or even with a little more care in this very imperfect one) both partners might be found more suitable mates. But the real soul-mate is the one you are actually married to.","author":"John Scalzi"},{"quote":"I pay very little regard...to what any young person says on the subject of marriage. If they profess a disinclination for it, I only set it down that they have not yet seen the right person.","author":"Kathleen Norris"},{"quote":"My marriage had its ups and downs like anyone's, but when it came down to it, I knew it was solid. I miss that sort of security, and that sort of connection with someone.","author":"Lawana Blackwell"},{"quote":"Intimacy is what makes a marriage, not a ceremony, not a piece of paper from the state.","author":"Mae West"},{"quote":"If there was strife and contention in the home, very little else in life could compensate for it.","author":"Mickey Rooney"},{"quote":"Marriage is a great institution, but I'm not ready for an institution yet.","author":"Mignon McLaughlin"},{"quote":"Don't waste too much time trying' to be a better man, ' cause you ain't never gonna be one without a good woman.","author":"Muhammad Ali"},{"quote":"Always get married early in the morning. That way, if it doesn't work out, you haven't wasted a whole day.","author":"Nick Faldo"},{"quote":"A successful marriage requires falling in love many times, always with the same person.","author":"Ovid"},{"quote":"My toughest fight was with my first wife.","author":"Paul Tournier"},{"quote":"We were happily married for eight months. Unfortunately, we were married for four and a half years.","author":"Pearl Buck"},{"quote":"If you would marry suitably, marry your equal."},{"quote":"That is what marriage really means: helping one another to reach the full status of being persons, responsible and autonomous beings who do not run away from life."},{"quote":"A good marriage is one which allows for change and growth in the individuals and in the way they express their love."}]

export default function Married() {


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
  borderLeftColor:'#39a0ca',
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