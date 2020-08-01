// function fetchData() {
//   let userData = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users') 
//     .then(data =>data.json())
//     .then(data => data.userData)
//     .catch(error => console.log('userData error'))
    
//   let bookingData = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings')
//     .then(data => data.json())
//     .then(data => data.bookingData)
//     .catch(error => console.log('bookingData error'))

//   let roomData = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/rooms/rooms')
//     .then(data => data.json())
//     .then(data => data.bookingData)
//     .catch(error => console.log('bookingData error'))

//   Promise.all([userData, bookingData, roomData]) 
//     .then(data => {
//       userData = data[0]
//       bookingData = data[1]
//     })

// }

// export default fetchData;