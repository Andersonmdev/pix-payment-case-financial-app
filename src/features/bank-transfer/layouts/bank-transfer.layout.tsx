import { Stack } from 'expo-router';

import { COLORS } from '../../../shared/styles/colors';
import { BankTransferProvider } from '../providers/bank-transfer/bank-transfer.provider';

export function BankTransferLayout() {
  return (
    <BankTransferProvider>
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: COLORS.background },
        }}
      >
        <Stack.Screen name="pix-bank-transfer" />
        <Stack.Screen name="pix-success-bank-transfer" />
      </Stack>
    </BankTransferProvider>
  );
}
