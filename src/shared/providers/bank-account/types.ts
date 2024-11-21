export type BankAccount = {
  accountId: string;
  balance: number;
  balanceFormatted: string;
  owner: {
    id: string;
    name: string;
  };
  cards: {
    cardId: string;
    name: string;
    cardNumber: string;
    brand: 'Visa' | 'Master';
  }[];
};

export type BankAccountProviderData = {
  bankAccount: BankAccount;
  transfer: (value: number) => Promise<void>;
};
