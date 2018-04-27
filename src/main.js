import { Api } from './api';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';

$(document).ready(function() {
  $(".doctorFinder").submit(function(event){
    event.preventDefault();
    let ailment = $("#ailment").val();
    console.log(ailment);
    let api = new Api();
    let promise = api.makeCall(ailment);
    promise.then(function(response) {
      let body = JSON.parse(response);
      $("#output").append(body);
      console.log(body);

    },
     function(error) {
      $("#output").text(`There was an error processing your request: ${error.message}`);


    });
  });
});
