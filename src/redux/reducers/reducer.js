const initialState = {
    products: [],
    cart: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_PRODUCTS":
            return {
                ...state,
                products: action.products
            };
        case "ADD_TO_CART":
            return {
                ...state,
                cart: [...state.cart, action.product]
            };
        case "REMOVE_FROM_CART":
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.product.id)
            };
        default:
            return state;
    }
};

export default reducer;
