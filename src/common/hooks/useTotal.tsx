import { ProductCardDetail } from '@/app/types';
import { useEffect, useState } from 'react';

export function useCartTotals(productCart: ProductCardDetail[]) {
  const [totals, setTotals] = useState({ totalDiscount: 0, totalPrice: 0, totalAmount: 0 });

  useEffect(() => {
    const newTotals = productCart.reduce((acc, item) => {
      const price = item.price * item.quantity ;
      const discount = item.discount * item.quantity;

      const discountQuantity = price - discount;
      acc.totalDiscount += discountQuantity;
      
      const priceQuantity = price;
      acc.totalPrice += priceQuantity;

      const total = priceQuantity - discountQuantity;
      acc.totalAmount += total;

      return acc;
    }, { totalDiscount: 0, totalPrice: 0, totalAmount: 0 });

    setTotals(newTotals);
  }, [productCart]);

  return totals;
}