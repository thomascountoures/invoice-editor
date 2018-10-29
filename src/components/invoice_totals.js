import React, { Component } from 'react';

class InvoiceTotals extends Component {
    
    constructor(props) {
        super(props);
    }

    calculateTotals() {
        let subTotal;
        let tax;
        let grandTotal;
        for(var i = 0, length = this.props.items.length; i < length; i++) {
            subTotal += this.props.items[i].total;
        }

        tax = subTotal * 0.05;
        grandTotal = subTotal + tax;

        return {
            subTotal: subTotal,
            tax: tax,
            grandTotal: grandTotal
        }
    
    }

    render() {
        return (
            <div id="totals">
                <div className="subtotal">{this.calculateTotals().subTotal}</div>
                <div className="tax">{this.calculateTotals().tax}</div>
                <div className="grandtotal">{this.calculateTotals().grandTotal}</div>
            </div>
        )
    };

};

export default InvoiceTotals;