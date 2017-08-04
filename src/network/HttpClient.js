import React from 'react'
import Preference from '../utility/Preference'

export default class HttpClient{

    constructor(){
        this.myHeaders = new Headers();
        this.myHeaders.append('Accept','application/json');
        this.myHeaders.append('Content-Type','application/json');
        this.getAccessToken();
    }

    getAccessToken(){
        Preference.getItem(Preference.KEY_ACCESS_TOKEN,(value)=>{
            this.accessToken = value;
        })
    }

    get(url,bRequitreHeader){
        this.setupHeader(bRequitreHeader);
        return this.callAPI(url,'GET',{})
    }

    put(url,body,bRequitreHeader){
        this.setupHeader(bRequitreHeader);
        return this.callAPI(url,'PUT',body)
    }

    post(url,body,bRequitreHeader){
        this.setupHeader(bRequitreHeader);
        return this.callAPI(url,'POST',body)
    }

    delete(url,body,bRequitreHeader){
        this.setupHeader(bRequitreHeader);
        return this.callAPI(url,'DELETE',body)
    }

    setupHeader(bRequitreHeader){
        if(bRequitreHeader){
            this.myHeaders.append('Authorization',"Bearer "+this.accessToken);
        }
    }

    callAPI(url,method,body) {
        if (method.toLowerCase() == 'get') {
            return fetch(url, {
                method: method,
                headers: this.myHeaders
            }).then(response => this.checkResponse(response))
        } else {
            return fetch(url, {
                method: method,
                headers: this.myHeaders,
                body: JSON.stringify(body)
            }).then(response => this.checkResponse(response))
        }

    }

    checkResponse(response){
        console.log("Response Status "+response.status);
        if (response.status >= 200 && response.status < 300) {
            return response;
        } else if(response.status == 401){

            console.log("Access token expired");
            return response;

        } else if(response.status == 403){
            console.log("Home access denied");
            return response;
        }
        else{
            let error = new Error(response.statusText);
            error.response = response;
            throw error;
        }
    }
}

HttpClient.propTypes = {
    url: React.PropTypes.string,
    body: React.PropTypes.object,
    bRequitreHeader: React.PropTypes.bool,
    token: React.PropTypes.string
}