import React, { Component } from 'react';

import '../css/invoice_item.css';

/**
 * Invoice Item
 * 
 * Individual row item for each invoice
 * 
 */
const InvoiceItem = (props) => {
    // return individual invoice item
    return (
        <tr className="invoice-item">
            <td>
                { /* create onChange event to handle user input inside input tag. 
                update state based on userInput. */ }
                <input 
                    type="text" 
                    className="item-name"
                    placeholder="New Item"
                    value={props.name}
                    onChange={
                        (event) => {
                            props.handleUpdateItem(props.id, props.quantity, props.price, event.target.value)
                        }
                    }
                    />
            </td>
            <td>
                { /* for quantity and price, we need an event to update the item's total */ }
                <input 
                    type="number" 
                    className="item-quantity" 
                    value={props.quantity}
                    onChange={
                        (event) => {
                            props.handleUpdateItem(props.id, event.target.value, props.price, props.name)
                        }

                    }/>
            </td>
            <td>
                <input 
                    type="number" 
                    className="item-price" 
                    value={props.price}                        
                    onChange={
                        (event) => {
                            props.handleUpdateItem(props.id, props.quantity, event.target.value, props.name)
                        }
                    }
                />
            </td>
            <td>
                <input 
                    type="text" 
                    className="item-total"
                    value={props.total}                        
                    />
            </td>
            <td>
                <span 
                    className="remove"
                    onClick={
                        () => {
                            props.handleRemoveItem(props.id)
                        }
                    }></span>
            </td>                
        </tr> 
    )
};

export default InvoiceItem;