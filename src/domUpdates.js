const domUpdates = {
  currentUser: null,
  todaysDate: null,

  sendToManagerDash(date) {
    document.querySelector('.login-box').classList.add('hidden')
    document.querySelector('.manager-display').classList.remove('hidden')
    this.updateManagerStats(date)
  },

  updateManagerStats(date) {
    document.querySelector('.total-rooms-available').innerText = this.currentUser.findTotalOpenRooms(date)
    document.querySelector('.todays-revenue').innerText = this.currentUser.calcRevenue(date)
    document.querySelector('.occupancy').innerText = `${this.currentUser.calcPercentageOccupied(date)}`
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

  displayAvailableRooms(room, date) {
    const openRooms = this.currentUser.findMeAvailRooms(room, date)
    if (openRooms.length > 0) {
      document.querySelector('.guest-info').innerText = ''
      openRooms.forEach(room => {
        document.querySelector('.guest-info').insertAdjacentHTML('beforebegin',
          `
          <article class='card'>
            <h3>Available Today</h3>
            <div class='transluscent'>
              <p> Room: ${room.roomType}</p>
              <p>Bed Type ${room.bedSize}</p>
              <p>Number of Beds ${room.numBeds}</p>
              <p>Room Number ${room.number}</p>
              <h3>Price: $${room.costPerNight}</h3>
              <button class="book-me" aria-label='Submit booking' value=${room.number} type='button'>Book me</button>
            </div>
          </article>
          `
        )
      })
    } else {
      return `WE ARE SO SORRY THERE ARE NO ROOMS OMG`
    }
  },

  displayLoginError(outcome) {
    document.querySelector('.username-input').innerText = ''
    document.querySelector('.pw-input').innerText = ''
    document.querySelector('.error-login').innerText = outcome
  }
}

export default domUpdates