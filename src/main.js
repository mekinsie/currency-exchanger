import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import DollarConversion from './services/conversion-service.js';
import convertCurrency from './js/convert-currency.js';
import {checkCurrency} from './js/check-currency';

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
  
    //make the call
    let conversionResponse = await DollarConversion.getConversion(fromCurrency);
    console.log(conversionResponse);
    
    //check to see if currencies exist in database
    const rateResult = checkCurrency(conversionResponse, toCurrency, fromCurrency);
    console.log(rateResult);


    let convertedAmount = convertCurrency(rateResult, inputAmount, toCurrency);

    if (inputAmount === ""){
      $("#new-currency").append("Please input an amount")
    } else {
    $("#new-currency").append(`${inputAmount} ${fromCurrency} = ${convertedAmount}`);
    }
  });
});