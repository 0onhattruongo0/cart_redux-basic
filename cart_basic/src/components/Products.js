import React, { Component } from 'react';
// import Product from './Product';
// import { connect } from 'react-redux';


class Products extends Component {
    // showProducts(products){
    //     var result = null;
    //     if(products.length >0){
    //         result = products.map((product,index)=>{
    //            return <Product key={index} product = {product} />
    //         }) 
    //     }
    //     return result
    // }
    render(){
        // var {products} = this.props;
        // console.log(products);
       
        return (
            <section className="section">
                <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
                <div className="row">
                   {/* {this.showProducts(products)} */}
                   {this.props.children}
                </div>
            </section>
        );

    }
}

// const mapStateToProps = (state) =>{
//     return {
//         products : state.products
//     }
// }
  
// export default connect(mapStateToProps, null)(Products);
export default Products;
  