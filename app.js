let description = document.querySelector("#description");

let enteredValue = document.querySelector("#enteredValue");

let checkCircle = document.querySelector("#checkCircle");

let ul = document.querySelector("ul");

let select = document.querySelector("select");

let incomeDescription = document.querySelector("#incomeDescription");

let expenseDescription = document.querySelector("#expenseDescription");

let enteredIncome = document.querySelector("#enteredIncome");

let enteredExpense = document.querySelector("#enteredExpense");

let totalExpense = document.getElementById("totalExpense");

let finalBalance = document.getElementById("finalBalance");

let totalIncome = document.getElementById("totalIncome");

let button = document.querySelector("button");

let percentageOfincome = document.querySelector("#percentageOfincome");

let label = document.querySelector("label");

let inp = document.querySelector("input");
let dark = document.querySelector("dark_mode");

function updateCircleColor() {
  if (select.value === "EXPENSE-") {
    checkCircle.style.color = "#dc3545";
  } else {
    checkCircle.style.color = "#0d6efd";
  }
}
updateCircleColor();

select.addEventListener("change", updateCircleColor);

checkCircle.addEventListener("click", function () {
  let expense = parseFloat(totalExpense.innerText) || 0;
  let amount = parseFloat(enteredValue.value) || 0;
  let income = parseFloat(totalIncome.innerText) || 0;
  let Balance = parseFloat(finalBalance.innerText) || 0;

  if (amount === 0 || description.value === "") {
    alert("Invalid amount or text");
    enteredValue.focus();

    return;
  }

  if (select.value === "INCOME+") {
    let Listitem = document.createElement("li");
    Listitem.innerText = description.value;
    incomeDescription.appendChild(Listitem);
    description.value = "";

    let listAmount = document.createElement("p");
    listAmount.innerText = enteredValue.value;
    enteredIncome.appendChild(listAmount);
    income += amount;
    totalIncome.innerText = "+" + income.toFixed(2);
    Balance += amount;
    finalBalance.innerText = Balance.toFixed(2);
    enteredValue.value = "";
  } else {
    let Listitem2 = document.createElement("li");
    Listitem2.innerText = description.value;
    expenseDescription.appendChild(Listitem2);
    description.value = " ";

    let listAmount2 = document.createElement("p");
    listAmount2.innerText = enteredValue.value;
    enteredExpense.appendChild(listAmount2);

    expense -= amount;
    totalExpense.innerText = expense.toFixed(2);
    Balance -= amount;
    finalBalance.innerText = Balance.toFixed(2);
    enteredValue.value = "";
  }

  percentageOfincome.innerText = income
    ? ((expense / income) * 100).toFixed(2) + "%"
    : "0%";
});
