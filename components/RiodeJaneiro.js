import React, {useState}  from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, FlatList } from 'react-native';
import Api from './Api';

export default function RiodeJaneiro() {
  const [dadosA, setDadosA] = useState("");
  const [dadosB, setDadosB] = useState("");
  const br = `\n`;

  async function buscaCep(){
    const response = await Api.get(`weather?array_limit=10&fields=only_results,temp,city_name,forecast,max,min,date,time,description,city,humidity,wind_speedy%20&key=ca53326e&city_name=RiodeJaneiro,RJ`);
    setDadosA(response.data.forecast);
    setDadosB(response.data.forecast[1]);
  }

  return (
    
      <View style={styles.container}>
          <Text style={styles.title}>Meteorologia: Cidade do Rio de Janeiro</Text>

          <Image style={styles.img}
            source={{uri: 'https://s2.glbimg.com/cuDAfucCaFs4i4pXjPBj-JicC9A=/27x0:308x211/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/P/X/XrHEElRwKtzhRH2v2Ajg/giphy.gif'}}
          />
            
          <TouchableOpacity style={styles.btn} onPress={buscaCep}>
            <Text style={styles.textbtn}>Buscar</Text>
          </TouchableOpacity>	 

            <FlatList
              data={dadosA}
              renderItem={({item}) => {
                return(
                  <View>
                    <Text style={styles.date}>Data: {item.date}</Text>
                    <Text>Max: {item.max}</Text>
                    <Text>Min: {item.min}</Text>
                    <Text>Descrição: {item.description}{br}</Text>
                  </View> 
                );
              }}
            />  
      </View>
    
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
    marginTop: 30,
    marginBottom: 30
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
  },
  date: {
    fontWeight: 'bold'
  }
});