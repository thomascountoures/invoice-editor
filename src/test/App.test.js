/**
 * Sample unit and integration testing for assessment.
 */

// react + react-dom
import React from 'react';
import ReactDOM from 'react-dom';

// import renderer
import Renderer from 'react-test-renderer';

// import enzyme
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// test components
import App from '../components/App';
import InvoiceTable from '../components/invoice_table';
import InvoiceItemList from '../components/invoice_item_list'

// helpers
import Helpers from '../helpers/helpers';

// configure Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

// test app loads correctly
describe('<App />', () => {
    it('loads App properly', () => {    
        const container = document.createElement("div");
        ReactDOM.render(<App />, container);
    });
})

// test invoice table loading properly.
// use enzyme to see if certain elements load, for example.
describe('<InvoiceTable />', () => {
    it('loads invoice table properly', () => {
        const table = shallow(<InvoiceTable />);
        const thead = shallow(<InvoiceTable />);
        expect(table.find('table').length).toEqual(1);
        expect(thead.find('thead').length).toEqual(1);        
    });
});

// unit test rounding two decimals
test('roundTwoDecimals', () => {
    expect(Helpers.roundTwoDecimals(2.345)).toEqual("2.35");
});

// unit test calculating totals
test('calculateTotals', () => {
    expect(Helpers.calculateTotals([
        {
            name: "test",
            quantity: "2",
            price: "2",
            total: "4"
        },
        {
            name: "test 2",
            quantity: "3",
            price: "3",
            total: "9"
        }
    ])
    ).toEqual({        
        subTotal: "13.00",
        tax: "0.65",
        grandTotal: "13.65"       
    })
});

// test react class methods
describe('invoice table methods', () => {
    it('works correctly', () => {
        const wrapper = shallow(<InvoiceTable />);
        wrapper.instance().handleRemoveItem();
        wrapper.instance().handleAddItem();       
    });
});