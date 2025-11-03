"use client";
import { useState, useRef, useEffect } from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { FaChevronDown } from "react-icons/fa6";

const faqs = [
    {
        question: "Does this come in right-handed and left-handed configurations?",
        answer:
            "No, the VNSH holster is a true ambidextrous holster.",
    },
    {
        question: "Will This Work With My Laser Sights or a Mounted Light?",
        answer:
            "Depending on the light or sight you are using it may fit. Smaller lights and lasers do fit with most compact and some full-size guns. You can purchase the holster and if it doesn't work with your set up return for a full refund.",
    },
    {
        question: "Will this work for my revolver?",
        answer:
            "The holster will fit most compact revolvers but we don't have an exhaustive list of which revolvers do and don't fit.",
    },
    {
        question: "Do I Need a Belt? How Does It Connect Around The Waist?",
        answer:
            "NO! The holster has a built in Waist Band. It secures around your waist with built-in, high quality molded velcro. You do not need a belt... or anything else for that matter. You could even wear it naked if you wanted too. ;)",
    },
    {
        question: "My Semi-automatic Isn't Listed Above. Will it fit?",
        answer:
            "Yes, it will fit 99% of all semi-automatic firearms.",
    },
    {
        question: "Will My Magazines Fit in the Pouches?",
        answer:
            "Yes, all magazines for all semi-automatics will fit in any or all of the two magazine pouches.",
    },
    {
        question: "Does this holster work with slide-mounted optics (Red dots, etc)?",
        answer:
            "In most cases no, though some smaller, sub-compact weapons may work with a slide-mounted optic. If you want to try the holster out with your optic and it doesn’t work, please remember we offer an any-reason return policy for the first 60-days you own the holster.",
    },
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState(null);
    const contentRefs = useRef([]);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    useEffect(() => {
        contentRefs.current.forEach((ref, index) => {
            if (ref) {
                if (openIndex === index) {
                    ref.style.maxHeight = ref.scrollHeight + "px";
                    ref.style.opacity = "1";
                } else {
                    ref.style.maxHeight = "0px";
                    ref.style.opacity = "0";
                }
            }
        });
    }, [openIndex]);

    return (
        <section className="bg-[#242833] py-10 text-white" id="faq">
            <div className="container">
                <p className="text-center  opacity-85 uppercase">The VNSH Holster</p>
                <h2 className="text-[2.5rem] text-center mb-8 uppercase">
                    Frequently Asked Questions
                </h2>

                <div className=" mx-auto max-w-4xl">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border-b border-gray-600 overflow-hidden py-3"
                        >
                            <button
                                onClick={() => toggle(index)}
                                className="w-full flex justify-between items-center font-stratum text-left"
                            >
                                <span className="flex gap-2 items-center text-lg hover:underline"><AiOutlineQuestionCircle />
                                    {`Q. ${faq.question}`}</span>
                                <span className="w-10 h-10 shrink-0">
                                    <FaChevronDown
                                        className={`opacity-75 text-sm transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                                            }`}
                                    />
                                </span>
                            </button>

                            <div
                                ref={(el) => (contentRefs.current[index] = el)}
                                className=" overflow-hidden transition-all duration-300 ease-in-out"
                                style={{ maxHeight: "0px", opacity: 0 }}
                            >
                                <p className="opacity-75 pt-3">A: {faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
