import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,ScrollView,Image } from 'react-native';


export default function Pinicial2({ navigation }) {
  return (
    <ScrollView  contentContainerStyle={styles.container1}>
      <TouchableOpacity onPress={() => navigation.navigate('Tienda')} style={styles.touchableOpacity} >
        <Text style={styles.text}>Suplementos Couu</Text>
        <Image
          source={{ uri: 'https://www.demusculos.com/web/wp-content/uploads/2024/02/proteinas-whey-leche-soy-plant-egg-huevo.png' }}
          style={styles.image}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Eventos')} style={styles.touchableOpacity}>
        <Text style={styles.text}>Eventos Proximos</Text>
        <Image
          source={{ uri: 'https://www.proteinhunter.com/wp-content/uploads/2016/04/mrolympia2016_1842446836.png' }}
          style={styles.image}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Como puedo Iniciar')} style={styles.touchableOpacity}>
        <Text style={styles.text}>¿Cómo puedo iniciar?</Text>
        <Image
          source={{ uri: 'https://www.entrenadoradomicilio.com/wp-content/uploads/2020/06/BLOG-SUPLEMENTOS-PRE-ENTRENO-1200x630-1.jpg' }}
          style={styles.image}
        />
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    image: {
      height: 190,
      resizeMode: 'contain',
      marginVertical: 5,
      borderRadius: 70,
  },
  text: {
      textAlign: 'center',
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
  },
  container1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'lightblue',
      padding: 20,
  },
  touchableOpacity: {
      width: '60%',
      aspectRatio: 1,
      marginBottom: 20
  },
})