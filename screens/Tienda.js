import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Button, TextInput, FlatList,TouchableOpacity } from 'react-native';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import firebaseApp from '../credenciales';

// Obtén una instancia de Firestore
const db = getFirestore(firebaseApp);

export default function Tienda({ navigation }) {
  const [productos, setProductos] = useState([]);
  const [carrito, setCarrito] = useState([]);

  // Función para obtener los productos desde la base de datos
  const obtenerProductos = async () => {
    const productosSnapshot = await getDocs(collection(db, 'Productos'));
    const productosList = [];
    productosSnapshot.forEach((doc) => {
      productosList.push({ id: doc.id, ...doc.data(), cantidad: 0 });
    });
    setProductos(productosList);
  };

  // Llama a obtenerProductos una vez que el componente está montado
  useEffect(() => {
    obtenerProductos();
  }, []);

  const agregarAlCarrito = (producto) => {
    const productoEnCarrito = {
      id: producto.id,
      nombre: producto.nombre,
      cantidad: producto.cantidad, // Utiliza la cantidad asociada al producto
      precio: producto.precio * producto.cantidad // Calcula el precio utilizando la cantidad asociada al producto
    };
    setCarrito([...carrito, productoEnCarrito]);
  };

  const LimpiarLista = () => {
    setCarrito([]);
    // Restablecer la cantidad de productos en la lista de productos también
    const productosActualizados = productos.map(producto => ({ ...producto, cantidad: 0 }));
    setProductos(productosActualizados);
  };

  const handleCalcularTotal = () => {
    let precioTotal = 0;
    carrito.forEach((item) => {
      precioTotal += item.precio;
    });
    alert(`Precio Total: $${precioTotal}`);
  };

  const renderItem = ({ item }) => (
    <View style={styles.producto}>
      <Image source={{ uri: item.imagen }} style={styles.imagenpro} />
      <Text style={styles.titulopro}>{item.nombre}</Text>
      <Text>{`Precio: $${item.precio}`}</Text>
      <TextInput
        style={styles.entrada}
        value={item.cantidad.toString()}
        onChangeText={(texto) => {
          const cantidad = parseInt(texto, 10) || 0; // Manejar el caso en que el usuario borre la cantidad
          const productosActualizados = productos.map(producto => {
            if (producto.id === item.id) {
              return { ...producto, cantidad };
            }
            return producto;
          });
          setProductos(productosActualizados);
        }}
      />
          <TouchableOpacity style={styles.boton2} onPress={() => agregarAlCarrito(item)}>
           <Text style={styles.botonTexto}>Agregar</Text>
          </TouchableOpacity>
    </View>
  );

  return (
    <ScrollView>
      <View style={styles.contenedorVertical}>
        <Text style={styles.titulo}>Suplementos COUU</Text>

        <FlatList
          data={productos}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          horizontal
        />

        <FlatList
          data={carrito}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.nombreArticulo}>{item.nombre}</Text>
              <Text>Cantidad: {item.cantidad}</Text>
              <Text>Precio: ${item.precio}</Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
          style={styles.flatList}
        />

        <View style={styles.botonesContainer}>
          <Button title="Limpiar carrito" onPress={LimpiarLista} style={styles.boton} />
        </View>

        <Text style={styles.garantia}>Todos los productos vendidos aquí tienen una garantía de 30 días presentando el folio de compra y el producto sin daños y completo.</Text>
        <Text style={styles.garantia}>Beneficios de la proteína en polvo: su función en la recuperación Enright explica que la proteína tiene una función esencial en el crecimiento de la masa muscular y la reparación de los músculos, lo que significa que consumirla después de ejercitarse podría ayudar en la recuperación.</Text>
        <Button title="Calcular Total" onPress={handleCalcularTotal} color="#FFEB3B" />
        <View>
          <View style={styles.logoContainer}>
            <Image source={{ uri: 'https://i.pinimg.com/236x/e1/85/ed/e185ed603e74eabf5fe3bbb330c368aa.jpg' }} style={styles.logo} />
            <Text style={styles.derechos}>Derechos reservados de COUU</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

// Estilos
const styles = StyleSheet.create({
  contenedorVertical: {
    flex: 1,
    backgroundColor: '#003366', // Fondo azul oscuro
  },
  producto: {
    marginLeft: 10,
    padding: 20,
    borderWidth: 1,
    borderColor: '#66B2FF',
    borderRadius: 45,
    backgroundColor: '#99CCFF',
    width: 150,
    height: 355,
    marginBottom: 10,
  },
  imagenpro: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  titulopro: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  entrada: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    color: '#000000',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    marginTop: 7,
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFFFFF', // Texto blanco
    textAlign: 'center',
    marginTop: 20,
  },
  item: {
    backgroundColor: '#DDDDDD',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  nombreArticulo: {
    fontSize: 20,
  },
  flatList: {
    marginTop: 20,
  },
  botonesContainer: {
  flexDirection: 'row',
  justifyContent: 'center', // Cambiar 'space-between' a 'center' para centrar el contenido
  marginBottom: 10,
  marginTop: 10,
},
boton: {
  flex: 1,
  marginHorizontal: 5,
},

  garantia: {
    fontSize: 15,
    color: '#FFFFFF',
    marginBottom: 10,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 90,
    height: 90,
    marginRight: 10,
  },
  derechos: {
    fontSize: 15,
    color: '#FFFFFF',
  },
  boton2: {
    backgroundColor: '#28a745',   
    paddingVertical: 5.5,         
    paddingHorizontal: 20,        
    marginHorizontal: 5,         
    borderRadius: 5,              
    alignItems: 'center',        
  },
  botonTexto: {
    fontSize: 15,                 
    color: '#fff',                
    fontWeight: 'bold',           // Opcional: Negrita
  },
});
