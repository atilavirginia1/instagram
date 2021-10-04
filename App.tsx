import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Header } from './src/components/Header';
import { List } from './src/components/List';

export default function App() {

  const [feed, setFeed] = useState([
    {
      id: '1',
      nome: 'Matheus Silva',
      descricao: 'Mais um dia de muitos bugs :)',
      imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png',
      imgpublicacao: 'https://sujeitoprogramador.com/instareact/foto1.png',
      likeada: true,
      likes: 1
    },
    {
      id: '2',
      nome: 'Julio Santos',
      descricao: 'Isso sim que é ser raiz!!!',
      imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png',
      imgpublicacao: 'https://sujeitoprogramador.com/instareact/foto2.png',
      likeada: false,
      likes: 3
    },
    {
      id: '3',
      nome: 'José Augusto',
      descricao: 'Bora trabalhar...',
      imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil3.png',
      imgpublicacao: 'https://sujeitoprogramador.com/instareact/foto3.png',
      likeada: false,
      likes: 10
    },
    {
      id: '4',
      nome: 'Gustavo Henrique',
      descricao: 'Isso sim que é TI!',
      imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png',
      imgpublicacao: 'https://sujeitoprogramador.com/instareact/foto4.png',
      likeada: true,
      likes: 5
    },
    {
      id: '5',
      nome: 'Guilherme',
      descricao: 'Boa tarde galera do insta...',
      imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png',
      imgpublicacao: 'https://sujeitoprogramador.com/instareact/foto5.png',
      likeada: false,
      likes: 0
    }
  ])

  return (
    <View style={styles.container}>
      <Header />

      <FlatList 
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        data={feed}
        renderItem={ ({ item }) => <List data={item} /> }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 15
  },
});
