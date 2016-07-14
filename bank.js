var _ = require('lodash')
var Account = require('./account')


var Bank = function(name) {
  this.name = name,
  this.accounts = []
}

Bank.prototype = {
  addAccount: function(account) {
    this.accounts.push(account);
  },
  findAccountByName: function(accountName) {
    var namesArray = this.accounts.map(function(singleAccount){
      return singleAccount.name})
    var index = _.indexOf(namesArray,accountName)
    return this.accounts[index]
  },
  
  findMaxAccount: function() {
    var balanceArray = this.accounts.map(function(singleAccount){
      return singleAccount.balance
    })
    console.log(balanceArray)

    var maxValue = _.max(balanceArray);
    console.log(maxValue)
    maxBalanceArray=[]
   
    this.accounts.forEach(function(account){
      if( account.balance === maxValue){
        maxBalanceArray.push(account)
      }
    })
    return maxBalanceArray;
  },

  totalAccountValue: function(){
    var totalBalance = 0
    this.accounts.forEach(function(account){
      totalBalance+=account.balance
    })
    return totalBalance
  }

  avgbalance: function(){
    var totalBalance = 0
    this.accounts.forEach(function(account){
      totalBalance+=account.balance
    })
    return totalBalance/this.accounts.length
  }
}


module.exports = Bank;