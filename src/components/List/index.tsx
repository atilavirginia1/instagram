import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";

export function List(props) {

    function carregaIcone(likeada) {
        return likeada ? require('../../assets/likeada.png')
            : require('../../assets/like.png');
    }

    function mostraLikes(likes) {
        if (likes == 0) {
            return;
        }

        return likes + (likes > 1 ? ' likes' : ' like');
    }

    return (
        <View>
            <View style={styles.viewPerfil}>
                <Image
                    source={{ uri: props.data.imgperfil }}
                    style={styles.fotoPerfil}
                />

                <Text style={styles.nomeUsuario}>{props.data.nome}</Text>
            </View>

            <Image
                source={{ uri: props.data.imgpublicacao }}
                style={styles.fotoPublicacao}
                resizeMode='cover'
            />

            <TouchableOpacity>
                <Text style={styles.curtidas}>
                    {mostraLikes(props.data.likes)}
                </Text>
            </TouchableOpacity>


            <View style={styles.areaBtn}>
                <TouchableOpacity>
                    <Image
                        source={carregaIcone(props.data.likeada)}
                        style={styles.btns}
                    />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image
                        source={require('../../assets/comment.png')}
                        style={styles.btns}
                    />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image
                        source={require('../../assets/send.png')}
                        style={styles.btns}
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.rodape}>
                <Text style={styles.nomeRodape}>{props.data.nome}</Text>
                <Text style={styles.descRodape}>{props.data.descricao}</Text>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    viewPerfil: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        padding: 8
    },

    fotoPerfil: {
        width: 50,
        height: 50,
        borderRadius: 25
    },

    nomeUsuario: {
        paddingLeft: 5,
        fontSize: 18,
        color: '#000'
    },

    fotoPublicacao: {
        width: 400,
        height: 400,
        alignItems: 'center'
    },

    areaBtn: {
        flexDirection: 'row',
        padding: 5
    },

    btns: {
        width: 25,
        height: 25,
        marginRight: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },

    curtidas: {
        fontSize: 15,
        paddingLeft: 5,
        fontWeight: 'bold',
    },

    rodape: {
        flexDirection: 'row',
        paddingLeft: 5,
        marginBottom: 15
    },

    nomeRodape: {
        paddingRight: 5,
        fontWeight: 'bold',
    }
})