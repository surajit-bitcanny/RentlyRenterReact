import React, { Component } from 'react';
import {
    Button,
    View
} from 'react-native';

export default class RoundButton extends Component{
    render(){
        return (
            <View style = {{flex:1}}>
                <Button {...this.props} // Inherit any props passed to it; e.g., color, title
                />
            </View>
        );
    }
}