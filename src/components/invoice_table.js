// import React and its Component property from 'react' as a variable called 'Component'
import React, { Component } from 'react';

// import invoice items
import InvoiceItemList from './invoice_item_list';

// import invoice totals
import InvoiceTotals from './invoice_totals';

// helpers
import Helpers from '../helpers/helpers';

import '../css/invoice_table.css'

/**
 * Invoice Table
 * 
 * Keeps internal state of invoice items
 * 
 * Passes methods all the way down to the InvoiceItem child component
 */
class InvoiceTable extends Component {
    constructor(props) {
        super(props);

        // React components that use ES6 classes no longer autobind
        // 'this' to methods that aren't native to React. Need to
        // add these expressions within the constructor.
        this.handleUpdateItem = this.handleUpdateItem.bind(this);
        this.handleRemoveItem = this.handleRemoveItem.bind(this);
        this.handleAddItem = this.handleAddItem.bind(this);

        this.state = {
            items: [
                {
                    name: "",
                    quantity: 0,
                    price: 0,
                    total: 0
                }
            ]            
        };
    }

    /**
     * Updates individual invoice item.
     * Calculates total of individual invoice item.
     * 
     * @param {String} key 
     * @param {String} quantity 
     * @param {String} price 
     * @param {String} name 
     */
    handleUpdateItem(key, quantity, price, name) {        
        let itemsClone = this.state.items,
            itemInQuestion = itemsClone[key];
        
        // update item
        itemInQuestion.name = name;
        itemInQuestion.quantity = quantity;
        itemInQuestion.price = price;
        
        // keep numbers to two decimal places
        quantity = Helpers.roundTwoDecimals(quantity);
        price = Helpers.roundTwoDecimals(price);
        
        // check if a valid number first. number needs to be greater than 0 as well,
        // otherwise the answer is always 0.  
        if( (!isNaN(price) && price > 0) && !isNaN(quantity) && quantity > 0) {
            itemInQuestion.total = Helpers.roundTwoDecimals(Number(quantity) * Number(price));
        } else {
            // reset total value back to 0 if either price or quantity is 0
            itemInQuestion.total = 0;
        }
        
        // update items
        this.setState({ items: itemsClone })                            
        
    }

    /**
     * Removes single invoice item from the items state.
     * Updates state with remaining items.
     * 
     * @param {String} key 
     */
    handleRemoveItem(key) {
        let itemsClone = this.state.items;

        // if there is only one item in the array,
        // there will be no more items left once removed.
        // clear data and reset items back to 1, as it's
        // better than having an empty table
        if(itemsClone.length === 1) {
            this.setState({ 
                items: [
                    {
                        name: "",
                        quantity: 0,
                        price: 0,
                        total: 0
                    }
                ] 
            });
        } else {
            // else, remove item from array.
            itemsClone.splice(key, 1);
            this.setState({ items: itemsClone });
        }
    }

    handleAddItem(items) {
        this.setState({ items });
    }

    render () {
        return (
            <div className="table-responsive">
                <table className="table table-borderless">
                    <thead className="thead-dark">
                        <tr>
                            <th>Item</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    
                    { /* invoice row component */ }

                    { /* handleUpdateItem, handleAddItem and handleRemoveItem
                    passed as props to InvoiceItemList. These are further passed
                    to InvoiceItem. I am passing them from here so that I can update
                    the state and simultaneously update the InvoiceTotals, which is
                    a child of this component. */}
                    
                    <InvoiceItemList    
                        items={this.state.items}                 
                        handleAddItem={this.handleAddItem}                        
                        handleUpdateItem={this.handleUpdateItem}
                        handleRemoveItem={this.handleRemoveItem} />

                    {/* invoice totals updated based on input changes from the invoice
                    row component. once the state is changed, totals will be automatically
                    updated, as per how cool react is */}
                    
    
                </table>
                <InvoiceTotals 
                items={this.state.items} />    
        </div>
        );
    }
};

export default InvoiceTable;