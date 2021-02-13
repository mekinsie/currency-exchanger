import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import DollarConversion from './services/conversion-service.js';
import convertCurrency from './js/convert-currency.js';
import checkCurrency from './js/check-currency';

//Checks to see if a number was inputted. Otherwise displays conversion in HTML.
function emptyInput(inputAmount, fromCurrency, convertedAmount){
  if (inputAmount === ""){
    $("#new-currency").append("Please input an amount");
  } else {
    $("#new-currency").append(`• <br> • <br> • <br><br> ${inputAmount} ${fromCurrency} = ${convertedAmount}`);
  }
} 

//Looks for any errors with 200 ok status and displays them in HTML.
function checkAllErrors(conversionResponse) {
  if(conversionResponse["error-type"]){
    $("#new-currency").append(`${conversionResponse.result} ${conversionResponse["error-type"]}<br>`);
    return conversionResponse;
  } else {
    return conversionResponse;
  }
}

$(document).ready(function() {
  $(".container").slideDown("slow");
  $("#currency-form").submit(async function(event){
    event.preventDefault();
    $("#new-currency").empty();
    let inputAmount = $("input#input-amount").val();
    let fromCurrency = $("#from-currency").val();
    let toCurrency = $("#to-currency").val();
    
    let conversionResponse = await DollarConversion.getConversion(fromCurrency);
    console.log(conversionResponse);
    
    checkAllErrors(conversionResponse);
    const rateResult = checkCurrency(conversionResponse, toCurrency, fromCurrency); 
    let convertedAmount = convertCurrency(rateResult, inputAmount, toCurrency);
    emptyInput(inputAmount, fromCurrency, convertedAmount);
    $("#new-currency").slideDown("slow");
    
  }); 
});