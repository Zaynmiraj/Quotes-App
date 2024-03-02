import { View, Text,FlatList,StyleSheet, TouchableOpacity, Image , Share } from 'react-native'
import React from 'react'
import Clipboard from '@react-native-clipboard/clipboard';
import Snackbar from 'react-native-snackbar';
import Tts from 'react-native-tts';

const Data = [{
  "quoteText": "Change your thoughts, change your life!",
  "quoteAuthor": ""
  }, {
  "quoteText": "Never ignore a gut feeling, but never believe that it's enough.",
  "quoteAuthor": "Robert Heller"
  }, {
  "quoteText": "Loss is nothing else but change,and change is Natures delight.",
  "quoteAuthor": "Marcus Aurelius"
  }, {
  "quoteText": "Someone is special only if you tell them.",
  "quoteAuthor": "Byron Pulsifer"
  }, {
  "quoteText": "Great talent finds happiness in execution.",
  "quoteAuthor": "Johann Wolfgang von Goethe"
  }, {
  "quoteText": "Today is the tomorrow you worried about yesterday.",
  "quoteAuthor": ""
  }, {
  "quoteText": "There is no way to happiness, happiness is the way.",
  "quoteAuthor": "Thich Nhat Hanh"
  }, {
  "quoteText": "The day always looks brighter from behind a smile.",
  "quoteAuthor": ""
  }, {
  "quoteText": "A beautiful thing is never perfect.",
  "quoteAuthor": ""
  }, {
  "quoteText": "No alibi will save you from accepting the responsibility.",
  "quoteAuthor": "Napoleon Hill"
  }, {
  "quoteText": "Argue for your limitations, and sure enough theyre yours.",
  "quoteAuthor": "Richard Bach"
  }, {
  "quoteText": "You can observe a lot just by watching.",
  "quoteAuthor": "Yogi Berra"
  }, {
  "quoteText": "Reality leaves a lot to the imagination.",
  "quoteAuthor": "John Lennon"
  }, {
  "quoteText": "A stumble may prevent a fall.",
  "quoteAuthor": ""
  }, {
  "quoteText": "He who talks more is sooner exhausted.",
  "quoteAuthor": "Lao Tzu"
  }, {
  "quoteText": "Well begun is half done.",
  "quoteAuthor": "Aristotle"
  }, {
  "quoteText": "He who is contented is rich.",
  "quoteAuthor": "Lao Tzu"
  }, {
  "quoteText": "Work out your own salvation. Do not depend on others.",
  "quoteAuthor": "Buddha"
  }, {
  "quoteText": "You can do it if you believe you can!",
  "quoteAuthor": "Napoleon Hill"
  }, {
  "quoteText": "What we achieve inwardly will change outer reality.",
  "quoteAuthor": "Plutarch"
  }, {
  "quoteText": "Our strength grows out of our weaknesses.",
  "quoteAuthor": "Ralph Waldo Emerson"
  }, {
  "quoteText": "We must become the change we want to see.",
  "quoteAuthor": "Mahatma Gandhi"
  }, {
  "quoteText": "Happiness is found in doing, not merely possessing.",
  "quoteAuthor": "Napoleon Hill"
  }, {
  "quoteText": "Put your future in good hands � your own.",
  "quoteAuthor": ""
  }, {
  "quoteText": "We choose our destiny in the way we treat others.",
  "quoteAuthor": "Wit"
  }, {
  "quoteText": "Time is the most valuable thing a man can spend.",
  "quoteAuthor": "Theophrastus"
  }, {
  "quoteText": "No snowflake in an avalanche ever feels responsible.",
  "quoteAuthor": "Voltaire"
  }, {
  "quoteText": "Smile, breathe, and go slowly.",
  "quoteAuthor": "Thich Nhat Hanh"
  }, {
  "quoteText": "Fortune favours the brave.",
  "quoteAuthor": "Virgil"
  }, {
  "quoteText": "I believe in one thing only, the power of human will.",
  "quoteAuthor": "Joseph Stalin"
  }, {
  "quoteText": "The more you know yourself, the more you forgive yourself.",
  "quoteAuthor": "Confucius"
  }, {
  "quoteText": "The best way out is always through.",
  "quoteAuthor": "Robert Frost"
  }, {
  "quoteText": "The mind unlearns with difficulty what it has long learned.",
  "quoteAuthor": "Seneca"
  }, {
  "quoteText": "I destroy my enemies when I make them my friends.",
  "quoteAuthor": "Abraham Lincoln"
  }, {
  "quoteText": "No garden is without its weeds.",
  "quoteAuthor": "Thomas Fuller"
  }, {
  "quoteText": "There is no failure except in no longer trying.",
  "quoteAuthor": "Elbert Hubbard"
  }, {
  "quoteText": "Kind words will unlock an iron door.",
  "quoteAuthor": "Turkish proverb"
  }, {
  "quoteText": "Problems are only opportunities with thorns on them.",
  "quoteAuthor": "Hugh Miller"
  }, {
  "quoteText": "Life is just a chance to grow a soul.",
  "quoteAuthor": "A. Powell Davies"
  }, {
  "quoteText": "Reality does not conform to the ideal, but confirms it.",
  "quoteAuthor": "Gustave Flaubert"
  }, {
  "quoteText": "If you can dream it, you can do it.",
  "quoteAuthor": "Walt Disney"
  }, {
  "quoteText": "Mountains cannot be surmounted except by winding paths.",
  "quoteAuthor": "Johann Wolfgang von Goethe"
  }, {
  "quoteText": "May our hearts garden of awakening bloom with hundreds of flowers.",
  "quoteAuthor": "Thich Nhat Hanh"
  }, {
  "quoteText": "Nobody will believe in you unless you believe in yourself.",
  "quoteAuthor": "Liberace"
  }, {
  "quoteText": "Fortune befriends the bold.",
  "quoteAuthor": "John Dryden"
  }, {
  "quoteText": "Keep true to the dreams of thy youth.",
  "quoteAuthor": "Friedrich von Schiller"
  }, {
  "quoteText": "You're never a loser until you quit trying.",
  "quoteAuthor": "Mike Ditka"
  }, {
  "quoteText": "Science is organized knowledge. Wisdom is organized life.",
  "quoteAuthor": "Immanuel Kant"
  }, {
  "quoteText": "Knowing is not enough; we must apply!",
  "quoteAuthor": "Johann Wolfgang von Goethe"
  }, {
  "quoteText": "Strong beliefs win strong men, and then make them stronger.",
  "quoteAuthor": "Richard Bach"
  }, {
  "quoteText": "Autumn is a second spring when every leaf is a flower.",
  "quoteAuthor": "Albert Camus"
  }, {
  "quoteText": "If you surrender to the wind, you can ride it.",
  "quoteAuthor": "Toni Morrison"
  }, {
  "quoteText": "Character develops itself in the stream of life.",
  "quoteAuthor": "Johann Wolfgang von Goethe"
  }, {
  "quoteText": "We must become the change we want to see.",
  "quoteAuthor": "Mahatma Gandhi"
  }, {
  "quoteText": "Keep yourself to the sunshine and you cannot see the shadow.",
  "quoteAuthor": "Helen Keller"
  }, {
  "quoteText": "Write your plans in pencil and give God the eraser.",
  "quoteAuthor": "Paulo Coelho"
  }, {
  "quoteText": "Inspiration exists, but it has to find us working.",
  "quoteAuthor": "Pablo Picasso"
  }, {
  "quoteText": "All serious daring starts from within.",
  "quoteAuthor": "Harriet Beecher Stowe"
  }, {
  "quoteText": "Pick battles big enough to matter, small enough to win.",
  "quoteAuthor": "Jonathan Kozol"
  }, {
  "quoteText": "Don't compromise yourself. You are all you've got.",
  "quoteAuthor": "Janis Joplin"
  }, {
  "quoteText": "He that is giddy thinks the world turns round.",
  "quoteAuthor": "William Shakespeare"
  }, {
  "quoteText": "A short saying oft contains much wisdom.",
  "quoteAuthor": "Sophocles"
  }, {
  "quoteText": "Difficulties are things that show a person what they are.",
  "quoteAuthor": "Epictetus"
  }, {
  "quoteText": "When you doubt your power, you give power to your doubt.",
  "quoteAuthor": "Honore de Balzac"
  }, {
  "quoteText": "The cause is hidden. The effect is visible to all.",
  "quoteAuthor": "Ovid"
  }, {
  "quoteText": "A weed is no more than a flower in disguise.",
  "quoteAuthor": "James Lowell"
  }]
export default function Quote_4() {


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