import React from 'react'
import { ProductType } from '../../../type'
import PriceFormat from './PriceFormat';

export default function ProductPrice({product}:{ product: ProductType }) {
    const regularPrice = product?.price;
    const discountedPrice = product?.price + product?.discountPercentage / 100; 
  return (
    <div className='flex gap-4'>
        <PriceFormat amount={regularPrice} className='font-semibold text-'/>
        <PriceFormat amount={discountedPrice} className='text-gray-500 line-through font-normal' />
    </div>
  )
}
