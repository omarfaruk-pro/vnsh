import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Hero() {
    return (
        <>
            <section className="relative h-140 w-full flex items-end justify-center text-white overflow-hidden py-12.5">
                <Image
                    src="/images/hero-1.webp"
                    alt="Hero background"
                    fill
                    priority
                    className="object-cover object-center -z-10"
                />

                <div className="text-center z-1 px-9 py-10">
                    <h1 className="text-[3.25rem] font-bold leading-[1.3] uppercase">THE VNSH HOLSTER</h1>
                    <p className="text-lg md:text-xl opacity-75 mt-2.5">
                        So Comfy It&#39;s Like It Ain&#39;t Even There
                    </p>
                    <Link href="#" className="btn-primary mt-5">Buy Now</Link>
                </div>
            </section>
        </>
    )
}
