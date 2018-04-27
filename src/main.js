import { Api } from './api';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';

$(document).ready(function() {
  $("#doctorFinder").submit(function(event){
    event.preventDefault();
    let api = new Api();
    let promise = api.makeCall();
    promise.then(function(response) {
      let body = JSON.parse(response);
      $("#output").append(body);

    },
     function(error) {
      $("#output").text(`There was an error processing your request: ${error.message}`);


    });
  });
});
