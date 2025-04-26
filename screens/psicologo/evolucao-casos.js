import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  ActivityIndicator,
  ScrollView,
  StyleSheet,
} from 'react-native';
import Header from '../../components/geral/Header'; // ajuste o caminho conforme a estrutura do seu projeto

export default function EvolucaoCasos() {
  const [resultado, setResultado] = useState(null);
  const [loading, setLoading] = useState(false);

  const buscarResultadoAnalise = async () => {
    setLoading(true);

    try {
      const resposta = await fetch('http://127.0.0.1:8001/analyze-fixed-video'); // corrigido para 127.0.0.1
      if (!resposta.ok) {
        throw new Error('Erro na resposta da API');
      }

      const json = await resposta.json();
      setResultado(json); // agora armazena o JSON completo
    } catch (err) {
      alert('Erro ao buscar dados da API: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  const getCorEmocao = (emocao) => {
    switch (emocao) {
      case 'happy': return '#ffe066';
      case 'sad': return '#74c0fc';
      case 'fear': return '#ff8787';
      case 'angry': return '#ff6b6b';
      case 'surprise': return '#63e6be';
      case 'neutral': return '#ced4da';
      case 'disgust': return '#b197fc';
      default: return '#f1f3f5';
    }
  };

  return (
    <View style={styles.container}>
      <Header corFundo="#f43f5e" />
      <Text style={styles.titulo}>📊 Evolução Emocional</Text>
      <Button title="🔍 Analisar Vídeo" color="#f43f5e" onPress={buscarResultadoAnalise} />

      {loading && <ActivityIndicator size="large" color="#339af0" style={{ marginTop: 20 }} />}

      {resultado && (
        <ScrollView style={styles.resultadoBox}>
          <Text style={styles.emocaoDetalhe}>🎬 Vídeo analisado: {resultado.video}</Text>
          <Text style={styles.emocaoDetalhe}>📄 JSON gerado: {resultado.output_json}</Text>

          <Text style={[styles.subtitulo, { marginTop: 10 }]}>🧠 Análise por segundo:</Text>

          {resultado.analysis?.map((item, index) => (
            <View
              key={index}
              style={[
                styles.item,
                { borderLeftColor: getCorEmocao(item.dominant_emotion) }
              ]}
            >
              <Text style={styles.segundo}>
                🎞 Segundo {item.second}
              </Text>

              <Text style={[styles.emocao, { color: getCorEmocao(item.dominant_emotion) }]}>
                Emoção dominante: {item.dominant_emotion.toUpperCase()}
              </Text>

              {item.emotions && (
                <View style={styles.emocoesDetalhadas}>
                  {Object.entries(item.emotions).map(([emo, val], i) => (
                    <Text key={i} style={styles.emocaoDetalhe}>
                      {emo}: {val}%
                    </Text>
                  ))}
                </View>
              )}

              {item.error && (
                <Text style={{ color: 'red', marginTop: 4 }}>⚠️ {item.error}</Text>
              )}
            </View>
          ))}
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    padding: 20,
    paddingTop: 0,
  },
  titulo: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    color: '#1F2937',
    textAlign: 'center',
    marginTop: 12,
    marginBottom: 12,
  },
  resultadoBox: {
    marginTop: 10,
    paddingBottom: 100,
  },
  item: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 12,
    borderRadius: 10,
    borderLeftWidth: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  segundo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#495057',
  },
  emocao: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 6,
  },
  emocoesDetalhadas: {
    marginTop: 8,
  },
  emocaoDetalhe: {
    fontSize: 14,
    color: '#343a40',
    lineHeight: 20,
  },
  subtitulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1F2937',
    marginTop: 12,
    marginBottom: 8,
  },
});
