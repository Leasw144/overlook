import moment from 'moment';
class Hotel {
  constructor(guestsData, roomData, bookingsData) {
    this.password = 'overlook2020'
    this.allUsers = guestsData
    this.allRooms = roomData
    this.allBookings = bookingsData
  }
  
  createUsernames() {
    const allUsernames = this.allUsers.users.map(guest => `customer${guest.id}`)
    this.usernameLog = allUsernames
  }

  checkValidation(usernameAttempt, pwAttempt) {
    if (this.usernameLog.includes(usernameAttempt) && pwAttempt === this.password) {
      return 1
    } else if (usernameAttempt === 'manager' && pwAttempt === this.password) {
      return 0
    } 
    return `Username or Password was entered incorrectly`
  }

  findGuestBookings(searchInput) {
    const suspectedUser = this.allUsers.find(user => user.name.includes(searchInput))
    if (suspectedUser) {
      const toBeSorted = this.allBookings.filter(booking => suspectedUser.id === booking.userID)
      const sortDates = (a, b) => moment(b.date).format('YYYYMMDD') - moment(a.date).format('YYYYMMDD')
      return toBeSorted.sort(sortDates)
    } else {
      return 'Please try a different name'
    }
  }
}

export default Hotel