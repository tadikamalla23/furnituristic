import React from "react";
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { Link } from "react-router-dom";

import './Products.css'

class Products extends React.Component {
  state = {
    sortBy: '', //sorting for Price 
  };

  handleSortItems = (sort) => {
    this.setState({ sort });
  };
  render() { 
    const { sort } = this.state;
    let sortedItems = [...this.props.products];
    switch (sort) {
      case 'Price High to Low':
        sortedItems = sortedItems.sort((a, b) => b.price - a.price);
        break;
      case 'Price Low to High':
        sortedItems = sortedItems.sort((a, b) => a.price - b.price);
        break;
      default:
        // None
        break;
    }
    return ( 
          <>
            <div className="col-12 mb-3">
            <DropdownButton style={{textAlign:'right'}} variant="success" id="dropdown-basic" title={`Sort By: ${sort || '----'}`}>
              <Dropdown.Item onClick={() => this.handleSortItems('Price High to Low')}>Price High to Low</Dropdown.Item>
              <Dropdown.Item onClick={() => this.handleSortItems('Price Low to High')}>Price Low to High</Dropdown.Item>
              <Dropdown.Item onClick={() => this.handleSortItems('')}>----</Dropdown.Item>
            </DropdownButton>
            </div>
            <div className="row container-fluid">
            {sortedItems.map((product) => (
              <div key={product.pid} className="col-xl-3" id="products">
                <div className="card h-100">
                  <img
                    src={product.image}
                    className="card-img-top w-100 h-75"
                    alt="Product"
                  />
                  <div className="card-body">
                    <div className="product-title">
                     <span className="span-left">{product.title}</span> 
                     <span className="span-right">   ${`${product.price}`}</span> 
                    </div>
                    <Link to={`/products/${product.pid}`} className="btn btn-primary stretched-link" >
                      Shop Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
            </div>
          </> );
  }
}
export default Products;