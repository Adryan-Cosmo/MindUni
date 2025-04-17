import React, { useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Animated } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Feather, Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(20)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.spring(slideAnim, {
        toValue: 0,
        useNativeDriver: true,
      }),
    ]).start();
  }, [fadeAnim, slideAnim]);

  return (
    <ScrollView
      contentContainerStyle={{
        paddingBottom: insets.bottom + 20,
        paddingTop: 16,
        paddingHorizontal: 16,
      }}
      className="flex-1 bg-indigo-50">
      {/* Cabeçalho com saudação personalizada */}
      <Animated.View
        style={{
          opacity: fadeAnim,
          transform: [{ translateY: slideAnim }],
        }}>
        <Text className="text-3xl font-bold text-gray-800">Olá, Maria!</Text>
        <Text className="mt-1 text-lg text-gray-600">Vamos cuidar da sua saúde mental hoje?</Text>
      </Animated.View>

      {/* Card de Dica Rápida de TCC */}
      <Animated.View
        style={{ opacity: fadeAnim }}
        className="my-6 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
        <View className="flex-row items-start">
          <View className="mr-4 rounded-full bg-indigo-100 p-3">
            <Ionicons name="bulb-outline" size={24} color="#6366F1" />
          </View>
          <View className="flex-1">
            <Text className="text-lg font-semibold text-gray-800">Dica de Hoje</Text>
            <Text className="mt-2 text-gray-600">
              "Quando sentir ansiedade, experimente identificar e questionar os pensamentos que
              estão causando esse sentimento. Eles são fatos ou interpretações?"
            </Text>
            <Text className="mt-2 text-sm text-indigo-600">
              - Técnica de Reestruturação Cognitiva
            </Text>
          </View>
        </View>
      </Animated.View>

      {/* Ações Principais */}
      <View className="mb-6 space-y-4">
        {[
          {
            icon: 'chatbubble-ellipses',
            color: '#8B5CF6',
            title: 'Apoio Terapêutico',
            subtitle: 'Converse com nosso assistente virtual',
            screen: 'Chat',
          },
          {
            icon: 'ribbon-outline',
            color: '#10B981',
            title: 'Meus Desafios',
            subtitle: 'Complete atividades para evoluir',
            screen: 'Desafios',
          },
          {
            icon: 'timer-outline',
            color: '#EC4899',
            title: 'Exercícios de Respiração',
            subtitle: '5 minutos para acalmar a mente',
            screen: 'Respirar',
          },
        ].map((item) => (
          <Animated.View key={item.title} style={{ opacity: fadeAnim }}>
            <TouchableOpacity
              className="flex-row items-center rounded-xl border border-gray-100 bg-white p-5 shadow-sm"
              activeOpacity={0.8}
              onPress={() => navigation.navigate(item.screen as never)}>
              <View style={{ backgroundColor: `${item.color}20` }} className="mr-4 rounded-lg p-3">
                <Ionicons name={item.icon as any} size={24} color={item.color} />
              </View>
              <View className="flex-1">
                <Text className="text-lg font-medium text-gray-700">{item.title}</Text>
                <Text className="text-sm text-gray-500">{item.subtitle}</Text>
              </View>
              <Feather name="chevron-right" size={20} color="#9CA3AF" />
            </TouchableOpacity>
          </Animated.View>
        ))}
      </View>

      {/* Seção de Progresso */}
      <Animated.View
        style={{ opacity: fadeAnim }}
        className="mb-6 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
        <Text className="text-lg font-semibold text-gray-800">Seu Progresso</Text>
        <View className="mt-4 flex-row items-center">
          <View className="mr-4 h-12 w-12 items-center justify-center rounded-full bg-purple-100">
            <Text className="text-xl font-bold text-purple-600">2</Text>
          </View>
          <View className="flex-1">
            <View className="mb-1 flex-row justify-between">
              <Text className="text-sm text-gray-600">Nível atual</Text>
              <Text className="text-sm font-medium text-purple-600">120/300 pontos</Text>
            </View>
            <View className="h-2 w-full rounded-full bg-gray-200">
              <View className="h-full w-2/5 rounded-full bg-purple-500"></View>
            </View>
          </View>
        </View>
        <Text className="mt-3 text-sm text-gray-500">
          Complete mais 3 desafios para subir de nível!
        </Text>
      </Animated.View>

      {/* Mensagem Motivacional */}
      <Animated.View
        style={{ opacity: fadeAnim }}
        className="rounded-xl border border-indigo-200 bg-indigo-100 p-5">
        <Text className="text-center italic text-indigo-800">
          "Cuidar da sua mente é tão importante quanto cuidar do seu corpo."
        </Text>
      </Animated.View>
    </ScrollView>
  );
}
