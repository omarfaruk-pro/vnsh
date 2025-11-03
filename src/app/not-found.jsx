"use client";

import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center bg-gray-50 text-center px-6">
      <div className="max-w-md">
        <h1 className="text-8xl  mb-2">404</h1>
        <h2 className="text-2xl mb-4">
          Page Not Found
        </h2>
        <p className="opacity-85 mb-8">
          Oops! The page you’re looking for doesn’t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 btn-primary"
        >
          <FaArrowLeft size={18} />
          Go back home
        </Link>
      </div>
    </section>
  );
}
