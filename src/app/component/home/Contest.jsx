import Image from 'next/image'
import React from 'react'

export default function Contest() {
    return (
        <>
            <section className='pt-12 pb-9'>
                <div className="container">
                    <h2 className='text-[2.5rem] leading-[1.3] uppercase'>OUR CONTEST WINNERS</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-7.5">
                        <div className="w-full max-w-full">
                            <video
                                playsInline
                                controls
                                preload="metadata"
                                aria-label="VNSH Gladiator Winner"
                                poster="/images/thumbnail-1.avif"
                                style={{ width: "100%", maxWidth: "100%" }}
                            >
                                <source
                                    src="/videos/video-1.mp4"
                                    type="video/mp4"
                                />
                                <Image
                                    width={300}
                                    height={170}
                                    alt="VNSH Gladiator Winner"
                                    src="/images/thumbnail-1.avif"
                                />
                            </video>
                            <h3 className='text-center py-6.25 bg-[rgba(18,18,18,.04)] rounded-b-md  text-lg'>VNSH GLADIATOR WINNER</h3>
                        </div>
                        <div className="w-full max-w-full">
                            <video
                                playsInline
                                controls
                                preload="metadata"
                                aria-label="VNSH Gladiator Winner"
                                poster="/images/thumbnail-1.avif"
                                style={{ width: "100%", maxWidth: "100%" }}
                            >
                                <source
                                    src="/videos/video-2.mp4"
                                    type="video/mp4"
                                />
                                <Image
                                    width={300}
                                    height={170}
                                    alt="VNSH Gladiator Winner"
                                    src="/images/thumbnail-1.avif"
                                />
                            </video>
                            <h3 className='text-center py-6.25 bg-[rgba(18,18,18,.04)] rounded-b-md  text-lg'>VNSH TRUCK GIVEAWAY</h3>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 pt-12 pb-9">
                        <div className='text-center px-3.75'>
                            <Image width={163} height={163} alt="Money Back Guarantee" src="/images/money-back.avif" className='mx-auto'/>
                            <div className='py-6'>
                                <h3 className='text-lg'>60 DAY MONEY BACK GUARANTEE</h3>
                            <p className='leading-[1.8] opacity-75 mt-2.5'>No question asked 60 day refund or replacement guaranteed. If you are unhappy for any reason, get your money back. Rock solid guarantee...</p>
                            </div>
                        </div>
                        <div className='text-center px-3.75'>
                            <Image width={163} height={163} alt="Money Back Guarantee" src="/images/american-business.avif" className='mx-auto'/>
                            <div className='py-6'>
                                <h3 className='text-lg'>THANK YOU!</h3>
                            <p className='leading-[1.8] opacity-75 mt-2.5'>Your purchase supports the second amendment community and increases our ability to defend ourselves and remain free.</p>
                            </div>
                        </div>
                        <div className='text-center px-3.75'>
                            <Image width={130} height={163} alt="Money Back Guarantee" src="/images/secure-payment.webp" className='mx-auto'/>
                            <div className='py-6'>
                                <h3 className='text-lg'>100% SECURE PAYMENT</h3>
                            <p className='leading-[1.8] opacity-75 mt-2.5'>All orders are AES-256 Bit encrypted through a HTTPS secure network. We respect your privacy...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
