// Melhorado ChatScreen com correção das animações e interação segura
import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Animated,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Feather, MaterialIcons } from '@expo/vector-icons';

export default function ChatScreen() {
  const insets = useSafeAreaInsets();
  const [message, setMessage] = useState('');
  const scrollViewRef = useRef<ScrollView>(null);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <View className="flex-1 bg-gray-50">
      <View className="bg-indigo-500 px-4 pb-4 pt-12">
        <Text className="text-xl font-bold text-white">Apoio Virtual</Text>
      </View>

      <ScrollView
        ref={scrollViewRef}
        contentContainerStyle={{
          paddingBottom: insets.bottom + 80,
          paddingTop: 16,
          paddingHorizontal: 16,
        }}
        className="flex-1">
        <Animated.View
          style={{ opacity: fadeAnim }}
          className="mb-3 max-w-[80%] self-start rounded-t-2xl rounded-br-2xl bg-white p-4 shadow-sm">
          <Text>Olá! Sou seu assistente virtual. Como posso ajudar hoje?</Text>
        </Animated.View>
      </ScrollView>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="border-t border-gray-200 bg-white p-3">
        <View className="flex-row items-center">
          <TextInput
            placeholder="Digite sua mensagem..."
            className="mr-2 flex-1 rounded-full bg-gray-100 px-4 py-2"
            value={message}
            onChangeText={setMessage}
          />
          <TouchableOpacity className="rounded-full bg-indigo-500 p-2" activeOpacity={0.7}>
            <Feather name="send" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>

      <TouchableOpacity
        className="absolute bottom-20 right-4 rounded-full bg-red-500 p-4 shadow-lg"
        activeOpacity={0.7}>
        <MaterialIcons name="emergency" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
}
