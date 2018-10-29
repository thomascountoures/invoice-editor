/**
 * Helper functions. Placed here so I can easily run unit tests on them,
 * and also so they are accessible throughtout the code.
 */
module.exports = {

    /**
     * Takes a number and gives it two decimals, whether by adding decimal
     * places or reducing them by rounding the number.
     */
    roundTwoDecimals: function(number) {
        return parseFloat(Math.round(number * 100) / 100).toFixed(2);
    },

    /**
     * Used by invoice totals to calculate the total prices of all the invoice
     * items. Loops through all items and gets the subtotal by adding up all of
     * the .total prices. Using the subtotal, calculates the tax and grand total.
     */
    calculateTotals(items) {
        let subTotal = 0,
            tax,
            grandTotal;

        // loop through all invoice items. add up totals.
        for(var i = 0, length = items.length; i < length; i++) {
            subTotal += Number(items[i].total);
        }
        
        // calculate tax, grand total
        tax = subTotal * 0.05;
        grandTotal = subTotal + tax;

        return {
            subTotal: this.roundTwoDecimals(subTotal) || 0.00,
            tax: this.roundTwoDecimals(tax) || 0.00,
            grandTotal: this.roundTwoDecimals(grandTotal) || 0.00
        }
    
    }

}