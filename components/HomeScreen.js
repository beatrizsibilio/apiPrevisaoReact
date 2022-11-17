import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView} from 'react-native';

export default function HomeScreen(navigation) {
  return (
    <ScrollView> 
      <View style={styles.container}> 
      
        <Text style={styles.title}>
          Previsão do Tempo
        </Text>

        <Image style={styles.img}
          source={{uri: 'https://eusousolar.com.br/calculadora/img/sun.gif',}}
        />
        
        <Text style={styles.textBlock}>Escolha uma cidade para ver sua previsão do tempo:</Text>
      
        <TouchableOpacity
          style={styles.btn}
          onPress={ () => navigation.navigate('SaoPaulo')}
        >
          <Text style={styles.textbtn}>São Paulo</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btn}
          onPress={ () => navigation.navigate('RiodeJaneiro')}
        >
          <Text style={styles.textbtn}>Rio de Janeiro</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btn}
          onPress={ () => navigation.navigate('Brasilia')}
        >
          <Text style={styles.textbtn}>Brasília</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btn}
          onPress={ () => navigation.navigate('Curitiba')}
        >
          <Text style={styles.textbtn}>Curítiba</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btn}
          onPress={ () => navigation.navigate('BeloHorizonte')}
        >
          <Text style={styles.textbtn}>Belo Horizonte</Text>
        </TouchableOpacity>

      </View>
    </ScrollView>    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 8,
    alignItems: 'center'
  },
  title: {
    backgroundColor: 'black',
    color: 'white',
    fontSize: 30,
    justifyContent: 'center',
    fontStyle: 'italic',
    fontWeight: 'bold',
	  marginTop: 60
  },	
  img: {
    width: 190,
    height: 190,
    marginTop: 15,
    marginBottom: 15
  },
  textBlock: {
    fontSize: 20,
	  justifyContent: 'center'
  },
  btn: {
	  width: '80%',
  	marginTop: 10,
  	marginBottom: 15,
    borderWidth: 1,
    borderRadius: 12,
    borderBottomColor: 'black'
  },
  textbtn: {
	  fontSize: 20,
	  textAlign: 'center'
  }
});