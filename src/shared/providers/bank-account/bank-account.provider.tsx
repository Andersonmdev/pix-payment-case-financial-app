import { createContext, PropsWithChildren, useState } from 'react';

import { BankAccount, BankAccountProviderData } from './types';

import BANK_ACCOUNT_MOCK_JSON from './bank-account.mock.json';
import { toCurrency } from '../../utils/toCurrency';

export const BankAccountContext = createContext<BankAccountProviderData | undefined>(undefined);

export const BankAccountProvider = ({ children }: PropsWithChildren) => {
  const [bankAccount, setBankAccount] = useState<BankAccount>({
    ...BANK_ACCOUNT_MOCK_JSON.account,
    balanceFormatted: toCurrency(BANK_ACCOUNT_MOCK_JSON.account.balance),
  } as BankAccount);

  // Simula a realização de uma transferência bancária
  async function transfer(value: number) {
    const newBalance = bankAccount.balance - value;

    if (newBalance < 0) {
      throw new Error('Invalid balance result');
    }

    setBankAccount((prev) => ({
      ...prev,
      balance: newBalance,
      balanceFormatted: toCurrency(newBalance),
    }));
  }

  const value: BankAccountProviderData = { bankAccount, transfer };

  return <BankAccountContext.Provider value={value}>{children}</BankAccountContext.Provider>;
};
