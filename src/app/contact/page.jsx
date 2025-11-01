"use client";
import Image from "next/image";
import React from "react";

export default function Contact() {

  return (
    <>
      <section className="relative w-full flex items-center justify-center text-white overflow-hidden py-12 h-140">
        <Image
          src="/images/contact-hero.jpg"
          alt="Hero background"
          fill
          priority
          className="object-cover object-center -z-10"
        />
        <div className="text-center px-8 py-10 max-w-3xl bg-white rounded-md">
          <h1 className="text-[2.5rem] text-black font-bold leading-[1.3] uppercase">
            How can we help?
          </h1>
          <p className="text-lg md:text-xl text-black opacity-75 mt-2.5">
            Support Hours | Monday - Friday: 9AM-5PM EST
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 py-12 text-center gap-6">
            <div>
              <h3 className="text-lg font-medium">Email</h3>
              <a
                className="mt-2.5 block text-gray-600 hover:text-gray-800"
                href="mailto:customercare@vnsh.com"
              >
                customercare@vnsh.com
              </a>
            </div>
            <div>
              <h3 className="text-lg font-medium">Phone</h3>
              <a
                className="mt-2.5 block text-gray-600 hover:text-gray-800"
                href="tel:1-888-526-1885"
              >
                1-888-526-1885 (VNSH)
              </a>
            </div>
          </div>

          <form className="py-9">
            <div className="max-w-181.5 mx-auto space-y-5">
              <h2 className="text-[2.5rem] leading-[1.3] uppercase">
                Have Questions?
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative w-full">
                  <input
                    type="text"
                    required
                    className="floating-input"
                  />
                  <label
                    className="floating-label" >
                      Name
                  </label>
                </div>
                <div className="relative w-full">
                  <input
                    type="email"
                    required
                    className="floating-input"
                  />
                  <label
                    className="floating-label" >
                      Email *
                  </label>
                </div>
              </div>

              <div className="relative w-full">
                <input
                  type="tel"
                  required
                  className="floating-input"
                />
                <label
                  className="floating-label" >
                    Phone Number
                </label>
              </div>

              <div className="relative w-full">
                <textarea
                  rows="4"
                  className="floating-input resize-none"
                  required
                ></textarea>
                <label
                  className="floating-textarea-label"
                >
                  Comment
                </label>
              </div>

              <button type="submit" className="btn-primary">Send</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
