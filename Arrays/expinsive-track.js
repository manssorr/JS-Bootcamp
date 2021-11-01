const account = {
    name: 'Mansour Ashraf',
    expenses: [],
    incomes: [],

    addExpense: function (description, amount) {
        this.expenses.push({
            description: description,
            amount: amount
        })
    },

    addIncome: function (description, amount) {
        this.incomes.push({
            description: description,
            amount: amount
        })
    },

    getAccountSummary: function() {
        let totalExpenses = 0
        let totalIncomes = 0
        

        this.expenses.forEach(function (expense) {
            totalExpenses = totalExpenses + expense.amount
        })

        this.incomes.forEach(function(income){
            totalIncomes += income.amount
        })

        const accountBalance = totalIncomes - totalExpenses

        return `${this.name} has a Balance of $${accountBalance}. $${totalIncomes} in Income. $${totalExpenses} in Expenses.`
    }
}


account.addExpense('Rent', 950)
account.addExpense('Coffee', 2)
account.addIncome('food', 2000)
console.log(account.getAccountSummary())