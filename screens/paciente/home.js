import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons, MaterialIcons, FontAwesome5, Entypo } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';


export default function HomePaciente() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <LinearGradient colors={['#477BDE', '#477BDE']} style={styles.header}>
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
            <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('MinhasSessoes')}>
        <FontAwesome5 name="heart" size={28} color="#f43f5e" />
        <Text style={styles.cardText}>Minhas Sessões</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('ChatAnamnese')}>
        <MaterialIcons name="psychology" size={28} color="#f43f5e" />
        <Text style={styles.cardText}>Minha Anamnese</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('MeusAgendamentos')}>
        <Ionicons name="calendar-outline" size={28} color="#f43f5e" />
        <Text style={styles.cardText}>Meus Agendamentos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('MinhasDeclaracoes')}>
        <Ionicons name="document-text-outline" size={28} color="#f43f5e" />
        <Text style={styles.cardText}>Minhas Declarações</Text>
        </TouchableOpacity>

      </View>

      <View style={styles.sessionContainer}>
        <Text style={styles.sessionTitle}>Próxima sessão</Text>
        <View style={styles.sessionCard}>
          <Image source={{ uri: 'https://i.imgur.com/UYiroysl.jpg' }} style={styles.sessionImage} />
          <View style={styles.sessionInfo}>
            <Text style={styles.sessionName}>Dr. Psicólogo</Text>
            <View style={styles.sessionTags}>
              <MaterialIcons name="person" size={14} color="white" />
              <Text style={styles.sessionText}> Terapeuta  •  Online</Text>
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
