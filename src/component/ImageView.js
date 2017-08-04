import React, { Component } from 'react';
import {
    Image,
    TouchableHighlight
} from 'react-native';

import Color from '../utility/Color'

export default class ImageView extends Component{
    render(){
        return (
            <TouchableHighlight onPress={this.props.onPress} underlayColor={Color.transparent}>
                <Image {...this.props} // Inherit any props passed to it; e.g., color, title
                />
            </TouchableHighlight>
        );
    }
}