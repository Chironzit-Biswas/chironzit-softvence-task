import { useState } from "react";
import TestimonialSlider from "./TestimonialSlider.jsx";

const faqs = [
    {
        id: 1,
        question: "Why should I choose Humestic?",
        answer:
            "Bottleneck mice my capacity is full, nor incentivization we need to start advertising on social media, or helicopter view, for what the. Let’s put a pin in that we need to build it so that it scales, are there any leftovers in the kitchen?, if you’re not hurting you’re not winning loop back.",
    },
    {
        id: 2,
        question: "I like your works, how do we start a project?",
        answer:
            "We begin with a consultation to understand your needs. Once we align on goals and expectations, we move into planning and development.",
    },
    {
        id: 3,
        question: "What info is required to get a quotation?",
        answer:
            "Please share your project scope, timeline, budget range, and any references you have in mind. We'll tailor a quote based on your needs.",
    },
];

export default function FAQ() {
    const [openId, setOpenId] = useState(null);

    const toggle = (id) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <div className={' max-w-[1920px] '}>
            <div className="w-[1440px] mx-auto mt-10 px-4 py-10">
                <p className={'text-[24px] text-[#001C4A] font-normal w-[280px]'}>Frequently asked questions</p>
                <div className={'flex flex-col justify-center items-center'}>
                    <h2 className="text-[60px] text-center mx-[180px] leading-[120%] font-bold mb-[80px] ">
                        Constant collaboration is how we roll. Let's see if we are a good fit.
                    </h2>
                </div>
                <div className="">
                    {faqs.map((faq) => (
                        <div key={faq.id} className="border-b border-[#CCCCCC] pb-4">
                            <button
                                onClick={() => toggle(faq.id)}
                                className="w-full text-left flex justify-between items-center">

                                <div>
                                 <span className="text-[#8B7D4C] px-5  text-[32px] text-sm font-medium ">
                                          {String(faq.id).padStart(2, "0")}
                                 </span>
                                    <span className="text-base text-[40px] font-medium text-gray-800">
                                         {faq.question}
                                 </span>

                                </div>
                                <span className="text-[40px] text-gray-600">
                {openId === faq.id ? "−" : "+"}
              </span>

                            </button>
                            {openId === faq.id && (
                                <p className="mt-3 mx-[80px] text-[16px] leading-[140%] text-gray-500">{faq.answer}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <TestimonialSlider/>
        </div>
    );
}
