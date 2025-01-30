"use client"
import { useState } from "react";
import React from "react";
import { RxCaretDown, RxCaretUp } from "react-icons/rx";

const faqData = [
  {
    question: "What is the typical process for starting a design project?",
    answer:
      "Our process starts with a consultation to discuss your vision, followed by planning, design presentation, and implementation to achieve your ideal space.",
  },
  {
    question: "How long does a typical interior design project take?",
    answer:
      "The duration varies based on the project scope, typically ranging from a few weeks for small projects to several months for larger renovations.",
  },
  {
    question: "Can I incorporate my existing furniture into the new design?",
    answer:
      "Yes! We consider your existing furniture and work it into the new design to ensure a seamless blend of old and new elements.",
  },
  {
    question: "What should I expect during the design consultation?",
    answer:
      "During the consultation, we discuss your needs, preferences, and budget to create a tailored plan that aligns with your vision.",
  },
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="container mx-auto px-6 lg:px-12 py-12 flex flex-col lg:flex-row items-stretch gap-6">

            <div className="lg:w-1/2 flex flex-col justify-center p-8">
                <p className="text-gray-500 text-sm">— Asked Question</p>
                <h2 className="text-3xl font-bold mt-2">
                    Have your any question look{" "}
                    <span className="text-gray-500">here now</span>
                </h2>
                <p className="text-gray-500 mt-4">
                    Nostra turma dedicata consilium arctius operatur ut visionem tuam
                    intelligat et eam ad vitam adducat cum magna cura in singula.
                </p>

                <div className="mt-6 space-y-4">
                    {faqData.map((faq, index) => (
                        <div key={index} className="border-b pb-2">
                            <button
                                className="w-full text-left flex justify-between items-center text-lg font-semibold"
                                onClick={() => toggleFAQ(index)}
                            >
                                {index + 1}. {faq.question}
                                <span className="text-gray-500 text-2xl">
                                    {openIndex === index ? <RxCaretUp /> : <RxCaretDown />}
                                </span>
                            </button>
                            {openIndex === index && (
                                <p className="text-gray-600 mt-2">{faq.answer}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <div className="lg:w-1/2 flex justify-center items-center">
                <div className="w-full rounded-lg overflow-hidden">
                    <img
                        src="https://demo.awaikenthemes.com/inspaire/wp-content/uploads/2024/11/our-skill-img-1.jpg"
                        alt="Interior Design"
                        className="w-full h-auto lg:h-[520px] sm:px-5 lg:px-0 object-contain"
                    />
                </div>
            </div>
        </div>
    );
}

  
