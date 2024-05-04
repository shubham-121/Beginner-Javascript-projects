'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

//5 steps procedure of receving calls:
//  Readystate 0- request not intialized
//  Readystate 1- server connection established
//  Readystate 2- request received
//  Readystate 3- preocessing request
//  Readystate 4- request finished and response is ready

const renderCountry = function (data, className = '') {
  const language = Object.values(data.languages)[0]; //convert property values into an array
  const currency = Object.keys(data.currencies)[0];

  const html = `<article class="country ${className}">
          <img class="country__img" src="${data.flags.svg}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)} people</p>
            <p class="country__row"><span>🗣️</span>${language}</p>
            <p class="country__row"><span>💰</span>${currency}</p>
          </div>
        </article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
  console.log(html);
};

const getCountryAndNeighbour = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send(); //request is send in background

  request.addEventListener('load', function () {
    //   console.log(this.responseText);
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    renderCountry(data);

    //get neighbour country

    // const [neighbour] = data.borders;
    const neighbour = data.borders[3];
    console.log(data.borders[3]);
    if (!neighbour) return;

    //AJAX country call 2

    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function () {
      const [data2] = JSON.parse(this.responseText);
      console.log(data2);

      renderCountry(data2, 'neighbour');
    });
  });
};
// console.log(request);

getCountryAndNeighbour('India');
// getCountriesData('USA');

// //callback hell
// // setTimeout(() => {
// //   console.log('1 second passed');
// //   setTimeout(() => {
// //     console.log('2 second passed');
// //     setTimeout(() => {
// //       console.log('3 second passed');
// //       setTimeout(() => {
// //         console.log('4 second passed');
// //         setTimeout(() => {
// //           console.log('5 seconds passed ');
// //         }, 1000);
// //       }, 1000);
// //     }, 1000);
// //   }, 5000);
// // }, 1000);

///////////////////////Promises ////////////////////////
// const req = fetch('https://restcountries.com/v3.1/name/India');
// req.then(console.log(req));
// console.log(req);

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(response => response.json())
//     .then(data => renderCountry(data[0]));
// };

// getCountryData('China');

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       const [data1] = data;
//       console.log(data1);
//       renderCountry(data1);
//     });
// };
// getCountryData('Ukraine');
