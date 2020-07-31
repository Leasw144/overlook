class Guest extends User {
  constructor(guestID, name) {
    super()
    this.guestID = guestID
    this.name = name
    this.username = `customer${this.guestID}`
    this.findBookings(guestID)
  }

  findBookings(id) {
    const personalBookings = bookings.filter(booking => {
      return booking.userID === this.guestID
    })
    this.personalBookings = personalBookings
  }
}

export default Guest