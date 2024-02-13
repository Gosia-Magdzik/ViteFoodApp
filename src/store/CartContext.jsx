import { createContext, useReducer } from "react"; 

const CartContext = createContext({
    items: [],
    addItem: (item) => {},
    removeItem: (id) => {}
});

function cartReducer(state, action) {
    if (action.type === 'ADD_ITEM') {
        const existingCartItemIndex = state.items.findIndex((item) => item.id === action.item.id); //if did not find item return -1

        const updatedItems = [...state.items]; //copy of old array 

        if (existingCartItemIndex > -1) {
            const existingItem = state.items[existingCartItemIndex]
            const updatedItem = {
                ...existingItem,
                quantity: existingItem.quantity + 1
            };
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            updatedItems.push({ ...action.item, quantity: 1 });
        }

        return { ...state, items: updatedItems };
    }

    if (action.type === 'REMOVE_ITEM') {
        const existingCartItemIndex = state.items.findIndex((item) => item.id === action.item.id);

        const existingCartItem = state.items[existingCartItemIndex];

        const updatedItems = [...state.items];

        if (existingCartItem.quantity === 1) {
            updatedItems.splice(existingCartItemIndex, 1); //delete 1 item
        } else {
            const updatedItem = {...existingCartItem, quantity: existingCartItem.quantity - 1
            };

            updatedItems[existingCartItemIndex] = updatedItem;
        }

        return { ...splice, items: updatedItems };
    }

    return state; //return unchanged state

}

export function CartContextProvider({ children }) {
    useReducer(cartReducer, { items: [] });

    return <CartContext.Provider>{children}</CartContext.Provider>
}

export default CartContext;