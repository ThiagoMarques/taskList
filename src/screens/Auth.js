import React, {Component} from "react";
import { ImageBackground, Text, StyleSheet, View, SafeAreaView, TextInput, TouchableOpacity } from "react-native";

import backgroundImage from '../../assets/imgs/login.jpg'
import commonStyles from "../commonStyles";

export default class Auth extends Component {

    state = {
        email: '',
        password: ''
    }

    render() {
        return (
            <ImageBackground source={backgroundImage} style={styles.background}>
                <Text style={StyleSheet.title}>Tasks</Text>
                <SafeAreaView style={styles.formContainer}>
                    <View >
                        <TextInput 
                        placeholder="E-mail" 
                        value={this.state.email}
                        style={styles.input}
                        onChangeText={email => this.setState({email})}
                        ></TextInput>
                        <TextInput 
                        placeholder="Senha" 
                        value={this.state.password}
                        style={styles.input}
                        onChangeText={password => this.setState({password})}
                        ></TextInput>
                        <TouchableOpacity>
                            <SafeAreaView style={styles.button}>
                                <View>
                                    <Text style={styles.buttonText}>Entrar</Text>
                                </View>
                            </SafeAreaView>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.secondary,
        fontSize: 70,
        marginBottom: 10
    },
    input: {
        marginTop: 10,
        backgroundColor: '#FFF'
    },
    formContainer: {
        backgroundColor: 'rgba(0,0,0,0.8)',
        padding: 20,
        width: '90%'
    },
    button: {
        backgroundColor: '#080',
        marginTop: 10,
        padding: 10,
        alignItems: 'center'
    },
    buttonText: {
        fontFamily: commonStyles.fontFamily,
        color: '#FFF',
        fontSize: 20
    }
})