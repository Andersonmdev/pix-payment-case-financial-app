import { View } from 'react-native';

import { Card } from '../../../../shared/ui/card';
import { Text } from '../../../../shared/ui/text';
import { toCurrency } from '../../../../shared/utils/toCurrency';
import { CreditCardSimulation } from '../../providers/bank-transfer/types';

type Props = {
  installment: CreditCardSimulation;
};

export function InstallmentsCard({ installment }: Props) {
  const fees = installment.fees;

  return (
    <Card className="p-4 gap-4">
      <View className="flex-row justify-between">
        <Text>Valor a transferir</Text>
        <Text className="font-bold">{`R$ ${toCurrency(installment.amountToPay)}`}</Text>
      </View>
      <View className="flex-row justify-between">
        <Text>Taxa do cartão</Text>
        <Text className="font-bold">{`R$ ${fees.fixed.amount.toFixed(2).replace('.', ',')}`}</Text>
      </View>
      <View className="flex-row justify-between">
        <Text>Taxa de parcelamento</Text>
        <Text className="font-bold">{`R$ ${fees.installments.amount === 0 ? '-' : fees.installments.amount.toFixed(2).replace('.', ',')}`}</Text>
      </View>
      <View className="flex-row justify-between">
        <Text>Valor a transferir + taxas</Text>
        <Text className="font-bold">{`${installment.installments}x R$ ${toCurrency(installment.installmentAmount)}`}</Text>
      </View>
    </Card>
  );
}
