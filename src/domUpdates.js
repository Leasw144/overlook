const domUpdates = {
  currentUser: null,
  todaysDate: null,
  hotel: null,

  determineDash(outcome) {
    if (outcome === 1) {
      this.sendToGuestDash()
    } else if (outcome === 0) {
      this.sendToManagerDash() 
    } else if (outcome === `Username or Password was entered incorrectly`) {
      this.displayLoginError(outcome)
    }
  },

  sendToManagerDash() {
    console.log('working')
  },

  sendToGuestDash() {
    console.log('working')
  },

  displayLoginError(outcome) {
    document.querySelector('.username-input').innerText = ''
    document.querySelector('.pw-input').innerText = ''
    document.querySelector('.error-login').innerText = outcome
  }
  
}

export default domUpdates