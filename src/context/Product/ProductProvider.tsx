import axios from 'axios';
import {IProduct, IComment} from '../../types'
import { ProductContext } from './ProductContext';
import { ProductReducer } from './ProductReducer';
import { useReducer, useState } from 'react'


interface IProps {
  children: JSX.Element | JSX.Element[];
}

const initialState: IProduct = {
    idProduct: 0,
    nameProduct: "",
    price: 0,
    type: "",
    stock: 0,
    rating: 0,
}

export const ProductProvider = ({children}: IProps) => {
  const [product, dispatch] = useReducer(ProductReducer, initialState);
  const [comments, setComments] = useState<IComment[]>([]);

  const config = {
    headers: {
      'Content-type': 'application/json'
    }
  }

  const loadProduct = async (idProduct: string) => {
    const urlProducts = `${process.env.REACT_APP_API_URL}/products/product/${idProduct}`;
    const productData = await (await axios.get(urlProducts)).data[0];
    // console.log(productData.galleries[0].images[0].photo);
    dispatch({type: 'setProduct', payload: productData});

    // -------- ------- ------ ----- Load comments ----- ------ ------- --------
    const urlComments = `${process.env.REACT_APP_API_URL}/comments/${idProduct}`;
    const commentsData = await (await axios.get(urlComments)).data[0];
    setComments([]);
    commentsData.comments.forEach((comment: any) => {
      setComments(prevState => {
        return [...prevState, {
          comment: comment.comment,
          idComment: comment.idComment,
          date: comment.ratingDate,
          rating: comment.rating,
          user: {
            name: comment.name,
            idUser: comment.idUser
          }
        }]
      })
    })
  }

  const createComment = async (rating: number, comment: string, idUser: number, idProduct: number) => {
    const url = `${process.env.REACT_APP_API_URL}/comments`
    const body = {
      rating,
      comment,
      idUser,
      idProduct
    }

    const data = await (await axios.post(url, body, config)).data[0];
    if (data.message === 'ok') loadProduct(idProduct.toString());
    else alert(data.message);
  }

  const deleteComment = async (idComment: number, idProduct: number) => {
    const url = `${process.env.REACT_APP_API_URL}/comments/${idComment}`
    const data = await (await axios.delete(url)).data[0];
    if (data.message === 'ok') loadProduct(idProduct.toString());
    else alert(data.message);
  }

  return (
    <ProductContext.Provider value={{product, loadProduct, comments, createComment, deleteComment}} >
      {children}
    </ProductContext.Provider>
  )
}