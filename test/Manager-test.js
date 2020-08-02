import { expect } from 'chai';
import Manager from '../src/Manager'
import User from '../src/User';

describe('Manager', function () {
 let bookings, allRooms, allUsers, manager, user;
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
        "userID": 3,
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
    console.log('bookings at 0', bookings[0])
    user = new User(allUsers, allRooms, bookings)
    manager = new Manager(allUsers, allRooms, bookings)

    console.log(manager)
  })
  it('should be a function', function () {
    expect(Manager).to.be.a('function');
  });
  
  it('should have an instance of Manager', function() {
    expect(manager).to.be.an.instanceOf(Manager)
  })

  it('should have a way to calculate the days total revenue', function() {
    expect(manager.calculateRevenue("2020/04/22")).to.equal(849.54)
  })

  it('if a day is called with no reservations return a message', function() {
    expect(manager.calculateRevenue('2020/04/21')).to.equal(0)
  })

  it('can search a users name and return their booking history', function() {
    expect(manager.searchUserHistory('Leata')).to.deep.equal([{
      id: '5fwrgu4i7k55hl6sz',
      userID: 1,
      date: '2020/04/22',
      roomNumber: 1,
      roomServiceCharges: []
    }])
  })


})