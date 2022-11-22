import * as Types from '../constants/ActionType'


// var data = JSON.parse(localStorage.getItem('CART'));
var initialState = [
    {
        product : {
            id : 1,
            name: 'IP 7',
            image: 'https://didongviet.vn/pub/media/catalog/product//i/p/iphone-7-vang-didongviet.jpg',
            description: 'Sản Phẩm do apple sản xuất',
            price: 500,
            inventory : 10,
            rating : 3
        },
        quantity: 5
    }
];
const cart = (state = initialState, action) =>{
    switch(action.type){
        case Types.ADD_TO_CART :
            console.log(action)
            return [...state];
        default : return [...state];
    }
}
export default cart