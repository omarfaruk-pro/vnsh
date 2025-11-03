import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa6'
import { SlTag } from "react-icons/sl";


export default function Upsell() {
    const [openUpsell, setOpenUpsell] = useState(false);
    const pairsWellWith = [
        {
            id: 1,
            name: "VNSH MAGMATE",
            price: 29.97,
            image: "/images/product-1.avif"
        },
        {
            id: 2,
            name: "VNSH SUPPORT-SIDE MAG POUCH",
            price: 25.97,
            image: "/images/product-2.avif"
        },
    ];
    const handleAddToCart = () => {
        console.log("Product add to cart")
    }
    return (
        <>
            <div className='py-2 border-t border-b border-gray-200 mb-5'>
                <button
                    onClick={() => setOpenUpsell(!openUpsell)}
                    className="w-full flex justify-between items-center font-stratum text-left"
                >
                    <span className="flex items-center gap-2 text-base font-bold uppercase"><SlTag />
                        Pairs well with</span>
                    <span className="">
                        <FaChevronDown
                            className={`opacity-75  text-sm transition-transform duration-300 ${openUpsell ? "rotate-180" : ""
                                }`}
                        />
                    </span>
                </button>
                {
                    openUpsell && pairsWellWith.length > 0 && (
                        <div className="mt-8 space-y-8">
                            {
                                pairsWellWith.map((item) => (
                                    <div key={item.id} className="flex gap-5 group transition ease-linear duration-200 hover:-translate-y-2">
                                        <Link href={`/product/${item.id}`} className="w-22.5 shrink-0">
                                            <Image
                                                src={item.image}
                                                alt={item.name}
                                                width={100}
                                                height={100}
                                                className="w-full object-contain"
                                            />
                                        </Link>

                                        <div>
                                            <Link
                                                href={`/product/${item.id}`}
                                                className="block "
                                            >
                                                <h2 className='uppercase mb-2.5 leading-none  group-hover:underline text-[.94rem] '>{item.name}</h2>
                                            <p className="text-[#cd3627] text-base">${item.price}</p>
                                            </Link>
                                            <button
                                                type="button"
                                                onClick={() => handleAddToCart(item)}
                                                className="py-3.75 text-[.815rem] hover:text-black transition"
                                            >
                                                Add to cart +
                                            </button>
                                        </div>
                                    </div>

                                ))
                            }
                        </div>
                    )
                }

            </div>
        </>
    )
}
