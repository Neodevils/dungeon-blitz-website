import { Header } from '../components/Header';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <Header />
      <main className={`${styles.main}`}>
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
    </>
  );
}
