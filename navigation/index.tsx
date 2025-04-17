import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TabNavigator from './tab-navigator';
import NotificationScreen from '../screens/notification';
import EditProfileScreen from '../screens/edit-profile';
import ProgressScreen from '../screens/see-progress';
import EmotionsHistoryScreen from '../screens/emotions-history';
import AchievementsScreen from 'screens/achievements';
import PrivacyScreen from 'screens/privacy';
import HelpCenterScreen from 'screens/help-center';

export type RootStackParamList = {
  TabNavigator: undefined;
  Notification: undefined;
  EditProfile: undefined;
  Progress: undefined;
  EmotionsHistory: undefined;
  Achievements: undefined;
  Privacy: undefined;
  HelpCenter: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function RootStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TabNavigator">
        <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Notification"
          component={NotificationScreen}
          options={{ title: 'Notificações', presentation: 'modal' }}
        />
        <Stack.Screen
          name="EditProfile"
          component={EditProfileScreen}
          options={{ title: 'Editar Perfil' }}
        />
        <Stack.Screen
          name="Progress"
          component={ProgressScreen}
          options={{ title: 'Ver Progresso' }}
        />
        <Stack.Screen
          name="EmotionsHistory"
          component={EmotionsHistoryScreen}
          options={{ title: 'Histórico de Emoções' }}
        />
        <Stack.Screen
          name="Achievements"
          component={AchievementsScreen}
          options={{ title: 'Conquistas' }}
        />
        <Stack.Screen
          name="Privacy"
          component={PrivacyScreen}
          options={{ title: 'Privacidade e Segurança' }}
        />
        <Stack.Screen
          name="HelpCenter"
          component={HelpCenterScreen}
          options={{ title: 'Central de Ajuda' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
