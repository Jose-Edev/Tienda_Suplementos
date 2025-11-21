import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';
import firebaseApp from '../credenciales';

export default function IniciarSesion({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    // Limpia el mensaje de error al cargar el componente
    setErrorMessage('');
  }, []);

  const iniciarSesion = async () => {
    try {
      const db = getFirestore(firebaseApp);
      const q = query(collection(db, 'usuarios'), where('Correo_electronico', '==', email), where('Contraseña', '==', password));
      const querySnapshot = await getDocs(q);
      const usuarios = [];
      querySnapshot.forEach((doc) => {
        usuarios.push(doc.data());
      });
      if (usuarios.length > 0) {
        // Si hay resultados en la consulta, redirige a la pantalla "Pinicial2"
        navigation.reset({
          index: 0,
          routes: [{ name: 'Pinicial2' }]
        });
      } else {
        setErrorMessage('No existe el usuario');
      }
    } catch (error) {
      console.error(error);
      setErrorMessage('Hubo un error al iniciar sesión');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.texto}>Inicio de Sesión</Text>
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
      <TouchableOpacity style={styles.button} onPress={iniciarSesion}>
        <Text style={styles.buttonText}>Iniciar Sesión</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Registrarme')}>
        <Text style={styles.registrarText}>¿No tienes una cuenta? Regístrate aquí</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
    paddingVertical: 20,
  },
  texto: {
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  registrarText: {
    marginTop: 20,
    fontSize: 16,
    color: 'blue',
    textDecorationLine: 'underline',
  },
  errorMessage: {
    color: 'red',
    marginBottom: 10,
  },
});
