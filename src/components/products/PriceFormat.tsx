import React from 'react'
import { twMerge } from 'tailwind-merge'
interface Props{
    amount : number,
    className: string,
    
}

export default function PriceFormat({amount, className}:Props) {
    const formattenPrice = new Number(amount).toLocaleString('en-US',{
        style:'currency',
        currency: 'USD',
        maximumFractionDigits:2
    })
  return (
    <div className={twMerge('font-medium', className)}>
      {formattenPrice}
    </div>
  )
}
