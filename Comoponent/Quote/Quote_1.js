import { View, Text,FlatList,StyleSheet, TouchableOpacity, Image , Share } from 'react-native'
import React from 'react'
import Clipboard from '@react-native-clipboard/clipboard';
import Snackbar from 'react-native-snackbar';
import Tts from 'react-native-tts';

  const Data = [{
    "quoteText": "Genius is one percent inspiration and ninety-nine percent perspiration.",
    "quoteAuthor": "Thomas Edison"
    }, {
    "quoteText": "You can observe a lot just by watching.",
    "quoteAuthor": "Yogi Berra"
    }, {
    "quoteText": "A house divided against itself cannot stand.",
    "quoteAuthor": "Abraham Lincoln"
    }, {
    "quoteText": "Difficulties increase the nearer we get to the goal.",
    "quoteAuthor": "Johann Wolfgang von Goethe"
    }, {
    "quoteText": "Fate is in your hands and no one elses",
    "quoteAuthor": "Byron Pulsifer"
    }, {
    "quoteText": "Be the chief but never the lord.",
    "quoteAuthor": "Lao Tzu"
    }, {
    "quoteText": "Nothing happens unless first we dream.",
    "quoteAuthor": "Carl Sandburg"
    }, {
    "quoteText": "Well begun is half done.",
    "quoteAuthor": "Aristotle"
    }, {
    "quoteText": "Life is a learning experience, only if you learn.",
    "quoteAuthor": "Yogi Berra"
    }, {
    "quoteText": "Self-complacency is fatal to progress.",
    "quoteAuthor": "Margaret Sangster"
    }, {
    "quoteText": "Peace comes from within. Do not seek it without.",
    "quoteAuthor": "Buddha"
    }, {
    "quoteText": "What you give is what you get.",
    "quoteAuthor": "Byron Pulsifer"
    }, {
    "quoteText": "We can only learn to love by loving.",
    "quoteAuthor": "Iris Murdoch"
    }, {
    "quoteText": "Life is change. Growth is optional. Choose wisely.",
    "quoteAuthor": "Karen Clark"
    }, {
    "quoteText": "You'll see it when you believe it.",
    "quoteAuthor": "Wayne Dyer"
    }, {
    "quoteText": "Today is the tomorrow we worried about yesterday.",
    "quoteAuthor": ""
    }, {
    "quoteText": "It's easier to see the mistakes on someone else's paper.",
    "quoteAuthor": ""
    }, {
    "quoteText": "Every man dies. Not every man really lives.",
    "quoteAuthor": ""
    }, {
    "quoteText": "To lead people walk behind them.",
    "quoteAuthor": "Lao Tzu"
    }, {
    "quoteText": "Having nothing, nothing can he lose.",
    "quoteAuthor": "William Shakespeare"
    }, {
    "quoteText": "Trouble is only opportunity in work clothes.",
    "quoteAuthor": "Henry J. Kaiser"
    }, {
    "quoteText": "A rolling stone gathers no moss.",
    "quoteAuthor": "Publilius Syrus"
    }, {
    "quoteText": "Ideas are the beginning points of all fortunes.",
    "quoteAuthor": "Napoleon Hill"
    }, {
    "quoteText": "Everything in life is luck.",
    "quoteAuthor": "Donald Trump"
    }, {
    "quoteText": "Doing nothing is better than being busy doing nothing.",
    "quoteAuthor": "Lao Tzu"
    }, {
    "quoteText": "Trust yourself. You know more than you think you do.",
    "quoteAuthor": "Benjamin Spock"
    }, {
    "quoteText": "Study the past, if you would divine the future.",
    "quoteAuthor": "Confucius"
    }, {
    "quoteText": "The day is already blessed, find peace within it.",
    "quoteAuthor": ""
    }, {
    "quoteText": "From error to error one discovers the entire truth.",
    "quoteAuthor": "Sigmund Freud"
    }, {
    "quoteText": "Well done is better than well said.",
    "quoteAuthor": "Benjamin Franklin"
    }, {
    "quoteText": "Bite off more than you can chew, then chew it.",
    "quoteAuthor": "Ella Williams"
    }, {
    "quoteText": "Work out your own salvation. Do not depend on others.",
    "quoteAuthor": "Buddha"
    }, {
    "quoteText": "One today is worth two tomorrows.",
    "quoteAuthor": "Benjamin Franklin"
    }, {
    "quoteText": "Once you choose hope, anythings possible.",
    "quoteAuthor": "Christopher Reeve"
    }, {
    "quoteText": "God always takes the simplest way.",
    "quoteAuthor": "Albert Einstein"
    }, {
    "quoteText": "One fails forward toward success.",
    "quoteAuthor": "Charles Kettering"
    }, {
    "quoteText": "From small beginnings come great things.",
    "quoteAuthor": ""
    }, {
    "quoteText": "Learning is a treasure that will follow its owner everywhere",
    "quoteAuthor": "Chinese proverb"
    }, {
    "quoteText": "Be as you wish to seem.",
    "quoteAuthor": "Socrates"
    }, {
    "quoteText": "The world is always in movement.",
    "quoteAuthor": "V. Naipaul"
    }, {
    "quoteText": "Never mistake activity for achievement.",
    "quoteAuthor": "John Wooden"
    }, {
    "quoteText": "What worries you masters you.",
    "quoteAuthor": "Haddon Robinson"
    }, {
    "quoteText": "One faces the future with ones past.",
    "quoteAuthor": "Pearl Buck"
    }, {
    "quoteText": "Goals are the fuel in the furnace of achievement.",
    "quoteAuthor": "Brian Tracy"
    }, {
    "quoteText": "Who sows virtue reaps honour.",
    "quoteAuthor": "Leonardo da Vinci"
    }, {
    "quoteText": "Be kind whenever possible. It is always possible.",
    "quoteAuthor": "Dalai Lama"
    }, {
    "quoteText": "Talk doesn't cook rice.",
    "quoteAuthor": "Chinese proverb"
    }, {
    "quoteText": "He is able who thinks he is able.",
    "quoteAuthor": "Buddha"
    }, {
    "quoteText": "Be as you wish to seem.",
    "quoteAuthor": "Socrates"
    }, {
    "quoteText": "A goal without a plan is just a wish.",
    "quoteAuthor": "Larry Elder"
    }, {
    "quoteText": "To succeed, we must first believe that we can.",
    "quoteAuthor": "Michael Korda"
    }, {
    "quoteText": "Learn from yesterday, live for today, hope for tomorrow.",
    "quoteAuthor": "Albert Einstein"
    }, {
    "quoteText": "A weed is no more than a flower in disguise.",
    "quoteAuthor": "James Lowell"
    }, {
    "quoteText": "Do, or do not. There is no try.",
    "quoteAuthor": "Yoda"
    }, {
    "quoteText": "All serious daring starts from within.",
    "quoteAuthor": "Harriet Beecher Stowe"
    }, {
    "quoteText": "The best teacher is experience learned from failures.",
    "quoteAuthor": "Byron Pulsifer"
    }, {
    "quoteText": "Think how hard physics would be if particles could think.",
    "quoteAuthor": "Murray Gell-Mann"
    }, {
    "quoteText": "Love is the flower you've got to let grow.",
    "quoteAuthor": "John Lennon"
    }, {
    "quoteText": "Don't wait. The time will never be just right.",
    "quoteAuthor": "Napoleon Hill"
    }, {
    "quoteText": "One fails forward toward success.",
    "quoteAuthor": "Charles Kettering"
    }, {
    "quoteText": "Time is the wisest counsellor of all.",
    "quoteAuthor": "Pericles"
    }, {
    "quoteText": "You give before you get.",
    "quoteAuthor": "Napoleon Hill"
    }, {
    "quoteText": "Wisdom begins in wonder.",
    "quoteAuthor": "Socrates"
    }, {
    "quoteText": "Without courage, wisdom bears no fruit.",
    "quoteAuthor": "Baltasar Gracian"
    }, {
    "quoteText": "Change in all things is sweet.",
    "quoteAuthor": "Aristotle"
    }, {
    "quoteText": "What you fear is that which requires action to overcome.",
    "quoteAuthor": "Byron Pulsifer"
    }, {
    "quoteText": "The best teacher is experience learned from failures.",
    "quoteAuthor": "Byron Pulsifer"
    }]

export default function Quote_1() {


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