import * as actionTypes from "./shopping-types";

const INITIAL_STATE = {
  products: [
    {
      id: 1,
      title: "Ikigai : Japanese Art of staying Young.. While growing Old",
      image: "https://m.media-amazon.com/images/I/81l3rZK4lnL._AC_UY327_FMwebp_QL65_.jpg",
      rating: 4,
      price: 100
    },
    {
      id: 2,
      title: "MSI Gaming GF63 Thin, Intel 10th Gen. i5-10500H, 40CM FHD 60Hz Gaming Laptop",
      image: "https://m.media-amazon.com/images/I/71dD+DOEFhL._AC_UL480_FMwebp_QL65_.jpg",
      rating: 4,
      price: 134
    },
  ],  // ID, title, desc, price, targ
  cart: [], // ID, title, desc, price, targ, qty,
  currentItem: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      // Get the Items Data from the products array
      const item = state.products.find(prod => prod.id === action.payload.id)
      //Check if the item is already in the cart
      const inCart = state.cart.find(item => item.id === action.payload.id ? true : false)
      return {
        ...state,
        cart: inCart ? state.cart.map(item => item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item) : [...state.cart, { ...item, qty: 1 }]
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload.id),

      };
    case actionTypes.ADJUST_QTY:
      return {
        ...state,
        cart: state.cart.map(item => item.id === action.payload.id ? { ...item, qty: action.payload.qty } : item)
      };
    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state, 
        currentItem: action.payload,
      };
    default: return state;
  }
}

export default shopReducer;