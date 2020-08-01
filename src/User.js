class User {
  constructor(guestsData) {
    // this.username = username || 0
    this.password = 'overlook2020'
    this.allUsers = guestsData
    this.allRooms = []
    this.allBookings = []
    
    this.createUsernames(guestsData)
  }
  
  createUsernames(guests) {
    const allUsernames = guests.map(guest => `customer${guest.id}`)
    this.usernameLog = allUsernames
  }

  checkValidation(usernameAttempt, pwAttempt) {
    if (this.usernameLog.includes(usernameAttempt) && pwAttempt === this.password) {
      return true
    } else {
      return `Username or Password was entered incorrectly`
    }
  }
  // findBookings(id) {
  //   const personalBookings = bookings.filter(booking => {
  //     return booking.userID === this.guestID
  //   })
  //   this.personalBookings = personalBookings
  // }
}

export default User