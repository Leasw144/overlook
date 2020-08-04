const domUpdates = {
  currentUser: null,
  todaysDate: null,
  // determineDash(outcome) {
  //   if (outcome === 1) {
  //     console.log('it worked')
  //     this.sendToGuestDash()
  //   } else if (outcome === 0) {
  //     this.sendToManagerDash(this.todaysDate) 
  //   } else if (outcome === `Username or Password was entered incorrectly`) {
  //     this.displayLoginError(outcome)
  //   }
  // },

  sendToManagerDash(date) {
    document.querySelector('.login-box').classList.add('hidden')
    document.querySelector('.manager-display').classList.remove('hidden')
    this.updateManagerStats(date)
  },

  updateManagerStats(date) {
    console.log(this.currentUser)
    document.querySelector('.total-rooms-available').innerText = this.currentUser.findTotalOpenRooms(date)
    document.querySelector('.todays-revenue').innerText = this.currentUser.calcRevenue(date)
    document.querySelector('.occupancy').innerText = `${this.currentUser.calcPercentageOccupied(date)}%`
  },

  sendToGuestDash() {
    document.querySelector('.login-box').classList.add('hidden')
    document.querySelector('.guest-display').classList.remove('hidden')
    this.updateGuestStats()
  },

  updateGuestStats(date) {
    document.querySelector('.total-amount-spent').innerText = this.currentUser.calcTotalAmountSpent()
    document.querySelector('.welcome-back').innerText = this.currentUser.name
    this.currentUser.myBookings.forEach(booking => {
      document.querySelector('.booked-rooms-display').insertAdjacentHTML('beforebegin',
        `
        <article class='card'>
          <h3>Date Booked: ${booking.date}</h3>
          <div class='green-background'>
            <ul>
            <li>Booking Number: ${booking.id}</li>
            <li>Room Number: ${booking.roomNumber}</li>
            <li></li>
            </ul>
          <div class='green-background'>
        </article>
        `
      )
    })
  },

  displayLoginError(outcome) {
    document.querySelector('.username-input').innerText = ''
    document.querySelector('.pw-input').innerText = ''
    document.querySelector('.error-login').innerText = outcome
  }
  
}

export default domUpdates