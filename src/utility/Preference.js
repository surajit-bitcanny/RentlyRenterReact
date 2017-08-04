/**
 * Created by bitcanny on 20/6/17.
 */

import {AsyncStorage} from 'react-native'

export default class Preference{

    static KEY_USERNAME = "username";
    static KEY_PASSWORD = "password";
    static KEY_ACCESS_TOKEN = "access_token";

    static setUserCredentials(userName,password){
        setItem(this.KEY_USERNAME,userName);
        setItem(this.KEY_PASSWORD,password);
    }

    static setItem(key,val,callback){
        try{
            AsyncStorage.setItem(key,val);
        } catch (error){
            console.log(error);
        }
    }

    /**
     *
     * @param key
     * @param callback ?(value: ?Value)
     */
    static getItem(key,callback){
        let value = null;
        try{
            value = AsyncStorage.getItem(key)
                .then(value => callback(value))
                .done();
        } catch (error){
            console.log(error);
        }
        return value;
    }
}
