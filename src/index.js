//////////Imports/////////
import Hotel from './Hotel';
import domUpdates from './domUpdates'
import Manager from './Manager';
import Guest from './Guest';
import './images/turing-logo.png';
import './images/abstract.png';
import './images/account.png';
import './images/maldives-huts-two.jpg';
import './css/base.scss';
import moment from 'moment';

//////////GLOBAL VARIABLES//////
let todaysDate = moment().format("YYYY/MM/DD");
let hotel, manager, guest;

//////////DATA HANDLING/////////
const fetchUserData = () => {
  return fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users')
    .then(data => data.json())
    .catch(error => console.log('userData error'))
}

const fetchBookingData = () => {
  return fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings')
    .then(data => data.json())
    .catch(error => console.log('bookingData error'))
}

const fetchRoomData = () =>{
  return fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/rooms/rooms')
    .then(data => data.json())
    .catch(error => console.log('bookingData error'))
}

const postIt = (guestID, roomNumber, selectedDate) => {
  fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      userID: Number(guestID),
      date: selectedDate,
      roomNumber: Number(roomNumber)
    })
  })
    .then(response => response.json())
    .then(data => console.log('postme', data))
    .catch(error => console.error(error))
}

const fetchAllData = () => {
  const userData = fetchUserData()
  const bookingData = fetchBookingData()
  const roomData = fetchRoomData()
  
  return Promise.all([userData, roomData, bookingData])
    .then(data => {
      hotel = new Hotel(data[0], data[1], data[2])
      hotel.createUsernames(data[0])
      return hotel
    })
}

//////////////////////////CLICK HANDLER//////////////////
const clickhandler = () => {
  domUpdates.todaysDate = todaysDate
  // const submitLogin = document.querySelector('.submit')
  if (event.target.closest('.login-submit')) {
    const userAttempt = document.querySelector('.username-input').value
    const pwAttempt = document.querySelector('.pw-input').value
    const loginOutcome = hotel.checkValidation(userAttempt, pwAttempt)
    determineDash(loginOutcome, userAttempt)
  } else if (event.target.closest('.availability-request-btn')) {
    findAvailRooms()
  } else if (event.target.closest('.book-me')) {
    let calendarDate = document.querySelector('.calendar').value
    postPrep(calendarDate)
  } 
}

/////////////INSTANTIATIONS AND DOM EXECUTIONS///////////
const determineDash = (outcome, userAttempt) => {
  if (outcome === 1) {
    instantiateGuest(userAttempt)
    domUpdates.sendToGuestDash(todaysDate)
  } else if (outcome === 0) {
    instantiateManager()
    domUpdates.sendToManagerDash(todaysDate) 
  } else if (outcome === `Username or Password was entered incorrectly`) {
    domUpdates.displayLoginError(outcome)
  }
}

const postPrep = (calendarDate) => {
  const roomNumber = event.target.value
  const moddedDate = calendarDate.split('-').join('/')
  postIt(guest.guestID, roomNumber, moddedDate)
  domUpdates.removeOpening(roomNumber, moddedDate)
}

const findAvailRooms = () => {
  const roomType = document.querySelector('.room-dropdown').value
  const selectedDate = document.querySelector('.calendar').value
  domUpdates.displayAvailableRooms(roomType, selectedDate)
}

const instantiateGuest = (username) => {
  const regex = /customer([\d]+)/
  const match = regex.exec(username)
  if (match) {
    guest = new Guest(match[1], hotel.allUsers.users, hotel.allRooms.rooms, hotel.allBookings.bookings)
    domUpdates.currentUser = guest
  }
}

const instantiateManager = () => {
  manager = new Manager(hotel.allUsers, hotel.allRooms, hotel.allBookings)
  domUpdates.currentUser = manager
}

//////////////EVENT LISTENERS///////////////////
window.addEventListener('load', fetchAllData)
window.addEventListener('click', clickhandler)