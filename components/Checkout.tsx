import React from 'react';
import Image from 'next/image';
import Address from './Address';
import Payment from './Payment';
import Shipping from './Shipping';
import { subTabs } from '../pages/cart';
import { CheckoutProps } from '../interfaces';

const Checkout = ({ subTab, setSubTab }: CheckoutProps) => {
  const CheckoutPages = [Address, Shipping, Payment];

  return (
    <div className='checkout__page'>
      <div className='checkout__page-routes'>
        {subTabs.map((name, index) => (
          <>
            <span
              key={name}
              className={`checkout__page-route${
                subTab === index ? ' active' : ''
              }`}
              onClick={() => setSubTab(index)}
            >
              {name}
            </span>
            {index !== subTabs.length - 1 ? (
              <div className='checkout__page-chevron'>
                <Image
                  src='/assets/icons/chevron-right.svg'
                  width={24}
                  height={24}
                />
              </div>
            ) : null}
          </>
        ))}
      </div>
      {React.createElement(CheckoutPages[subTab])}
    </div>
  );
};

export default Checkout;
