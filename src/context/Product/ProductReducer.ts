import {IProduct} from '../../types'

type ProductAction = 
  | {type: 'setProduct', payload: IProduct}
  | {type: 'deleteProduct', payload: number}
  | {type: 'reportProduct', payload: number}

export const ProductReducer = (state: IProduct, action: ProductAction) => {
  switch(action.type) {
    case 'setProduct':
      return action.payload;
    default:
      return state;
  }
}