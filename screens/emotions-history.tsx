import { View, Text } from 'react-native';

export default function EmotionsHistoryScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-2xl font-bold">Histórico de Emoções</Text>
      <Text className="mt-2 text-gray-600">Área para ver o histórico de seus humores.</Text>
    </View>
  );
}
