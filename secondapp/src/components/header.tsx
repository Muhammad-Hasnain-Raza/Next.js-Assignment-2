import Link from "next/link";
import styles from "./header.module.css";

export default function header() {
  return (
    <header className={styles.header}>
        <h1>MHR Software</h1>
        <ul className={styles.navList}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
        </ul>
    </header>
  )
}
