import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Platform
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';


var Home = require('../Home/VDHome');
var Merchant = require('../Merchant/VDMerchant');
var Mine = require('../Mine/VDMine');
var More = require('../More/VDMore');


var Main = React.createClass({

    // 初始化函数(变量是可以改变的,充当状态机的角色)
    getInitialState(){
        return{
            selectedTab:'home' // 默认是第一个
        }
    },

    render() {
        return (

            <TabNavigator>
                {/*----首页-----*/}
                <TabNavigator.Item
                    title = "首页"
                    renderIcon = {() => <Image source={{uri : 'icon_tabbar_homepage'}} style={styles.iconStyle} />}
                    renderSelectedIcon={() => <Image source={{uri : 'icon_tabbar_homepage_selected'}} style={styles.iconStyle}/>}
                    onPress={()=>{this.setState({selectedTab:'home'})}}
                    selected={this.state.selectedTab === 'home'}
                >
                    <Home />
                </TabNavigator.Item>

                {/*----商家-----*/}
                <TabNavigator.Item

                    title = "商家"
                    renderIcon = {() => <Image source={{uri : 'icon_tabbar_merchant_normal'}} style={styles.iconStyle} />}
                    renderSelectedIcon={() => <Image source={{uri : 'icon_tabbar_merchant_selected'}} style={styles.iconStyle}/>}
                    onPress={() => this.setState({ selectedTab: 'merchant' })}
                    selected={this.state.selectedTab === 'merchant'}
                >
                    <Merchant />
                </TabNavigator.Item>

                {/*----我的-----*/}
                <TabNavigator.Item

                    title = "我的"
                    renderIcon = {() => <Image source={{uri : 'icon_tabbar_mine'}} style={styles.iconStyle} />}
                    renderSelectedIcon={() => <Image source={{uri : 'icon_tabbar_mine_selected'}} style={styles.iconStyle}/>}
                    onPress={() => this.setState({ selectedTab: 'mine' })}
                    selected={this.state.selectedTab === 'mine'}
                >
                    <Mine />
                </TabNavigator.Item>

                {/*----更多-----*/}
                <TabNavigator.Item

                    title = "更多"
                    renderIcon = {() => <Image source={{uri : 'icon_tabbar_homepage'}} style={styles.iconStyle} />}
                    renderSelectedIcon={() => <Image source={{uri : 'icon_tabbar_homepage_selected'}} style={styles.iconStyle}/>}
                    onPress={() => this.setState({ selectedTab: 'more' })}
                    selected={this.state.selectedTab === 'more'}
                >
                    <More />
                </TabNavigator.Item>
            </TabNavigator>
        );
    }
});

const styles = StyleSheet.create({
    iconStyle:{
        width : Platform.OS === 'ios' ? 30 : 25,
        height : Platform.OS === 'ios' ? 30 : 25,
    },

    container: {
        flex: 1,
        backgroundColor: '#e8e8e8'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});

// 输出组件类
module.exports = Main;

