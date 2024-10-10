import React, { useEffect, useState } from 'react'
import PriceFormat from '../products/PriceFormat'
import { ProductType } from '../../../type'
import toast from 'react-hot-toast'
 interface Props {
  cart: ProductType[]
 }
export default function CartSummery({cart}:Props) {
  const [totalamt, setTotalAmt] = useState(0)
  const [discountAmt, setDiscountAmt] = useState(0)
  useEffect(() => {
    let amt = 0;
    let discount = 0;
  
    cart?.map((item) => {
      amt += item?.price * item?.quantity!;
      discount += ((item?.price * item?.quantity!) / 100) * item?.quantity!;
    });
  setTotalAmt(amt);
  setDiscountAmt(discount);
  
    // You can now set amt and discount somewhere, e.g., in state if needed
  }, [cart]);

  const handleCheckout =()=>{
    toast.success("checkout is comming soon ")
  }
  
  return (
    <div className='bg-gray-100 rounded-lg px-4 py-6 lg:col-span-5 '>
      <p className='text-black text-xl font-bold'>Cart summary </p>
      <div className='flex flex-col gap-3 mt-4'>
        <div className='flex items-center justify-between text-xl font-semibold'>
          <p>Sub Total: </p>
          <PriceFormat amount={totalamt} className=''/> 
        </div>
        <div className='flex items-center justify-between text-xl font-semibold'>
          <p>Discount: </p>
          <PriceFormat amount={discountAmt} className=''/> 
        </div>
        <div className='flex items-center justify-between text-xl font-semibold'>
          <p>Payable Amount: </p>
          <PriceFormat amount={totalamt - discountAmt} className='font-bold'/> 
        </div>
        <button onClick={handleCheckout} className='bg-primaryColor py-1 text-white font-medium text-lg rounded-md mt-2'>Checkout</button>
      </div>
    </div>
  )
}
