document.getElementById('invoiceForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Collect form data
    const customer = document.getElementById('customer').value;
    const invoice = document.getElementById('invoice').value;
    const date = document.getElementById('date').value;
    const due = document.getElementById('due').value;
    const amount = document.getElementById('amount').value;

    // Add row to table
    const table = document.getElementById('invoiceTable').querySelector('tbody');
    const newRow = table.insertRow();
    newRow.innerHTML = `
        <td>${customer}</td>
        <td>${invoice}</td>
        <td>${date}</td>
        <td>${due}</td>
        <td>${amount}</td>
    `;

    // Clear form
    document.getElementById('invoiceForm').reset();
});

// Print the report
document.getElementById('printButton').addEventListener('click', function() {
    window.print();
});
