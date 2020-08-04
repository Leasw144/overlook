import Hotel from '../src/Hotel';

class Guest extends Hotel {
  constructor(guestID, guestsData, roomData, bookingsData) {
    super(guestsData, roomData, bookingsData)
    this.guestID = guestID
    this.findName(this.guestID)
  }

  findName(usernameID) {
    const signedIn = this.allUsers.find(guest => {
 
      return guest.id === Number(usernameID)
    })
    this.name = signedIn.name
  }
  //not sure if findBookings should go here
  findBookings(id) { 
    const personalBookings = bookings.filter(booking => {
      return booking.userID === this.guestID
    })
    this.personalBookings = personalBookings
  }
}

export default Guest