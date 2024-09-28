function formatCurrency(amount) {
    return 'PKR ' + amount.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function formatInput(input) {
    // Remove any non-digit characters
    let value = input.value.replace(/[^\d]/g, '');
    
    // Format the number and set it back to the input
    if (value) {
        value = Number(value); // Convert to number for proper formatting
        input.value = formatCurrency(value); // Format as currency without decimals
        calculateCharges(value); // Dynamically calculate charges
    } else {
        input.value = '';
        resetCharges(); // Reset charges if no value
    }
}

function calculateCharges(salesAmount) {
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
    document.getElementById('fixedTotal').innerText = formatCurrency(fixedTotal); // Total Fixed Charges
    document.getElementById('variableBase').innerText = formatCurrency(variableBase);
    document.getElementById('variableFED').innerText = formatCurrency(variableFED);
    document.getElementById('variableTotal').innerText = formatCurrency(variableTotal); // Total Variable Charges
    document.getElementById('totalCharges').innerText = formatCurrency(totalCharges);

    // Display effective percentage only if salesAmount is greater than 0
    document.getElementById('effectivePercentage').innerText = salesAmount > 0 ? effectivePercentage.toFixed(2) : '0';
}

function resetCharges() {
    document.getElementById('fixedBase').innerText = formatCurrency(10000);
    document.getElementById('fixedTax').innerText = formatCurrency(500);
    document.getElementById('fixedTotal').innerText = formatCurrency(10500); // Total Fixed Charges
    document.getElementById('variableBase').innerText = formatCurrency(0);
    document.getElementById('variableFED').innerText = formatCurrency(0);
    document.getElementById('variableTotal').innerText = formatCurrency(0); // Total Variable Charges
    document.getElementById('totalCharges').innerText = formatCurrency(10500);
    document.getElementById('effectivePercentage').innerText = '0';
}
