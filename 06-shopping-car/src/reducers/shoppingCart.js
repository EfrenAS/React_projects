export const shoppingCartInitialState = JSON.parse(window.localStorage.getItem('cart')) || []

export const SHOPPING_CART_ACTION_TYPES = {
  ADD_TO_SHOPPING_CART: 'ADD_TO_SHOPPING_CART',
  CLEAR_SHOPPING_CART: 'CLEAR_SHOPPING_CART',
  REMOVE_FROM_SHOPPING_CART: 'REMOVE_FROM_SHOPPING_CART'
}

export const updateLocalStorage = (state) => {
  window.localStorage.setItem('cart', JSON.stringify(state))
}

const UPDATE_STATE_BY_ACTION = {
  [SHOPPING_CART_ACTION_TYPES.ADD_TO_SHOPPING_CART]: (state, action) => {
    const { id } = action.payload
    const productInCartIndex = state.findIndex(item => item.id === id)

    if (productInCartIndex >= 0) {
      /** ***** This is a form to using the structure clone *********/
      // const newState = structuredClone(state)
      // newState[productInCartIndex].quantity += 1

      /** ****** Using map function ******/
      // const newState = state.map(item => {
      //   if (item.id === id) {
      //     return {
      //       ...item,
      //       quantity: item.quantity + 1
      //     }
      //   }
      //   return item
      // })

      /** *** Using spread operator and slide function ****/
      const newState = [
        ...state.slice(0, productInCartIndex),
        {
          ...state[productInCartIndex],
          quantity: state[productInCartIndex].quantity + 1
        },
        ...state.slice(productInCartIndex + 1)
      ]
      updateLocalStorage(newState)
      return newState
    }

    const newState = [
      ...state,
      {
        ...action.payload,
        quantity: 1
      }
    ]

    updateLocalStorage(newState)
    return newState
  },
  [SHOPPING_CART_ACTION_TYPES.CLEAR_SHOPPING_CART]: () => {
    updateLocalStorage([])
    return []
  },
  [SHOPPING_CART_ACTION_TYPES.REMOVE_FROM_SHOPPING_CART]: (state, action) => {
    const { id } = action.payload
    const newState = state.filter(item => item.id !== id)
    updateLocalStorage(newState)
    return newState
  }
}

export const shoppingCartReducer = (state, action) => {
  const { type: actionType } = action
  const updateState = UPDATE_STATE_BY_ACTION[actionType]
  return updateState ? updateState(state, action) : state
}
