import { View, Text } from 'react-native';

export default function ProgressScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-2xl font-bold">Ver Progresso</Text>
      <Text className="mt-2 text-gray-600">Área para visualizar seu progresso diário.</Text>
    </View>
  );
}
