import Image from 'next/image';
import { CSSProperties } from 'react';
import Layout from '../components/Layout';
import QuantitySelector from '../components/QuantitySelector';

const IndexPage = () => {
  const style = {
    '--rating': 4.6,
  } as CSSProperties;

  return (
    <Layout title='Cozy Homepage'>
      <div className='navigation'>
        <div className='navigation__left'>
          <div className='back-button'>
            <Image src='/assets/icons/arrow-left.svg' width={25} height={12} />
          </div>
          <div className='breadcrumbs'>
            <p className='breadcrumbs__parent'>Chair</p>
            <span> / </span>
            <p className='breadcrumbs__child'>Meryl Lounge Chair</p>
          </div>
        </div>

        <div className='navigation__right'>
          <div className='preview__value'>
            <p>
              <span className='preview__value-current'>01</span> / 05
            </p>
          </div>
          <div className='preview__controllers'>
            <div className='preview__controllers-left'>
              <Image
                src='/assets/icons/chevron-left.svg'
                width={25}
                height={25}
              />
            </div>
            <div className='preview__controllers-right'>
              <Image
                src='/assets/icons/chevron-right.svg'
                width={25}
                height={25}
              />
            </div>
          </div>
        </div>
      </div>

      <div className='product-page'>
        <div className='left'>
          <div className='product'>
            <h2 className='product__name'>Meryl Lounge Chair</h2>
            <div className='product__rap'>
              {/* product rating and price */}
              <div className='product__price'>
                <p className='price'>$149.99</p>
              </div>
              <div className='product__rating'>
                <div className='product__rating-stars' style={style}></div>
                <div className='product__rating-value'>
                  4.6 / 5.0
                  <span className='product__rating-quantity'> (556)</span>
                </div>
              </div>
            </div>
            <div className='product__description'>
              The gently curved lines accentuated by sewn details are kind to
              your body and pleasant to look at. Also, there’s a tilt and
              height-adjusting mechanism that’s built to outlast years of ups
              and downs.
            </div>

            <div className='product__colours'>
              <div className='product__colours-selection product__colours-selection-1 selected'></div>
              <div className='product__colours-selection product__colours-selection-2'></div>
              <div className='product__colours-selection product__colours-selection-3'></div>
              <div className='product__colours-selection product__colours-selection-4'></div>
            </div>

            <div className='product__actions'>
              <QuantitySelector value={1} />

              <button className='cta filled'>Add to cart</button>
            </div>

            <div className='product__notes'>
              Free 2-5 day shipping • Tool-free assembly • 30-day trial
            </div>
          </div>

          <div className='user-activities'>
            <div className='add-to-wishlist'>
              <div className='add-to-wishlist__icon'>
                <Image
                  width={18}
                  height={18}
                  src='/assets/icons/heart-outline.svg'
                />
              </div>
              <span>Add to Wishlist</span>
            </div>
            <div className='share'>
              <div className='share__icon share__icon-facebook'>
                <Image
                  src='/assets/icons/facebook.svg'
                  width={16}
                  height={16}
                />
              </div>
              <div className='share__icon share__icon-twitter'>
                <Image src='/assets/icons/twitter.svg' width={16} height={16} />
              </div>
              <div className='share__icon share__icon-pinterest'>
                <Image
                  src='/assets/icons/pinterest.svg'
                  width={16}
                  height={16}
                />
              </div>
              <div className='share__icon share__icon-instagram'>
                <Image
                  src='/assets/icons/instagram.svg'
                  width={16}
                  height={16}
                />
              </div>
            </div>
          </div>
        </div>
        <div className='right'>
          <div className='preview'>
            <div className='colored-background'></div>
            <div className='preview__product'>
              <Image
                src='/assets/images/Meryl_Lounge_Chair_Teal_3 1.png'
                layout='fill'
                objectFit='contain'
                quality={100}
              />
            </div>
            <div className='preview__options'>
              <div className='preview__options-image selected'>
                <Image
                  src='/assets/images/Rectangle 2.png'
                  width={88}
                  height={88}
                />
              </div>
              <div className='preview__options-image'>
                <Image
                  src='/assets/images/Rectangle 4.png'
                  width={88}
                  height={88}
                />
              </div>
              <div className='preview__options-image'>
                <Image
                  src='/assets/images/Rectangle 5.png'
                  width={88}
                  height={88}
                />
              </div>
              <div className='preview__options-image'>
                <Image
                  src='/assets/images/Rectangle 6.png'
                  width={88}
                  height={88}
                />
              </div>
              <div className='preview__options-image'>
                <Image
                  src='/assets/images/langfjaell-office-chair-with-armrests-gunnared-beige-black__0461403_PE607530_S5 1.png'
                  width={88}
                  height={88}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
