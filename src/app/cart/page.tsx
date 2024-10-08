import CartProduct from '@/components/cartPage/CartProducts';
import Container from '@/components/Container';
import { Metadata } from 'next';
import React from 'react'
export const metadata: Metadata = {
    title: "cart page- shofy ",
    description: "Generated by create next app",
  };
export default function CartPage() {
  return (
    <Container>
      <CartProduct/>
    </Container>
  )
}
