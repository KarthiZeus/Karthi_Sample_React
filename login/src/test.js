import React, { Component } from 'react';
import plum from './Samosa.png';
import './App.css';
import { BrowserRouter as  Link } from 'react-router-dom';

class Hello extends Component {
  constructor() {
    super();

    setTimeout(() => {
      fetch('http://localhost:3000/items')
      .then((Response) => Response.json())
      .then((findresponse) => {
        this.state = {
          items:findresponse
          
        }
      })
    }, 5000);
   console.log("the state is"+this.state);
    
  }

  componentWillMount() {
    
  }

  render() {

    let a = [1, 2, 3];
    return (

      <div>
        <div className="container no-pad">
          <div className=" Itemhead">
            List of Items
            <Link to='/viewcart'><span className="Viewcart">View Cart</span></Link>
       
            
          </div>
          <div className="row rowbg">
          </div>
          <hr />
        </div>

        <div className="container ">
          <div className="row rowbg">
            {a.map((hello, keys) =>
              <div className="col-lg-12" key={keys}>
                <div className="col-xs-6 no-pad">
                  <img src={plum} className="imagestyle" alt="cherry" />
                </div>
                <div className=" col-xs-4 no-pad">
                  <div className="ProductDes">
                    <ul>
                      <li>Item Name : {console.log(this.state.items[keys].price)}</li>
                      <li>Price : &#8377;{this.state.items[keys].price}</li>
                      <li>Description : {this.state.items[keys].description}....

  <button type="button" className=" btn-info  close_btn" data-toggle="modal" data-target="#myModal">View</button>
                        <button type="button" className=" btn-info  close_btn" >load</button>
                        <div className="modal fade" id="myModal" role="dialog">
                          <div className="modal-dialog">
                            <div className="modal-content">
                              <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                <h4 className="modal-title">Samosa</h4>
                              </div>
                              <div className="modal-body">
                                <img src={plum} className="Modalimagestyle" alt="cherry" />
                                <ul>
                                  <li>Price : &#8377;20</li>
                                  <li>Description : TThe samosa is made with a wheat flour or maida flour shell stuffed with some filling,
                        generally a mixture of mashed boiled potato, onions, green peas, spices and green chili or fruits.
                        The entire pastry is then deep-fried to a golden brown color, in vegetable oil</li>
                                </ul>
                              </div>
                              <div className="modal-footer">
                                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xs-2 right-border no-pad">
                  <button className="roundbtn btn btn-primary ">-</button>0
                <button className="roundbtn btn btn-primary ">+</button>
                  <div className="col-xs-12">
                    <button className="Add-cart-button btn btn-primary ">Add to Cart</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

      </div>

    );
  }
}

export default Hello;
