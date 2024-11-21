import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Card } from '../../../../shared/ui/card';
import { Text } from '../../../../shared/ui/text';
import { Button } from '../../../../shared/ui/button';

type Props = {
  payment: string;
  buttonText: string;
  disabled?: boolean;
  onConfirm?: () => void;
};

export function BankTransferFooter({ payment, buttonText, disabled, onConfirm }: Props) {
  const insets = useSafeAreaInsets();

  return (
    <Card
      className="rounded-none px-5 flex-row items-center justify-between"
      style={{ paddingBottom: insets.bottom + 12 }}
    >
      <View>
        <Text>Valor a ser pago</Text>
        <Text className="font-bold text-xl">{payment}</Text>
      </View>
      <Button title={buttonText} disabled={disabled} className="px-7" size="sm" onPress={onConfirm} />
    </Card>
  );
}
