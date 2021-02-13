export default function convertCurrency(rateResult, inputAmount){
  if (isNaN(rateResult) === true) {
    return rateResult;
  } else {
    return rateResult * inputAmount;
  }
}