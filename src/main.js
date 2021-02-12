import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import DollarConversion from './services/conversion-service.js';
import convertCurrency from './js/convert-currency.js'

$(document).ready(function() {
  $("#currency-form").submit(async function(event){
    event.preventDefault();
    $("#new-currency").empty();
    let inputAmount = $("input#input-amount").val();
    let fromCurrency = $("#from-currency").val();
    let toCurrency = $("#to-currency").val();
    console.log(fromCurrency);
    console.log(toCurrency);
    console.log(inputAmount);
    let conversionResponse = await DollarConversion.getConversion(fromCurrency);
    
    let conversionRate = conversionResponse.conversion_rates[toCurrency]
    console.log(conversionRate);
    let convertedAmount = convertCurrency(conversionRate, inputAmount)
    $("#new-currency").append(`${inputAmount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`);
  });
});