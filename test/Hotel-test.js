import { expect } from 'chai';
import Hotel from '../src/Hotel';
// import Guest from '../src/Guest'

describe.only('Hotel', function () {
  let bookings, hotel, allRooms, allUsers;
  beforeEach(() => {
    allUsers = [
      {
        "id": 1,
        "name": "Leata Rich"
      },
      {
        "id": 2,
        "name": "Othello Brello"
      },
      {
        "id": 3,
        "name": "Elma Hernandez"
      }
    ]
    allRooms = [
      {
        "number": 1,
        "roomType": "suite",
        "bidet": true,
        "bedSize": "queen",
        "numBeds": 2,
        "costPerNight": 33
      },
      {
        "number": 2,
        "roomType": "kennel",
        "bidet": false,
        "bedSize": "full",
        "numBeds": 1,
        "costPerNight": 477.38
      }
    ]

    bookings = [
      {
        "id": "5fwrgu4i7k55hl6sz",
        "userID": 1,
        "date": "2020/04/22",
        "roomNumber": 1,
        "roomServiceCharges": []
      },
      {
        "id": "5fwrgu4i7k55hl6t5",
        "userID": 43,
        "date": "2020/01/24",
        "roomNumber": 24,
        "roomServiceCharges": []
      },
      {
        "id": "5fwrgu4i7k55hl6t6",
        "userID": 1,
        "date": "2020/01/10",
        "roomNumber": 76,
        "roomServiceCharges": []
      }
    ]

    hotel = new Hotel(allUsers)
    hotel.allBookings = bookings
    hotel.allRooms = allRooms
    hotel.allUsers = allUsers
  })
  it('should be a function', function () {
    expect(hotel).to.be.a('function');
  });
  
  it('should store booking data', () => {
    expect(hotel.allBookings).to.deep.equal(bookings);
  })

  it('should store room data', () => {
    expect(hotel.allRooms).to.deep.equal(allRooms);
  })
  it('should store all user information', () => {
    expect(hotel.allUsers).to.deep.equal(allUsers);
  })

  it('should have a log of all usernames', () => {
    expect(hotel.usernameLog).to.deep.equal(['customer1', 'customer2', 'customer3'])
  })

  it('should be able to validate a user if their credentials are correct', () => {
    expect(hotel.checkValidation('customer1', 'overlook2020')).to.equal(true)
  })

  it('should accept if a string of manager is entered', () => {
    expect(hotel.checkValidation('manager', 'overlook2020')).to.equal(true)
  })

  it('should return an error message if either or both fields are not satisfied', () => {
    expect(hotel.checkValidation('customer1', 'Overlook2020')).to.equal(`Username or Password was entered incorrectly`)
  })

  it('should return an error message if either or both fields are not satisfied', () => {
    expect(hotel.checkValidation()).to.equal(`Username or Password was entered incorrectly`)
  })
  // it('should have a method that creates a list of usernames', () => {
  //   expect(user.allUsernames).to.equal(allUsers)
  // })
})