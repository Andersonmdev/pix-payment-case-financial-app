import { View } from 'react-native';
import { Link } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Text } from '../../../shared/ui/text';
import { Button } from '../../../shared/ui/button';
import { COLORS } from '../../../shared/styles/colors';
import { useBankAccount } from '../../../shared/providers/bank-account/use-bank-account.hook';

export function HomeInterface() {
  const insets = useSafeAreaInsets();
  const { bankAccount } = useBankAccount();

  return (
    <View className="bg-primary h-1/6">
      <View className="p-4 h-full" style={{ paddingTop: insets.top }}>
        <Text className="text-onPrimary font-bold text-xl mt-auto">{`Olá, ${bankAccount.owner.name}`}</Text>
      </View>
      <View className="mt-2 p-4 flex-row justify-between">
        <View className="gap-1">
          <Text>Saldo</Text>
          <Text className="text-xl font-medium">{`R$ ${bankAccount.balanceFormatted}`}</Text>
        </View>
        <Link href="/pix-bank-transfer" asChild>
          <Button title="Transferir" className="px-5">
            <Feather name="send" size={16} color={COLORS.onPrimary} />
          </Button>
        </Link>
      </View>
    </View>
  );
}
