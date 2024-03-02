import { View, Text,FlatList,StyleSheet, TouchableOpacity, Image , Share } from 'react-native'
import React from 'react'
import Clipboard from '@react-native-clipboard/clipboard';
import Snackbar from 'react-native-snackbar';
import Tts from 'react-native-tts';

  const Data = [{
    "quoteText": "Silence is a fence around wisdom.",
    "quoteAuthor": "German proverb"
    }, {
    "quoteText": "Society develops wit, but its contemplation alone forms genius.",
    "quoteAuthor": "Madame de Stael"
    }, {
    "quoteText": "Real magic in relationships means an absence of judgement of others.",
    "quoteAuthor": "Wayne Dyer"
    }, {
    "quoteText": "The years teach much which the days never know.",
    "quoteAuthor": "Ralph Emerson"
    }, {
    "quoteText": "We can only learn to love by loving.",
    "quoteAuthor": "Iris Murdoch"
    }, {
    "quoteText": "The simplest things are often the truest.",
    "quoteAuthor": "Richard Bach"
    }, {
    "quoteText": "What you give is what you get.",
    "quoteAuthor": "Byron Pulsifer"
    }, {
    "quoteText": "Everyone smiles in the same language.",
    "quoteAuthor": ""
    }, {
    "quoteText": "A short saying often contains much wisdom.",
    "quoteAuthor": "Sophocles"
    }, {
    "quoteText": "Yesterday I dared to struggle. Today I dare to win.",
    "quoteAuthor": "Bernadette Devlin"
    }, {
    "quoteText": "Victory belongs to the most persevering.",
    "quoteAuthor": "Napoleon Bonaparte"
    }, {
    "quoteText": "No alibi will save you from accepting the responsibility.",
    "quoteAuthor": "Napoleon Hill"
    }, {
    "quoteText": "If you can dream it, you can do it.",
    "quoteAuthor": "Walt Disney"
    }, {
    "quoteText": "From error to error one discovers the entire truth.",
    "quoteAuthor": "Sigmund Freud"
    }, {
    "quoteText": "It is better to travel well than to arrive.",
    "quoteAuthor": "Buddha"
    }, {
    "quoteText": "Life shrinks or expands in proportion to one's courage.",
    "quoteAuthor": "Anais Nin"
    }, {
    "quoteText": "You have to believe in yourself.",
    "quoteAuthor": "Sun Tzu"
    }, {
    "quoteText": "Our intention creates our reality.",
    "quoteAuthor": "Wayne Dyer"
    }, {
    "quoteText": "Silence is a true friend who never betrays.",
    "quoteAuthor": "Confucius"
    }, {
    "quoteText": "Character develops itself in the stream of life.",
    "quoteAuthor": "Johann Wolfgang von Goethe"
    }, {
    "quoteText": "From little acorns mighty oaks do grow.",
    "quoteAuthor": "American proverb"
    }, {
    "quoteText": "You have to believe in yourself.",
    "quoteAuthor": "Sun Tzu"
    }, {
    "quoteText": "You can't stop the waves, but you can learn to surf.",
    "quoteAuthor": "Jon Kabat-Zinn"
    }, {
    "quoteText": "Reality does not conform to the ideal, but confirms it.",
    "quoteAuthor": "Gustave Flaubert"
    }, {
    "quoteText": "Speak low, if you speak love.",
    "quoteAuthor": "William Shakespeare"
    }, {
    "quoteText": "A really great talent finds its happiness in execution.",
    "quoteAuthor": "Johann Wolfgang von Goethe"
    }, {
    "quoteText": "Reality leaves a lot to the imagination.",
    "quoteAuthor": "John Lennon"
    }, {
    "quoteText": "Our intention creates our reality.",
    "quoteAuthor": "Wayne Dyer"
    }, {
    "quoteText": "Society develops wit, but its contemplation alone forms genius.",
    "quoteAuthor": "Madame de Stael"
    }, {
    "quoteText": "The greatest remedy for anger is delay.",
    "quoteAuthor": "Seneca"
    }, {
    "quoteText": "Growth itself contains the germ of happiness.",
    "quoteAuthor": "Pearl Buck"
    }, {
    "quoteText": "You can do what's reasonable or you can decide what's possible.",
    "quoteAuthor": ""
    }, {
    "quoteText": "Nothing strengthens authority so much as silence.",
    "quoteAuthor": "Leonardo da Vinci"
    }, {
    "quoteText": "Wherever you go, go with all your heart.",
    "quoteAuthor": "Confucius"
    }, {
    "quoteText": "The only real valuable thing is intuition.",
    "quoteAuthor": "Albert Einstein"
    }, {
    "quoteText": "I believe that every person is born with talent.",
    "quoteAuthor": "Maya Angelou"
    }, {
    "quoteText": "Good luck is another name for tenacity of purpose.",
    "quoteAuthor": "Ralph Emerson"
    }, {
    "quoteText": "Rainbows apologize for angry skies.",
    "quoteAuthor": "Sylvia Voirol"
    }, {
    "quoteText": "Friendship isn't a big thing. It's a million little things.",
    "quoteAuthor": ""
    }, {
    "quoteText": "Time is the most valuable thing a man can spend.",
    "quoteAuthor": "Theophrastus"
    }, {
    "quoteText": "Whatever happens, take responsibility.",
    "quoteAuthor": "Tony Robbins"
    }, {
    "quoteText": "Experience is simply the name we give our mistakes.",
    "quoteAuthor": "Oscar Wilde"
    }, {
    "quoteText": "I think and that is all that I am.",
    "quoteAuthor": "Wayne Dyer"
    }, {
    "quoteText": "A good plan today is better than a perfect plan tomorrow.",
    "quoteAuthor": ""
    }, {
    "quoteText": "Be as you wish to seem.",
    "quoteAuthor": "Socrates"
    }, {
    "quoteText": "If the shoe doesn't fit, must we change the foot?",
    "quoteAuthor": "Gloria Steinem"
    }, {
    "quoteText": "Each day provides its own gifts.",
    "quoteAuthor": "Marcus Aurelius"
    }, {
    "quoteText": "While we stop to think, we often miss our opportunity.",
    "quoteAuthor": "Publilius Syrus"
    }, {
    "quoteText": "Life isn't about finding yourself. Life is about creating yourself.",
    "quoteAuthor": "Bernard Shaw"
    }, {
    "quoteText": "To bring anything into your life, imagine that it's already there.",
    "quoteAuthor": "Richard Bach"
    }, {
    "quoteText": "Begin to weave and God will give you the thread.",
    "quoteAuthor": "German proverb"
    }, {
    "quoteText": "The more you know yourself, the more you forgive yourself.",
    "quoteAuthor": "Confucius"
    }, {
    "quoteText": "Someone remembers, someone cares; your name is whispered in someone's prayers.",
    "quoteAuthor": ""
    }, {
    "quoteText": "Without faith, nothing is possible. With it, nothing is impossible.",
    "quoteAuthor": "Mary Bethune"
    }, {
    "quoteText": "What worries you masters you.",
    "quoteAuthor": "Haddon Robinson"
    }, {
    "quoteText": "Once we accept our limits, we go beyond them.",
    "quoteAuthor": "Albert Einstein"
    }, {
    "quoteText": "Don't be pushed by your problems; be led by your dreams.",
    "quoteAuthor": ""
    }, {
    "quoteText": "Whatever we expect with confidence becomes our own self-fulfilling prophecy.",
    "quoteAuthor": "Brian Tracy"
    }, {
    "quoteText": "Everything you can imagine is real.",
    "quoteAuthor": "Pablo Picasso"
    }, {
    "quoteText": "The shortest answer is doing.",
    "quoteAuthor": "Lord Herbert"
    }, {
    "quoteText": "A beautiful thing is never perfect.",
    "quoteAuthor": ""
    }, {
    "quoteText": "Fear is a darkroom where negatives develop.",
    "quoteAuthor": "Usman Asif"
    }, {
    "quoteText": "The simplest things are often the truest.",
    "quoteAuthor": "Richard Bach"
    }, {
    "quoteText": "The truest wisdom is a resolute determination.",
    "quoteAuthor": "Napoleon Bonaparte"
    }, {
    "quoteText": "Life is the flower for which love is the honey.",
    "quoteAuthor": "Victor Hugo"
    }, {
    "quoteText": "Freedom is the right to live as we wish.",
    "quoteAuthor": "Epictetus"
    }]

export default function Quote_3() {


  return (
    <View>
    <FlatList 
    data={Data}
    renderItem={({item}) =>
      <TouchableOpacity onPress={() => { Clipboard.setString(item.quoteText);
        Snackbar.show({
        text: 'Copied',
        duration: Snackbar.LENGTH_SHORT,
      })} }>
        <View style={styles.FlexBox}> 
          <Text style={styles.quotes}>
          {item.quoteText}
          </Text>
          <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
          <Text style={styles.author}>
            _{item.quoteAuthor}
          </Text>
            <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
              <TouchableOpacity onPress={() => Tts.speak(item.quoteText +"by"+ item.quoteAuthor, {
                                                androidParams: {
                                                KEY_PARAM_PAN: -2,
                                                KEY_PARAM_VOLUME: 0.8,
                                                KEY_PARAM_STREAM: 'STREAM_MUSIC',
                                              },
                                              })}>
                                                <Image style={{width:20, padding:10, marginHorizontal:10, height: 20}} source={require('../photo/voice.png')}  /></TouchableOpacity>
              <TouchableOpacity onPress={() => {
               const result = Share.share({ message: item.quoteText +' __by '+ item.quoteAuthor});
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
  elevation:10,
  padding: 5,
  margin: 5,
},
quotes:{
  color:'#905d54',
  fontSize:17,
  textAlign:'left',
  margin: 10
},
author:{
  color:'#905d54',
  fontSize:15,
  textAlign:'right'
}
})