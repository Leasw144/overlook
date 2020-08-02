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

  searchUserHistory(searchInput) {
    const suspectedUser = this.allUsers.find(user => user.name.includes(searchInput))
    console.log('search results', this.allBookings.filter(booking => suspectedUser.id === booking.userID))
    return this.allBookings.filter(booking => suspectedUser.id === booking.userID)
  }


}

export default Manager