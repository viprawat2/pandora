import React from 'react';
import styles from "@/styles/ProductForm.module.css";
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ["latin"] });

const AboutUs = () => {
    return (
        <div className={`${styles.main} ${inter.className} mt-64 mb-16`}>
        <div className="flex justify-center">
            <div className="p-8 bg-gray-200 w-full">
                <p className={styles.story}>
                At Pandora, we believe that your home should be a sanctuary - a place where you can relax, unwind, and express your personal style. We are dedicated to providing you with a curated selection of high-quality furniture and lighting solutions that will transform your living space into a haven of comfort and beauty.
                <br />
                <br />
                <h2 className='font-bold'>Our Mission</h2>
                Our mission is to inspire and empower you to create a home that reflects your unique personality and meets your lifestyle needs. We understand that furniture and lighting play a crucial role in shaping the ambiance and functionality of your living space. That&apos;s why we strive to offer a diverse range of products that cater to different tastes, preferences, and budgets.
                <br />
              </p>
            </div>
        </div>
      </div>
    );
};

export default AboutUs;