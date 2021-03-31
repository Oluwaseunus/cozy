import React from 'react';
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
      <button onClick={decrement}> - </button>
      <input
        type='number'
        value={state}
        name='quantity'
        id='product_quantity'
      />
      <button onClick={increment}> + </button>
    </div>
  );
};

export default QuantitySelector;
