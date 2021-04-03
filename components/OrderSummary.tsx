import React from 'react';
import Image from 'next/image';
import { subTabs } from '../pages/cart';
import { OrderSummaryProps } from '../interfaces';

enum CheckoutButtons {
  'Payment' = 'Place order',
  'Address' = 'Proceed to shipping',
  'Shipping' = 'Proceed to payment',
}

const OrderSummary = ({ subTab, mainTab, handleNext }: OrderSummaryProps) => {
  const buttonText =
    mainTab === 'Cart'
      ? 'Proceed to checkout'
      : CheckoutButtons[subTabs[subTab]];

  return (
    <div className='order__summary'>
      <h3 className='order__summary-header'>Order Summary</h3>
      <div className='order__items'>
        <div className='order__item'>
          <p className='order__item-title'>Price</p>
          <p className='order__item-value'>$319.98</p>
        </div>
        <div className='order__item'>
          <p className='order__item-title'>Discount</p>
          <p className='order__item-value'>$31.9</p>
        </div>
        <div className='order__item'>
          <p className='order__item-title'>Shipping</p>
          <p className='order__item-value'>Free</p>
        </div>
        <div className='order__item'>
          <p className='order__item-title'>Coupon Applied</p>
          <p className='order__item-value'>$0.00</p>
        </div>
        <div className='divider'></div>
        <div className='order__item order__item-total'>
          <p className='order__item-title'>Total</p>
          <p className='order__item-value'>$288.08</p>
        </div>
        <div className='order__delivery'>
          <p>
            Estimated Delivery by{' '}
            <span className='order__delivery-date'>01 Feb 2021</span>
          </p>
        </div>
        <div className='order__coupon'>
          <input
            type='text'
            placeholder='Coupon Code'
            className='order__coupon-input'
          />
          <div className='order__coupon-tag'>
            <Image src='/assets/icons/tag.svg' width={20} height={20} />
          </div>
        </div>
        <button className='filled' onClick={handleNext}>
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;
