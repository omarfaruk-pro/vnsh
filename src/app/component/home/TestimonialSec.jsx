import Image from 'next/image';
import React from 'react'

export default function TestimonialSec() {
    const testimonial = [
        {
            content: "This holster is everything it’s advertised to be. Comfortable, ambidextrous, fits micro compacts to duty size. Wear shoulder, appendix, iwb, owb, strong side. Perfect for all day wear. Pockets for mag and flashlight. So comfortable you may forget you have a gun on you. Highly (to the power of 10) recommended you get one or two.",
            author: "Jimmy J. in Leavenworth, KS",
            image: "/images/jimmy.avif",
        },
        {
            content: "This is the 2nd holster I’ve ever purchased, because I stopped using the first one. The first holster was a belt clip which didn’t work with my casual attire. I’ve been wearing athletic shorts more frequently so I needed something that would accommodate. I can wear my VNSH holster with anything, and in any position. It’s very comfy and a couple times I forgot I was carrying.",
            author: "Sean M. in Valley Center, KS",
            image: "/images/sean.avif",
        },
        {
            content: "I’ve always had broad shoulders and virtually no hips. Every belt I own struggles to hold up my pants let alone my handgun. I tried a rigid weathering belt. Better but uncomfortable and still had to keep pulling up my pants. No more. The VNSH holster never slips and holds all my handguns from the .380s to my .40 full size Sig Sauer.",
            author: "Keven G. in Louisville, KY",
            image: "/images/keven.avif",
        },
    ];

    return (
        <>
            <section className='pt-12 pb-9'>
                <div className="container">
                    <h2 className='text-[2.5rem] leading-[1.3] uppercase'>See Why They Say &#34;This Is The Best Holster I&#39;ve Ever Owned&#34;</h2>
                    <div className="grid grid-cols-3 mt-7.5">
                        {
                            testimonial.map((item, index) => (
                                <div key={index} className='text-center px-3.75'>
                                    <div className='mb-6'>
                                        <Image src={item.image} alt={item.author} width={170} height={170} className='w-40 h-40 rounded-full object-cover mx-auto' />
                                    </div>
                                    <p className='mt-5 opacity-70'> <q>{item.content}</q></p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}
