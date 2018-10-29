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
                { /* each input calls handleUpdateItem (except total) 
                on its change event to update the overall items state. */ }                
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