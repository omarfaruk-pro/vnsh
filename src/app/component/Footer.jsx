import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";


export default function Footer() {
    return (
        <>
            <footer className='py-9 bg-foreground'>
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-2 md:order-1">
                        <div className='order-2'>
                            <h3 className='text-white mb-5'>Our Mission</h3>
                            <p className='text-white opacity-75'>
                                <em>We exist to help you carry comfortably all day, every day. <br /> <br />
                                    We’re here to support normal, everyday Americans, law-enforcement, active-duty military in their quest to be armed and effective in staying safe in a dangerous world.</em>
                            </p>
                        </div>
                        <div className='md:text-center px-0 lg:px-12.5 order-1 md:order-2'>
                            <Image src="/images/logo-white.avif" alt="logo" width={250} height={84} className='md:mx-auto w-40 md:w-auto'/>
                            <h2 className='text-white mt-5 md:mt-2 mb-1 font-bold text-2xl'>STAY IN THE LOOP</h2>
                            <p className='text-white opacity-75 text-base leading-[1.8]'>Be the first to get access to deals, limited-time offers, and timely updates on all things related to VNSH and our friends in the industry!</p>

                            <form action="#">
                                <div className='flex justify-between mb-3 mt-5 md:px-5 max-w-md md:max-w-auto'>
                                    <input type="email" placeholder='Email' className='w-full border border-white/60 border-r-0 rounded-0 focus:outline-0 p-3 leading-none text-sm text-white'/>
                                    <button className='w-23.5 shrink-0 border border-red bg-red inline-flex justify-center items-center text-white uppercase text-sm'>sign up</button>
                                </div>
                            </form>
                            <ul className="flex md:justify-center">
                                <li><a href="#" className='h-11 w-11 flex justify-center items-center'><FaFacebook className='text-white  hover:scale-110  duration-300 ease-linear text-xl' /></a></li>
                                <li><a href="#" className='h-11 w-11 flex justify-center items-center'><FaInstagram className='text-white  hover:scale-110  duration-300 ease-linear text-xl' /></a></li>
                                <li><a href="#" className='h-11 w-11 flex justify-center items-center'><FaYoutube className='text-white  hover:scale-110  duration-300 ease-linear text-xl' /></a></li>
                            </ul>
                        </div>
                        <div className='md:pl-12.5 order-3'>
                            <h3 className='text-white mb-5'>Quick Links</h3>
                            <ul>
                                <li><Link href="#" className='text-white opacity-75 hover:opacity-100 hover:underline duration-300 ease-linear text-sm'>Search</Link></li>
                                <li><Link href="#" className='text-white opacity-75 hover:opacity-100 hover:underline duration-300 ease-linear text-sm'>About Us</Link></li>
                                <li><Link href="#" className='text-white opacity-75 hover:opacity-100 hover:underline duration-300 ease-linear text-sm'>Privacy Policy</Link></li>
                                <li><Link href="#" className='text-white opacity-75 hover:opacity-100 hover:underline duration-300 ease-linear text-sm'>Return Policy</Link></li>
                                <li><Link href="#" className='text-white opacity-75 hover:opacity-100 hover:underline duration-300 ease-linear text-sm'>Shipping Policy</Link></li>
                                <li><Link href="#" className='text-white opacity-75 hover:opacity-100 hover:underline duration-300 ease-linear text-sm'>Terms & Disclaimer</Link></li>
                                <li><Link href="#" className='text-white opacity-75 hover:opacity-100 hover:underline duration-300 ease-linear text-sm'>Cancel Membership</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='border-t border-[#ffffff14] mt-12.5 pt-7.5'>
                    <div className="container">
                        <p><span className='text-white opacity-75 text-xs'> © 2025,</span> <Link href="/" className='text-white opacity-75 hover:opacity-100 hover:underline duration-300 ease-linear text-xs'> VNSH</Link> <a className='text-white opacity-75 hover:opacity-100 hover:underline duration-300 ease-linear text-xs' href="https://www.shopify.com/?utm_campaign=poweredby&utm_medium=shopify&utm_source=onlinestore">Powered by Shopify</a> </p>
                    </div>
                </div>
            </footer>
        </>
    )
}
