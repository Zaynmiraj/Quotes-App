import { View, Text,FlatList,StyleSheet, TouchableOpacity, Image , Share } from 'react-native'
import React from 'react'
import Clipboard from '@react-native-clipboard/clipboard';
import Snackbar from 'react-native-snackbar';
import Tts from 'react-native-tts';

  const Data =[{"quote":"No moral system can rest solely on authority.","author":"A. J. Ayer"},
  {"quote":"Ethics, too, are nothing but reverence for life. That is what gives me the fundamental principle of morality, namely, that good consists in maintaining, promoting, and enhancing life, and that destroying, injuring, and limiting life are evil.","author":"Albert Schweitzer"},
  {"quote":"Good laws have their origins in bad morals.","author":"Ambrosius Macrobius"},
  {"quote":"Compassion is the basis of all morality.","author":"Arthur Schopenhauer"},
  {"quote":"The people who are regarded as moral luminaries are those who forego ordinary pleasures themselves and find compensation in interfering with the pleasures of others.","author":"Bertrand Russell"},
  {"quote":"We have, in fact, two kinds of morality side by side: one which we preach but do not practice, and another which we practice but seldom preach.","author":"Bertrand Russell"},
  {"quote":"There is no moral precept that does not have something inconvenient about it.","author":"Denis Diderot"},
  {"quote":"Morality is herd instinct in the individual.","author":"Friedrich Nietzsche"},
  {"quote":"I say that a man must be certain of his morality for the simple reason that he has to suffer for it.","author":"G. K. Chesterton"},
  {"quote":"An Englishman thinks he is moral when he is only uncomfortable.","author":"George Bernard Shaw"},
  {"quote":"The difference between a moral man and a man of honor is that the latter regrets a discreditable act, even when it has worked and he has not been caught.","author":"H. L. Mencken"},
  {"quote":"Truth is the secret of eloquence and of virtue, the basis of moral authority; it is the highest summit of art and life.","author":"Henri-Fr�d�ric Amiel"},
  {"quote":"Aim above morality. Be not simply good; be good for something.","author":"Henry David Thoreau"},
  {"quote":"Do not be too moral. You may cheat yourself out of much life. Aim above morality. Be not simply good; be good for something.","author":"Henry David Thoreau"},
  {"quote":"Never let your sense of morals get in the way of doing what's right.","author":"Isaac Asimov"},{"quote":"History is a voice forever sounding across the centuries the laws of right and wrong. Opinions alter, manners change, creeds rise and fall, but the moral law is written on the tablets of eternity.","author":"James A. Forude"},{"quote":"Taste is not only a part and index of morality, it is the only morality. The first, and last, and closest trial question to any living creature is \"What do you like?\" Tell me what you like, I'll tell you what you are.","author":"John Ruskin"},{"quote":"Scandal is great entertainment because it allows people to feel contempt, a moral emotion that gives feeling of moral superiority while asking nothing in return.","author":"Noel Coward"},{"quote":"The higher the buildings, the lower the morals.","author":"Oscar Wilde"},{"quote":"Morality, like art, means drawing a line someplace.","author":"Oscar Wilde"},{"quote":"Scandal is gossip made tedious by morality.","author":"Reverend Sean Parker Dennison"},{"quote":"The ability to see beauty is the beginning of our moral sensibility. What we believe is beautiful we will not wantonly destroy.","author":"Robert F. Kennedy"},{"quote":"I believe that in this generation those with the courage to enter the conflict will find themselves with companions in every corner of the world.","author":"Robert Louis Stevenson"},{"quote":"If your morals make you dreary, depend on it , they are wrong.","author":"Saint Thomas Aquinas"},{"quote":"Perfection of moral virtue does not wholly take away the passions, but regulates them.","author":"Sallust"},{"quote":"The soul is the captain and ruler of the life of morals.","author":"Scott Adams"},{"quote":"'Wrong' is one of those concepts that depends on witnesses.","author":"Thomas Jefferson"},{"quote":"I have never believed there was one code of morality for a public and another for a private man.","author":"Voltaire"},{"quote":"All sects are different, because they come from men; morality is everywhere the same, because it comes from God."}]
  
  export default function Morality() {


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