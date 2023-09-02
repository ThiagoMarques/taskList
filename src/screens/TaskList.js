import React, { Component } from 'react'
import { View, Text, SafeAreaView, ImageBackground, StyleSheet } from 'react-native'
import todayImage from '../../assets/imgs/today.jpg'

export default class TaskList extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ImageBackground source={todayImage} style={styles.background}>

                </ImageBackground>
                <View style={styles.taskList}>
                <View>
                    <Text>TaskList</Text>
                </View>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        flex: 3
    },
    taskList: {
        flex: 7
    }
})