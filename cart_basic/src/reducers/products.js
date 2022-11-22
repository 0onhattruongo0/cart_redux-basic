var initialState = [
    {
        id : 1,
        name: 'IP 7',
        image: 'https://didongviet.vn/pub/media/catalog/product//i/p/iphone-7-vang-didongviet.jpg',
        description: 'Sản Phẩm do apple sản xuất',
        price: 500,
        inventory : 10,
        rating : 3
    },
    {
        id : 2,
        name: 'IP 8',
        image: 'https://24hstore.vn/images/products/2020/04/19/large/iphone-8-red.jpg',
        description: 'Sản Phẩm do apple sản xuất',
        price: 550,
        inventory : 10,
        rating: 4
    },
    {
        id : 3,
        name: 'IP 14',
        image: 'https://cdn.tgdd.vn/Products/Images/42/289694/iphone-14-pro-bac-thumb-600x600.jpg',
        description: 'Sản Phẩm do apple sản xuất',
        price: 600,
        inventory : 10,
        rating: 5
    }
];
const product = (state = initialState, action) =>{
    switch(action.type){
        default : return [...state];
    }
}
export default product