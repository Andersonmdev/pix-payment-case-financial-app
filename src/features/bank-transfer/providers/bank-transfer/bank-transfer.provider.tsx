import { createContext, PropsWithChildren, useState } from 'react';

import CREDIT_CARD_PAYMENT_MOCK from './credit-card-payment.mock.json';
import { BankTransferProviderData, CreditCardPayment } from './types';

export const BankTransferContext = createContext<BankTransferProviderData | undefined>(undefined);

const DEFAULT_AMOUNT = 100;

export const BankTransferProvider = ({ children }: PropsWithChildren) => {
  const [amountToTransfer, setAmountToTransferState] = useState(DEFAULT_AMOUNT);
  const [isFetching, setIsFetching] = useState(false);

  // Simula a consulta das parcelas disponíveis do cartão
  async function getCreditCardPayment() {
    setIsFetching(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsFetching(false);
    return CREDIT_CARD_PAYMENT_MOCK.payment as CreditCardPayment;
  }

  async function setAmountToTransfer(amount: number) {
    setAmountToTransferState(amount);
  }

  const value: BankTransferProviderData = {
    isFetching,
    amountToTransfer,
    setAmountToTransfer,
    getCreditCardPayment,
  };

  return <BankTransferContext.Provider value={value}>{children}</BankTransferContext.Provider>;
};
