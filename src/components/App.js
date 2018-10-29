import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import '../css/App.css';

// thomas components
import InvoiceTable from './invoice_table';
import InvoiceTotals from './invoice_totals';

// Create a new 'master' App component
class App extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      itemInfo: {
        itemName: '',
        quantity: '',
        price: '',
        total: ''
      }
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Invoice Editor</h2>
        </div>
        
        { /* Insert your code here */}
        <InvoiceTable 
          onInputChange={itemInfo => this.setState({ itemInfo })}/>        
      </div>
    );
  }
}


export default App;
