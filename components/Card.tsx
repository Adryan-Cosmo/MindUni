import { TouchableOpacity, Text, View } from 'react-native';
import { ReactNode } from 'react'; // Importe ReactNode do 'react'

type CardProps = {
  title: string;
  description: string;
  color?: 'blue' | 'green' | 'purple';
  onPress?: () => void;
  children?: ReactNode; // Agora usando o tipo correto
};

export function Card({ title, description, color = 'blue', onPress, children }: CardProps) {
  const colors = {
    blue: 'bg-blue-50 border-blue-100',
    green: 'bg-green-50 border-green-100',
    purple: 'bg-purple-50 border-purple-100',
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      className={`${colors[color]} rounded-lg border p-4 active:opacity-70`}>
      <Text className="text-lg font-bold">{title}</Text>
      <Text className="mt-1">{description}</Text>
      {children}
    </TouchableOpacity>
  );
}
