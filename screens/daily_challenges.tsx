// Melhorado DailyChallengesScreen com correção das animações e progresso dinâmico
import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Animated } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function DailyChallengesScreen() {
  const insets = useSafeAreaInsets();
  const [completedChallenges, setCompletedChallenges] = useState<string[]>([]);
  const progressAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(progressAnim, {
      toValue: (completedChallenges.length * 100) / 3,
      duration: 600,
      useNativeDriver: false,
    }).start();
  }, [completedChallenges, progressAnim]);

  const toggleChallenge = (id: string) => {
    if (completedChallenges.includes(id)) {
      setCompletedChallenges(completedChallenges.filter((c) => c !== id));
    } else {
      setCompletedChallenges([...completedChallenges, id]);
    }
  };

  const progressText = `${Math.min(Math.round((completedChallenges.length / 3) * 100), 100)}% completo`;

  return (
    <ScrollView
      contentContainerStyle={{
        paddingBottom: insets.bottom + 20,
        paddingTop: 16,
        paddingHorizontal: 16,
      }}
      className="flex-1 bg-green-50">
      <Text className="mb-4 text-2xl font-bold text-gray-800">Desafios Diários</Text>

      <View className="mb-6 rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
        <View className="mb-2 flex-row justify-between">
          <Text className="font-medium text-gray-700">Seu Progresso</Text>
          <Text className="text-indigo-600">{progressText}</Text>
        </View>
        <View className="h-3 overflow-hidden rounded-full bg-gray-200">
          <Animated.View
            className="h-full rounded-full bg-indigo-500"
            style={{
              width: progressAnim.interpolate({
                inputRange: [0, 100],
                outputRange: ['0%', '100%'],
              }),
            }}
          />
        </View>
      </View>

      <View className="space-y-4">
        {[
          { id: '1', title: 'Gratidão Diária', desc: 'Anote 3 coisas pelas quais você é grato' },
          { id: '2', title: 'Meditação Rápida', desc: '5 minutos de mindfulness' },
          { id: '3', title: 'Respiração Profunda', desc: 'Exercício de respiração 4-7-8' },
        ].map((challenge) => (
          <View
            key={challenge.id}
            className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
            <View className="mb-3 flex-row items-start justify-between">
              <Text className="text-lg font-semibold text-gray-800">{challenge.title}</Text>
              <View className="rounded-full bg-green-100 px-3 py-1">
                <Text className="text-xs text-green-800">+10 pts</Text>
              </View>
            </View>
            <Text className="mb-3 text-gray-500">{challenge.desc}</Text>
            <TouchableOpacity
              onPress={() => toggleChallenge(challenge.id)}
              activeOpacity={0.7}
              className={`rounded-lg py-2 ${
                completedChallenges.includes(challenge.id)
                  ? 'border-green-200 bg-green-100'
                  : 'border-indigo-200 bg-indigo-100'
              } border`}>
              <Text
                className={`text-center font-medium ${
                  completedChallenges.includes(challenge.id) ? 'text-green-800' : 'text-indigo-800'
                }`}>
                {completedChallenges.includes(challenge.id) ? '✅ Concluído' : 'Iniciar Desafio'}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
