import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function AboutSec() {
  return (
    <>
    <section className='pt-13 pb-10'>
        <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div data-aos="fade-up" data-aos-delay="150">
                    <Image src="/images/image-1.webp" loading="eager" alt="about" width={750} height={780} className='object-cover h-full'/>
                </div>
                <div className='pl-0 md:p-10 lg:p-17.5 pt-12' data-aos="fade-up" data-aos-delay="250">
                    <h2 className='text-[2.5rem] leading-[1.3] uppercase'>THE VNSH HOLSTER</h2>
                    <p className='mt-5 opacity-70'>If you’re a gun owner who wants to carry everyday but find you take your gun with you less often than you’d like...all because <em>your holster isn&#39;t comfortable</em>...then you owe it to yourself to use the VNSH holster. <br/><br/>
                    The VNSH holster is insanely comfortable (check out our reviews). It also saves you money because it works with 99% of all modern guns, has 2 built-in mag-pouches and doesn&apos;t require a tactical belt. <br /> <br />
                    It truly is an evolution in comfort. <br /><br />
                    Click Discover More to discover why it may be the last holster you ever buy!</p>
                    <Link href="#" className="btn-primary mt-7.5">Discover More</Link>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
