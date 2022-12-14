import * as Types from '../constants/ActionType'


var data = JSON.parse(localStorage.getItem('CART'));
var initialState = data ? data : [];
const cart = (state = initialState, action) =>{
    var {product,quantity} = action;
    var index = -1;
    switch(action.type){
        case Types.ADD_TO_CART :
            index = findProductInCart(state, product);
            // console.log(action)
            if(index !== -1){
                state[index].quantity += 1
            }
            else{
                state.push({
                    product,
                    quantity
                })
            }
            localStorage.setItem('CART',JSON.stringify(state))
            return [...state];
        case Types.DELETE_PRODUCT_IN_CART :
            index = findProductInCart(state, product);
            if(index !== -1){
                state.splice(index,1)
            }

            localStorage.setItem('CART',JSON.stringify(state))
            return [...state];
        case Types.UPDATE_CART :
        index = findProductInCart(state, product);
        // console.log(action.quantity)
        // console.log(state)
        
        if(index !== -1){
            if(action.quantity>=1){
                state[index].quantity = action.quantity
            }
            localStorage.setItem('CART',JSON.stringify(state))
        }
        
        return [...state];
        default : return [...state];
    }
};
var findProductInCart = (cart, product)=>{ 
    var index = -1;
    if(cart.length>0){
        for(let i =0; i<cart.length;i++ ){
            if(cart[i].product.id === product.id){
                index = i;
                break;
            } 
        }
    }    
    return index
};


export default cart