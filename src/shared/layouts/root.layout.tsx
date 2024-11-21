import { useEffect } from 'react';
import { Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_700Bold,
  useFonts,
} from '@expo-google-fonts/montserrat';
import * as SplashScreen from 'expo-splash-screen';

import '../styles/globals.css';
import { COLORS } from '../styles/colors';
import { BankAccountProvider } from '../providers/bank-account/bank-account.provider';

export { ErrorBoundary } from 'expo-router';

SplashScreen.preventAutoHideAsync();

export function RootLayout() {
  const [isLoaded, error] = useFonts([Montserrat_400Regular, Montserrat_500Medium, Montserrat_700Bold]);

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (isLoaded) {
      SplashScreen.hideAsync();
    }
  }, [isLoaded]);

  if (!isLoaded) {
    return null;
  }

  return (
    <BankAccountProvider>
      <GestureHandlerRootView>
        <Stack
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: COLORS.background },
          }}
        />
      </GestureHandlerRootView>
    </BankAccountProvider>
  );
}
