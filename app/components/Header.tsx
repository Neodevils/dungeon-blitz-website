import Image from 'next/image';
import Link from 'next/link';

import styles from '../styles/Header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Image
        src='/assets/Logos.webp'
        alt='Dungeon Blitz & BlitzForge Studios'
        width={150}
        height={0}
        style={{ height: 'auto' }}
      />
      <nav>
        <ul className={styles.navList}>
          <li className={styles.selectedNavItem}>
            <Link href='#game'>game</Link>
          </li>
          <li>
            <Link href='#disciplines'>disciplines</Link>
          </li>
          <li>
            <Link href='#team'>team</Link>
          </li>
        </ul>
      </nav>
      <button disabled className={styles.button}>
        launch game
      </button>
    </header>
  );
};
