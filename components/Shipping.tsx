import React from 'react';
import CustomRadio from './CustomRadio';

type ShippingType = 'free' | 'priority';

const Shipping = () => {
  const [contact, setContact] = React.useState('(936) 361-0310');
  const [address, setAddress] = React.useState(
    '1131 Dusty Townline, Jacksonville, TX 40322'
  );
  const [shipping, setShipping] = React.useState<ShippingType>('free');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setShipping(value as ShippingType);
  };

  return (
    <div className='shipping__page'>
      <div className='shipping__page-items'>
        <div className='shipping__page-item'>
          <p className='shipping__page-item-label'>Contact</p>
          <div className='shipping__page-item-input-box'>
            <input
              type='string'
              name='contact'
              value={contact}
              className='shipping__page-item-input'
              onChange={e => setContact(e.target.value)}
            />
            <button>Change</button>
          </div>
        </div>
        <div className='shipping__page-item'>
          <p className='shipping__page-item-label'>Shipping Address</p>
          <div className='shipping__page-item-input-box'>
            <input
              type='text'
              name='address'
              value={address}
              className='shipping__page-item-input'
              onChange={e => setAddress(e.target.value)}
            />
            <button>Change</button>
          </div>
        </div>
      </div>
      <div className='shipping__page-method'>
        <p className='shipping__page-method-label'>Shipment Method</p>
        <div className='shipping__page-method-item'>
          <div className='shipping__page-method-item-radio'>
            <CustomRadio
              value='free'
              onChange={onChange}
              name='shipping-method'
              checked={shipping === 'free'}
            />
          </div>
          <div className='shipping__page-method-item-value'>
            <p>
              Free{' '}
              <span className='shipping__page-method-item-label'>
                Regular Shipping
              </span>
            </p>
          </div>
        </div>
        <div className='shipping__page-method-item'>
          <div className='shipping__page-method-item-radio'>
            <CustomRadio
              value='priority'
              onChange={onChange}
              name='shipping-method'
              checked={shipping === 'priority'}
            />
          </div>
          <div className='shipping__page-method-item-value'>
            <p>
              $8.50{' '}
              <span className='shipping__page-method-item-label'>
                Priority Shipping
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
