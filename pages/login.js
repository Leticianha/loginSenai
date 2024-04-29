import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    Keyboard,
    TouchableWithoutFeedback
} from 'react-native';
import React from 'react';
import * as Animatable from 'react-native-animatable';
import { Ionicons } from '@expo/vector-icons/'
import { useNavigation } from '@react-navigation/native';

export default function Login() {

    const navigation = useNavigation();

    return (
        <KeyboardAvoidingView style={{ flex: 1 }}>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={styles.container}>
                    <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                        <Text style={styles.message}>Login Bem-Sucedido!</Text>
                    </Animatable.View>
                    <Animatable.View animation="fadeInUp" style={styles.containerLogin}>
                        <Animatable.Image
                            delay={1000}
                            animation="flipInY"
                            source={require("../assets/imgLogin.png")}
                            style={styles.img}
                        />

                        <Animatable.View animation="flipInY" delay={1000}>
                            <Text style={styles.texto}>Seu login foi realizado com sucesso!</Text>
                        </Animatable.View>
                    </Animatable.View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#880000'
    },
    containerHeader: {
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%',
        flexDirection: 'row',
        alignItems: 'center'
    },
    message: {
        fontSize: 28,
        fontWeight: 'bold',
        color: "#FFF"
    },
    containerLogin: {
        backgroundColor: "#FFF",
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        alignItems: 'center',
        justifyContent: 'center'
    },
    img: {
        width: 333,
        height: 333
    },
    texto: {
        fontSize: 20
    }
})