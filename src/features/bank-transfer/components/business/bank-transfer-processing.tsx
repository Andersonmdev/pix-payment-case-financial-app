import { useEffect } from 'react';
import { View } from 'react-native';
import { useRouter } from 'expo-router';

import { Text } from '../../../../shared/ui/text';
import { Loading } from '../../../../shared/ui/loading';

export function BankTransferProcessing() {
  const router = useRouter();

  useEffect(() => {
    // Simula um tempo de processamento da transação
    const timeout = setTimeout(() => {
      router.dismissAll();
      router.replace('/pix-success-bank-transfer');
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View className="bg-primary flex-1 items-center justify-center gap-8">
      <Loading className="text-onPrimary scale-150" size="large" />
      <Text className="text-onPrimary font-bold text-4xl text-center">Processando sua transferência</Text>
    </View>
  );
}
