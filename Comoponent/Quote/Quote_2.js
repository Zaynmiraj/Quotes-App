import { View, Text,FlatList,StyleSheet, TouchableOpacity, Image , Share } from 'react-native'
import React from 'react'
import Clipboard from '@react-native-clipboard/clipboard';
import Snackbar from 'react-native-snackbar';
import Tts from 'react-native-tts';

  const Data = [{
    "quoteText": "When performance exceeds ambition, the overlap is called success.",
    "quoteAuthor": "Cullen Hightower"
    }, {
    "quoteText": "When deeds speak, words are nothing.",
    "quoteAuthor": "African proverb"
    }, {
    "quoteText": "Real magic in relationships means an absence of judgement of others.",
    "quoteAuthor": "Wayne Dyer"
    }, {
    "quoteText": "When performance exceeds ambition, the overlap is called success.",
    "quoteAuthor": "Cullen Hightower"
    }, {
    "quoteText": "I never think of the future. It comes soon enough.",
    "quoteAuthor": "Albert Einstein"
    }, {
    "quoteText": "Skill to do comes of doing.",
    "quoteAuthor": "Ralph Emerson"
    }, {
    "quoteText": "Wisdom is the supreme part of happiness.",
    "quoteAuthor": "Sophocles"
    }, {
    "quoteText": "I believe that every person is born with talent.",
    "quoteAuthor": "Maya Angelou"
    }, {
    "quoteText": "Important principles may, and must, be inflexible.",
    "quoteAuthor": "Abraham Lincoln"
    }, {
    "quoteText": "The undertaking of a new action brings new strength.",
    "quoteAuthor": "Richard Evans"
    }, {
    "quoteText": "I believe that every person is born with talent.",
    "quoteAuthor": "Maya Angelou"
    }, {
    "quoteText": "The years teach much which the days never know.",
    "quoteAuthor": "Ralph Emerson"
    }, {
    "quoteText": "Our distrust is very expensive.",
    "quoteAuthor": "Ralph Emerson"
    }, {
    "quoteText": "All know the way; few actually walk it.",
    "quoteAuthor": "Bodhidharma"
    }, {
    "quoteText": "Great talent finds happiness in execution.",
    "quoteAuthor": "Johann Wolfgang von Goethe"
    }, {
    "quoteText": "Faith in oneself is the best and safest course.",
    "quoteAuthor": "Michelangelo"
    }, {
    "quoteText": "Courage is going from failure to failure without losing enthusiasm.",
    "quoteAuthor": "Winston Churchill"
    }, {
    "quoteText": "The two most powerful warriors are patience and time.",
    "quoteAuthor": "Leo Tolstoy"
    }, {
    "quoteText": "Anticipate the difficult by managing the easy.",
    "quoteAuthor": "Lao Tzu"
    }, {
    "quoteText": "Those who are free of resentful thoughts surely find peace.",
    "quoteAuthor": "Buddha"
    }, {
    "quoteText": "Talk doesn't cook rice.",
    "quoteAuthor": "Chinese proverb"
    }, {
    "quoteText": "A short saying often contains much wisdom.",
    "quoteAuthor": "Sophocles"
    }, {
    "quoteText": "The day is already blessed, find peace within it.",
    "quoteAuthor": ""
    }, {
    "quoteText": "It takes both sunshine and rain to make a rainbow.",
    "quoteAuthor": ""
    }, {
    "quoteText": "A beautiful thing is never perfect.",
    "quoteAuthor": ""
    }, {
    "quoteText": "Only do what your heart tells you.",
    "quoteAuthor": "Princess Diana"
    }, {
    "quoteText": "Life is movement-we breathe, we eat, we walk, we move!",
    "quoteAuthor": "John Pierrakos"
    }, {
    "quoteText": "No one can make you feel inferior without your consent.",
    "quoteAuthor": "Eleanor Roosevelt"
    }, {
    "quoteText": "One fails forward toward success.",
    "quoteAuthor": "Charles Kettering"
    }, {
    "quoteText": "Argue for your limitations, and sure enough theyre yours.",
    "quoteAuthor": "Richard Bach"
    }, {
    "quoteText": "Luck is what happens when preparation meets opportunity.",
    "quoteAuthor": "Seneca"
    }, {
    "quoteText": "Victory belongs to the most persevering.",
    "quoteAuthor": "Napoleon Bonaparte"
    }, {
    "quoteText": "Once you choose hope, anythings possible.",
    "quoteAuthor": "Christopher Reeve"
    }, {
    "quoteText": "Love all, trust a few, do wrong to none.",
    "quoteAuthor": "William Shakespeare"
    }, {
    "quoteText": "In order to win, you must expect to win.",
    "quoteAuthor": "Richard Bach"
    }, {
    "quoteText": "A goal is a dream with a deadline.",
    "quoteAuthor": "Napoleon Hill"
    }, {
    "quoteText": "You can do it if you believe you can!",
    "quoteAuthor": "Napoleon Hill"
    }, {
    "quoteText": "Set your goals high, and don't stop till you get there.",
    "quoteAuthor": "Bo Jackson"
    }, {
    "quoteText": "Genius is one percent inspiration and ninety-nine percent perspiration.",
    "quoteAuthor": "Thomas Edison"
    }, {
    "quoteText": "Every new day is another chance to change your life.",
    "quoteAuthor": ""
    }, {
    "quoteText": "Smile, breathe, and go slowly.",
    "quoteAuthor": "Thich Nhat Hanh"
    }, {
    "quoteText": "Nobody will believe in you unless you believe in yourself.",
    "quoteAuthor": "Liberace"
    }, {
    "quoteText": "Be kind whenever possible. It is always possible.",
    "quoteAuthor": "Dalai Lama"
    }, {
    "quoteText": "Do more than dream: work.",
    "quoteAuthor": "William Arthur Ward"
    }, {
    "quoteText": "No man was ever wise by chance.",
    "quoteAuthor": "Seneca"
    }, {
    "quoteText": "Some pursue happiness, others create it.",
    "quoteAuthor": ""
    }, {
    "quoteText": "It's easier to see the mistakes on someone else's paper.",
    "quoteAuthor": ""
    }, {
    "quoteText": "Think how hard physics would be if particles could think.",
    "quoteAuthor": "Murray Gell-Mann"
    }, {
    "quoteText": "Well begun is half done.",
    "quoteAuthor": "Aristotle"
    }, {
    "quoteText": "He that is giddy thinks the world turns round.",
    "quoteAuthor": "William Shakespeare"
    }, {
    "quoteText": "Don't ruin the present with the ruined past.",
    "quoteAuthor": "Ellen Gilchrist"
    }, {
    "quoteText": "Do something wonderful, people may imitate it.",
    "quoteAuthor": "Albert Schweitzer"
    }, {
    "quoteText": "We do what we do because we believe.",
    "quoteAuthor": ""
    }, {
    "quoteText": "Great talent finds happiness in execution.",
    "quoteAuthor": "Johann Wolfgang von Goethe"
    }, {
    "quoteText": "Do one thing every day that scares you.",
    "quoteAuthor": "Eleanor Roosevelt"
    }, {
    "quoteText": "If you cannot be silent be brilliant and thoughtful.",
    "quoteAuthor": "Byron Pulsifer"
    }, {
    "quoteText": "Smile, breathe, and go slowly.",
    "quoteAuthor": "Thich Nhat Hanh"
    }, {
    "quoteText": "Who looks outside, dreams; who looks inside, awakes.",
    "quoteAuthor": "Carl Jung"
    }, {
    "quoteText": "What we think, we become.",
    "quoteAuthor": "Buddha"
    }, {
    "quoteText": "The shortest answer is doing.",
    "quoteAuthor": "Lord Herbert"
    }, {
    "quoteText": "All our knowledge has its origins in our perceptions.",
    "quoteAuthor": "Leonardo da Vinci"
    }, {
    "quoteText": "He is able who thinks he is able.",
    "quoteAuthor": "Buddha"
    }, {
    "quoteText": "The harder you fall, the higher you bounce.",
    "quoteAuthor": ""
    }, {
    "quoteText": "Trusting our intuition often saves us from disaster.",
    "quoteAuthor": "Anne Wilson Schaef"
    }, {
    "quoteText": "Truth is powerful and it prevails.",
    "quoteAuthor": "Sojourner Truth"
    }, {
    "quoteText": "Talk doesn't cook rice.",
    "quoteAuthor": "Chinese proverb"
    }]

export default function Quote_2() {


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