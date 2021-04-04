import React from 'react';

const CustomRadio = (props: React.HTMLProps<HTMLInputElement>) => {
  return (
    <label className='custom__radio'>
      <input type='radio' {...props} />
      <span className='checkmark'></span>
    </label>
  );
};

export default CustomRadio;
