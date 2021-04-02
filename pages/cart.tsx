import Image from 'next/image';
import React from 'react';
import Layout from '../components/Layout';
import QuantitySelector from '../components/QuantitySelector';

const CartPage = () => {
  return (
    <Layout title='Cart'>
      <div className='cart__page'>
        <div className='cart__page-left'>
          <div className='heading'>
            <h1>Cart</h1>
            <p>2 items</p>
          </div>
          <div className='cart__items'>
            <div className='cart__item'>
              <div className='cart__item-picture'>
                <Image
                  src='/assets/images/osmond_armchair.png'
                  width={160}
                  height={160}
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
                  src='/assets/images/Rectangle 2.png'
                  width={160}
                  height={160}
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
              10% Instant Discount with Federal Bank Debit Cards on a min spend
              of $150. TCA
            </p>
          </div>
        </div>
        <div className='cart__page-right'>
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
            <button className='filled'>Proceed to checkout</button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;
