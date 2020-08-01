class Bookings {
  constructor(userID, date, roomNumber) {
    this.userID = userID
    this.date = date
    this.roomNumber = roomNumber
    this.roomServiceCharges = []
  }
}

export default Bookings