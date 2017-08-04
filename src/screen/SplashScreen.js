import React, { Component } from 'react'
import {
    Image
} from 'react-native';

import BackgroundImage from '../component/BackgroundImage'

const Dimensions = require('Dimensions');
const window = Dimensions.get('window');

export default class Login extends Component{

    static navigationOptions = {
        title: ""
    };

    constructor(props){
        super(props)
        setTimeout(()=>{
            const { navigate } = this.props.navigation;
            navigate('Login');
        },3000);
    }

    render(){

        return (
            <BackgroundImage source={require('../img/background.png')}
                             style={{justifyContent: 'center',alignItems: 'center'}}>
                    <Image
                        source={require('../img/logo.png')}
                        style={{width: "80%",height: 150}}
                        resizeMode="contain"/>

            </BackgroundImage>
        );
    }

}