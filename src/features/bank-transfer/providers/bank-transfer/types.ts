export type CreditCardSimulation = {
  amountToPay: number;
  installmentAmount: number;
  installments: number;
  fees: {
    fixed: {
      amount: number;
      percentage: number;
    };
    installments: {
      amount: number;
      percentage: number;
    };
  };
};

export type CreditCardPayment = {
  transactionId: string;
  amount: number;
  receiver: {
    id: string;
    name: string;
  };
  simulation: CreditCardSimulation[];
};

export type BankTransferProviderData = {
  isFetching: boolean;
  amountToTransfer: number;
  setAmountToTransfer: (amount: number) => void;
  getCreditCardPayment: () => Promise<CreditCardPayment>;
};
