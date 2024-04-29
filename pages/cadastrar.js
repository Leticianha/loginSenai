import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    Keyboard,
    TouchableWithoutFeedback,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Ionicons } from '@expo/vector-icons/'
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ScrollView } from 'react-native-gesture-handler';

export default function Cadastrar() {

    const navigation = useNavigation();
    const [nome, setNome] = React.useState('');
    const [usuario, setUsuario] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [senha, setSenha] = React.useState('');

    const confirmacao = async () => { // Adicione async aqui
        if (!nome || !usuario || !email || !senha) {
            alert('Por favor, preencha todos os campos.');
        } else {
            try {
                await AsyncStorage.setItem('nome', nome); // Salve os dados no AsyncStorage
                await AsyncStorage.setItem('usuario', usuario);
                await AsyncStorage.setItem('email', email);
                await AsyncStorage.setItem('senha', senha);
                navigation.navigate('login');
            } catch (error) {
                console.error('Erro ao salvar os dados:', error);
            }
        }
    };

    return (
            <KeyboardAvoidingView style={{ flex: 1 }}>
                <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                    <View style={styles.container}>
                        <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                            <TouchableOpacity
                                style={styles.voltar}
                                onPress={() => navigation.navigate('index')}>
                                <Ionicons size={30} color={"#fff"} name="chevron-back-outline" />
                            </TouchableOpacity>
                            <Text style={styles.message}>Cadastrar</Text>
                        </Animatable.View>
                        <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                            <Text style={styles.title}>Nome</Text>
                            <TextInput
                                placeholder='Digite seu nome...'
                                style={styles.input}
                                value={nome}
                                onChangeText={setNome}
                            />
                            <Text style={styles.title}>Usuário</Text>
                            <TextInput
                                placeholder='Digite seu usuário...'
                                style={styles.input}
                                value={usuario}
                                onChangeText={setUsuario}
                            />
                            <Text style={styles.title}>E-mail</Text>
                            <TextInput
                                placeholder='Digite um email...'
                                style={styles.input}
                                value={email}
                                onChangeText={setEmail}
                            />
                            <Text style={styles.title}>Senha</Text>
                            <TextInput
                                placeholder='Sua senha'
                                style={styles.input}
                                value={senha}
                                onChangeText={setSenha}
                            />
                            <TouchableOpacity style={styles.button} onPress={confirmacao}>
                                <Text style={styles.buttonText}>Acessar</Text>
                            </TouchableOpacity>
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
    voltar: {
        paddingRight: 20
    },
    message: {
        fontSize: 28,
        fontWeight: 'bold',
        color: "#FFF"
    },
    containerForm: {
        backgroundColor: "#FFF",
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: "5%",
        paddingEnd: "5%"
    },
    title: {
        fontSize: 20,
        marginTop: 28,
    },
    input: {
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16
    },
    button: {
        backgroundColor: '#880000',
        width: '100%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: "#FFF",
        fontSize: 18,
        fontWeight: 'bold'
    },
})
