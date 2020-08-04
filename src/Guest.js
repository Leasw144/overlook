import Hotel from '../src/Hotel';

class Guest extends Hotel {
  constructor(guestID, guestsData, roomData, bookingsData) {
    super(guestsData, roomData, bookingsData)
    this.guestID = guestID
    this.findName(this.guestID)
    this.findPersonalBookings(this.name)
  }

  findName(usernameID) {
    const signedIn = this.allUsers.find(guest => {
 
      return guest.id === Number(usernameID)
    })
    this.name = signedIn.name
    return this.name
  }
  //not sure if findBookings should go here
  findPersonalBookings(name) { 
    const allGuestBookings = this.findGuestBookings(name)
    if (allGuestBookings === 'Please try a different name') {
      this.myBookings = []
      return 'No Bookings Found!'
    }
    this.myBookings = allGuestBookings
  }
}

export default Guest