//exchange rates
var exchangeRates = [
    ["EUR (€)", 4.8000, 4.8800],
    ["GBP (£)", 5.4400, 5.5400],
    ["USD ($)", 4.9600, 5.0200]
];

exchangeRates.forEach((exchangeRate) => { insRow(exchangeRate[0], exchangeRate[1], exchangeRate[2]) });

function insRow(currency, buy, sell)
{
    var x = document.getElementById('exchangeRatesTable').insertRow(1);
    var c1 = x.insertCell(0);
    var c2 = x.insertCell(1);
    var c3 = x.insertCell(2);
    c1.innerHTML=currency;
    c2.innerHTML=buy;
    c3.innerHTML=sell;
};


//dynamicly show currencies values when user change value in 'number' input
const selectElement = document.getElementById('number');

selectElement.addEventListener('change', (event) => {
  const result = document.getElementById('dynamicCurrencyChange');
  var currenciesText = '';
  exchangeRates.forEach((exchangeRate) => { currenciesText += ((exchangeRate[1]*event.target.value).toFixed(2) + ' ' + exchangeRate[0] + '\n') });
  result.textContent = currenciesText;
});
