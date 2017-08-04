import React, { Component } from 'react';
import {
    TextInput,
    View
} from 'react-native';

import Style from '../utility/Style'

export default class EditText extends Component{

    constructor(props) {
        super(props);
        this.state = { text: 'Useless Placeholder' };
    }

    render(){
        return(
            <View style={{padding: 10, flexDirection: 'row'}}>
                <TextInput {...this.props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
                    style={Style.textInput}
                />
            </View>
        );
    }
}