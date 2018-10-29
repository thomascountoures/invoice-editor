import React, { Component } from 'react';

import Helpers from '../helpers/helpers';

import '../css/invoice_totals.css'

/**
 * Invoice totals component
 * 
 * Relies on item props to calculate toals
 */

const InvoiceTotals = (props) => {
    return (
        <div id="totals" className="">
            <div className="subtotal">Subtotal: ${Helpers.calculateTotals(props.items).subTotal}</div>
            <div className="tax">Tax (5%): ${Helpers.calculateTotals(props.items).tax}</div>
            <div className="grandtotal">Grand Total: ${Helpers.calculateTotals(props.items).grandTotal}</div>
        </div>
    );
};

export default InvoiceTotals;