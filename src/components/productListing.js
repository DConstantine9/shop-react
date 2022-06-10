import React, {useEffect} from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import ProductComponent from './productComponent'
import { setProducts } from '../redux/actions/productActions'

export default function ProductListing() {
  const products = useSelector((state) => state)
  const dispatch = useDispatch()

  const fetchProducts = async () => {
    const response = await axios.get('https://fakestoreapi.com/products')
    .catch((err) => {
      console.log(err)
    })
    
    dispatch(setProducts(response.data))
  }

  

  useEffect(() => {
    fetchProducts()
  }, [])
  
  return (
    <div className='listing'>
      <ProductComponent />
    </div>
  )
}
