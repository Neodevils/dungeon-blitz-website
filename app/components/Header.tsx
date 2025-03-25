import Image from 'next/image';

import styles from '../(home)/page.module.css';

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  return (
    <header className={`${styles.header} ${className}`}>
      <Image
        src={'/assets/Logos.webp'}
        alt={'Logo'}
        width={150}
        height={0}
        style={{ height: 'auto' }}
      />
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <a href={'#game'} className={styles.navLink}>
              Game
            </a>
          </li>
          <li className={styles.navItem}>
            <a href={'#disciplines'} className={styles.navLink}>
              Disciplines
            </a>
          </li>
          <li className={styles.navItem}>
            <a href={'#team'} className={styles.navLink}>
              Team
            </a>
          </li>
        </ul>
      </nav>
      <button className={styles.button}>Launch game</button>
    </header>
  );
}
