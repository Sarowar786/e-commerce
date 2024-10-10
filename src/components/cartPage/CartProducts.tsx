'use client'
import React from 'react'
import Container from '../Container'
import { useSelector } from 'react-redux'
import { ProductType, StateType } from '../../../type'
import Link from 'next/link'
import CartProduct from './CartProduct'
import CartSummery from './CartSummery'

export default function CartProducts() {
    const {cart} = useSelector((state : StateType)=> state?.shofy)
  return (
    <Container className='py-10'>
      {cart?.length > 0 ? (
        <>
          <h1 className='text-4xl font-bold pb-3'>Shopping Cart</h1>
          <div className='mt-10 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 '>
            <section className='lg:col-span-7'>
              <div className='divide-y divide-gray-300 border-b-gray-300 border-t-gray-300' >
                {cart?.map((product:ProductType)=>(
                  <CartProduct key={product?.id} product={product} />
                ))}
              </div>
            </section>
            <CartSummery cart={cart}/>
          </div>
        </>
      ):(
        <div className=' px-10 py-20 bg-cartBg rounded-md text-center drop-shadow-2xl'>
            <p className='text-4xl font-medium text-center pb-3'>Shopping cart</p>
            <p className='text-lg mb-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi veritatis aut consectetur suscipit ad sit molestias, voluptatibus, fugiat rem quis exercitationem error amet. Ducimus a ad sapiente libero consequatur. Nihil accusantium veritatis sapiente pariatur, dicta unde sequi vitae maiores quisquam culpa ipsam commodi nam. Sapiente libero nulla officiis quasi vero delectus cupiditate, rerum ex eaque impedit amet ratione Repellat porro aperiam modi dignissimos ab laudantium eligendi asapiente. Harum asperiores accusantium dicta dolor laborum soluta, culpa sunt beatae fuga libero distinctio earum perferendis repudiandae doloribus sapiente iure ea, adipisci ipsum possimus aliquam labore nisi nesciunt qui? Blanditiis.</p>
            <Link href={'/'} className='bg-primaryColor text-white py-3 px-4 text-xl font-bold rounded-xl '>Continue to shopping</Link>
        </div>
      )}
    </Container>
  )
}
