import React, { useState } from 'react'; 
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { firestore } from '../credenciales'; // Asegúrate de que la ruta sea correcta
import { collection, addDoc } from 'firebase/firestore';

export default function Registrarme({ navigation }) {
    const [Nombre_Completo, setNombre_Completo] = useState('');
    const [Correo_electronico, setCorreo_electronico] = useState('');
    const [Nombre_usuario, setNombre_usuario] = useState('');
    const [Contraseña, setContraseña] = useState('');

    const registrarUsuario = async () => {
        try {
            await addDoc(collection(firestore, 'usuarios'), {
                Nombre_Completo: Nombre_Completo,
                Correo_electronico: Correo_electronico,
                Nombre_usuario: Nombre_usuario,
                Contraseña: Contraseña // No se recomienda almacenar contraseñas en texto plano
            });
            Alert.alert("Éxito", "Usuario registrado correctamente");
            // Redirige a la pantalla de inicio de sesión o a donde necesites
            navigation.navigate('IniciarSesion');
        } catch (error) {
            Alert.alert("Error", "No se pudo registrar el usuario: " + error.message);
        }
    };

    return (
        <View style={styles.container1}>
            <Text style={styles.texto1}>Registrarme</Text>
            <TextInput
                style={styles.input1}
                placeholder="Nombre completo"
                value={Nombre_Completo}
                onChangeText={setNombre_Completo}
            />
            <TextInput
                style={styles.input1}
                placeholder="Correo electrónico"
                value={Correo_electronico}
                onChangeText={setCorreo_electronico}
            />
            <TextInput
                style={styles.input1}
                placeholder="Nombre de usuario"
                value={Nombre_usuario}
                onChangeText={setNombre_usuario}
            />
            <TextInput
                style={styles.input1}
                placeholder="Contraseña"
                secureTextEntry={true}
                value={Contraseña}
                onChangeText={setContraseña}
            />
            <TouchableOpacity
                style={styles.button1}
                onPress={registrarUsuario} // Llama a la función al presionar
            >
                <Text style={styles.buttonText1}>Registrarme</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('IniciarSesion')}
            >
                <Text style={styles.registrarText1}>¿Ya tienes una cuenta? Inicia sesión aquí</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightblue',
        padding: 20,
    },
    texto1: {
        fontWeight: 'bold',
        fontSize: 24,
        marginBottom: 20,
        textAlign: 'center',
    },
    input1: {
        height: 40,
        width: '100%',
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        padding: 10,
        borderRadius: 20,
    },
    button1: {
        backgroundColor: 'blue',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
    },
    buttonText1: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    registrarText1: {
        marginTop: 20,
        fontSize: 16,
        color: 'blue',
        textDecorationLine: 'underline',
    },
});
