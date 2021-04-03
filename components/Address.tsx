import React from 'react';

const Address = () => {
  return (
    <div className='address__page'>
      <div className='address__item'>
        <div className='address__item-radio'></div>
        <div className='address__item-details'>
          <div className='address__item-head'>
            <p className='address__item-name'>Huzefa Bagwala</p>
            <p className='address__item-badge'>Home</p>
          </div>
          <p className='address__item-location'>
            1131 Dusty Townline, Jacksonville, TX 40322
          </p>
          <p className='address__item-contact'>
            Contact -{' '}
            <span className='address__item-contact-number'>(936) 361-0310</span>
          </p>
        </div>
        <div className='address__item-actions'>
          <button>Edit</button>
          <div className='divider horizontal'></div>
          <button className='danger'>Remove</button>
        </div>
      </div>
      <div className='address__item'>
        <div className='address__item-radio'></div>
        <div className='address__item-details'>
          <div className='address__item-head'>
            <p className='address__item-name'>IndiaTech</p>
            <p className='address__item-badge'>Office</p>
          </div>
          <p className='address__item-location'>
            1219 Harvest Path, Jacksonville, TX 40326
          </p>
          <p className='address__item-contact'>
            Contact -{' '}
            <span className='address__item-contact-number'>(936) 361-0310</span>
          </p>
        </div>
        <div className='address__item-actions'>
          <button>Edit</button>
          <div className='divider horizontal'></div>
          <button className='danger'>Remove</button>
        </div>
      </div>
      <div className='divider'></div>
      <div className='new__address'>
        <button className='new__address-button'>+ Add New Address</button>
      </div>
    </div>
  );
};

export default Address;
