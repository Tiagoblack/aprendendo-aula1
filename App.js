import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, SafeAreaView, TextInput, Button } from 'react-native';
import AsycnStorage from '@react-native-async-storage/async-storage'

export default function App() {

    const [nome, setNome] = useState('');
    const [nomeNovo, setnomeNovo ] = useState('')
    

    const handleSave = async() =>{
      await AsycnStorage.setItem('@nome', nomeNovo);
      setNome(nomeNovo);
      setnomeNovo('')
    }

      const handleSaveGet = async() =>{
        const n = await AsycnStorage.getItem('@nome');
        setNome(n)

      }

      useEffect(()=>{
        handleSaveGet()
      }, [])

  return (
    <SafeAreaView style={styles.container}>
        <TextInput placeholder="Digite algo novo" 
        onChangeText={(n)=>setnomeNovo(n)}
        value={nomeNovo}
        style={{height:40, width:'90%', borderColor:'#000', borderWidth:1, marginTop:20, marginBottom:20}}/>
        <Button
        onPress={handleSave}
         title="Salvar"/>
          <Text>{nome}</Text>
      <StatusBar style="auto" hidden />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
