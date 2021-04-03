import React from 'react';
import Image from 'next/image';
import { QuantitySelectorProps } from '../interfaces';

const QuantitySelector = ({ value, onChange }: QuantitySelectorProps) => {
  const [state, setState] = React.useState(value);

  React.useEffect(() => {
    onChange?.(value);
  }, [value]);

  const decrement = () => {
    if (state !== 1) {
      setState(state - 1);
    }
  };

  const increment = () => {
    setState(state + 1);
  };

  return (
    <div className='quantity-selector'>
      <button onClick={decrement}>
        <Image src='/assets/icons/minus.svg' width={20} height={20} />
      </button>
      <input
        readOnly
        type='number'
        value={state}
        name='quantity'
        id='product_quantity'
      />
      <button onClick={increment}>
        <Image src='/assets/icons/plus.svg' width={20} height={20} />
      </button>
    </div>
  );
};

export default QuantitySelector;
