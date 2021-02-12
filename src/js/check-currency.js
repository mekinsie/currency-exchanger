export function checkCurrency(conversionResponse, toCurrency,fromCurrency) {
  if (conversionResponse.result && conversionResponse.result["error-type"] === "unsupported-code") {
    return (`${fromCurrency} is not a currency in our database.`);
  }
  else if (toCurrency in conversionResponse.conversion_rates === false) {
    return (`${toCurrency} is not a currency in our database.`);
  } else {
    let conversionRate = conversionResponse.conversion_rates[toCurrency];
    return (`${conversionRate} ${toCurrency}`);
  }
}