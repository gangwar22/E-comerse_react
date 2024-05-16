export default function cartReducer(state, action) {
    switch (action.type) {
        case "add":
            return {
                ...state,
                cart: [...state.cart, action.product]
            };
        case "delete":
            const updatedCart = state.cart.filter(item => item.id !== action.id);
            return {
                ...state,
                cart: updatedCart
            };
        default:
            return state;
    }
}