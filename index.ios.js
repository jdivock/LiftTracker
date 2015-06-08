/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native'),
    Home = require('./tabs/Home.ios'),
    PickerExample = require('./tabs/PickerExample.ios');

var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TabBarIOS,
    StatusBarIOS
} = React;

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    }
});

var LiftTracker = React.createClass({
    getInitialState() {
        return {
            selectedTab: 'home'
        };
    },
    changeTab(tabName){
        StatusBarIOS.setStyle(tabName === 'home' ? 1 : 0);
        this.setState({
            selectedTab: tabName
        });
    },
    render: function(){
        return (
            <TabBarIOS>
                <TabBarIOS.Item title="LiftTracker"
                                icon={ require('image!barbell') }
                                onPress={ () =>
                                         this.changeTab('home') }
                                selected={this.state.selectedTab ===
                                          'home'}>
                    <Home/>
                </TabBarIOS.Item>
                <TabBarIOS.Item title="Profile"
                                icon={ require('image!profile') }
                                onPress={ () =>
                                         this.changeTab('profile') }
                                selected={this.state.selectedTab ===
                                          'profile'}>
                    <Text>Profile!</Text>
                </TabBarIOS.Item>
                <TabBarIOS.Item title="Settings"
                                icon={require('image!settings')}
                                onPress={ () =>
                                         this.changeTab('settings') }
                                selected={this.state.selectedTab ===
                                          'settings'}>
                    <View style={styles.pageView}>
                        <Text>Settings</Text>
                    </View>
                </TabBarIOS.Item>
            </TabBarIOS>
        );
    }
});


AppRegistry.registerComponent('LiftTracker', () => LiftTracker);
