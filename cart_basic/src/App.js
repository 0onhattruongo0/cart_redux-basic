import React, { Component } from 'react';
import Header from './components/Header';
import Cart from './components/Cart';
// import Products from './components/Products';
import Message from './components/Message';
import Footer from './components/Footer';
import ProductsContainer from './containers/ProductsContainer';




class App extends Component {

    render(){
        return (
            <div className="App">
                <div>
                <Header />
                <main id="mainContainer">
                    <div className="container">        
                        <ProductsContainer />
                        <Message />
                        <Cart />
                    </div>
                </main>
                <Footer />
                </div>
            </div>
          );
    }
}

export default App;
