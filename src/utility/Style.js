import { StyleSheet } from 'react-native';

import Color from './Color'

var Style = StyleSheet.create({

    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
    },

    textInput:{
        flex:1,
        borderColor:Color.black,
        backgroundColor:Color.Grey_50,
        borderWidth: 1,
        borderStyle: 'solid',
        fontSize:15,
        borderRadius: 2,
        //width:40
    },

    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    displayContainer: {
        flex: 2,
        backgroundColor: '#193441',
        justifyContent: 'center'
    },

    displayText: {
        color: 'white',
        fontSize: 38,
        fontWeight: 'bold',
        textAlign: 'right',
        padding: 20
    },

    inputContainer: {
        flex: 8,
        backgroundColor: '#3E606F'
    },

    box : {
      borderColor: 'red',
      backgroundColor: '#fff',
      borderWidth: 1,
      padding: 10
    },

    inputButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.5,
        borderColor: '#91AA9D'
    },

    inputButtonHighlighted: {
        backgroundColor: '#193441'
    },

    inputButtonText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white'
    },

    inputRow: {
        flex: 1,
        flexDirection: 'row'
    },

    hidden: {
        width: 0,
        height: 0,
    }
});

export default Style;
