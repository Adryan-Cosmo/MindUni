import { View } from 'react-native';
import { useEffect, useState } from 'react';

type ProgressBarProps = {
  progress: number;
  color?: string;
};

export function ProgressBar({ progress, color = 'bg-indigo-500' }: ProgressBarProps) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    // Animação simples
    setTimeout(() => setWidth(progress), 100);
  }, [progress]);

  return (
    <View className="h-2 overflow-hidden rounded-full bg-gray-200">
      <View className={`h-full ${color} rounded-full`} style={{ width: `${width}%` }} />
    </View>
  );
}
