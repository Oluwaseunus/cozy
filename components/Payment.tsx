import React from 'react';
import Image from 'next/image';
import CustomRadio from './CustomRadio';

const Payment = () => {
  const [selected, setSelected] = React.useState('first');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSelected(value);
  };

  return (
    <div className='payment__page'>
      <h3 className='payment__page-header'>Payment Method</h3>
      <div className='payment__methods'>
        <div className='payment__method'>
          <div className='payment__method-checkbox'>
            <CustomRadio
              value='first'
              name='payment'
              onChange={onChange}
              checked={selected === 'first'}
            />
          </div>
          <div className='payment__method-denomination'>
            <Image src='/assets/icons/visa.svg' width={24} height={17} />
          </div>
          <div className='payment__method-identifier'>
            <span className='payment__method-identifier-dot'>&#9679;</span>
            <span className='payment__method-identifier-dot'>&#9679;</span>
            <span className='payment__method-identifier-dot'>&#9679;</span>
            <span className='payment__method-identifier-dot'>&#9679;</span>
            <p>6754</p>
          </div>
          <p className='payment__method-expiry'>Expires 06/2021</p>
          <button className='danger'>Remove</button>
        </div>
        <div className='divider'></div>
        <div className='payment__method'>
          <div className='payment__method-checkbox'>
            <CustomRadio
              name='payment'
              value='second'
              onChange={onChange}
              checked={selected === 'second'}
            />
          </div>
          <div className='payment__method-denomination'>
            <Image src='/assets/icons/mastercard.svg' width={24} height={17} />
          </div>
          <div className='payment__method-identifier'>
            <span className='payment__method-identifier-dot'>&#9679;</span>
            <span className='payment__method-identifier-dot'>&#9679;</span>
            <span className='payment__method-identifier-dot'>&#9679;</span>
            <span className='payment__method-identifier-dot'>&#9679;</span>
            <p>5643</p>
          </div>
          <p className='payment__method-expiry'>Expires 11/2025</p>
          <button className='danger'>Remove</button>
        </div>
      </div>
      <div className='divider page-divider'></div>
      <button className='primary fit'>+ Add Payment Method</button>
    </div>
  );
};

export default Payment;
