import { useCallback, useState } from 'react';
import { useRouter } from 'expo-router';
import { View } from 'react-native';

import { VisaLogo } from '../components/ui/visa-logo';
import { MastercardLogo } from '../components/ui/mastercard-logo';
import { ChooseInstallments } from '../components/business/choose-installments';
import { BankTransferFooter } from '../components/business/bank-transfer-footer';
import { BankTransferProcessing } from '../components/business/bank-transfer-processing';
import { InstallmentsBottomSheet } from '../components/business/installments-bottom-sheet';
import { Text } from '../../../shared/ui/text';
import { Card } from '../../../shared/ui/card';
import { Radio } from '../../../shared/ui/radio';
import { IconButton } from '../../../shared/ui/icon-button';
import { SafeAreaInterface } from '../../../shared/ui/safe-area-interface';
import { useBankAccount } from '../../../shared/providers/bank-account/use-bank-account.hook';
import { useBankTransfer } from '../providers/bank-transfer/use-bank-transfer.hook';
import { CreditCardSimulation } from '../providers/bank-transfer/types';
import { toCurrency } from '../../../shared/utils/toCurrency';
import { InstallmentsCard } from '../components/business/installments-card';
import { ScrollView } from 'react-native-gesture-handler';

const BANK_TRANSFER_OPTION = 0;

export function PixBankTransferInterface() {
  const router = useRouter();

  const { bankAccount, transfer } = useBankAccount();
  const { getCreditCardPayment, isFetching, amountToTransfer, setAmountToTransfer } = useBankTransfer();

  const [transferOption, setTransferOption] = useState(BANK_TRANSFER_OPTION);
  const [simulation, setSimulation] = useState<CreditCardSimulation[]>([]);
  const [currentInstallment, setCurrentInstallment] = useState<CreditCardSimulation | null>(null);
  const [isInstallmentsOpen, setIsInstallmentsOpen] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const currentInstallmentFormat = currentInstallment
    ? `${currentInstallment.installments}x de ${toCurrency(currentInstallment.installmentAmount)}`
    : '';

  const handleSheetChanges = useCallback((index: number) => {
    if (index === -1) {
      setIsInstallmentsOpen(false);
    }
  }, []);

  async function handleChooseCreditCard(index: number) {
    setTransferOption(index);
    const simulation = await getCreditCardPayment();
    setSimulation(simulation.simulation);
  }

  async function handleConfirmPayment() {
    const amountToPay = currentInstallment ? currentInstallment.amountToPay : amountToTransfer;
    setAmountToTransfer(amountToPay);
    try {
      await transfer(amountToPay);
      setIsProcessing(true);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {}
  }

  if (isProcessing) {
    return <BankTransferProcessing />;
  }

  return (
    <>
      <SafeAreaInterface>
        <IconButton name="arrow-left" onPress={() => router.back()} />
        <View className="flex-1">
          <View className="p-3 pt-0 gap-2">
            <Text className="font-bold text-3xl">Transferência Pix</Text>
            <Text className="font-bold text-lg">Escolha uma forma de pagamento</Text>
            <Text className="font-medium text-lg self-center mt-3 mb-1">Conta Midway</Text>
            <Card>
              <Radio.Item onPress={() => setTransferOption(BANK_TRANSFER_OPTION)}>
                <Radio.Indicator selected={transferOption === BANK_TRANSFER_OPTION} />
                <View className="gap-1">
                  <Text className="text-lg font-bold text-primary">Saldo em conta</Text>
                  <Text className="text-sm">{`Disponível: R$ ${bankAccount.balanceFormatted}`}</Text>
                </View>
              </Radio.Item>
            </Card>
          </View>
          <Text className="self-center mt-3 font-medium text-lg">Cartões de crédito</Text>
          <ScrollView className="p-3" contentContainerStyle={{ gap: 24 }} showsVerticalScrollIndicator={false}>
            {bankAccount.cards.map((card, index) => (
              <View key={card.cardId} className="gap-3">
                <Card>
                  <Radio.Item onPress={() => handleChooseCreditCard(index + 1)}>
                    <Radio.Indicator selected={transferOption === index + 1} />
                    <View>
                      <View className="flex-row items-center gap-2">
                        {card.brand === 'Visa' && <VisaLogo />}
                        {card.brand === 'Master' && <MastercardLogo />}
                        <Text className="text-lg font-bold text-primary">Cartão Visa</Text>
                      </View>
                      <Text className="text-sm">Final ***1124</Text>
                    </View>
                  </Radio.Item>
                </Card>
                {transferOption === index + 1 && (
                  <ChooseInstallments
                    isLoading={isFetching}
                    text={currentInstallmentFormat || undefined}
                    showInstallments={() => setIsInstallmentsOpen(true)}
                  />
                )}
                {transferOption === index + 1 && currentInstallment && (
                  <InstallmentsCard installment={currentInstallment} />
                )}
              </View>
            ))}
          </ScrollView>
        </View>
        <InstallmentsBottomSheet
          open={isInstallmentsOpen}
          simulation={simulation}
          currentInstallment={currentInstallment}
          onInstallmentsChange={(installment) => setCurrentInstallment(installment)}
          onChange={handleSheetChanges}
        />
      </SafeAreaInterface>
      {isInstallmentsOpen ? (
        <BankTransferFooter
          buttonText="Continuar"
          disabled={currentInstallment === null}
          payment={currentInstallment ? currentInstallmentFormat : `R$ ${toCurrency(amountToTransfer)}`}
          onConfirm={() => setIsInstallmentsOpen(false)}
        />
      ) : (
        <BankTransferFooter
          buttonText="Pagar"
          payment={
            currentInstallment
              ? `R$ ${toCurrency(currentInstallment.amountToPay)}`
              : `R$ ${toCurrency(amountToTransfer)}`
          }
          disabled={currentInstallment === null && transferOption !== BANK_TRANSFER_OPTION}
          onConfirm={handleConfirmPayment}
        />
      )}
    </>
  );
}
