/*
  1. add withdraw button event handler
  2. get element amount by using getInputFieldById function
  3. get previous withdaw amount by using getTextElmentValueById function
  4. calculate new withdraw total and set the value
  4.5: srt new withdraw total by using setTextElementValueById function
  5. get previous balance total by using getTextElementValueById function
  6.calculate new balance total
  7. set balnace total using setTextElemnetValueById
*/

document.getElementById("btn-withdraw").addEventListener("click", function () {
  const newWithdrawAmount = getInputFieldValueById("withdraw-field");

  const previousWithdrawTotal = getTextElementValueById("withdraw-total");
  const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

  setTextElementValueById("withdraw-total", newWithdrawTotal);

  const previousBalanceTotal = getTextElementValueById("balance-total");
  const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
  setTextElementValueById("balance-total", newBalanceTotal);
});
