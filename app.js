function formatCurrency(amount) {
    return 'PKR ' + amount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function calculateCharges() {
    const salesAmount = parseFloat(document.getElementById('salesAmount').value);

    // Fixed Charges
    const fixedCharges = 10000;
    const salesTaxRate = 0.05;
    const variableRate = 0.029;
    const fedRate = 0.17;

    // Calculate fixed charges
    const fixedTax = fixedCharges * salesTaxRate;
    const fixedTotal = fixedCharges + fixedTax;

    // Calculate variable charges
    const variableBase = salesAmount * variableRate;
    const variableFED = variableBase * fedRate;
    const variableTotal = variableBase + variableFED;

    // Total Charges
    const totalCharges = fixedTotal + variableTotal;

    // Effective percentage calculation
    const effectivePercentage = (totalCharges / salesAmount) * 100;

    // Update the HTML elements with calculated values
    document.getElementById('fixedBase').innerText = formatCurrency(fixedCharges);
    document.getElementById('fixedTax').innerText = formatCurrency(fixedTax);
    document.getElementById('variableBase').innerText = formatCurrency(variableBase);
    document.getElementById('variableFED').innerText = formatCurrency(variableFED);
    document.getElementById('totalCharges').innerText = formatCurrency(totalCharges);
    document.getElementById('effectivePercentage').innerText = effectivePercentage.toFixed(2);
}
