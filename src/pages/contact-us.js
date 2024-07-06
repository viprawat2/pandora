import React from 'react';
import styles from "@/styles/Contact.module.css";
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ["latin"] });

const ContactUs = () => {
    return (
      <div className={`${styles.main} ${inter.className}`}>
        <div className="p-4 py-8 mx-auto max-w-3xl bg-white font-[sans-serif]">
            <h1 className="text-5xl text-gray-800 font-extrabold text-center">Contact us</h1>
            <form className="mt-8 space-y-4">
                <input type='text' placeholder='Name'
                    className="w-full py-6 px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-lg outline-blue-500" />
                <input type='email' placeholder='Email'
                    className="w-full py-6 px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-lg outline-blue-500" />
                <input type='text' placeholder='Subject'
                    className="w-full py-6 px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-lg outline-blue-500" />
                <textarea placeholder='Message' rows="6"
                    className="w-full px-6 text-gray-800 bg-gray-100 focus:bg-transparent text-lg pt-3 outline-blue-500"></textarea>
                <button type='submit'
                    class="text-white bg-red-600 hover:bg-red-800 tracking-wide text-2xl px-4 py-3 w-full">Send</button>
            </form>
        </div>
      </div>
    );
};

export default ContactUs;