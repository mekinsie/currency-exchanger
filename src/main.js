import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$(document).ready(function() {
  $("#currency-form").submit(function(event){
    event.preventDefault();
  });
  let inputAmount = $("input#input-amount").val();
  
  $("#new-currency").append(convertedAmount);
});