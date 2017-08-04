import React, { Component } from 'react'
import {
    View,
    DrawerLayoutAndroid,
    Text,
    Image,
    StyleSheet,
    TextInput,
    Button,
    ScrollView
} from 'react-native';

import Color from '../utility/Color'
import  Style from '../utility/Style'
import RoundButton from '../component/RoundButton'
import BackgroundImage from '../component/BackgroundImage'
import EditText from '../component/EditText'
import Snackbar from 'react-native-snackbar';
import ImageView from '../component/ImageView'
import CustomButton from '../component/CustomButton'

//import LoginModel from "../model/Login"
import Preference from "../utility/Preference"

export default class Login extends Component{

    static navigationOptions = {
        title: 'Login',
        //headerTintColor: Color.primaryColor
    };

    constructor(props){
        super(props);
        this.state = {
            email:"",
            password:"",
            environment:true,//true=production,false=staging
            stagColor:Color.Grey,
            prodColor:Color.green,
            showEnvBtn:false
        }

        if(this.isProduction()){
            this.state.showEnvBtn = false;
        } else{
            this.state.showEnvBtn = true;
        }
    }

    isProduction(){
        if(this.state.environment === true){
            return true;
        } else{
            return false;
        }
    }

    setProductionEnvironment(){
        this.setState({
            environment:true,
            stagColor:Color.Grey,
            prodColor:Color.green
        });
    }

    setStagingEnvirinment(){
        this.setState({
            environment:false,
            stagColor:Color.green,
            prodColor:Color.Grey
        });
    }

    render(){
        const {navigate} = this.props.navigation;
        return (
            <BackgroundImage source={require('../img/background.png')}>

                <View style={styles.root}>

                    <ImageView source={require('../img/logo.png')}
                               style={styles.rentlyIcon}
                               resizeMode="contain"
                               onPress={this.onPressIcon.bind(this)}
                    />

                    <EditText placeholder="Enter Email"
                              onChangeText={(email) => this.setState({email})}
                              value={this.state.email}
                    />
                    <EditText placeholder="Enter Password"
                              onChangeText={(password) => this.setState({password})}
                              value={this.state.password}
                    />

                    <View style={[{padding: 10,flexDirection:"row"},this.state.showEnvBtn?{}:Style.hidden]}>

                        <CustomButton onPress={this.onPressStaging.bind(this)}
                                      title="Staging"
                                      color={this.state.stagColor}
                        />
                        <View style = {{flex:0.1}}/>
                        <CustomButton onPress={this.onPressProduction.bind(this)}
                                      title="Production"
                                      color={this.state.prodColor}/>
                    </View>


                    <View style={{padding: 10,flexDirection:"row"}}>

                        <RoundButton onPress={this.onPressEnter.bind(this)}
                                     title="Enter"
                                     color={Color.unlock} />
                        <View style = {{flex:0.1}}/>
                        <RoundButton onPress={this.onPressTakeATour.bind(this)}
                                     title="Take a tour"
                                     color={Color.unlock} />
                    </View>

                </View>
            </BackgroundImage>
        );
    }

    renderEnvironmentButtons(){
        /*if(this.isProduction()){
         return;
         }*/
        <View style={[{padding: 10,flexDirection:"row"},this.state.showEnvBtn?Style.hidden:{}]}>

            <CustomButton onPress={this.onPressStaging.bind(this)}
                          title="Staging"
                          color={this.props.stagColor}
            />
            <View style = {{flex:0.1}}/>
            <CustomButton onPress={this.onPressProduction.bind(this)}
                          title="Production"
                          color={this.props.prodColor}/>
        </View>
    }

    onButtonPress() {
        console.log("You tapped the button!");
    }

    onPressEnter(){
        console.log("Enter pressed");
        //const { navigate } = this.props.navigation;
        //this.props.navigation.navigate('SelectHome')
        //console.log(Object.keys(this.props.navigation));

        /*let api = new LoginModel();
        api.login("surajit@bitcanny.com","aaaaaaaa",(error,response)=>{
            console.log(response)
            Preference.setItem(Preference.KEY_ACCESS_TOKEN,response.access_token);
        });*/
    }

    handleLoginResponse(response){
        console.log(response);
    }

    onPressTakeATour(){
        console.log("Take A Tour pressed");
        Preference.getItem(Preference.KEY_ACCESS_TOKEN,(val)=>{alert(val)})
    }

    onPressIcon(){
        //this.showMessage("dsbdsds");
        let currTime = new Date().getTime();
        if(lastClickTime>0){
            let timeDiff = currTime - lastClickTime;
            console.log(timeDiff);
            if(timeDiff<500){
                clickCount++;
                lastClickTime = currTime;
            } else{
                clickCount = 0;
                lastClickTime = 0;
            }

            if(clickCount>10){
                clickCount = 0;
                lastClickTime = 0;
                this.setState({showEnvBtn:true})
            }

        } else{
            lastClickTime = new Date().getTime();
            clickCount = 0;
        }
    }

    onPressStaging(){
        this.setStagingEnvirinment();
    }

    onPressProduction(){
        this.setProductionEnvironment();
    }

    showMessage(msg){
        Snackbar.show({
            title:msg,
            duration: Snackbar.LENGTH_SHORT
        });
    }
};

var lastClickTime = 0;
var clickCount = 0;

const styles = StyleSheet.create({
    rentlyIcon: {
        width: 160,
        height: 160,
        marginTop: 50
    },
    root: {
        flex: 1,
        flexDirection : "column",
        alignItems: 'center'
    }
});
