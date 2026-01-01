const treatmentSelect = document.getElementById("treatmentSelect");
const countrySelect = document.getElementById("countrySelect");
const usdCostInput = document.getElementById("usdCost");
const localCostInput = document.getElementById("localCost");
const calculateBtn = document.getElementById("calculateBtn");

function formatRange(symbol, min, max) {
  return `${symbol}${min.toLocaleString("en-IN")} - ${symbol}${max.toLocaleString("en-IN")}`;
}

function calculateCost() {
  const treatmentKey = treatmentSelect.value;
  const countryKey = countrySelect.value;

  if (!treatmentKey || !countryKey) return;

  const country = window.COUNTRY_DATA[countryKey];
  if (!country || !country.treatments[treatmentKey]) return;

  const data = country.treatments[treatmentKey];

  usdCostInput.value = `$${data.usd[0].toLocaleString()} - $${data.usd[1].toLocaleString()}`;
  localCostInput.value = formatRange(country.currency, data.local[0], data.local[1]);
}

treatmentSelect.addEventListener("change", calculateCost);
countrySelect.addEventListener("change", calculateCost);
calculateBtn.addEventListener("click", calculateCost);
