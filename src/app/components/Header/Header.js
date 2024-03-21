
import styles from './Header.module.scss';
import Link from 'next/link';


const Header = () => {
  return (
    <header className={`${styles.header} `}>
      <div>
        <p><Link href="/">Marble TV</Link></p>
      </div>
      <div>
        <nav className="flex flex-col bf-pink-500">
          <ul className={styles.menu}>
            <li><Link href="/movies">Films</Link></li>
            <li><Link href="/series">Series</Link></li>
            <li><Link href="/shorts">Shorts</Link></li>
            <li><Link href="/memes">Memes</Link></li>
            
          </ul>
        </nav>
      </div>
      <input type="text" className="" placeholder="Rechercher un titre ..." />
    </header>
  )
}

export default Header
