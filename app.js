function calculateCharges() {
    const salesAmount = document.getElementById('salesAmount').value;

    const fixedCharges = 10000;
    const salesTaxRate = 0.05;
    const variableRate = 0.029;
    const fedRate = 0.17;

    const fixedWithTax = fixedCharges * (1 + salesTaxRate);
    const variableWithFed = salesAmount * variableRate * (1 + fedRate);

    const totalCharges = fixedWithTax + variableWithFed;

    document.getElementById('totalCharges').innerText = `PKR ${totalCharges.toFixed(2)}`;
}
