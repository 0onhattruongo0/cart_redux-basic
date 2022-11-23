import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cart from '../components/Cart';
import CartItem from '../components/CartItem';
import * as Message from '../constants/Message';
import CartReasult from '../components/CartReasult';


class CartContainer extends Component {
    
    render(){
        var {carts} = this.props;
        // console.log(carts);
       
        return (
           <Cart>
            {this.showCartItem(carts)}
            {this.showTotalAmount(carts)}
           </Cart>
        );

    }
    showCartItem = (carts)=>{
        var result = Message.MSG_CART_EMPTY;
        if(carts.length>0){
            result = carts.map((cart,index)=>{
                return <CartItem key={index} cart={cart} index={index} />
            })
        }else {
            result = <tr><td>{result}</td></tr> 
        }
        return result
    }
    showTotalAmount = (carts)=>{
        var result = null;
        if(carts.length>0){
            result = <CartReasult carts={carts} />
           
        }
        return result
    }

}

CartContainer.propTypes = {
    carts : PropTypes.arrayOf(PropTypes.shape({
        product : PropTypes.shape({
            id : PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory : PropTypes.number.isRequired,
            rating : PropTypes.number.isRequired
        }).isRequired,
        quantity : PropTypes.number.isRequired
    })).isRequired
}

const mapStateToProps = (state) =>{
    return {
        carts : state.cart
    }
}
  
export default connect(mapStateToProps, null)(CartContainer);
  