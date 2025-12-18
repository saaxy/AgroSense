function calculateTotal() {
            const itemCost = parseFloat(document.getElementById('item-price').value);
            const quantity = parseInt(document.getElementById('quantity').value);
            const taxRate = parseFloat(document.getElementById('tax-rate').value) / 100;

            if (isNaN(itemCost) || isNaN(quantity) || isNaN(taxRate)) {
                alert("Please enter valid numbers.");
                return;
            }

            const subtotal = itemCost * quantity;
            const taxAmount = subtotal * taxRate;
            const totalCost = subtotal + taxAmount;

            // document.getElementById('total-cost').innerText = `Total Cost: $${totalCost.toFixed(2)}`;
        }