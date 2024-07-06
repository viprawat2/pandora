import Image from "next/image";
import Link from "next/link";
import Main1 from "../../assets/header/home-img-1.jpg";
import Main2 from "../../assets/header/home-img-2.jpg";
import Main3 from "../../assets/header/home-img-3.jpg";
import Main4 from "../../assets/header/home-img-4.jpg";
import styles from "@/styles/Hero.module.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const links = [
  {
    id: 1,
    title: "Live Comfortably",
    image: Main1,
    url: "/categories/chair",
    grid: "one",
  },
  {
    id: 2,
    title: "Skincare",
    image: Main2,
    url: "/categories/skincare",
    grid: "two",
  },
  {
    id: 3,
    title: "Kitchen",
    image: Main3,
    url: "/categories/kitchen",
    grid: "three",
  },
  {
    id: 4,
    title: "Electronics",
    image: Main4,
    url: "/categories/electronic",
    grid: "four",
  },
];
const Hero = () => {
  return (
    <div className={inter.className}>
      <div className={styles.homeContainer}>
        <div className={styles.gridContainer}>
          {links.map((item) => {
            const { id, title, image, url, grid } = item;
            return (
              <div
                key={id}
                className={`${styles.featured} 
                            ${
                              grid === "one"
                                ? styles.one
                                : grid === "two"
                                ? styles.two
                                : grid === "three"
                                ? styles.three
                                : styles.four
                            }`}
              >
                <Link href={url}>
                  <div className={styles.overlay}></div>
                  <Image
                    src={image}
                    alt={title}
                    className={styles.image}
                    priority
                  />
                  <p className={styles.description}>{title}</p>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Hero;
