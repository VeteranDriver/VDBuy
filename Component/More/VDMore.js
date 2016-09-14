/**
 * Created by liyanbo on 16/9/12.
 */

import React ,{Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

var More = React.createClass ({
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    更多
                </Text>
            </View>
        )
    }
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e8e8e8'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 100,
    },

})

module.exports = More;