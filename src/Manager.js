import Hotel from '../src/Hotel';

class Manager extends Hotel {
  constructor(guestsData, roomData, bookingsData) {
    super(guestsData, roomData, bookingsData)
  }

  calcRevenue(date) {
    let todaysBookings = this.allBookings.bookings.filter(booking => booking.date === date)
    return todaysBookings.reduce((todaysRevenue, todaysBooking) => {
      this.allRooms.rooms.forEach(room => {
        if (room.number === todaysBooking.roomNumber) {
          todaysRevenue += room.costPerNight
        }
      })
      return todaysRevenue
    }, 0)
  }

  searchUserHistory(searchInput) {
    const suspectedUser = this.allUsers.find(user => user.name.includes(searchInput))
    if (suspectedUser) {
      return this.allBookings.filter(booking => suspectedUser.id === booking.userID)
    } else {
      return 'Please try a different name'
    }
  }

  findTotalOpenRooms(date) {
    const bookedToday = this.allBookings.bookings.filter(booking => booking.date === date) 
    return this.allRooms.rooms.length - bookedToday.length
  }

  calcPercentageOccupied(date) {
    const bookedToday = this.allBookings.bookings.filter(booking => booking.date === date)
    console.log('lives in manager class', this.allRooms.rooms.length)
    return ((this.allRooms.rooms.length / bookedToday.length).toFixed(2))
  }


}

export default Manager