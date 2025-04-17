import { View, Text } from 'react-native';

export default function EditProfileScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-2xl font-bold">Editar Perfil</Text>
      <Text className="mt-2 text-gray-600">Área para editar suas informações de perfil.</Text>
    </View>
  );
}
