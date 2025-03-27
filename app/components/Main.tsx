import Image from 'next/image';
import { JSX } from 'react';

import styles from '../(home)/page.module.css';

interface MainProps {
  className?: string;
}

export function Main({ className }: MainProps): JSX.Element {
  return (
    <main className={`${styles.main} ${className}`}>
      <img
        src='/assets/rogue.webp'
        alt='Rogues'
        className='photos'
        loading='lazy'
      />
      <img
        src='/assets/paladin.webp'
        alt='Paladins'
        className='photos'
        loading='lazy'
      />
      <img
        src='/assets/mage.webp'
        alt='Mages'
        className='photos'
        loading='lazy'
      />

      <div>
        <div className='video-mask'>
          <h1>
            <span className='sans-font'>Dungeon</span>
            <br />
            <span className='display-font'>Blitz</span>
          </h1>
        </div>
        <h6>
          A free-to-play, side-scrolling brawler with light RPG and MMO Game!
        </h6>
      </div>
    </main>
  );
}
