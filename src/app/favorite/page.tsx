'use client'
import Container from '@/components/Container'
import React from 'react'
import { useSelector } from 'react-redux'
import { ProductType, StateType } from '../../../type'
import Link from 'next/link'
import FavoriteProduct from '@/components/favorite/FavoriteProduct'

export default function FavoritePage() {
    const {favorite} = useSelector((state : StateType)=> state?.shofy)
  return (
    <Container className='py-10'>
      {favorite?.length > 0 ? (
        <>
          <h1 className='text-4xl font-bold pb-3'>Favorite page</h1>
          <div className='mt-10  '>
            <section className=''>
              <div className='divide-y divide-gray-300 border-b-gray-300 border-t-gray-300' >
                {favorite?.map((product:ProductType)=>(
                  <FavoriteProduct key={product?.id} product={product} />
                ))}
              </div>
            </section>
          </div>
        </>
      ):(
        <div className=' px-10 py-20 bg-cartBg rounded-md text-center drop-shadow-2xl'>
            <p className='text-4xl font-medium text-center pb-3'>Favorite page</p>
            <p className='text-lg mb-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi veritatis aut consectetur suscipit ad sit molestias, voluptatibus, fugiat rem quis exercitationem error amet. Ducimus a ad sapiente libero consequatur. Nihil accusantium veritatis sapiente pariatur, dicta unde sequi vitae maiores quisquam culpa ipsam commodi nam. Sapiente libero nulla officiis quasi vero delectus cupiditate, rerum ex eaque impedit amet ratione Repellat porro aperiam modi dignissimos ab laudantium eligendi asapiente. Harum asperiores accusantium dicta dolor laborum soluta, culpa sunt beatae fuga libero distinctio earum perferendis repudiandae doloribus sapiente iure ea, adipisci ipsum possimus aliquam labore nisi nesciunt qui? Blanditiis.</p>
            <Link href={'/'} className='bg-primaryColor text-white py-3 px-4 text-xl font-bold rounded-xl '>Continue to shopping</Link>
        </div>
      )}
    </Container>
  )
}
