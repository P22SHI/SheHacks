export const formatAsMoney = (value: number) => {
	let [dollars, cents] = value.toFixed(2).split('.');
	dollars = dollars.split('').reverse().join('')
		.replace(/\d\d\d\B/g, m => `${m},`)
		.split('').reverse().join('');
	return `$${dollars}.${cents}`;
};