export default function convertCurrency(rateResult, inputAmount, toCurrency){
  if (isNaN(rateResult) === true) {
    return rateResult;
  } else {
    return (`${rateResult * inputAmount} ${toCurrency}`);
  }
}