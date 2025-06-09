import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import { GiPenguin } from "react-icons/gi";

export default function Navbar() {
  return (
    <div className={styles.nav}>
        <div className={styles.navContainer}>
      <div className={styles.title}><GiPenguin size={30} style={{ 'position': 'absolute', left:-30, bottom:-0}}/>Conversion Penguin </div>
      <div className={styles.tabs}>
        <Link className={styles.tabButtons} to={'/convert'}>Convert</Link>
        <Link className={styles.tabButtons} to={'/api'}>API</Link>
        <Link className={styles.tabButtons} to={'/pricing'}>Pricing</Link>
      </div>
      <div className={styles.auth}>
        <Link className={styles.login} to={'/convert'}>Login</Link>
         <Link className={styles.signup} to={'/convert'}>Sign Up</Link>

      </div>
      </div>
    </div>
  );
};

