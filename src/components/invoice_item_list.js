import React, { Component } from 'react';
import InvoiceItem from './invoice_item';

class InvoiceItemList extends Component {

    constructor(props) {
        super(props);        
    }

    // add new item (row) to props.items
    addNewItem(e) {
        // prevent button click event
        e.preventDefault();
        
        // push item onto array stack
        this.props.items.push({ 
            quantity: 0,
            price: 0,
            total: 0
        });
        
        // call parent invoice table method
        this.props.handleAddItem({ items: this.props.items });
    }

    render() {
        // render all items, create new item component per item.
        // handleUpdateItem is passed from invoice_table to the
        // invidual invoice_item to update its total price.
        // need to give it an index to find it back in the array
        // again when it needs to be updated.
        const items = this.props.items.map((item, index) => {
            return (                
                <InvoiceItem 
                    name={item.name} 
                    quantity={item.quantity}
                    price={item.price}
                    total={item.total}
                    index={index}
                    handleUpdateItem={this.props.handleUpdateItem} />                    
            );
        });
        
        return (
            <tbody>
                {items}
                <button onClick={ 
                    () => {
                        // not sure, but I don't want to change the original item
                        // props property here. yes. 'props property'. it sounds cool.
                        let itemsClone = this.props.items;
                        itemsClone.push({ quantity: 0, price: 0, total: 0 })
                        this.props.handleAddItem(itemsClone)
                    } 
                }>Add new item</button>
            </tbody>
        );
    }

};

export default InvoiceItemList;