export function formatCurrency(number: number) {
  const formatedNumber = String(number).replace(/\./g, ',');
  return '$' + formatedNumber;
}

export function formatThousands(number: number) {
  return String(number).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
