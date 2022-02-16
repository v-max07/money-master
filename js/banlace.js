//Function for get input value
function getInputValue(inputID) {
    const value = document.getElementById(inputID).value;
    return value;
}

//Function for get intput inner text from any element
function getInnerText(textID) {
    const text = document.getElementById(textID).innerText;
    return text;
}


// function for get saving amount 
function setSavingAmount() {
    //get income amount
    const incomeAmount = parseFloat(getInputValue('income_Input'));

    //get saving input value calling a function
    const savingLimit = parseFloat(getInputValue('saving_input'));

    // set saving amount as a innerText
    const savingAmount = incomeAmount * (savingLimit / 100);

    return savingAmount;
}

// function for set remaining balance
function setRemaining() {
    //get income amount
    const incomeAmount = parseFloat(getInputValue('income_Input'));

     //get total expenses 
    const totalExpenses = parseFloat( getInnerText("totalExpenses"));
    // set remaining Balance 
    const remainingBalance = incomeAmount - (totalExpenses + setSavingAmount());

    document.getElementById('remaining_Balance').innerText = remainingBalance;
}




// add click event in Calculate Button
document.getElementById('btnCalculate').addEventListener('click', function () {
    const incomeAmount = parseFloat(getInputValue('income_Input'));
    console.log(incomeAmount)
    const foodExpenses = parseFloat(getInputValue('food_ExpensesInput'));
    const rentExpenses = parseFloat( getInputValue('rent_ExpensesInput'));
    const clothsExpenses = parseFloat(getInputValue('cloths_ExpensesInput'));

    //get savingAmount 
    const savingAmount = parseFloat(document.getElementById('savingAmount').innerText);

    // has money after saving 
    const moneyForExpenses = incomeAmount - savingAmount;


    // check incomeAmount, foodExpenses, rentExpenses and clothsExpenses are not smaller than 0
    // and also check the all type of expenses are lower than the actual monye 

    if ((incomeAmount > 0) && (foodExpenses > 0 && moneyForExpenses > foodExpenses) && (rentExpenses > 0 &&moneyForExpenses > rentExpenses) && (clothsExpenses > 0 && moneyForExpenses>clothsExpenses)) {
        // Change Total Expenses 
        document.getElementById('totalExpenses').innerText = foodExpenses + rentExpenses + clothsExpenses;

        const totalExpenses = parseFloat(getInnerText('totalExpenses'));

        //Balance after expenses
        const subBalance = incomeAmount - totalExpenses;
        document.getElementById('subBalance').innerText = subBalance;

        //set remaining balance
        setRemaining();

        //hide alert
        document.getElementById('alert').style.visibility = 'hidden';
    
    } else {
        document.getElementById('alert').style.visibility = 'visible';

        // after error reset the value 0
        document.getElementById('totalExpenses').innerText = 0;
        document.getElementById('subBalance').innerText = 0;
    }


})



//add click event in save button

document.getElementById('save_Btn').addEventListener('click', function () {
    //set saving amount calling setSavingAmount function
    document.getElementById('savingAmount').innerText = setSavingAmount();

   //set remaining balance
    setRemaining();

})