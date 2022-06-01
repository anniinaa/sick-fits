export default function formatMoney(amount = 0) {
  const options = {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2,
  };

  const formatter = Intl.NumberFormat('FI', options);

  return formatter.format(amount / 100);
}
