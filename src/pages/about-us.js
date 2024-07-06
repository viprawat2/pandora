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
                Our mission is to inspire and empower you to create a home that reflects your unique personality and meets your lifestyle needs. We understand that furniture and lighting play a crucial role in shaping the ambiance and functionality of your living space. That's why we strive to offer a diverse range of products that cater to different tastes, preferences, and budgets.
                <br />
                <br />
                <h2 className='font-bold'>Quality Craftsmanship</h2> 
                At Pandora, we believe in the power of quality craftsmanship. We carefully source our furniture and bulbs from trusted manufacturers who share our commitment to excellence. Each item in our collection is thoughtfully designed and crafted using premium materials to ensure durability, comfort, and style. We believe that investing in well-made furniture and reliable lighting solutions is an investment in the long-term enjoyment of your home.
                <br />
                <br />
                <h2 className='font-bold'>Exceptional Customer Experience</h2> 
                We value our customers and are dedicated to providing an exceptional shopping experience. Our friendly and knowledgeable customer support team is here to assist you every step of the way. Whether you need guidance in selecting the perfect piece of furniture or have questions about installation and maintenance, we are here to help. Your satisfaction is our top priority, and we strive to exceed your expectations with our personalized service.
                <br />
                <br />
                <h2 className='font-bold'>Sustainability and Ethical Practices</h2> 
                At Pandora, we are committed to sustainability and ethical practices. We actively seek out eco-friendly and socially responsible products, partnering with manufacturers who prioritize sustainable sourcing, fair labor practices, and reduced environmental impact. By choosing Pandora, you can shop with confidence, knowing that you are making a positive choice for both your home and the planet.        
                </p>
            </div>
        </div>
      </div>
    );
};

export default AboutUs;