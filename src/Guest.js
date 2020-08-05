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

  findPersonalBookings(name) { 
    const allGuestBookings = this.findGuestBookings(name)
    if (allGuestBookings === 'Please try a different name') {
      this.myBookings = []
      return 'No Bookings Found!'
    }
    this.myBookings = allGuestBookings
   
  }

  calcTotalAmountSpent() {
    const totalSpent = this.myBookings.reduce((sum, booking) => {
      this.allRooms.forEach(room => {
        if(room.number === booking.roomNumber) {
          sum += room.costPerNight
        }
      })
      return sum
    }, 0)
    return totalSpent.toFixed(2)
  }

  findMeAvailRooms(roomType, room) {
    // const bookingsThisDay = this.allBookings.filter(booking => {

    // })
  }
}

export default Guest