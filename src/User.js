class User {
  constructor(username) {
    this.username = username
    this.password = 'overlook2020'
    this.allUsers = []
    this.allRooms = []
    this.allBookings = []
  }

  checkPassword(usernameAttempt, pwAttempt) {
    if(usernameAttempt === this.username && pwAttempt === this.password) {
      return true
    } else {
      return `Username or Password was entered incorrectly`
    }
  }
  findBookings(id) {
    const personalBookings = bookings.filter(booking => {
      return booking.userID === this.guestID
    })
    this.personalBookings = personalBookings
  }
}

export default User