var Bank = require('../bank');
var Account = require('../account');
var assert = require('chai').assert

describe( 'Bank', function() {

  it('should have name', function() {
    var account1 = new Account("Marie", "Moyles", 30, 123456, 100)
    assert.equal("Marie", account1.name)
  })
  
  it ('should add accounts to bank', function() {
    var bank1 = new Bank("HSBC");
    var account1 = new Account("Marie", "Moyles", 30, 123456, 100);
    bank1.addAccount(account1);
    assert.equal(1, bank1.accounts.length)
  })

  it('should find account by owners name', function() {
    var bank1 = new Bank("HSBC");
    var account1 = new Account("Marie", "Moyles", 30, 123456, 200);
    bank1.addAccount(account1);
    var test = bank1.findAccountByName("Marie")
    assert.equal("Marie", test.name)
  })

  it('should find largest account', function() {
    var bank1 = new Bank("HSBC");
    var account1 = new Account("Marie", "Moyles", 30, 123456, 200);
    var account2 = new Account("Davide", "Moyles", 30, 123456, 500);
    var account3 = new Account("Chris", "Moyles", 30, 123456, 500);
    bank1.addAccount(account1);
    bank1.addAccount(account2);
    bank1.addAccount(account3);
    bank1.findMaxAccount()
    assert.equal(2,bank1.findMaxAccount().length)
  })



})

