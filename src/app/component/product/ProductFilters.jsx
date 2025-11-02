"use client";

import { useState, useRef, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import { RiFilter3Fill } from "react-icons/ri";



const ProductFilters = ({ onFilterChange }) => {
    const colors = ["Black", "Blue", "Gray", "Green", "Red", "White"];
    const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
    const availabilityOptions = ["In Stock", "Out of Stock"];

    // Desktop dropdown
    const [openDropdown, setOpenDropdown] = useState(null);

    // Selected filters
    const [selectedColors, setSelectedColors] = useState([]);
    const [selectedSizes, setSelectedSizes] = useState([]);
    const [selectedAvailability, setSelectedAvailability] = useState([]);
    const [priceRange, setPriceRange] = useState({ from: "", to: "" });
    const [sortBy, setSortBy] = useState("featured");

    // Mobile drawer states
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [subDrawerOpen, setSubDrawerOpen] = useState(null);

    // Refs
    const dropdownRef = useRef(null);
    const drawerRef = useRef(null);
    const subDrawerRef = useRef(null);

    // ------------------- Disable scroll when drawer open -------------------
    useEffect(() => {
        document.body.style.overflow = drawerOpen || subDrawerOpen ? "hidden" : "auto";
    }, [drawerOpen, subDrawerOpen]);

    // ------------------- Click outside handler -------------------
    useEffect(() => {
        const handleClickOutside = (e) => {
            // Ignore clicks inside drawer 2
            if (subDrawerRef.current && subDrawerRef.current.contains(e.target)) return;
            // Ignore clicks on sub drawer buttons
            if (e.target.closest(".sub-filter-btn")) return;
            // Ignore clicks inside drawer 1
            if (drawerRef.current && drawerRef.current.contains(e.target)) return;
            // Ignore clicks on main drawer button
            if (e.target.closest(".filter-btn")) return;
            // Ignore clicks inside desktop dropdown
            if (dropdownRef.current && dropdownRef.current.contains(e.target)) return;

            // Click outside => close everything
            setDrawerOpen(false);
            setSubDrawerOpen(null);
            setOpenDropdown(null);
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // ------------------- Update query params -------------------
    useEffect(() => {
        const params = new URLSearchParams();

        if (selectedColors.length) params.append("color", selectedColors.join(","));
        if (selectedSizes.length) params.append("size", selectedSizes.join(","));
        if (selectedAvailability.length) params.append("availability", selectedAvailability.join(","));
        if (priceRange.from) params.append("priceFrom", priceRange.from);
        if (priceRange.to) params.append("priceTo", priceRange.to);
        if (sortBy) params.append("sort", sortBy);

        const queryString = params.toString();
        if (onFilterChange) onFilterChange(queryString);
    }, [selectedColors, selectedSizes, selectedAvailability, priceRange, sortBy, onFilterChange]);

    // ------------------- Helper functions -------------------
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
        if (type === "availability") setSelectedAvailability(selectedAvailability.filter((a) => a !== value));
        if (type === "price") setPriceRange({ from: "", to: "" });
    };

    const hasActiveFilters =
        selectedColors.length > 0 ||
        selectedSizes.length > 0 ||
        selectedAvailability.length > 0 ||
        priceRange.from ||
        priceRange.to;

    // ------------------- Desktop dropdown render -------------------
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
                    <label key={item} className="flex items-center gap-2 py-2 cursor-pointer hover:underline text-sm">
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

    // ------------------- Mobile drawer render -------------------
    const renderMobileDrawer = () => (
        <>
            <div
                className={`fixed inset-0 bg-black/40 z-40 transition-opacity ${drawerOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
            ></div>

            <div
                ref={drawerRef}
                className={`fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white z-50 transform transition-transform duration-300 ${drawerOpen ? "translate-x-0" : "translate-x-full"
                    } flex flex-col`}
            >
                <div className="p-4 flex justify-between items-center border-b border-gray-300">
                    <h3 className="font-semibold text-lg">Filters</h3>
                    <button onClick={() => setDrawerOpen(false)}>×</button>
                </div>

                <div className="flex-1 overflow-auto p-4 space-y-4">

                    <button
                        className="w-full text-left py-2 border-b border-gray-200 sub-filter-btn"
                        onClick={() => setSubDrawerOpen("availability")}
                    >
                        Availability
                    </button>
                    <button
                        className="w-full text-left py-2 border-b border-gray-200 sub-filter-btn"
                        onClick={() => setSubDrawerOpen("price")}
                    >
                        Price
                    </button>
                    <button
                        className="w-full text-left py-2 border-b border-gray-200 sub-filter-btn"
                        onClick={() => setSubDrawerOpen("color")}
                    >
                        Color
                    </button>
                    <button
                        className="w-full text-left py-2 border-b border-gray-200 sub-filter-btn"
                        onClick={() => setSubDrawerOpen("size")}
                    >
                        Size
                    </button>

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

                    <button
                        onClick={clearAllFilters}
                        className="mt-4 w-full py-2 bg-gray-200 rounded-md"
                    >
                        Remove All
                    </button>
                </div>
            </div>

            {subDrawerOpen && (
                <div
                    ref={subDrawerRef}
                    className={`fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white z-60 transform transition-transform duration-300 ${subDrawerOpen ? "translate-x-0" : "translate-x-full"
                        } flex flex-col`}
                >
                    <div className="p-4 flex justify-between items-center border-b border-gray-300">
                        <h3 className="font-semibold text-lg">{subDrawerOpen}</h3>
                        <button onClick={() => setSubDrawerOpen(null)}>×</button>
                    </div>

                    <div className="flex-1 overflow-auto p-4 space-y-4">
                        {subDrawerOpen === "availability" &&
                            availabilityOptions.map((opt) => (
                                <label key={opt} className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        checked={selectedAvailability.includes(opt)}
                                        onChange={() =>
                                            toggleSelection(opt, setSelectedAvailability, selectedAvailability)
                                        }
                                    />
                                    {opt}
                                </label>
                            ))}

                        {subDrawerOpen === "price" && (
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <input
                                        type="number"
                                        value={priceRange.from}
                                        onChange={(e) => setPriceRange({ ...priceRange, from: e.target.value })}
                                        placeholder="From"
                                        className="border p-2 w-full"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="number"
                                        value={priceRange.to}
                                        onChange={(e) => setPriceRange({ ...priceRange, to: e.target.value })}
                                        placeholder="To"
                                        className="border p-2 w-full"
                                    />
                                </div>
                            </div>
                        )}

                        {subDrawerOpen === "color" &&
                            colors.map((c) => (
                                <label key={c} className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        checked={selectedColors.includes(c)}
                                        onChange={() => toggleSelection(c, setSelectedColors, selectedColors)}
                                    />
                                    {c}
                                </label>
                            ))}

                        {subDrawerOpen === "size" &&
                            sizes.map((s) => (
                                <label key={s} className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        checked={selectedSizes.includes(s)}
                                        onChange={() => toggleSelection(s, setSelectedSizes, selectedSizes)}
                                    />
                                    {s}
                                </label>
                            ))}
                    </div>

                    <div className="p-4 border-t border-gray-300">
                        <button
                            onClick={() => {
                                setSubDrawerOpen(null);
                                setDrawerOpen(false);
                            }}
                            className="w-full py-2 bg-blue-600 text-white rounded-md"
                        >
                            Apply
                        </button>
                    </div>
                </div>
            )}
        </>
    );

    return (
        <div className="relative">
            <div className="hidden lg:flex justify-between items-start relative h-18">
                <div className="flex gap-5 " ref={dropdownRef}>
                    <span className="opacity-85 text-sm font-semibold">FILTER:</span>

                    <div className="flex items-center gap-5 flex-wrap mt-0.5">
                        <button
                            onClick={() =>
                                setOpenDropdown(openDropdown === "availability" ? null : "availability")
                            }
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
                            <div
                                key={color}
                                className="flex items-center gap-1 opacity-75 text-sm border border-gray-300 px-3 py-1 rounded-full"
                            >
                                Color: {color}
                                <button
                                    onClick={() => removeSingle("color", color)}
                                    className="ml-1 text-gray-600 hover:text-black"
                                >
                                    ×
                                </button>
                            </div>
                        ))}

                        {selectedSizes.map((size) => (
                            <div
                                key={size}
                                className="flex items-center gap-1 opacity-75 text-sm border border-gray-300 px-3 py-1 rounded-full"
                            >
                                Size: {size}
                                <button
                                    onClick={() => removeSingle("size", size)}
                                    className="ml-1 text-gray-600 hover:text-black"
                                >
                                    ×
                                </button>
                            </div>
                        ))}

                        {selectedAvailability.map((opt) => (
                            <div
                                key={opt}
                                className="flex items-center gap-1 opacity-75 text-sm border border-gray-300 px-3 py-1 rounded-full"
                            >
                                {opt}
                                <button
                                    onClick={() => removeSingle("availability", opt)}
                                    className="ml-1 text-gray-600 hover:text-black"
                                >
                                    ×
                                </button>
                            </div>
                        ))}

                        {priceRange.from !== "" && priceRange.to !== "" && (
                            <div className="flex items-center gap-1 opacity-75 text-sm border border-gray-300 px-3 py-1 rounded-full">
                                Price: ${priceRange.from} - ${priceRange.to}
                                <button
                                    onClick={() => removeSingle("price")}
                                    className="ml-1 text-gray-600 hover:text-black"
                                >
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

            <div className="lg:hidden  h-18">
                <div className="flex justify-between items-center">
                    <button onClick={() => setDrawerOpen(true)} className="flex gap-2 items-center filter-btn">
                        <RiFilter3Fill />
                        Filters
                    </button>
                    <p>12 Products</p>
                </div>
                {hasActiveFilters && (
                    <div className="flex flex-wrap gap-2 absolute bottom-0 left-0 w-full">
                        {selectedColors.map((color) => (
                            <div
                                key={color}
                                className="flex items-center gap-1 opacity-75 text-sm border border-gray-300 px-3 py-1 rounded-full"
                            >
                                Color: {color}
                                <button
                                    onClick={() => removeSingle("color", color)}
                                    className="ml-1 text-gray-600 hover:text-black"
                                >
                                    ×
                                </button>
                            </div>
                        ))}

                        {selectedSizes.map((size) => (
                            <div
                                key={size}
                                className="flex items-center gap-1 opacity-75 text-sm border border-gray-300 px-3 py-1 rounded-full"
                            >
                                Size: {size}
                                <button
                                    onClick={() => removeSingle("size", size)}
                                    className="ml-1 text-gray-600 hover:text-black"
                                >
                                    ×
                                </button>
                            </div>
                        ))}

                        {selectedAvailability.map((opt) => (
                            <div
                                key={opt}
                                className="flex items-center gap-1 opacity-75 text-sm border border-gray-300 px-3 py-1 rounded-full"
                            >
                                {opt}
                                <button
                                    onClick={() => removeSingle("availability", opt)}
                                    className="ml-1 text-gray-600 hover:text-black"
                                >
                                    ×
                                </button>
                            </div>
                        ))}

                        {priceRange.from !== "" && priceRange.to !== "" && (
                            <div className="flex items-center gap-1 opacity-75 text-sm border border-gray-300 px-3 py-1 rounded-full">
                                Price: ${priceRange.from} - ${priceRange.to}
                                <button
                                    onClick={() => removeSingle("price")}
                                    className="ml-1 text-gray-600 hover:text-black"
                                >
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

            {renderMobileDrawer()}
        </div>
    );
};

export default ProductFilters;
