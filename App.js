import * as React from 'react';
import { Text, View, StyleSheet, Image, Button, TouchableOpacity, TextInput, ScrollView,flatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import Pinicial from './screens/Pinicial';
import Pinicial2 from './screens/Pinicial2';
import IniciarSesion from './screens/IniciarSesion';
import Registrarme from './screens/Registrarme';
import Tienda from './screens/Tienda';
import Eventos from './screens/Eventos';
import ComoIniciar from './screens/ComoIniciar';
import Datos from './screens/Datos';
import { getDatabase, ref, onValue } from "firebase/database";

// Importa la aplicación Firebase
import initializeApp from './credenciales'; // Asegúrate de que la ruta sea correcta

// Configuración de navegación
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Pinicial">
        <Stack.Screen
          name="Pinicial"
          component={Pinicial}
          options={({ navigation }) => ({
            headerRight: () => (
              <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('IniciarSesion')}
                >
                  <Image
                    source={{ uri: 'https://w7.pngwing.com/pngs/946/556/png-transparent-computer-icons-login-user-profile-client-smiley-%D0%B7%D0%BD%D0%B0%D1%87%D0%BA%D0%B8-windows-10-thumbnail.png' }}
                    style={{ width: 30, height: 30, marginRight: 10 }}
                  />
                </TouchableOpacity>
                
              </View>
            ),
            headerCenter: () => (
              <View style={{ flexDirection: 'row' }}>
              <Text style={styles.text}>BIENVENIDO</Text>
              </View>
            ),
          })}
        />
        <Stack.Screen name="IniciarSesion" component={IniciarSesion} />
        <Stack.Screen name="Registrarme" component={Registrarme} />
        <Stack.Screen name="Tienda" component={Tienda} />
        <Stack.Screen name="Eventos" component={Eventos} />
        <Stack.Screen name="Como puedo Iniciar" component={ComoIniciar} />
        <Stack.Screen name="Datos" component={Datos} />
        <Stack.Screen
  name="Pinicial2"
  component={Pinicial2}
  options={({ navigation }) => ({
    headerRight: () => (
      <TouchableOpacity
        style={{ marginRight: 15 }}
        onPress={() => navigation.navigate('Datos')}
      >
        <Image
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1940/1940308.png' }}
            style={{ width: 30, height: 30, marginRight: 10 }}
        />
      </TouchableOpacity>
    ),
  })}
/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({});


