import { expect } from 'chai';
import Manager from '../src/Manager'

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
    manager = new Manager(allUsers, allRooms, bookings)

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

  it('will return a message if user could not be found', function() {
    expect(manager.searchUserHistory('Leet')).to.equal('Please try a different name')
  })

  it('will return a message if no input has been made', function() {
    expect(manager.searchUserHistory()).to.equal('Please try a different name')
  })

  it('should be able to know how many availble rooms there are on a given day', () => {
    expect(manager.findTotalOpenRooms("2020/04/22")).to.equal(1)
  })

  it('should be able to give a percentage of rooms occupied on a given day', () => {
    expect(manager.calcPercentageOccupied("2020/01/24")).to.equal(33.33)
  })

  it('should be able to give a percentage of rooms occupied on a given day', () => {
    expect(manager.calcPercentageOccupied("2020/04/22")).to.equal(66.67)
  })


  it('should return zero if there are no rooms booked that day', () => {
    expect(manager.calcPercentageOccupied("2022/01/24")).to.equal(0)
  })
  it.skip('should be able to delete a booking', function() {
    expect(manager.getOpenRooms('2020/04/21')).to.equal(2)
  })

})