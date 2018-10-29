import React, { Component } from 'react';
import InvoiceItem from './invoice_item';

/**
 * Invoice Item List
 * 
 * Renders individual invoice items based on the items in this.state.items
 */
class InvoiceItemList extends Component {

    constructor(props) {
        super(props);  
        
        this.addNewItem = this.addNewItem.bind(this);
    }

    addNewItem() {
        // not sure, but I don't want to change the original item
        // props property here. yes. 'props property'. it sounds cool.
        let itemsClone = this.props.items;
        itemsClone.push({ name: "", quantity: 0, price: 0, total: 0 })
        this.props.handleAddItem(itemsClone)
    }

    render() {
        /**
         * Render all items, create new item component per item.
         * handleUpdateItem, handleRemoveItem is passed from invoice_table 
         * to the individual invoice_item to update its total price and remove
         * individual items.
         * 
         * Index given as a prop to find it back in the array
         * again when it needs to be updated.
         */
        let items = this.props.items.map((item, index) => {
            return (                
                <InvoiceItem 
                    name={item.name} 
                    quantity={item.quantity}
                    price={item.price}
                    total={item.total}
                    key={index + "-key"}
                    id={index}
                    handleUpdateItem={this.props.handleUpdateItem}
                    handleRemoveItem={this.props.handleRemoveItem} />                    
            );
        });
        
        return (
            <tbody>
                {items}
                {/* add new invoice button. creates a clone of this.props.items,
                modifies it, and sets the new state. */}
                <button className="btn btn-primary" onClick={this.addNewItem}>Add new item</button>
            </tbody>
        );
    }

};

export default InvoiceItemList;