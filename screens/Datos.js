import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,ScrollView } from 'react-native';


export default function Datos({ navigation }) {
 // Simulación de datos de compras realizadas por el usuario
const compras = [
  { id: 1, producto: 'Proteína en Polvo', cantidad: 2, precioUnitario: 30 },
  { id: 2, producto: 'Creatina', cantidad: 1, precioUnitario: 20 },
  // Agregar más compras si es necesario
];

return (
  <ScrollView contentContainerStyle={styles.container3}>
    <Text style={styles.title}>Compras Realizadas</Text>
    {compras.map(compra => (
      <View key={compra.id} style={styles.compraContainer}>
        <Text style={styles.text1}>{`Producto: ${compra.producto}`}</Text>
        <Text style={styles.text1}>{`Cantidad: ${compra.cantidad}`}</Text>
        <Text style={styles.text1}>{`Precio Unitario: $${compra.precioUnitario}`}</Text>
        <Text style={styles.text1}>{`Total: $${compra.cantidad * compra.precioUnitario}`}</Text>
        <View style={styles.separator}></View>
      </View>
    ))}
  </ScrollView>
);
}

const styles = StyleSheet.create({
  container3: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  compraContainer: {
    marginBottom: 20,
  },
  text1: {
    fontSize: 16,
    marginBottom: 5,
  },
  separator: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 5,
  },
})