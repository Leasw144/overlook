import User from '../src/User';

class Manager extends User {
  constructor(guestsData, roomData, bookingsData) {
    super(guestsData, roomData, bookingsData)
  }

  calculateRevenue(date) {
    let todaysBookings = this.allBookings.filter(booking => booking.date === date)
    // console.log(todaysBookings)
    return todaysBookings.reduce((todaysRevenue, todaysBooking) => {
      this.allRooms.forEach(room => {
        if (room.number === todaysBooking.roomNumber) {
          todaysRevenue += room.costPerNight
        }
      })
      return todaysRevenue
    }, 0)
  }

  
}

export default Manager