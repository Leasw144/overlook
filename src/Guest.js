import User from '../src/User';

class Guest extends User {
  constructor(guestID, name) {
    super(`customer${guestID}`)
    this.guestID = guestID
    this.name = name
  }

  //not sure if findBookings should go here
  // findBookings(id) { 
  //   const personalBookings = bookings.filter(booking => {
  //     return booking.userID === this.guestID
  //   })
  //   this.personalBookings = personalBookings
  // }
}

export default Guest