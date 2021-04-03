import React from 'react';
import Cart from '../components/Cart';
import { MainTab } from '../interfaces';
import Layout from '../components/Layout';
import Checkout from '../components/Checkout';
import OrderSummary from '../components/OrderSummary';

export const subTabs = ['Address', 'Shipping', 'Payment'] as const;

const CartPage = () => {
  const [subTab, setSubTab] = React.useState(0);
  const [mainTab, setMainTab] = React.useState<MainTab>('Cart');

  const handleNext = () => {
    if (mainTab === 'Cart') {
      setMainTab('Checkout');
    } else {
      const nextTab = subTab + 1;
      nextTab < subTabs.length && setSubTab(subTab + 1);
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Layout title='Cart'>
      <div className='cart__page'>
        <div className='cart__page-left'>
          {mainTab === 'Cart' ? (
            <Cart />
          ) : (
            <Checkout subTab={subTab} setSubTab={setSubTab} />
          )}
        </div>
        <div className='cart__page-right'>
          <OrderSummary
            subTab={subTab}
            mainTab={mainTab}
            handleNext={handleNext}
          />
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;
