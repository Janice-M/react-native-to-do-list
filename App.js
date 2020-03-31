import React from 'react';
import {Text, View, Stylesheet} from 'react-native';

const styles = StyleSheet.create({
  center:{
    alignItems:'center'
  }
})
 
function janQuarantineGreetings(props){

return (

 <view style = {styles.center}>
   <text> Ssuuuuup {props.name}! I haven't seen you since the plague <text/>
</view>

);



}


 
 
 

