import React from 'react';
import { View, Text, ScrollView, Image, Button, StyleSheet } from 'react-native';

export default function ComoIniciar({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
    <View style={styles.container5}>
      <View style={styles.seccion}>
        <Text style={styles.texto5}>Cómo tomar proteína</Text>
        <Text style={styles.texto6}>Cantidad por scoop: 30 gramos</Text>
        <Text style={styles.parrafo}>
          La proteína en polvo se puede mezclar con agua, leche o jugo de frutas para hacer un batido. 
          La cantidad diaria recomendada para prevenir deficiencias es de 0,8 gramos por kilogramo de peso corporal. 
          Se recomienda su consumo después del entrenamiento para ayudar en la recuperación muscular.
        </Text>
      </View>

      <View style={styles.seccion}>
        <Text style={styles.texto5}>Cómo tomar creatina</Text>
        <Text style={styles.texto6}>Cantidad por scoop: 5 gramos</Text>
        <Text style={styles.parrafo}>
          La creatina se puede mezclar con agua o jugo. La dosis general recomendada es de 5 gramos diarios. 
          Se recomienda su consumo antes del entrenamiento para ayudar en el aumento de la fuerza y el rendimiento muscular.
        </Text>
      </View>

      <View style={styles.seccion}>
        <Text style={styles.texto5}>Cómo tomar preentreno</Text>
        <Text style={styles.texto6}>Cantidad por scoop: según las indicaciones del producto</Text>
        <Text style={styles.parrafo}>
          El preentreno se consume típicamente antes del entrenamiento para aumentar la energía, la resistencia y el enfoque mental. 
          La cantidad por scoop puede variar según el producto, por lo que es importante seguir las indicaciones del fabricante.
        </Text>
      </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container5: {
    flex: 1,
     backgroundColor: 'lightblue',
    padding: 20,
  },
  seccion: {
    marginBottom: 50,
  },
  texto5: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  texto6: {
    fontSize: 18,
    marginBottom: 5,
    color: '#666',
  },
  parrafo: {
    fontSize: 16,
    lineHeight: 24,
    color: '#444',
  },
  scrollViewContent: {
    flexGrow: 1,
    backgroundColor: '#ECECEC',
    padding: 20,
  },
});
