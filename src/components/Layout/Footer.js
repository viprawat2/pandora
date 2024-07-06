import styles from "@/styles/Footer.module.css";
import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

function Footer() {
  return (
    <div className={inter.className}>
      <footer className={styles.footer}>
        <div className={styles.links}>
          <Link href="/about-us" className={styles.item}>
            About
          </Link>
          <Link href="/contact-us" className={styles.item}>
            Contact Us
          </Link>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
