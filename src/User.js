class User {
  constructor() {
    this.password = '1'

  }
  findBookings(id) {
    const personalBookings = bookings.filter(booking => {
      return booking.userID === this.guestID
    })
    this.personalBookings = personalBookings
  }
}

export default User