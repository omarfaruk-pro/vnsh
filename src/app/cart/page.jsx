"use client"
import Image from 'next/image';
import Link from 'next/link'
import { useState } from 'react';
import { FaRegTrashCan } from "react-icons/fa6";


export default function Cart() {
    const [upQuantity, setUpQuantity] = useState(1)
    const gift = true;
    const cartData = [
        {
            id: 1,
            image: "/images/product-1.avif",
            title: "The VNSH Holster - Weapon Mounted Light Compatible",
            price: 84.97,
            orientation: "left",
            color: "Black",
            size: "M",
        },
        {
            id: 2,
            image: "/images/product-2.avif",
            title: "VNSH Waist Belt Extender 20",
            price: 19.97,
            orientation: "left",
            color: "Blue",
        },
    ];
    const giftData = [
        {
            id: 1,
            image: "/images/gift-1.webp",
            title: "VNSH Magmate",
        },
        {
            id: 2,
            image: "/images/gift-2.webp",
            title: "Guerrilla Gun Guide Book",
        },
    ];
    return (
        <>
            <section className='pt-9 pb-19'>
                <div className="container">
                    <div className="flex justify-between items-center mb-7.5">
                        <h1 className=" text-3xl md:text-[2.5rem] uppercase  leading-none">your Cart</h1>
                        <Link href="/products" className="underline border-b-2 border-transparent hover:border-blackz leading-none text-base md:text-xl">Continue shopping</Link>
                    </div>
                    <div className="overflow-x-auto">
                        <table className='w-full'>
                            <thead className='border-b border-[#12121214] '>
                                <tr>
                                    <th className='text-left pb-4.5 leading-none opacity-85 uppercase text-[.625rem] font-normal w-3/4 md:w-3/5'>Product</th>
                                    <th className='text-left pb-4.5 leading-none opacity-85 uppercase text-[.625rem] font-normal hidden sm:block'>Quantity</th>
                                    <th className='text-right pb-4.5 leading-none opacity-85 uppercase text-[.625rem] font-normal'>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cartData.length > 0 && cartData.map((item, index) => (
                                        <tr key={index}>
                                            <td className='pt-10'>
                                                <div className="flex gap-5 md:gap-10">
                                                    <div className='w-15 sm:w-25 md:w-37.5 shrink-0'>
                                                        <Image src={item.image} width={150} height={150} alt="product" />
                                                    </div>
                                                    <div className='space-y-1.5'>
                                                        <Link href="/products" className='max-w-75 text-xs md:text-[.94rem] block font-stratumReg font-semibold hover:underline'>
                                                            {item.title}
                                                        </Link>
                                                        <p className='text-sm capitalize'>${item.price}</p>
                                                        {item.orientation && <p className='text-sm capitalize'>Orientation: {item.orientation}</p>}
                                                        {item.color && <p className='text-sm capitalize'>Color: {item.color}</p>}
                                                        {item.size && <p className='text-sm capitalize'>Size: {item.size}</p>}

                                                        <div className="flex  gap-3 sm:hidden">
                                                            <div className="flex border justify-between items-center w-24 md:w-35.5  shrink-0 grow-0 text-center">
                                                                <button disabled={upQuantity <= 1} onClick={() => setUpQuantity(upQuantity - 1)} className='w-full flex items-center justify-center'>-</button>
                                                                <input type="number" defaultValue={upQuantity} className='w-full flex items-center justify-center text-center [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-outer-spin-button]:m-0 [appearance:textfield]' />
                                                                <button onClick={() => setUpQuantity(upQuantity + 1)} className='w-full flex items-center justify-center'>+</button>
                                                            </div>
                                                            <button className='flex items-center justify-center w-10 shrink-0'><FaRegTrashCan className='text-xl' /></button>
                                                        </div>
                                                    </div>

                                                </div>
                                            </td>
                                            <td className='pt-10 hidden sm:block'>
                                                <div className="flex  gap-3">
                                                    <div className="flex border justify-between items-center w-24 md:w-35.5  shrink-0 grow-0 text-center">
                                                        <button disabled={upQuantity <= 1} onClick={() => setUpQuantity(upQuantity - 1)} className='w-full flex items-center justify-center'>-</button>
                                                        <input type="number" defaultValue={upQuantity} className='w-full flex items-center justify-center text-center [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-outer-spin-button]:m-0 [appearance:textfield]' />
                                                        <button onClick={() => setUpQuantity(upQuantity + 1)} className='w-full flex items-center justify-center'>+</button>
                                                    </div>
                                                    <button className='flex items-center justify-center w-10 shrink-0'><FaRegTrashCan className='text-xl' /></button>
                                                </div>
                                            </td>
                                            <td className='pt-10 text-right text-base text-[#cd3627]'>${item.price}</td>
                                        </tr>
                                    ))
                                }
                                {
                                    gift && giftData.map((item, index) => (
                                        <tr key={index}>
                                            <td className='pt-10'>
                                                <div className="flex gap-5 md:gap-10">
                                                    <div className='w-15 sm:w-25 md:w-37.5 shrink-0'>
                                                        <Image src={item.image} width={150} height={150} alt="product" />
                                                    </div>
                                                    <div className='space-y-1.5'>
                                                        <Link href="/products" className='max-w-75 text-xs md:text-[.94rem] block font-stratumReg font-semibold hover:underline'>
                                                            {item.title}
                                                        </Link>
                                                        <p className='text-sm text-[#0a0] font-bold'>FREE GIFT with purchase</p>
                                                        <div className="flex  gap-3">
                                                            1
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className='pt-10 hidden md:block'>
                                                <div className="flex  gap-3">
                                                    1
                                                </div>
                                            </td>
                                            <td className='pt-10 text-right text-base text-[#cd3627]'>$0.00</td>
                                        </tr>
                                    ))
                                }

                            </tbody>
                        </table>
                    </div>
                    <div className="flex justify-center md:justify-end text-center md:text-right border-t border-[#12121214] mt-12.5 pt-12.5">
                        <div className='w-full max-w-87.5 shrink-0'>
                            <p className='text-xl'><strong className='text-base mr-5'>Estimated total</strong> $184.82 USD</p>
                            <p className='py-5.5 text-[.813rem] tracking-[.4px] font-light opacity-75'>Taxes, Discounts and <Link href="#" className='underline'>Shipping</Link> calculated at checkout</p>
                            <button className='btn-primary w-full max-w-87.5 '>Check out</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
