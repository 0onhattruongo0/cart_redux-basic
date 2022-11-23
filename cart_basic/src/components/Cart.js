import React, { Component } from 'react';
// import CartItem from './CartItem';
// import CartReasult from './CartReasult';


class Cart extends Component {

    render(){
        return (
            <div className="container">
                <section className="section">
                    <div className="table-responsive">
                        <table className="table product-table">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Sản Phẩm</th>
                                    <th>Giá</th>
                                    <th>Số Lượng</th>
                                    <th>Tổng Cộng</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.children}
                               {/* <CartReasult /> */}
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
          );
    }
}
  
  export default Cart;
  