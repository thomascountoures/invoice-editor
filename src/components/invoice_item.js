import React, { Component } from 'react';

class InvoiceItem extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <tr className="invoice-item">
                <td>
                    { /* create onChange event to handle user input inside input tag. 
                    update state based on userInput. */ }
                    <input 
                        type="text" 
                        className={"item-name"}
                        placeholder="New Item"                        
                        />
                </td>
                <td>
                    { /* for quantity and price, we need an event to update the item's total */ }
                    <input 
                        type="number" 
                        className="item-quantity" 
                        value={this.props.quantity}
                        onChange={
                            (event) => {
                                this.props.handleUpdateItem(this.props.id, event.target.value, this.props.price)
                            }

                        }/>
                </td>
                <td>
                    <input 
                        type="number" 
                        className="item-price" 
                        value={this.props.price}                        
                        onChange={
                            (event) => {
                                this.props.handleUpdateItem(this.props.id, this.props.quantity, event.target.value)
                            }
                        }
                    />
                </td>
                <td>
                    <input 
                        type="text" 
                        className="item-total"
                        value={this.props.total}                        
                        />
                </td>                
            </tr> 
        )
    }

};

export default InvoiceItem;