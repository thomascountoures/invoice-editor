// import React and its Component property from 'react' as a variable called 'Component'
import React, { Component } from 'react';

// import invoice items
import InvoiceItemList from './invoice_item_list';

// import invoice totals
import InvoiceTotals from './invoice_totals';

class InvoiceTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [{
                name: '',
                quantity: 0,
                price: 0,
                total: 0
            }]            
        };
    }

    roundTwoDecimals(number) {
        return parseFloat(Math.round(number * 100) / 100).toFixed(2);
    }

    render () {
        return (
            <table id="invoice-table" className="table table-dark">
                <thead className="headings-row">
                    <tr>
                        <th>Item</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Total</th>
                    </tr>
                </thead>
                
                { /* invoice row component */ }

                { /* define a method as a property to pass to invoice row. this method
                is accessible in invoice row as a prop. invoice row updates the state of
                this table component, which updates the totals. */}
                
                <InvoiceItemList    
                    items={this.state.items}                 
                    handleAddItem={items => this.setState({ items })}
                    handleUpdateItem={
                        (key, quantity, price) => {
                            let itemsClone = this.state.items,
                                itemInQuestion = itemsClone[key];
                            
                            // update item
                            itemInQuestion.quantity = quantity;
                            itemInQuestion.price = price;
                            
                            // keep numbers to two decimal places
                            quantity = this.roundTwoDecimals(quantity);
                            price = this.roundTwoDecimals(price);
                            
                            // check if a valid number first. number needs to be greater than 0 as well,
                            // otherwise the answer is always 0.  
                            if( (!isNaN(price) && price > 0) && !isNaN(quantity) && quantity > 0) {
                                itemInQuestion.total = this.roundTwoDecimals(Number(quantity) * Number(price));
                            } else {
                                // reset total value back to 0 if either price or quantity is 0
                                itemInQuestion.total = 0;
                            }
                            
                            // update items
                            this.setState({ items: itemsClone })                            
                        }
                    } />

                {/* invoice totals updated based on input changes from the invoice
                row component. once the state is changed, totals will be automatically
                updated, as per how cool react is */}
                <InvoiceTotals 
                    items={this.state.items}
                    roundTwoDecimals={this.roundTwoDecimals} />
 
            </table>    
        );
    }
};

export default InvoiceTable;