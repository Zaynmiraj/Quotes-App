import { View, Text,FlatList,StyleSheet, TouchableOpacity, Image , Share } from 'react-native'
import React from 'react'
import Clipboard from '@react-native-clipboard/clipboard';
import Snackbar from 'react-native-snackbar';
import Tts from 'react-native-tts';

  const Data = [{"quote":"Always bear in mind that your own resolution to succeed is more important than any one thing.","author":"Abraham Lincoln"},
  {"quote":"If A is success in life, then A equals x plus y plus z. Work is x; y is play; and z is keeping your mouth shut.","author":"Albert Einstein"},
  {"quote":"Try not to become a man of success but rather to become a man of value.","author":"Albert Einstein"},
  {"quote":"A great secret of success is to go through life as a man who never gets used up.","author":"Albert Schweitzer"},
  {"quote":"A discovery is said to be an accident meeting a prepared mind.","author":"Albert Szent-Gyorgyi"},
  {"quote":"To follow, without halt, one aim: There's the secret of success.","author":"Anna Pavlova"},
  {"quote":"If your success is not on your own terms, if it looks good to the world but does not feel good in your heart, it is not success at all.","author":"Anna Quindlen"},
  {"quote":"Success is the necessary misfortune of life, but it is only to the very unfortunate that it comes early.","author":"Anthony Trollope"},
  {"quote":"It is possible to fail in many ways...while to succeed is possible only in one way.","author":"Aristotle"},
  {"quote":"Of course there is no formula for success except perhaps an unconditional acceptance of life and what it brings.","author":"Arthur Rubinstein"},
  {"quote":"Find somebody to be successful for. Raise their hopes. Think of their needs.","author":"Barack Obama"},
  {"quote":"I've come to embrace the notion that I haven't done enough in my life. I've come to confirm that one's title, even a title like president of the United States, says very little about how well one's life has been led. No matter how much you've done or how successful you've been, there's always more to do, always more to learn, and always more to achieve.","author":"Barack Obama"},
  {"quote":"That's what building a body of work is all about. It's about the daily labor, the many individual acts, the choices large and small that add up over time, over a lifetime to a lasting legacy. It's about not being satisfied with the latest achievement, the latest gold star, because the one thing I know about a body of work is that it's never finished. It's cumulative. It deepens and expands with each day you give your best. You may have setbacks and you may have failures, but you're not done. You haven't even started.","author":"Barack Obama"},
  {"quote":"The leaders we revere and the businesses that last are generally not the result of a narrow pursuit of popularity or personal advancement, but of devotion to some bigger purpose. That's the hallmark of real success. The other trapping of success might be the by product of this larger mission, but it can't be the central thing.","author":"Barack Obama"},
  {"quote":"Why be a man when you can be a success?","author":"Bertolt Brecht"},{"quote":"I don't know the key to success, but the key to failure is trying to please everybody.","author":"Bill Cosby"},{"quote":"What's money? A man is a success if he gets up in the morning and goes to bed at night and in between does what he wants to do.","author":"Bob Dylan"},
  {"quote":"The person who makes a success of living is the one who see his goal steadily and aims for it unswervingly. That is dedication.","author":"Cecil B. DeMille"},{"quote":"Nothing succeeds like the appearance of success.","author":"Christopher Lasch"},{"quote":"There is only one success - to be able to spend your life in your own way.","author":"Christopher Morley"},{"quote":"There is only one success... to be able to spend your life in your own way, and not to give others absurd maddening claims upon it.","author":"Christopher Morley"},{"quote":"The man of virtue makes the difficulty to be overcome his first business, and success only a subsequent consideration.","author":"Confucius"},{"quote":"Real success is finding your lifework in the work that you love.","author":"David McCullough"},{"quote":"Envy was just the tax you paid on success.","author":"David Rockefeller"},{"quote":"Success in business requires training and discipline and hard work. But if you're not frightened by these things, the opportunities are just as great today as they ever were.","author":"Dr. David M. Burns"},{"quote":"Aim for success, not perfection. Never give up your right to be wrong, because then you will lose the ability to learn new things and move forward with your life.","author":"Dwight D. Eisenhower"},{"quote":"We succeed only as we identify in life, or in war, or in anything else, a single overriding objective, and make all other considerations bend to that one objective.","author":"Ellen DeGeneres"},{"quote":"When I was younger I thought success was something different. I thought, \" When I grow up, I want to be famous. I want to be a star. I want to be in movies. When I grow up I want to see the world, drive nice cars. I want to have groupies.\" But my idea of success is different today. For me, the most important thing in your life is to live your life with integrity and not to give into peer pressure, to try to be something that you're not. To live your life as an honest and compassionate person. To contribute in some way.","author":"Emily Dickinson"},{"quote":"Success is counted sweetest by those who ne'er succeed."}]

export default function Success() {


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
  borderLeftColor:'#ffde22',
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