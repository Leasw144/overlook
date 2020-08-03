import User from '../src/User';

class Manager extends User {
  constructor(guestsData, roomData, bookingsData) {
    super(guestsData, roomData, bookingsData)
  }

  calculateRevenue(date) {
    let todaysBookings = this.allBookings.filter(booking => booking.date === date)
    return todaysBookings.reduce((todaysRevenue, todaysBooking) => {
      this.allRooms.forEach(room => {
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
    console.log('lives in manager class', bookedToday.length)
    return this.allRooms.rooms.length - bookedToday.length
  }

  calcPercentageOccupied(date) {
    const bookedToday = this.allBookings.filter(booking => booking.date === date)
    return ((bookedToday.length / this.allRooms.length).toFixed(4)) * 100
  }


}

export default Manager