import { Api } from './api';
import { Doctor } from './doctor';
import {GeocodeApi} from './geocode-api';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';

function itemize(data){
  let resultArray = [];
  for (var i = 0; i < data.length; i++) {
    let doctor = new Doctor(data[i].profile.first_name, data[i].profile.last_name, data[i].practices[0].visit_address.street, data[i].practices[0].visit_address.city, data[i].practices[0].visit_address.state, data[i].practices[0].phones[0].number,   data[i].practices[0].accepts_new_patients, data[i].practices[0].website,);
    resultArray.push(doctor);
  }
  return resultArray;
}

function display(resultArray){
  for (var i = 0; i < resultArray.length; i++) {
    $(".output").append(`<div class="result">`)
    $(".output").append(`${resultArray[i].firstName} `);
    $(".output").append(`${resultArray[i].lastName} <br>`);
    $(".output").append(`${resultArray[i].street} <br>`);
    $(".output").append(`${resultArray[i].city}, `);
    $(".output").append(`${resultArray[i].state} <br> `);
    $(".output").append(`${resultArray[i].phoneNumber} <br> `);
    if(resultArray[i].newPatients === false){
      $(".output").append(`Sorry, no new patients accepted. Better luck next life.`);
    } else{
      $(".output").append(`New patients accepted. <br>`);
    }
    if(resultArray[i].webAddress === undefined){
      $(".output").append(`No website on file. <br>`)
    } else{
      $(".output").append(`<a href="${resultArray[i].webAddress}">Website</a> <br>`);
    }
    $(".output").append(`</div>`)
  }
}

$(document).ready(function() {
  $(".doctorFinder").submit(function(event){
    event.preventDefault();
    $(".output").text("");
    let ailment = $("#ailment").val();
    let docName = $("#docName").val();
    let street = $("#street").val().replace(" ","+");
    let city = $("#city").val().replace(" ","+");
    let state = $("#state").val().replace(" ","+");
    let geoApi = new GeocodeApi();
    let geoPromise = geoApi.makeCall(street, city, state);
    geoPromise.then(function(response){
      let body = JSON.parse(response);

      let lat = body.results[0].geometry.location.lat;
      let lon = body.results[0].geometry.location.lng;
      let api = new Api();
      return  api.makeCall(ailment, docName, lat, lon);
    })
    .then(function(response) {
      let body = JSON.parse(response);
      if (body.data.length === 0){
        $(".output").text("");
        $(".output").append(`No results match your query. Try a different term.`)
      } else {
      display(itemize(body.data));
      }
    },
     function(error) {
      $(".output").text(`There was an error processing your request: ${error.message}`);
    });
  });
});
