import { useContext } from 'react';

import { BankTransferContext } from './bank-transfer.provider';

import type { BankTransferProviderData } from './types';

export const useBankTransfer = (): BankTransferProviderData => {
  const context = useContext(BankTransferContext);

  if (!context) {
    throw new Error('`useBankTransfer` must be used within an BankTransferProvider');
  }

  return context;
};
