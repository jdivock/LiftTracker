'use strict';

var React = require('react-native'),
    Parse = require('parse').Parse,
    ParseReact = require('parse-react');

var {
    View,
    TextInput,
    StyleSheet,
    TouchableHighlight,
    PickerIOS,
    Text
} = React;

var styles = StyleSheet.create({
    baseTextInput: {
        marginTop: 60,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        alignSelf: 'center'
    },
    button: {
        height: 36,
        backgroundColor: '#48BBEC',
        borderColor: '#48BBEC',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        alignSelf: 'stretch',
        justifyContent: 'center'
    }
});

var LIFT_TYPES = [
    'Squat',
    'Bench',
    'Deadlift'
];


// TODO: figure out what the fuck is going on with PickerIO and
// Convert inputs to it
/*
   <PickerIOS>
   <PickerIOS.Item key="Squat" value="Squat" label="Test 1"/>
   <PickerIOS.Item key="Deadlift" value="Deadlift" label="Test 2"/>
   <PickerIOS.Item key="Bench" value="Bench" label="Test 3"/>
   </PickerIOS>
 */

Parse.initialize("b6CKF1yyr40lUtp3o390OWxXQzKaK2SIFkNpmPUZ", "005j2FySLT2VC1tuWkendwiCqcw5msCKsXMwVQnm");


var Home = React.createClass({
    mixins: [ParseReact.Mixin],

    observe: function(){
        return {
            liftEntries: (new Parse.Query('LiftEntries'))
        };
    },
    getInitialState: function(){
        return {
            liftType: null,
            sets: 0,
            weight: 0
        };
    },
    onPress: function(){
        ParseReact.Mutation.Create('LiftEntries', {
            LiftType: this.state.liftType,
            Sets: +this.state.sets,
            Reps: +this.state.reps,
            weight: +this.state.weight,
            unit: 'lb',
            date: new Date()
        }).dispatch();
    },
    render: function(){
        return (
            <View>
                <Text>Lift:</Text>
                <TextInput style={styles.baseTextInput}
                           keyboardType='text'
                           onChangeText={(text) => this.setState({liftType: text})}
                />
                <Text>Sets:</Text>
                <TextInput style={styles.baseTextInput}
                           keyboardType='numeric'
                           onChangeText={(text) => this.setState({sets: text})}
                />
                <Text>Reps:</Text>
                <TextInput style={styles.baseTextInput}
                           keyboardType='numeric'
                           onChangeText={(text) => this.setState({reps: text})}
                />
                <Text>Weight:</Text>
                <TextInput style={styles.baseTextInput}
                           keyboardType='numeric'
                           onChangeText={(text) => this.setState({weight: text})}
                />

                <TouchableHighlight style={styles.button} onPress={this.onPress} underlayColor='#99d9f4'>
                    <Text style={styles.buttonText}>Save</Text>
                </TouchableHighlight>
            </View>

        );

    }

});

module.exports = Home;

