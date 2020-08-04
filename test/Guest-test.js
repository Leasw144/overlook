import { expect } from 'chai';
import Guest from '../src/Guest'

describe.only('Guest', function () {
  let bookings, allRooms, allUsers, guest;
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
        "roomType": "residential suite",
        "bidet": true,
        "bedSize": "queen",
        "numBeds": 1,
        "costPerNight": 358.4
      },
      {
        "number": 2,
        "roomType": "suite",
        "bidet": false,
        "bedSize": "full",
        "numBeds": 2,
        "costPerNight": 477.38
      },
      {
        "number": 8,
        "roomType": "single room",
        "bidet": false,
        "bedSize": "king",
        "numBeds": 1,
        "costPerNight": 491.14
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
        "userID": 8,
        "date": "2020/01/24",
        "roomNumber": 24,
        "roomServiceCharges": []
      },
      {
        "id": "5fwrgu4i7k55hl6t6",
        "userID": 2,
        "date": "2020/04/22",
        "roomNumber": 8,
        "roomServiceCharges": []
      }
    ]
    guest = new Guest(1, allUsers, allRooms, bookings)

  })
  it('should be a function', function () {
    expect(Guest).to.be.a('function');
  });

  it('should hold datasets for users', function () {
    expect(guest.allUsers).to.equal(allUsers);
  });

  it('should hold datasets for rooms', function () {
    expect(guest.allRooms).to.equal(allRooms);
  });
  it('should hold datasets for bookings', function () {
    expect(guest.allBookings).to.equal(bookings);
  });

  
})