export default function (amount: number, currency = `USD`) {
	const moneyFormatter = new Intl.NumberFormat(`en-US`, {
		style: `currency`,
		currency,
		currencyDisplay: `narrowSymbol`,
	});

	return moneyFormatter.format(amount);
}
