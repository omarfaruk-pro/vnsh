import React from 'react'
import VidalyticsPlayer from '../component/about/VidalyticsPlayer'

export default function page() {
    return (
        <>
            <section className='pt-7 pb-25'>
                <div className="container">
                    <div className="max-w-181.5 mx-auto">
                        <h1 className='text-[3.25rem] uppercase mb-10 leading-none'>About Us</h1>

                        <VidalyticsPlayer/>

                        <div className='mb-9'>
                            <h2 className='text-2xl mb-5 uppercase'>Who Is VNSH?</h2>
                            <div className='space-y-5 opacity-75'>
                                <p>Millions upon millions of Americans own and carry guns for self-protection. VNSH brands builds the most comfortable and most versatile holsters on the market so those wishing to carry daily never have a reason not to carry.</p>
                                <p>Additionally, VNSH provides supplemental products that allow for the daily carry of other self-defense tools; as well as products that ensure VNSH customers can confidently use their weapons and to save their life without engaging others.</p>
                            </div>
                        </div>
                        <div className='mb-9'>
                            <h2 className='text-2xl mb-5 uppercase'>Who Do We Serve?</h2>
                            <div className='space-y-5 opacity-75'>
                                <p>We serve every American who wants to prepare for the worst <em>without spending an arm and a leg</em> to do it.</p>
                                <p>VNSH is for Americans who see the direction our country is headed… who <em>know it’s time</em> to get their families ready… but don’t want to waste any time or money to do it.</p>
                            </div>
                        </div>
                        <div className='mb-9'>
                            <h2 className='text-2xl mb-5 uppercase'>Got More Questions?</h2>
                            <div className='space-y-5 opacity-75'>
                                <p>We’re always available to answer any questions or concerns you may have.</p>
                                <p>Just call us here: <a href="tel:1-888-526-1885">1-888-526-1885</a> (VNSH).</p>
                                <p>You’ll instantly get to speak with a real American. NO ROBOTS.</p>
                                <p>You can also email us any time at: <a href="mailto:customercare@vnsh.com">customercare@vnsh.com</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
