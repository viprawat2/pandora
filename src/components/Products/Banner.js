import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Banner.module.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
function Banner({ title, text, img, type }) {
  return (
    <div className={inter.className}>
      <div className={styles.main}>
        <div className={type === "normal" ? styles.banner : styles.reverse}>
          <div className={styles.sidetext}>
            <div className={styles.text}>
              <h2>{title}</h2>
              <p>{text}</p>
              <Link onClick={() => window.scrollTo(0, 0)} href="">
                <button>Shop now</button>
              </Link>
            </div>
          </div>
          <div className={styles.image}>
            <Image src={img} alt="banner" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
