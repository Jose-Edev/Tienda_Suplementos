import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,ScrollView,Image,Button } from 'react-native';

export default function Eventos({ navigation }) {
  return (
    <ScrollView >
      <Text style={styles.titulo}>Próximos Eventos</Text>

      <View style={styles.eventoContainer}>
        <Text style={styles.tituloEvento}>Mr. Olympia</Text>
        <Text style={styles.descripcionEvento}>
          El Mr. Olympia es uno de los eventos más prestigiosos en el mundo del fisicoculturismo.
          ¡No te pierdas la competencia de los mejores fisicoculturistas del mundo!
        </Text>
        <Image
          source={{ uri: 'https://www.proteinhunter.com/wp-content/uploads/2016/04/mrolympia2016_1842446836.png' }}
          style={styles.imagenEvento}
        />
        <Button title="Recordar"/>
      </View>

      <View style={styles.eventoContainer}>
        <Text style={styles.tituloEvento}>Arnold Classic</Text>
        <Text style={styles.descripcionEvento}>
          El Arnold Classic es otro evento destacado en el calendario de fisicoculturismo.
          Únete para presenciar la competencia y disfrutar de actividades relacionadas con la salud y el fitness.
        </Text>
        <Image
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/en/3/3c/Arnclassic.jpg' }}
          style={styles.imagenEvento}
        />
        <Button title="Recordar"/>
      </View>

      <View style={styles.eventoContainer}>
        <Text style={styles.tituloEvento}>Mr. México</Text>
        <Text style={styles.descripcionEvento}>
          Mr. México es un evento emblemático en el mundo del fisicoculturismo nacional.
          ¡No te pierdas la competencia de los mejores fisicoculturistas de México!
        </Text>
        <Image
          source={{ uri: 'https://image.jimcdn.com/app/cms/image/transf/none/path/s6d1f7834556cf034/image/i421a85ad2e4f1ebd/version/1617911520/image.jpg' }}
          style={styles.imagenEvento}
        />
        <Button title="Recordar"/>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  titulo: {
    fontSize: 29,           // Tamaño de letra grande para título
    fontWeight: 'bold',     // Negrita para que se vea como un título
    textAlign: 'center',    // Centrar el texto horizontalmente
    marginVertical: 15,
    marginTop: 30,     // Espacio vertical alrededor del título
  },
  eventoContainer: {
    backgroundColor: '#FFFFFF', // Fondo blanco para cada evento
    borderRadius: 15,
    marginBottom: 20,
    padding: 15,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop: 20,
  },
  imagenEvento: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    borderRadius: 15,
    marginBottom: 20,
  },
  tituloEvento: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  descripcionEvento: {
    fontSize: 16,
    color: '#666666',
    textAlign: 'justify',
  },
})