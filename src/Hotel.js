class Hotel {
  constructor(guestsData, roomData, bookingsData) {
    // this.username = username || 0
    this.password = 'overlook2020'
    this.allUsers = guestsData
    this.allRooms = roomData
    this.allBookings = bookingsData
    // this.allUsernames = this.createUsernames()
  }
  
  createUsernames() {
    // console.log('createUser', this.allUsers.users)
    const allUsernames = this.allUsers.users.map(guest => `customer${guest.id}`)
    // console.log(allUsernames)
    this.usernameLog = allUsernames
  }

  checkValidation(usernameAttempt, pwAttempt) {
    if (this.usernameLog.includes(usernameAttempt) && pwAttempt === this.password) {
      return 1
    } else if (usernameAttempt === 'manager' && pwAttempt === this.password) {
      return 0
    } 
    return `Username or Password was entered incorrectly`
  }
}
// findBookings(id) {
//   const personalBookings = bookings.filter(booking => {
//     return booking.userID === this.guestID
//   })
//   this.personalBookings = personalBookings
// }


export default Hotel