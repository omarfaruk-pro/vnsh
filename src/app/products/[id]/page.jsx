import Image from 'next/image'
import React from 'react'
import Details from './Details'
import FAQSection from '@/app/component/product/Faq'

export default function ProductDetails() {
    return (
        <>
            <Details />

            <section className='pt-10 md:pt-20 pb-12 md:pb-25' data-aos="fade-up" data-aos-delay="200">
                <div className="container">
                    <div className="lg:flex space-y-10">
                        <div className='lg:px-17.5 lg:py-15 lg:w-2/3'>
                            <h2 className='text-[2.5rem] leading-[1.3] uppercase'>We Engineered This Holster to Feel “Like it Ain’t Even There”</h2>
                            <p className='mt-5 opacity-75'>
                                We made the VNSH holster from premium material to ensure this holster is the most comfortable one you’ve ever worn. <br /> <br />
                                From stretchy “yoga pants” fabric on the inside of the belt, ultra-soft but durable Cordura nylon for the holster itself, and non poke, non binding velcro on the 3.5” belt this holster comfortably clings to your body, holding your gun and 2 mags secure while you go throughout your day. <br /> <br />
                                Plus, the VNSH holster pulls the holster close to your body so it makes the holster “vanish” while you wear it.
                            </p>
                        </div>
                        <div className='lg:w-1/3'>
                            <Image src="/images/product-3.webp" alt="product" width={500} height={620} className='object-cover h-full w-full' />
                        </div>
                    </div>
                </div>
            </section>

            <section className='pt-10 md:pt-20 pb-12 md:pb-25' data-aos="fade-up" data-aos-delay="200">
                <div className="container">
                    <div className="flex flex-col-reverse lg:flex-row space-y-10">
                        <div className='lg:w-1/3'>
                            <Image src="/images/product-4.webp" alt="product" width={500} height={620} className='object-cover h-full w-full' />
                        </div>
                        <div className='lg:px-17.5 lg:py-15 lg:w-2/3'>
                            <h2 className='text-[2.5rem] leading-[1.3] uppercase'>Works With 99% of Modern Handguns</h2>
                            <p className='mt-5 opacity-75'>
                                Our custom-designed holster design means that regardless of what pistol you own… it will help you safely and comfortably carry it. No more needing to buy multiple holsters for all your pistols. <br /> <br />
                                Plus, since it has 2-built in mag pouches, now you don’t need to spend extra money on mag pouches to guarantee you’re never out of the fight.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='pt-10 md:pt-20 pb-12 md:pb-25' data-aos="fade-up" data-aos-delay="200">
                <div className="container">
                    <div className="lg:flex space-y-10">
                        <div className='lg:px-17.5 lg:py-15 lg:w-2/3'>
                            <h2 className='text-[2.5rem] leading-[1.3] uppercase'>Multiple Carry Options</h2>
                            <p className='mt-5 opacity-75'>
                                Not a standard bellyband. Carry in multiple ways: Appendix, shoulder, small of back, 3 o’clock. Your options are varied.
                            </p>
                            <h2 className='text-[2.5rem] leading-[1.3] uppercase mt-5'>VNSH Holsters Save You Money!</h2>
                            <p className='mt-5 opacity-75'>
                                Because the VNSH holster works with 99% of modern semi-automatic handguns it is the best holster to own as you won’t need multiple holsters. <br /> <br />
                                1 Holster does it all - and saves you money in the process
                            </p>
                        </div>
                        <div className='lg:w-1/3'>
                            <Image src="/images/product-5.webp" alt="product" width={500} height={620} className='object-cover h-full w-full' />
                        </div>
                    </div>
                </div>
            </section>

            <section className='pt-10 md:pt-20 pb-12 md:pb-25 text-center' data-aos="fade-up" data-aos-delay="200">
                <div className="container">
                    <h2 className="text-[2.5rem] leading-[1.3] uppercase">SPECS & FEATURES</h2>
                    <div className="grid grid-cols-1 gap-15 md:gap-0 md:grid-cols-2 mt-6">
                        <div>
                            <h3 className='text-lg leading-normal mb-2.5'>Specifications</h3>
                            <ul>
                                <li>- Regular size fits up to 48 inches</li>
                                <li>- Large size fits up to 68 inches</li>
                                <li>- Belt is adjustable</li>
                                <li>- Durable Cordura, polyester blend</li>
                                <li>- Lightweight: 6 oz</li>
                                <li>- 2 utility/mag pouches</li>
                                <li>- ambidextrous</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className='text-lg leading-normal mb-2.5'>Features</h3>
                            <ul>
                                <li>- “No stink” material wicks sweat and minimizes odor.</li>
                                <li>- Enhanced non-penetrable trigger guard for maximum safety</li>
                                <li>- Won’t print as the pocket pulls gun to body</li>
                                <li>- Level 2 retention (adjustable, and with magnetic closure for easy thumb break)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <FAQSection />
        </>
    )
}
