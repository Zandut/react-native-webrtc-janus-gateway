import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  TextInput,
  ListView,
  ScrollView,
  Dimensions,
  Image, 
  Button, 
  Alert
} from 'react-native';

import ClassRoom from './classroom';
import Main from './index';



export default class JoinRoom extends Component{



    constructor(props) {
        super(props);
        this.state = {
            roomid: '',
            classroom_visible: false
		}
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            
                <View style={styles.container}>
                
                    <TextInput
                        style={styles.textRoomId}
                        placeholder="Enter the room id!"
                        onChangeText={(roomid) => this.setState({roomid})}
                    />
                    <View style={styles.buttonJoinRoom}>
                        <Button
                            onPress={() => navigate('ClassRoom', { roomId: this.state.roomid})}
                            title="Join Room"
                            color="#009e6e"
                            style={styles.buttonJoinRoom}
                            
                        />
                    </View>
                
                </View>
            
    
        );
    }
};

let styles = StyleSheet.create({
	container: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
    },  

    textRoomId: {
        height: 40, 
        width : 250,
    },

    buttonJoinRoom: {
        width: 250
    }

    
});


