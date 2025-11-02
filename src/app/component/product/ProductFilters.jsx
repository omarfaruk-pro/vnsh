"use client";

import { useState, useRef, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";

const ProductFilters = ({ onFilterChange }) => {
    const colors = ["Black", "Blue", "Gray", "Green", "Red", "White"];
    const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
    const availabilityOptions = ["In Stock", "Out of Stock"];

    const [openDropdown, setOpenDropdown] = useState(null);
    const [selectedColors, setSelectedColors] = useState([]);
    const [selectedSizes, setSelectedSizes] = useState([]);
    const [selectedAvailability, setSelectedAvailability] = useState([]);
    const [priceRange, setPriceRange] = useState({ from: "", to: "" });
    const [sortBy, setSortBy] = useState("featured");
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setOpenDropdown(null);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    useEffect(() => {
        const params = new URLSearchParams();

        if (selectedColors.length)
            params.append("color", selectedColors.join(","));
        if (selectedSizes.length)
            params.append("size", selectedSizes.join(","));
        if (selectedAvailability.length)
            params.append("availability", selectedAvailability.join(","));
        if (priceRange.from)
            params.append("priceFrom", priceRange.from);
        if (priceRange.to)
            params.append("priceTo", priceRange.to);
        if (sortBy)
            params.append("sort", sortBy);

        const queryString = params.toString();
        if (onFilterChange) onFilterChange(queryString);
    }, [
        selectedColors,
        selectedSizes,
        selectedAvailability,
        priceRange,
        sortBy,
        onFilterChange
    ]);

    const toggleSelection = (value, setter, state) => {
        setter(state.includes(value) ? state.filter((v) => v !== value) : [...state, value]);
    };

    const clearAllFilters = () => {
        setSelectedColors([]);
        setSelectedSizes([]);
        setSelectedAvailability([]);
        setPriceRange({ from: "", to: "" });
        setSortBy("featured");
    };

    const removeSingle = (type, value) => {
        if (type === "color") setSelectedColors(selectedColors.filter((c) => c !== value));
        if (type === "size") setSelectedSizes(selectedSizes.filter((s) => s !== value));
        if (type === "availability")
            setSelectedAvailability(selectedAvailability.filter((a) => a !== value));
        if (type === "price") setPriceRange({ from: "", to: "" });
    };

    const hasActiveFilters =
        selectedColors.length > 0 ||
        selectedSizes.length > 0 ||
        selectedAvailability.length > 0 ||
        priceRange.from ||
        priceRange.to;

    const renderDropdown = (options, selected, setter) => (
        <div className="absolute z-20 bg-white border border-gray-300 rounded-md shadow-md mt-1 w-80">
            <div className="flex justify-between items-center border-b border-gray-300 px-5 py-3 text-sm text-gray-700">
                <span>{selected.length > 0 ? `${selected.length} selected` : "0 selected"}</span>
                <button onClick={() => setter([])} className="underline">
                    Reset
                </button>
            </div>
            <div className="px-5 py-1">
                {options.map((item) => (
                    <label
                        key={item}
                        className="flex items-center gap-2 py-2 cursor-pointer hover:underline text-sm"
                    >
                        <input
                            type="checkbox"
                            checked={selected.includes(item)}
                            onChange={() => toggleSelection(item, setter, selected)}
                            className="accent-blue-600"
                        />
                        <span>{item}</span>
                    </label>
                ))}
            </div>
        </div>
    );

    const renderPriceDropdown = () => (
        <div className="absolute z-20 bg-white border border-gray-300 rounded-md shadow-md mt-1 w-80">
            <div className="flex justify-between items-center border-b border-gray-300 px-5 py-3 text-sm text-gray-700">
                <span>The highest price is $137.99</span>
                <button onClick={() => setPriceRange({ from: "", to: "" })} className="underline">
                    Reset
                </button>
            </div>
            <div className="grid grid-cols-2 gap-4 px-5 py-3">
                <div className="relative w-full">
                    <input
                        type="number"
                        name="from"
                        value={priceRange.from}
                        onChange={(e) => setPriceRange({ ...priceRange, from: e.target.value })}
                        className="floating-input"
                        required
                    />
                    <label className="floating-label">From</label>
                </div>
                <div className="relative w-full">
                    <input
                        type="number"
                        name="to"
                        value={priceRange.to}
                        onChange={(e) => setPriceRange({ ...priceRange, to: e.target.value })}
                        className="floating-input"
                        required
                    />
                    <label className="floating-label">To</label>
                </div>
            </div>
        </div>
    );

    return (
        <>
            <div className="flex justify-between items-start relative h-18">
                <div className="flex gap-5 ">
                    <span className="opacity-85 text-sm font-semibold">FILTER:</span>

                    <div className="relative w-full space-y-4" ref={dropdownRef}>
                        <div className="flex items-center gap-5 flex-wrap mt-0.5">
                            <button
                                onClick={() => setOpenDropdown(openDropdown === "availability" ? null : "availability")}
                                className="flex items-center gap-1 opacity-85 text-sm"
                            >
                                <span>Availability</span>
                                <FaChevronDown className="opacity-85" />
                            </button>

                            <button
                                onClick={() => setOpenDropdown(openDropdown === "price" ? null : "price")}
                                className="flex items-center gap-1 opacity-85 text-sm"
                            >
                                <span>Price</span>
                                <FaChevronDown className="opacity-85" />
                            </button>

                            <button
                                onClick={() => setOpenDropdown(openDropdown === "color" ? null : "color")}
                                className="flex items-center gap-1 opacity-85 text-sm"
                            >
                                <span>Color</span>
                                <FaChevronDown className="opacity-85" />
                            </button>

                            <button
                                onClick={() => setOpenDropdown(openDropdown === "size" ? null : "size")}
                                className="flex items-center gap-1 opacity-85 text-sm"
                            >
                                <span>Size</span>
                                <FaChevronDown className="opacity-85" />
                            </button>
                        </div>

                        {openDropdown === "availability" &&
                            renderDropdown(availabilityOptions, selectedAvailability, setSelectedAvailability)}
                        {openDropdown === "price" && renderPriceDropdown()}
                        {openDropdown === "color" && renderDropdown(colors, selectedColors, setSelectedColors)}
                        {openDropdown === "size" && renderDropdown(sizes, selectedSizes, setSelectedSizes)}
                    </div>
                </div>

                <div className="flex gap-5">
                    <label htmlFor="sortby" className="flex gap-2 items-center">
                        <strong className="text-sm font-stratumReg">Sort by:</strong>
                        <select
                            id="sortby"
                            className="text-sm"
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                        >
                            <option value="featured">Featured</option>
                            <option value="best-selling">Best Selling</option>
                            <option value="alphabetically-a-z">Alphabetically, A-Z</option>
                            <option value="alphabetically-z-a">Alphabetically, Z-A</option>
                            <option value="price-low-to-high">Price, low to high</option>
                            <option value="price-high-to-low">Price, high to low</option>
                            <option value="date-old-to-new">Date, old to new</option>
                            <option value="date-new-to-old">Date, new to old</option>
                        </select>
                    </label>
                    <p className="uppercase text-sm font-stratumReg">
                        <strong>12 Products</strong>
                    </p>
                </div>


                {hasActiveFilters && (
                    <div className="flex flex-wrap gap-2 absolute bottom-0 left-0 w-full">
                        {selectedColors.map((color) => (
                            <div key={color} className="flex items-center gap-1 opacity-75 text-sm border border-gray-300 px-3 py-1 rounded-full">
                                Color: {color}
                                <button onClick={() => removeSingle("color", color)} className="ml-1 text-gray-600 hover:text-black">
                                    ×
                                </button>
                            </div>
                        ))}

                        {selectedSizes.map((size) => (
                            <div key={size} className="flex items-center gap-1 opacity-75 text-sm border border-gray-300 px-3 py-1 rounded-full">
                                Size: {size}
                                <button onClick={() => removeSingle("size", size)} className="ml-1 text-gray-600 hover:text-black">
                                    ×
                                </button>
                            </div>
                        ))}

                        {selectedAvailability.map((opt) => (
                            <div key={opt} className="flex items-center gap-1 opacity-75 text-sm border border-gray-300 px-3 py-1 rounded-full">
                                {opt}
                                <button onClick={() => removeSingle("availability", opt)} className="ml-1 text-gray-600 hover:text-black">
                                    ×
                                </button>
                            </div>
                        ))}

                        {priceRange.from !== "" && priceRange.to !== "" && (
                            <div className="flex items-center gap-1 opacity-75 text-sm border border-gray-300 px-3 py-1 rounded-full ">
                                Price: ${priceRange.from} - ${priceRange.to}
                                <button onClick={() => removeSingle("price")} className="ml-1 text-gray-600 hover:text-black">
                                    ×
                                </button>
                            </div>
                        )}

                        <button onClick={clearAllFilters} className="underline text-sm ml-4">
                            Remove all
                        </button>
                    </div>
                )}
            </div>
        </>
    );
};

export default ProductFilters;
