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
    this.updateGuestStats(date)
  },

  updateGuestStats(date) {
    console.log(this.currentUser)
  },

  displayLoginError(outcome) {
    document.querySelector('.username-input').innerText = ''
    document.querySelector('.pw-input').innerText = ''
    document.querySelector('.error-login').innerText = outcome
  }
  
}

export default domUpdates