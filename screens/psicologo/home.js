import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons, MaterialCommunityIcons, FontAwesome5, Entypo } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

export default function HomePsicologo() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <LinearGradient colors={['#f43f5e', '#f43f5e']} style={styles.header}>
        <View style={styles.headerTop}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back" size={28} color="white" />
          </TouchableOpacity>
          <Image source={require('../../assets/logo-onterapia.png')} style={styles.logo} />
          <Ionicons name="notifications" size={24} color="white" />
        </View>
        <Text style={styles.title}>Olá!</Text>
        <Text style={styles.subtitle}>Pronto para a sessão?</Text>
      </LinearGradient>

      <View style={styles.cardContainer}>
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Pacientes')}>
        <Ionicons name="people-circle-outline" size={28} color="#477BDE" />
        <Text style={styles.cardText}>Pacientes</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Prontuarios')}>
        <MaterialCommunityIcons name="notebook-outline" size={28} color="#477BDE" />
        <Text style={styles.cardText}>Prontuários</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('EvolucaoCasos')}>
        <FontAwesome5 name="chart-line" size={28} color="#477BDE" />
        <Text style={styles.cardText}>Evolução de Casos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('IniciarSessao')}>
        <Ionicons name="videocam-outline" size={28} color="#477BDE" />
        <Text style={styles.cardText}>Iniciar Sessão</Text>
        </TouchableOpacity>

      </View>

      <View style={styles.sessionContainer}>
        <Text style={styles.sessionTitle}>Próxima sessão</Text>
        <View style={styles.sessionCard}>
          <Image source={{ uri: 'https://i.imgur.com/UYiroysl.jpg' }} style={styles.sessionImage} />
          <View style={styles.sessionInfo}>
            <Text style={styles.sessionName}>Paciente </Text>
            <View style={styles.sessionTags}>
              <Entypo name="calendar" size={14} color="white" />
              <Text style={styles.sessionText}> 24 de Abril  •  15:00</Text>
            </View>
            <Text style={styles.sessionStars}>⭐ 5.0</Text>
          </View>
          <Ionicons name="chevron-forward" size={24} color="white" style={{ marginLeft: 'auto' }} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  header: {
    paddingTop: 40,
    paddingBottom: 15,
    paddingHorizontal: 20,
    alignItems: 'center',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  headerTop: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  logo: {
    width: 36,
    height: 36,
  },
  title: {
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
    color: 'white',
  },
  subtitle: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: 'white',
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: 20,
    paddingHorizontal: 10,
  },
  card: {
    width: '42%',
    height: 120,
    backgroundColor: 'white',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    paddingHorizontal: 10,
  },
  cardText: {
    marginTop: 10,
    fontFamily: 'Poppins-Bold',
    color: '#1f2937',
    textAlign: 'center',
    fontSize: 14,
  },
  sessionContainer: {
    marginHorizontal: 20,
  },
  sessionTitle: {
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    marginBottom: 10,
    color: '#111827',
  },
  sessionCard: {
    backgroundColor: '#89CC24',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 20,
  },
  sessionImage: {
    width: 55,
    height: 55,
    borderRadius: 28,
    marginRight: 15,
  },
  sessionInfo: {
    flex: 1,
  },
  sessionName: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    color: 'white',
  },
  sessionTags: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },
  sessionText: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: 'white',
    marginLeft: 5,
  },
  sessionStars: {
    fontSize: 14,
    marginTop: 4,
    color: 'white',
    fontFamily: 'Poppins-Regular',
  },
});
