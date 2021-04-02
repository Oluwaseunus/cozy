import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

type Props = {
  children?: React.ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <header>
      <nav>
        <Link href='/'>
          <a>
            <div className='logo'>
              <Image src='/assets/icons/logo.svg' width={71} height={39} />
            </div>
          </a>
        </Link>
        <div className='nav-links'>
          <p>Shop</p>
          <p>Collective</p>
          <p>Designers</p>
          <p>About Us</p>
          <p>Contact</p>
        </div>

        <div className='nav-icon-links'>
          {/* <div className="nav-icon-links__left"> */}
          <div className='nav-icon nav-menu'>
            <Image src='/assets/icons/menu.svg' width={24} height={24} />
          </div>
          <div className='nav-icon nav-search'>
            <Image src='/assets/icons/search.svg' width={24} height={24} />
          </div>
          <div className='nav-icon'>
            <div className='nav-icon__divider'></div>
          </div>
          <Link href='/cart'>
            <a>
              <div className='nav-icon nav-cart'>
                <Image src='/assets/icons/cart.svg' width={24} height={24} />
              </div>
            </a>
          </Link>
        </div>
      </nav>
    </header>
    {children}
  </>
);

export default Layout;
