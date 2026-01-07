document.addEventListener('DOMContentLoaded', () => {
  const treatmentSelect = document.getElementById("treatmentSelect");
  const countrySelect = document.getElementById("countrySelect");
  const usdCostInput = document.getElementById("usdCost");
  const localCostInput = document.getElementById("localCost");
  const calculateBtn = document.getElementById("calculateBtn");
  const resultsDiv = document.getElementById("calculatorResults");

  function formatRange(symbol, min, max) {
    return `${symbol}${min.toLocaleString("en-IN")} - ${symbol}${max.toLocaleString("en-IN")}`;
  }

  function calculateCost() {
    const treatmentKey = treatmentSelect.value;
    const countryKey = countrySelect.value;

    if (!treatmentKey || !countryKey || !window.COUNTRY_DATA) {
      if (resultsDiv) resultsDiv.classList.add('hidden');
      return;
    }

    const country = window.COUNTRY_DATA[countryKey];
    if (!country || !country.treatments[treatmentKey]) {
      if (resultsDiv) resultsDiv.classList.add('hidden');
      return;
    }

    const data = country.treatments[treatmentKey];

    // Update input fields
    usdCostInput.value = `$${data.usd[0].toLocaleString()} - $${data.usd[1].toLocaleString()}`;
    localCostInput.value = formatRange(country.currency, data.local[0], data.local[1]);

    // Update enhanced results display
    if (resultsDiv && window.COUNTRY_DATA.india && window.COUNTRY_DATA.india.treatments[treatmentKey]) {
      const indiaData = window.COUNTRY_DATA.india.treatments[treatmentKey];
      
      // Calculate savings
      const indiaAvg = (indiaData.usd[0] + indiaData.usd[1]) / 2;
      const selectedAvg = (data.usd[0] + data.usd[1]) / 2;
      const savings = selectedAvg - indiaAvg;
      const savingsPercent = savings > 0 ? Math.round((savings / selectedAvg) * 100) : 0;

      // Update result cards
      const resultIndiaUSD = document.getElementById('resultIndiaUSD');
      const resultIndiaINR = document.getElementById('resultIndiaINR');
      const resultCountryName = document.getElementById('resultCountryName');
      const resultCountryUSD = document.getElementById('resultCountryUSD');
      const resultCountryLocal = document.getElementById('resultCountryLocal');
      const savingsAmount = document.getElementById('savingsAmount');
      const savingsPercentage = document.getElementById('savingsPercentage');
      const savingsBadge = document.getElementById('savingsBadge');

      if (resultIndiaUSD) resultIndiaUSD.textContent = `$${indiaData.usd[0].toLocaleString()} - $${indiaData.usd[1].toLocaleString()}`;
      if (resultIndiaINR) resultIndiaINR.textContent = `₹${indiaData.local[0].toLocaleString('en-IN')} - ₹${indiaData.local[1].toLocaleString('en-IN')}`;
      
      const countryName = countryKey.charAt(0).toUpperCase() + countryKey.slice(1).replace(/_/g, ' ');
      if (resultCountryName) resultCountryName.textContent = countryName;
      if (resultCountryUSD) resultCountryUSD.textContent = `$${data.usd[0].toLocaleString()} - $${data.usd[1].toLocaleString()}`;
      if (resultCountryLocal) resultCountryLocal.textContent = formatRange(country.currency, data.local[0], data.local[1]);
      
      if (savings > 0 && savingsAmount && savingsPercentage) {
        savingsAmount.textContent = `Save up to $${Math.round(savings).toLocaleString()}`;
        savingsPercentage.textContent = `${savingsPercent}%`;
        if (savingsBadge) savingsBadge.classList.remove('hidden');
        resultsDiv.classList.remove('hidden');
      } else if (savings <= 0 && savingsBadge) {
        savingsBadge.classList.add('hidden');
        if (countryKey === 'india') {
          resultsDiv.classList.remove('hidden');
        } else {
          resultsDiv.classList.add('hidden');
        }
      } else {
        resultsDiv.classList.remove('hidden');
      }
    } else if (resultsDiv) {
      resultsDiv.classList.add('hidden');
    }
  }

  if (treatmentSelect) treatmentSelect.addEventListener("change", calculateCost);
  if (countrySelect) countrySelect.addEventListener("change", calculateCost);
  if (calculateBtn) calculateBtn.addEventListener("click", calculateCost);
  
  // Make calculateCost available globally
  window.calculateCost = calculateCost;
});
