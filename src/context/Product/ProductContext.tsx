import {createContext} from 'react'
import {ProductContextProps} from '../types'

export const ProductContext = createContext<ProductContextProps>({} as ProductContextProps);