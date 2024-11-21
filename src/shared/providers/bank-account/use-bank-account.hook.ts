import { useContext } from 'react';

import { BankAccountContext } from './bank-account.provider';

import type { BankAccountProviderData } from './types';

export const useBankAccount = (): BankAccountProviderData => {
  const context = useContext(BankAccountContext);

  if (!context) {
    throw new Error('`useBankAccount` must be used within an BankAccountProvider');
  }

  return context;
};
