function makeAccount() { return {
    balance: 0,
    transactions: [],

    deposit: function(amt) {
        let num = Number(amt)
        if (isNaN(num) || num <= 0) return false
        this.transactions.push({type: 'deposit', amount: num})
        this.balance += num
        return this.balance
    },

    withdraw: function(amt) {
        let num = Number(amt)
        if (isNaN(num) || num <= 0) return false
        if (num > this.balance) num = this.balance
        this.transactions.push({type: 'withdraw', amount: num})
        this.balance -= num
        return this.balance
    }
}}

function makeBank() { 
    let accounts = []
    return {
        openAccount: function() { 
            let balance = 0
            let transactions = []
            let number = accounts.length + 101

            let acc = {
                balance: function() {
                    return balance
                },
                
                number: function() {
                    return number
                },

                transactions: function() {
                    return transactions
                },

                deposit: function(amt) {
                    let num = Number(amt)
                    if (isNaN(num) || num <= 0) return false
                    transactions.push({type: 'deposit', amount: num})
                    balance += num
                    return balance
                },
            
                withdraw: function(amt) {
                    let num = Number(amt)
                    if (isNaN(num) || num <= 0) return false
                    if (num > this.balance) num = balance
                    transactions.push({type: 'withdraw', amount: num})
                    balance -= num
                    return num
                }
            }
            accounts.push(acc)
            return acc
        },

        transfer: function(source, destination, amt) {
            amt = source.withdraw(amt)
            destination.deposit(amt)
            return amt
        }
    }
}

// let account = makeAccount()
// account.deposit(15)
// console.log(account.balance)

// let naccount = makeAccount()
// console.log(naccount.balance)

let bank = makeBank()
let account = bank.openAccount()
account.deposit(10)
let naccount = bank.openAccount()
bank.transfer(account, naccount, 7)
console.log(account.balance())
console.log(bank.accounts)

