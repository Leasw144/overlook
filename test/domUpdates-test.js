import chai from 'chai';
const expect = chai.expect;
const spies = require('chai-spies');
import domUpdates from '../src/domUpdates'

chai.use(spies);

describe.only('domUpdates', () => {
  beforeEach(() => {
    global.document = {}
    chai.spy.on(document, ['sendToManagerDash', 'updateManagerStats', 'sendtoGuestDash'], () => { })
  })

  it('should get data for users', () => {
    
    domUpdates.sendToManagerDash()
    expect(domUpdates.sendToManagerDash()).to.have.been.called(1)
  })

})