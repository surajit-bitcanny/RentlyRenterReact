import React, { Component } from 'react';
import {
    Text,
    TouchableHighlight,
    StyleSheet
} from 'react-native';

import Color from '../utility/Color'

export default class RoundButton extends Component{
  render(){
    return(
      <TouchableHighlight onPress={this.props.onPress}
                          style={[styles.submit,this.props.color?{backgroundColor:this.props.color}:{}]}>
        <Text style={styles.submitText}>{this.props.title}</Text>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
    submit:{
        flex:1,
        paddingTop:10,
        paddingBottom:10,
        backgroundColor:Color.primaryColor,
        borderRadius:4,
        borderWidth: 1,
        borderColor: Color.white
    },
    submitText:{
        color:Color.white,
        textAlign:'center',
    }
});
