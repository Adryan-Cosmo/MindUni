import { View, Text, ScrollView } from 'react-native';

export default function NotificationScreen() {
  return (
    <ScrollView className="flex-1 bg-white p-4">
      <Text className="mb-6 text-2xl font-bold">Notificações</Text>

      {/* Exemplo de Notificações */}
      {[1, 2, 3].map((n) => (
        <View key={n} className="mb-4 rounded-lg bg-gray-100 p-4 shadow-sm">
          <Text className="font-semibold text-gray-800">Nova notificação #{n}</Text>
          <Text className="mt-1 text-sm text-gray-500">Esta é a descrição da notificação {n}.</Text>
        </View>
      ))}
    </ScrollView>
  );
}
