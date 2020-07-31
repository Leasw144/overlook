class Manager extends User {
  constructor() {
    super()
    this.username = 'manager'
    this.getAllBookings()
  }
  getAllBookings() {
    this.allBookings = bookings
  }
}

export default Manager