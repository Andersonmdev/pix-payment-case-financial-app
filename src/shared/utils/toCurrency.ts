export function toCurrency(value: number, currency = 'pt-BR') {
  return value.toLocaleString(currency, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}
