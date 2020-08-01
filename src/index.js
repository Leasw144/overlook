// import fetchData from './fetchData';
import moment from 'moment';
let todaysDate = moment().format("YYYY/MM/DD");
let userData, bookingData, roomData


function fetchData() {
  userData = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users')
    .then(data => data.json())
    .then(data => data.userData)
    .then(data => console.log(data))
    .catch(error => console.log('userData error'))

  bookingData = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings')
    .then(data => data.json())
    .then(data => data.bookingData)
    .catch(error => console.log('bookingData error'))

  roomData = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/rooms/rooms')
    .then(data => data.json())
    .then(data => data.bookingData)
    .catch(error => console.log('bookingData error'))

  Promise.all([userData, bookingData, roomData])
    .then(data => {
      let allData = {}
      // console.log(allData)
      allData.userData = data[0]
      allData.bookingData = data[1]
      allData.roomData = data[2]
      return allData

      
    })
}


window.addEventListener('load', fetchData)
// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';
 
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

// console.log('This is the JavaScript entry file - your code begins here.');
