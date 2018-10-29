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
                        index={this.props.index}                       
                        onChange={
                            (event) => {
                                this.props.handleUpdateItem(this.props.index, event.target.value, this.props.price)
                            }

                        }/>
                </td>
                <td>
                    <input 
                        type="number" 
                        className="item-price" 
                        value={this.props.price}
                        index={this.props.index}                        
                        onChange={
                            (event) => {
                                this.props.handleUpdateItem(this.props.index, this.props.quantity, event.target.value)
                            }
                        }
                    />
                </td>
                <td>
                    <input 
                        type="text" 
                        className="item-total"
                        index={this.props.index}                        
                        value={this.props.total}                        
                        />
                </td>                
            </tr> 
        )
    }

};

export default InvoiceItem;