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
        <div className={' max-w-[1920px] '} id={'about'}>
            <div className="w-[1440px] md:mx-auto mt-10 py-10">
                <p className={'text-[24px] mx-[10px] text-[#001C4A] font-normal  w-[280px]'}>Frequently asked questions</p>
                <div className={'md:flex flex-col justify-center items-center'}>
                    <h2 className="md:text-[60px] mt-5 mx-[10px] text-left text-[30px] w-[400px] md:w-[800px] lg:w-[1000px] md:text-center md:mx-[180px] leading-[120%] font-bold mb-[80px] ">
                        Constant collaboration is how we roll. Let's see if we are a good fit.
                    </h2>
                </div>
                <div className="">
                    {faqs.map((faq) => (
                        <div key={faq.id} className="border-b border-[#CCCCCC] pb-4">
                            <button
                                onClick={() => toggle(faq.id)}
                                className="md:w-full text-left flex justify-between items-center">

                                <div>
                                 <span className="text-[#8B7D4C] md:px-5 px-[10px] text-[25px] md:text-[32px] text-sm font-medium ">
                                          {String(faq.id).padStart(2, "0")}
                                 </span>
                                    <span className=" md:text-[40px] text-[20px] font-medium text-gray-800">
                                         {faq.question}
                                 </span>

                                </div>
                                <span className="md:text-[40px] text-[20px] text-gray-600">
                {openId === faq.id ? "−" : "+"}
              </span>

                            </button>
                            {openId === faq.id && (
                                <p className="mt-3 mx-[10px] md:mx-[80px] text-[16px] w-1/2 leading-[140%] text-gray-500">{faq.answer}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <TestimonialSlider/>
        </div>
    );
}
