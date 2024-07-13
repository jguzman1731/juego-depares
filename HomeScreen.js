import React, {Component} from 'react';
import {StyleSheet,Text, View, TouchableOpacity } from 'react-native';


class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Juego de pensamiento logico</Text>
        <Text style={styles.seleccion}>Selecciona un nivel</Text>
        <TouchableOpacity
         style={styles.boton1}
         onPress={() =>
            //Se debe poner el mismo nombre del Stack.Screen del App.js
            this.props.navigation.navigate('Nivel1')
         }
         >
         <Text style={styles.textoboton}>Facil</Text>
       </TouchableOpacity>

       <TouchableOpacity
         style={styles.boton2}
         onPress={() =>
            //Se debe poner el mismo nombre del Stack.Screen del App.js
            this.props.navigation.navigate('Nivel2')
         }
         >
         <Text style={styles.textoboton}>Medio</Text>
       </TouchableOpacity>


       <TouchableOpacity
         style={styles.boton3}
         onPress={() =>
            //Se debe poner el mismo nombre del Stack.Screen del App.js
            this.props.navigation.navigate('Nivel3')
         }
         >
         <Text style={styles.textoboton}>Dificil</Text>
       </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 10,
      backgroundColor: '#FFF2F9',
    },
    titulo: {
      fontSize: 40,
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#B7CADB',
    },
    seleccion: {
      fontSize: 22,
      fontWeight: '300',
      textAlign: 'center',
      paddingVertical: 10,
      color: '#676FA3',
    },
    boton1: {
      marginVertical: 10,
      alignItems: 'center',
      backgroundColor: '#E3BEC6',
      padding: 14,
      borderRadius: 50,
    },
    boton2: {
      marginVertical: 10,
      alignItems: 'center',
      backgroundColor: '#E3BEC6',
      padding: 16,
      borderRadius: 50,
    },
    boton3: {
      marginVertical: 10,
      alignItems: 'center',
      backgroundColor: '#E3BEC6',
      padding: 16,
      borderRadius: 50,
    },
    textoboton: {
      color: '#FFF8F3',
      fontSize: 20,
      fontWeight: '300',
    },
  })


export default HomeScreen;