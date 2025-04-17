import { View, Text } from 'react-native';

export default function HelpCenterScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-2xl font-bold">Central de Ajuda</Text>
      <Text className="mt-2 text-gray-600">Dúvidas? Estamos aqui para ajudar.</Text>
    </View>
  );
}
