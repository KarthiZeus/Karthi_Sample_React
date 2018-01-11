import React, { Component } from 'react';
import plum from './Samosa.png';
import './App.css';

class Hello extends Component {
  render() {
    let a = [1, 2, 3, 4, 5, 6, 7, 8];
    return (
      <div>
        <div className="container no-pad">
          <div className=" Itemhead">
            List of Items<span className="Viewcart">View Cart</span>
          </div>
          <div className="row rowbg">
            {/* <div className="col-lg-12">
              <div className="col-xs-6 no-pad">
                <img src={plum} className="imagestyle" alt="cherry" />
              </div>
              <div className="col-xs-4 no-pad">
                <div className="ProductDes">
                  <ul>
                    <li>Item Name : Samosa</li>
                    <li>Price :</li>
                    <li>Description : The samosa is made with a wheat flour or maida flour shell stuffed with....</li>
                  </ul>
                  <button className="modal_btn" onClick={this.toggleModal}> View User</button>
                  <Modal show={this.state.isOpen}
                    onClose={this.toggleModal}>
                    <div >
                      <p>Karthi V</p>
                      <p>Trainee Software Engineer</p>
                    </div>
                  </Modal>
                </div>
              </div>
              <div className="col-xs-2 no-pad">
                <button className=" btn btn-primary">Add to Cart</button>
              </div>
            </div> */}
          </div>
          <hr />
        </div>

        <div className="container ">
          <div className="row rowbg">
            {a.map((hello, keys) =>
              <div className="col-lg-12">
                <div className="col-xs-6 no-pad">
                  <img src={plum} className="imagestyle" alt="cherry" />
                </div>
                <div className=" col-xs-4 no-pad">
                  <div className="ProductDes">
                    <ul>
                      <li>Item Name : Samosa</li>
                      <li>Price : &#8377;20</li>
                      <li>Description : The samosa is made with a wheat flour or maida flour shell stuffed with....

  <button type="button" class=" btn-info  close_btn" data-toggle="modal" data-target="#myModal">View</button>
                        <div class="modal fade" id="myModal" role="dialog">
                          <div class="modal-dialog">
                            <div class="modal-content">
                              <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                                <h4 class="modal-title">Samosa</h4>
                              </div>
                              <div class="modal-body">
                                <img src={plum} className="Modalimagestyle" alt="cherry" />
                                <ul>
                                <li>Price : &#8377;20</li>
                      <li>Description : TThe samosa is made with a wheat flour or maida flour shell stuffed with some filling, 
                        generally a mixture of mashed boiled potato, onions, green peas, spices and green chili or fruits. 
                        The entire pastry is then deep-fried to a golden brown color, in vegetable oil</li>
                              </ul>
                              </div>
                              <div class="modal-footer">
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
