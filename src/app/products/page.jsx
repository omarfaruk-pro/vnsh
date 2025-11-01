import React from 'react'

export default function Products() {
  return (
    <>
        <section>
            <div className="container">
                <h1 className="text-[2.5rem] uppercase my-6.5 leading-none">Products</h1>
                <div className="pt-12 pb-9">
                    <div className="flex justify-between items-center"></div>
                    <div className="grid grid-cols-4 gap-2"></div>
                </div>
            </div>
        </section>
    </>
  )
}
