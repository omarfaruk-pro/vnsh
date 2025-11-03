"use client";
import RenderStars from "@/app/component/product/RendersStars";
import Upsell from "@/app/component/product/Upsell";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Details = () => {
    const productData = {
        name: "THE VNSH HOLSTER",
        price: 79.97,
        rating: 4.2,
        reviewCount: 6429,
        description: `The VNSH holster is the most comfortable holster you’ll ever wear. We made it with premium materials that enhance all-day carry. Incredibly versatile, the VNSH holster works with 99% of all modern handguns, carries two additional magazines, and can work in a variety of carry configurations. Available in 2 sizes. Regular fits 48" and large fits 68"`,
        video: "https://www.youtube.com/embed/i_aRiIPQVJc",
        colors: {
            Black: {
                main: "/images/product-5.webp",
            },
            Camo: {
                main: "/images/product-2.avif",
            },
            Gray: {
                main: "/images/product-3.webp",
            },
            Nude: {
                main: "/images/product-4.webp",
            },
        },
        sizes: {
            Regular: {
                main: "/images/product-1.avif",
            },
            XL: {
                main: "/images/product-5.webp",
            },
        },
        thumbs: [
            "/images/product-1.avif",
            "/images/product-2.avif",
            "/images/product-3.webp",
            "/images/product-4.webp",
        ],
    };

    const [selectedColor, setSelectedColor] = useState("Black");
    const [selectedSize, setSelectedSize] = useState("Regular");
    const [mainImage, setMainImage] = useState(productData?.thumbs[0]);
    const [upQuantity, setUpQuantity] = useState(1);

    const handleColorChange = (color) => {
        setSelectedColor(color);
        setMainImage(productData?.colors[color]?.main);
    };

    const handleSizeChange = (size) => {
        setSelectedSize(size);
        setMainImage(productData?.sizes[size]?.main);
    };

    const handleThumbClick = (url) => {
        setMainImage(url);
    };

    return (
        <>
            <section className="pt-10 pb-20">
                <div className="container">
                    <div className="grid gap-10 md:gap-0 md:grid-cols-2 lg:grid-cols-3">
                        <div className=" lg:col-span-2 lg:pr-16">
                            <div className="sticky top-0">
                                <div className="w-full aspect-4/3  overflow-hidden flex items-center justify-center ">
                                    <Image
                                        width={600}
                                        height={400}
                                        src={mainImage}
                                        alt="Product main"
                                        className="object-contain w-full h-full"
                                    />
                                </div>

                                <div className="flex gap-3 mt-4">
                                    {productData?.thumbs.map((thumb, i) => (
                                        <Image
                                            width={300}
                                            height={300}
                                            key={i}
                                            src={thumb}
                                            alt={`thumb-${i}`}
                                            onClick={() => handleThumbClick(thumb)}
                                            className={`w-1/5 aspect-square object-cover rounded-xl cursor-pointer border-2 transition 
                                ${mainImage === thumb ? "border-gray-700" : "border-transparent"}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="">
                            <h1 className="text-[2.5rem] font-bold mb-2">{productData.name}</h1>
                            <p className="text-lg tracking-[1.3px] text-[#cd3627] mb-1">
                                ${productData.price.toFixed(2)}
                            </p>
                            <p className="text-sm mb-4"><Link className="underline" href="#">Shipping</Link> calculated at checkout.</p>

                            <div className="flex items-center gap-1mb-3">
                                <RenderStars rating={productData.rating} />
                                <span className="text-base font-bold ml-2">
                                    {productData.reviewCount} Reviews
                                </span>
                            </div>

                            <p className="opacity-85 my-5">
                                {productData.description}
                            </p>

                            <div className="mb-6">
                                <p className="text-base mb-2">Color:</p>
                                <div className="flex gap-3 flex-wrap">
                                    {Object.keys(productData.colors).map((color) => (
                                        <button
                                            key={color}
                                            onClick={() => handleColorChange(color)}
                                            className={`px-5 py-2.5 rounded-full border transition leading-none text-sm 
                                            ${selectedColor === color
                                                    ? "bg-foreground text-white border-foreground"
                                                    : "bg-transparent text-foreground border-gray-600 hover:border-black"
                                                }`}
                                        >
                                            {color}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="mb-6">
                                <p className=" mb-2 text-base">Size:</p>
                                <div className="flex gap-3 flex-wrap">
                                    {Object.keys(productData.sizes).map((size) => (
                                        <button
                                            key={size}
                                            onClick={() => handleSizeChange(size)}
                                            className={`px-5 py-2.5 rounded-full border transition leading-none text-sm 
                                    ${selectedSize === size
                                                    ? "bg-foreground text-white border-foreground"
                                                    : "bg-transparent text-foreground border-gray-600 hover:border-black"
                                                }`}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <p className="text-[.94rem] font-semibold mb-1.5">Quantity <span className="text-[#ff0000]">(1 in cart)</span></p>
                            <div className="flex  gap-3 ">
                                <div className="flex border border-gray-400 justify-between items-center w-35.5  shrink-0 grow-0 text-center">
                                    <button disabled={upQuantity <= 1} onClick={() => setUpQuantity(upQuantity - 1)} className='w-full flex items-center justify-center text-3xl'>-</button>

                                    <input type="number" defaultValue={upQuantity} className='w-full flex items-center justify-center text-center [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-outer-spin-button]:m-0 [appearance:textfield] py-1 focus:outline-0' />

                                    <button onClick={() => setUpQuantity(upQuantity + 1)} className='w-full flex items-center justify-center text-3xl'>+</button>
                                </div>
                            </div>

                            <button className="btn-primary w-full my-6">
                                Add to Cart
                            </button>

                            <a href="#faq" className="my-4 inline-block">
                                <Image
                                    width={50}
                                    height={50}
                                    src="/images/faq.webp"
                                    alt="faq"
                                    className="w-12.5"
                                />
                            </a>

                            <Upsell />

                            {
                                productData.video && (
                                    <iframe
                                        className="w-full aspect-video rounded-lg"
                                        src={productData.video}
                                        title={`${productData.name} Demo`}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>

                                )
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Details;
