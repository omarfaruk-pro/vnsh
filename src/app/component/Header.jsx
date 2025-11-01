
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { CiUser } from "react-icons/ci";
import { IoBagHandleOutline, IoSearchOutline } from "react-icons/io5";
import NavLink from './NavLink';


export default function Header() {

    return (
        <>
            <header className='border-b border-[#12121214]'>
                <div className='bg-[#FF9900]'>
                    <div className="container">
                        <p className='text-base p-2.5 font-bold leading-[1.8] text-white text-center'>New Product: Weapon Mounted Light Compatible Holster Now Available — <Link href="#" className='underline'>Buy Now and Get 2 FREE Gifts</Link></p>
                    </div>
                </div>
                <div className='bg-foreground'>
                    <div className="container">
                        <p className=' p-2.5 text-white text-center leading-[1.3] tracking-[1px]'>🔥 Welcome to our store. Free shipping over $50.🔥</p>
                    </div>
                </div>
                <div className="bg-white py-6">
                    <div className="container">
                        <div className="flex items-center justify-between py-1.75">
                            <div className='w-22 shrink-0'>
                                <button className='w-11 h-11 shrink-0 inline-flex items-center justify-center'><IoSearchOutline className='text-[1.375rem]' /></button>
                            </div>
                            <Link href="/">
                                <Image className='mix-blend-difference' src="/images/logo-white.avif" alt="logo" width={150} height={50} />
                            </Link>
                            <div className='flex'>
                                <button className='h-11 w-11 inline-flex justify-center items-center shrink-0'><CiUser className='text-2xl' /></button>
                                <Link className='h-11 w-11 inline-flex justify-center items-center shrink-0 relative' href="/cart">
                                    <IoBagHandleOutline className='text-2xl' />
                                    <span className='h-4.25 w-4.25 absolute bottom-0.75 right-0.75 bg-red rounded-full text-white text-[.563rem] flex items-center justify-center'>03</span>
                                </Link>
                            </div>
                        </div>
                        <nav className='mt-4'>
                            <ul className='flex justify-center'>
                                <li> <NavLink href="/">Home</NavLink></li>
                                <li> <NavLink href="/products">Products</NavLink></li>
                                <li> <NavLink href="#">Accessories</NavLink></li>
                                <li> <NavLink href="#">Apparel and Gifts</NavLink></li>
                                <li> <NavLink href="/about-us">About Us</NavLink></li>
                                <li> <NavLink href="/contact">Contact</NavLink></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}
