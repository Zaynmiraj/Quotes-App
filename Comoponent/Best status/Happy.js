import { View, Text,FlatList,StyleSheet,TouchableOpacity, Share,Image } from 'react-native'
import React from 'react'
import Clipboard from '@react-native-clipboard/clipboard';
import Snackbar from 'react-native-snackbar';
import Tts from 'react-native-tts';


  const Data = [{"quote":"Most folks are about as happy as they make up their minds to be.","author":"Abraham Lincoln"},
  {"quote":"The secret of happiness is to make others believe they are the cause of it.","author":"Al Batt"},
  {"quote":"Happiness is nothing more than good health and a bad memory.","author":"Albert Schweitzer"},
  {"quote":"The happiness of a man in this life does not consist in the absence but in the mastery of his passions.","author":"Alfred Lord Tennyson"},
  {"quote":"A person is never happy except at the price of some ignorance.","author":"Anatole France"},
  {"quote":"Happiness arises in a state of peace, not of tumult.","author":"Ann Radcliffe"},
  {"quote":"The discovery of a new dish does more for human happiness than the discovery of a new star.","author":"Anthelme Brillat-Savarin"},
  {"quote":"Happiness depends upon ourselves.","author":"Aristotle"},
  {"quote":"Happiness is that state of consciousness which proceeds from the achievement of one's values.","author":"Ayn Rand"},
  {"quote":"Do not weep; do not wax indignant. Understand.","author":"Baruch Spinoza"},
  {"quote":"Content makes poor men rich; discontentment makes rich men poor.","author":"Benjamin Franklin"},
  {"quote":"If there were in the world today any large number of people who desired their own happiness more than they desired the unhappiness of others, we could have paradise in a few years.","author":"Bertrand Russell"},
  {"quote":"All I can say about life is, Oh God, enjoy it!","author":"Bob Newhart"},
  {"quote":"The pursuit of happiness is a most ridiculous phrase; if you pursue happiness you'll never find it.","author":"C. P. Snow"},{"quote":"Cherish all your happy moments: they make a fine cushion for old age.","author":"Christopher Morley"},{"quote":"This is the best kind of voyeurism, hearing joy from your neighbors.","author":"Chuck Sigars"},{"quote":"Sometimes it's hard to avoid the happiness of others.","author":"David Assael"},{"quote":"He wanted to live life in such a way that if a photograph were taken at random it would be a cool photograph. Things should look right. Fun; there should be a lot of fun and no more sadness than absolutely necessary.","author":"Doris Lessing"},{"quote":"All sanity depends on this: that it should be a delight to feel heat strike the skin, a delight to stand upright, knowing the bones are moving easily under the flesh.","author":"Eddie Cantor"},{"quote":"Slow down and enjoy life. It's not only the scenery you miss by going too fast - you also miss the sense of where you are going and why.","author":"George Bernard Shaw"},{"quote":"A lifetime of happiness! No man alive could bear it: it would be hell on earth.","author":"George Burns"},{"quote":"Happiness is having a large, loving, caring, close-knit family in another city.","author":"Gustave Flaubert"},{"quote":"To be stupid, selfish, and have good health are three requirements for happiness, though if stupidity is lacking, all is lost.","author":"Helen Keller"},{"quote":"Many persons have a wrong idea of what constitutes true happiness. It is not attained through self-gratification but through fidelity to a worthy purpose.","author":"Henry David Thoreau"},{"quote":"Man is the artificer of his own happiness.","author":"Immanuel Hermann Fichte"},{"quote":"If we cannot live so as to be happy, let us least live so as to deserve it.","author":"J. D. Salinger"},{"quote":"I am a kind of paranoiac in reverse. I suspect people of plotting to make me happy.","author":"J. K. Rowling"},{"quote":"Personal happiness lies in knowing that life is not a checklist of acquisition or achievement. Your qualifications are not your life.","author":"James Oppenheim"},{"quote":"The foolish man seeks happiness in the distance, the wise grows it under his feet.","author":"Jean Houston"},{"quote":"At the height of laughter, the universe is flung into a kaleidoscope of new possibilities."}]

export default function Happiness() {


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
  borderLeftColor:'#5cbdb9',
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