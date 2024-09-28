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

    // Update the HTML elements with calculated values
    document.getElementById('fixedBase').innerText = fixedCharges.toFixed(2);
    document.getElementById('fixedTax').innerText = fixedTax.toFixed(2);
    document.getElementById('variableBase').innerText = variableBase.toFixed(2);
    document.getElementById('variableFED').innerText = variableFED.toFixed(2);
    document.getElementById('totalCharges').innerText = totalCharges.toFixed(2);
}
