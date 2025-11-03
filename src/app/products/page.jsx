"use client"
import React, { useEffect, useState } from 'react'
import ProductCard from '../component/product/ProductCard'
import ProductFilters from '../component/product/ProductFilters'

export default function Products() {
    const [query, setQuery] = useState("");
    // const [products, setProducts] = useState([]);
    // const [loading, setLoading] = useState(false);

    console.log(query)

    // here is api call
    // useEffect(() => {
    //     const fetchProducts = async () => {
    //         setLoading(true);
    //         try {
    //             const res = await fetch(`/api/products?${query}`);
    //             const data = await res.json();
    //             setProducts(data);
    //         } catch (err) {
    //             console.error("Error fetching products:", err);
    //         } finally {
    //             setLoading(false);
    //         }
    //     };

    //     fetchProducts();
    // }, [query]);
    return (
        <>
            <section className='pb-9'>
                <div className="container">
                    <h1 className="text-[2.5rem] uppercase my-6.5 leading-none">Products</h1>
                    <div className="pt-12 pb-9">

                        <ProductFilters onFilterChange={setQuery} />

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-5">
                            {
                                [...Array(12)].map((_, i) => (
                                    <div key={i} data-aos="fade-up" data-aos-duration="800" data-aos-delay={((i + 1) * 50) } >
                                        <ProductCard />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
