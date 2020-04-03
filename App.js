import React from 'react';
import {Text, View, Stylesheet} from 'react-native';

const styles = StyleSheet.create({
  center:{
    alignItems:'center'
  }
})
 
function janQuarantineGreetings(props){

return (

   <View style = {styles.center}>
      <text> Ssuuuuup {props.name}! I haven't seen you since the plague </text>
   </View>

);

}

function salaamz(){
 return (
  <view style = { {stylescenter}, {top50}} >
    <janQuarantineGreetings  janic />
    <janQuarantineGreetings   />
    <janQuarantineGreetings    />
    <janQuarantineGreetings   />

  </view>

 );


}