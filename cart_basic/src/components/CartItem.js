import React, { Component } from 'react';
import * as MSG from '../constants/Message'
class CartItem extends Component {

    render(){
        var {cart} = this.props
        return (
            <tr>
                <th scope="row">
                    <img src={cart.product.image}
                        alt={cart.product.name} className="img-fluid z-depth-0" />
                </th>
                <td>
                    <h5>
                        <strong>{cart.product.name}</strong>
                    </h5>
                </td>
                <td>{cart.product.price}$</td>
                <td className="center-on-small-only">
                    <span className="qty">{cart.quantity} </span>
                    <div className="btn-group radio-group" data-toggle="buttons">
                        <label className="btn btn-sm btn-primary
                            btn-rounded waves-effect waves-light" onUpdateCart= { this.onUpdateCart(cart.quantity-1)}>
                            —
                        </label>
                        <label className="btn btn-sm btn-primary
                            btn-rounded waves-effect waves-light" onUpdateCart= { this.onUpdateCart(cart.quantity-1)}>
                            +
                        </label>
                    </div>
                </td>
                <td>{cart.product.price*cart.quantity}$</td>
                <td>
                    <button type="button" className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top" onClick={()=>this.onDelete00(cart.product)}
                        title="" data-original-title="Remove item">
                        X
                    </button>
                </td>
            </tr>
          );
    }

    onDelete00 = (product) =>{
        var onDelete = this.props.onDelete;
        onDelete(product);
        this.props.onChangeMessage(MSG.MSG_DELETE_PRODUCT_IN_CART_SUCCESS)
    }
}
  
  export default CartItem;
  