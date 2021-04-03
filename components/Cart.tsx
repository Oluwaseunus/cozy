import React from 'react';
import Image from 'next/image';
import QuantitySelector from './QuantitySelector';

const Cart = () => {
  return (
    <>
      <div className='heading'>
        <h1>Cart</h1>
        <p>2 items</p>
      </div>
      <div className='cart__items'>
        <div className='cart__item'>
          <div className='cart__item-picture'>
            <Image
              src='/assets/images/osmond_armchair.jpeg'
              width={160}
              height={160}
              quality={100}
              objectFit='contain'
            />
          </div>
          <div className='cart__item-details'>
            <p className='cart__item-name'>Osmond Armchair</p>
            <p className='cart__item-color'>
              <span className='color'>Color</span>{' '}
              <span className='color__name'>Gunnared beige</span>
            </p>
            <div className='cart__item-actions'>
              <QuantitySelector value={1} />
              <button className='cart__item-remove danger'>Remove</button>
            </div>
          </div>
          <div className='cart__item-price'>
            <p>$149.99</p>
          </div>
        </div>
        <div className='divider'></div>
        <div className='cart__item'>
          <div className='cart__item-picture'>
            <Image
              src='/assets/images/Meryl_Lounge_Chair_Teal_LP.jpeg'
              width={160}
              height={160}
              quality={100}
              objectFit='contain'
            />
          </div>
          <div className='cart__item-details'>
            <p className='cart__item-name'>Meryl Lounge Chair</p>
            <p className='cart__item-color'>
              <span className='color'>Color</span>{' '}
              <span className='color__name'>Lysed bright green</span>
            </p>
            <div className='cart__item-actions'>
              <QuantitySelector value={1} />
              <button className='cart__item-remove danger'>Remove</button>
            </div>
          </div>
          <div className='cart__item-price'>
            <p>$169.99</p>
          </div>
        </div>
      </div>
      <div className='cart__alert'>
        <div className='cart__alert-bg' />
        <div className='cart__alert-percent'>
          <Image src='/assets/icons/percent.svg' width={24} height={24} />
        </div>
        <p className='cart__alert-text'>
          10% Instant Discount with Federal Bank Debit Cards on a min spend of
          $150. TCA
        </p>
      </div>
    </>
  );
};

export default Cart;
