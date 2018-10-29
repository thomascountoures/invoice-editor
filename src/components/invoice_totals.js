import React, { Component } from 'react';

class InvoiceTotals extends Component {
    
    constructor(props) {
        super(props);
    }

    calculateTotals() {
        let subTotal = 0;
        let tax;
        let grandTotal;
        for(var i = 0, length = this.props.items.length; i < length; i++) {
            subTotal += Number(this.props.items[i].total);
        }

        tax = subTotal * 0.05;
        grandTotal = subTotal + tax;

        return {
            subTotal: this.props.roundTwoDecimals(subTotal) || 0.00,
            tax: this.props.roundTwoDecimals(tax) || 0.00,
            grandTotal: this.props.roundTwoDecimals(grandTotal) || 0.00
        }
    
    }

    render() {
        return (
            <div id="totals">
                <div className="subtotal">Subtotal: ${this.calculateTotals().subTotal}</div>
                <div className="tax">Tax: ${this.calculateTotals().tax}</div>
                <div className="grandtotal">Grand Total: ${this.calculateTotals().grandTotal}</div>
            </div>
        )
    };

};

export default InvoiceTotals;