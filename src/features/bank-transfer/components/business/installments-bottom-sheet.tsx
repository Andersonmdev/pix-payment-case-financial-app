import { useCallback, useEffect, useRef } from 'react';
import { View } from 'react-native';
import BottomSheet, { BottomSheetBackdrop, BottomSheetScrollView } from '@gorhom/bottom-sheet';

import { Text } from '../../../../shared/ui/text';
import { Card } from '../../../../shared/ui/card';
import { Radio } from '../../../../shared/ui/radio';
import { COLORS } from '../../../../shared/styles/colors';
import { CreditCardSimulation } from '../../providers/bank-transfer/types';
import { toCurrency } from '../../../../shared/utils/toCurrency';

type Props = {
  open: boolean;
  simulation: CreditCardSimulation[];
  currentInstallment: CreditCardSimulation | null;
  onInstallmentsChange: (installment: CreditCardSimulation) => void;
  onChange: (index: number) => void;
};

export function InstallmentsBottomSheet({
  open,
  simulation,
  currentInstallment,
  onInstallmentsChange,
  onChange,
}: Props) {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const renderBackdrop = useCallback(
    (props: any) => <BottomSheetBackdrop appearsOnIndex={0} disappearsOnIndex={-1} {...props} />,
    [],
  );

  useEffect(() => {
    if (open) {
      bottomSheetRef.current?.expand();
    } else {
      bottomSheetRef.current?.close();
    }
  }, [open]);

  return (
    <BottomSheet
      index={-1}
      ref={bottomSheetRef}
      snapPoints={['80%']}
      enablePanDownToClose
      enableDynamicSizing={false}
      onChange={onChange}
      backdropComponent={renderBackdrop}
      backgroundStyle={{ backgroundColor: COLORS.background }}
    >
      <BottomSheetScrollView className="flex-1 px-4 py-2 gap-2">
        <Text className="font-bold text-xl">Parcelas do pagamento</Text>
        <Text className="text-pretty">O destinatário receberá a vista e você pagará parcelado.</Text>
        <View className="my-4 gap-4">
          {simulation.map((value, index) => (
            <Card key={index} className="p-3">
              <Radio.Item onPress={() => onInstallmentsChange(value)}>
                <Radio.Indicator selected={currentInstallment?.installments === index + 1} />
                <Text className="text-primary text-lg  font-bold">{`${value.installments}x de R$ ${toCurrency(value.installmentAmount)}`}</Text>
              </Radio.Item>
            </Card>
          ))}
        </View>
      </BottomSheetScrollView>
    </BottomSheet>
  );
}
