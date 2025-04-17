import { View, Text, Switch, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  Pencil,
  BarChart2,
  Activity,
  Award,
  Shield,
  HelpCircle,
  LogOut,
} from 'lucide-react-native';

export default function ContaScreen() {
  const [darkMode, setDarkMode] = useState(false);
  const navigation = useNavigation();

  const handleLogout = () => {
    // Implementar logout
  };

  return (
    <ScrollView className="flex-1 bg-gray-50">
      <View className="items-center py-8">
        <Image
          source={{ uri: 'https://via.placeholder.com/100' }}
          className="h-24 w-24 rounded-full bg-gray-300"
        />
        <Text className="mt-4 text-xl font-bold text-gray-900">Maria Silva</Text>
        <Text className="text-sm text-gray-500">estudante@exemplo.com</Text>
      </View>

      <View className="mx-4 rounded-2xl bg-white p-4 shadow-sm">
        <Text className="mb-4 text-lg font-semibold text-gray-900">Configurações da Conta</Text>

        <Option
          label="Editar Perfil"
          icon={<Pencil size={20} color="#4B5563" />}
          onPress={() => navigation.navigate('EditProfile' as never)}
        />
        <Option
          label="Ver Progresso"
          icon={<BarChart2 size={20} color="#4B5563" />}
          onPress={() => navigation.navigate('Progress' as never)}
        />
        <Option
          label="Histórico de Emoções"
          icon={<Activity size={20} color="#4B5563" />}
          onPress={() => navigation.navigate('EmotionsHistory' as never)}
        />
        <Option
          label="Conquistas"
          icon={<Award size={20} color="#4B5563" />}
          onPress={() => navigation.navigate('Achievements' as never)}
        />

        <View className="my-4 border-t border-gray-200" />

        <View className="flex-row items-center justify-between py-3">
          <View className="flex-row items-center">
            <Text className="text-base text-gray-700">Modo Escuro</Text>
          </View>
          <Switch value={darkMode} onValueChange={setDarkMode} />
        </View>

        <View className="my-4 border-t border-gray-200" />

        <Option
          label="Privacidade e Segurança"
          icon={<Shield size={20} color="#4B5563" />}
          onPress={() => navigation.navigate('Privacy' as never)}
        />
        <Option
          label="Central de Ajuda"
          icon={<HelpCircle size={20} color="#4B5563" />}
          onPress={() => navigation.navigate('HelpCenter' as never)}
        />
      </View>

      <TouchableOpacity
        onPress={handleLogout}
        className="mx-4 mb-12 mt-6 items-center rounded-2xl border border-red-500 bg-white p-4">
        <Text className="font-semibold text-red-500">Sair da Conta</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

function Option({
  label,
  icon,
  onPress,
}: {
  label: string;
  icon: JSX.Element;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity onPress={onPress} className="flex-row items-center justify-between py-3">
      <Text className="text-base text-gray-700">{label}</Text>
      {icon}
    </TouchableOpacity>
  );
}
