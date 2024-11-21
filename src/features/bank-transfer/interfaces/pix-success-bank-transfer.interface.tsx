import { useRouter } from 'expo-router';
import { View } from 'react-native';

import { Text } from '../../../shared/ui/text';
import { Feather } from '../../../shared/ui/icon';
import { IconButton } from '../../../shared/ui/icon-button';
import { SafeAreaInterface } from '../../../shared/ui/safe-area-interface';
import { toCurrency } from '../../../shared/utils/toCurrency';
import { COLORS } from '../../../shared/styles/colors';
import { useBankTransfer } from '../providers/bank-transfer/use-bank-transfer.hook';

export function PixSuccessBankTransferInterface() {
  const router = useRouter();

  const { amountToTransfer } = useBankTransfer();

  const today = new Date();

  return (
    <SafeAreaInterface>
      <IconButton name="x" className="self-end" onPress={() => router.dismissAll()} />
      <Text className="font-bold text-3xl text-center my-16">Pix realizado com sucesso!</Text>
      <View className="self-center bg-primary p-6 rounded-full">
        <View className="border-4 p-2 rounded-full border-onPrimary">
          <Feather name="check" color={COLORS.onPrimary} size={44} />
        </View>
      </View>
      <View className="self-center mt-2">
        <Text className="text-center text-lg">Para</Text>
        <Text className="text-center text-xl font-bold">Fulano de Tal</Text>
        <View className="flex-row gap-8 mt-4">
          <View>
            <Text className="text-center text-lg">Valor</Text>
            <Text className="text-2xl font-bold">{`R$ ${toCurrency(amountToTransfer)}`}</Text>
          </View>
          <View>
            <Text className="text-center text-lg">Data</Text>
            <Text className="text-2xl font-bold">{today.toLocaleDateString()}</Text>
          </View>
        </View>
      </View>
    </SafeAreaInterface>
  );
}
