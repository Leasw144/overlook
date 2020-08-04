// import fetchData from './fetchData';
import moment from 'moment';
let todaysDate = moment().format("YYYY/MM/DD");

let hotel, manager, guest;

function fetchUserData() {
  return fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users')
    .then(data => data.json())
    .catch(error => console.log('userData error'))
}

function fetchBookingData() {
  return fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings')
    .then(data => data.json())
    .catch(error => console.log('bookingData error'))
}

function fetchRoomData() {
  return fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/rooms/rooms')
    .then(data => data.json())
    .catch(error => console.log('bookingData error'))
}

function fetchAllData() {
  const userData = fetchUserData()
  const bookingData = fetchBookingData()
  const roomData = fetchRoomData()
  
  return Promise.all([userData, roomData, bookingData])
    .then(data => {
      hotel = new Hotel(data[0], data[1], data[2])
      hotel.createUsernames(data[0])
      // let allData = {}
      // allData.userData = data[0]
      // allData.bookingData = data[1]
      // allData.roomData = data[2]
      // instantiateData(allData)
      return hotel
    })
}


const clickhandler = () => {
  // const submitLogin = document.querySelector('.submit')
  if (event.target.closest('.login-submit')) {
    const userAttempt = document.querySelector('.username-input').value
    const pwAttempt = document.querySelector('.pw-input').value
    const loginOutcome = hotel.checkValidation(userAttempt, pwAttempt)
    determineDash(loginOutcome, userAttempt)
  }
}

const determineDash = (outcome, userAttempt) => {
  domUpdates.todaysDate = todaysDate
  console.log(userAttempt)
  if (outcome === 1) {
    instantiateGuest(userAttempt)
    domUpdates.sendToGuestDash(todaysDate)
  } else if (outcome === 0) {
    instantiateManager()
    domUpdates.sendToManagerDash(todaysDate) 
  } else if (outcome === `Username or Password was entered incorrectly`) {
    this.displayLoginError(outcome)
  }
}

const instantiateGuest = (username) => {
  const regex = /customer([\d]+)/
  const match = regex.exec(username)
  if (match) {
    guest = new Guest(match[1], hotel.allUsers.users, hotel.allRooms.rooms, hotel.allBookings.bookings)
    domUpdates.currentUser = guest
    console.log('instantiateGuests', guest)
  }
}

const instantiateManager = () => {
  manager = new Manager(hotel.allUsers, hotel.allRooms, hotel.allBookings)
  console.log('this guy lives in index', todaysDate)
  domUpdates.currentUser = manager
}


window.addEventListener('load', fetchAllData)
window.addEventListener('click', clickhandler)

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';
 
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import Hotel from './Hotel';
import domUpdates from './domUpdates'
import Manager from './Manager';
import Guest from './Guest'
// console.log('This is the JavaScript entry file - your code begins here.');
