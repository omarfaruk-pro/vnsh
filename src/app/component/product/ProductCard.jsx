"use client";

import Image from "next/image";
import Link from "next/link";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import RenderStars from "./RendersStars";

const product = {
  id: 1,
  title: "THE VNSH HOLSTER - WEAPON MOUNTED LIGHT COMPATIBLE",
  price: 84.97,
  image: "/images/thumbnail-1.avif",
  rating: 4.5,
  reviews: 6431,
  badge: "new",
};

const ProductCard = () => {

  return (
    <Link href={`/products/${product.id}`} className="w-full overflow-hidden transition hover:-translate-y-2 duration-300 ease-in-out group">
      <div className="relative overflow-hidden">
        <Image
          src={product.image}
          alt={product.title}
          width={400}
          height={300}
          className="w-full h-60 lg:h-50 object-cover lg:object-contain group-hover:scale-105 transition duration-300 ease-in-out"
        />
        {product.badge === "new" && (
          <span className="absolute top-2 left-2 bg-[#e87712] text-white text-xs  px-3 py-0.75 rounded-full">
            New
          </span>
        )}
        {product.badge === "sale" && (
          <span className="absolute top-2 left-2 bg-red text-white text-xs px-3 py-0.75 rounded-full">
            Sale
          </span>
        )}
      </div>

      <div className="px-5 py-4.25">
        <h3 className="group-hover:underline leading-[1.3] font-normal uppercase text-base">
          {product.title}
        </h3>

        <p className="text-[#cd3627] text-base mt-2">${product.price.toFixed(2)}</p>

        <div className="flex items-center gap-0.5">
          <RenderStars rating={product.rating} />
          <span className="text-[#e7721b] ml-2 w-5 shrink-0 font-bold">({product.rating})</span>
        </div>

        <p className="mt-1 text-[#2c2c2c] font-bold">
          {product.reviews} Reviews
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;
