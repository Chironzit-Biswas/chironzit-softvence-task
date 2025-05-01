import { useState } from 'react';
import Footer from "./Footer.jsx";
import leftArrow from '../imgaes/Frame 427320691.png'
import rightArrow from '../imgaes/Frame 427320692.png'

const testimonials = [
    {
        id:1,
        name: 'Michael Kaizer',
        role: 'CEO of Basecamp Corp',
        text: `“ They thoroughly analyze our industry and target audience, allowing them to develop customized campaigns that effectively reach and engage our customers. Their creative ideas and cutting-edge techniques have helped us stay ahead of the competition.”`,
    },
    {
        id:2,
        name: 'Michael Kaizer',
        role: 'CEO of Basecamp Corp',
        text: `“ allowing them to develop customized campaigns that effectively reach and engage our customers. Their creative ideas and cutting-edge techniques have helped us stay ahead of the competition.”`,
    },
    {
        id:3,
        name: 'Michael Kaizer',
        role: 'CEO of Basecamp Corp',
        text: `“ our industry and target audience, allowing them to develop customized campaigns that effectively reach and engage our customers. Their creative ideas and cutting-edge techniques have helped us stay ahead of the competition.”`,
    },
    // Add more if needed
];

export default function TestimonialSlider() {
    const [index, setIndex] = useState(0);

    const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
    const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

    return (
        <div className="md:w-[1920px] md:mx-auto md:px-[80px] flex flex-col justify-center items-center md:py-[115px] w-[450px] px-[10px] ">
            <div className={'md:w-[1280px]'}>
                <p className="md:text-[36px] text-[22px] font-semibold italic text-gray-800 mb-6">
                    “{testimonials[index].text}”
                </p>
                <div className={' flex justify-between md:px-[80px] px-[10px] '}>
                    <div className="text-left flex items-center gap-3 justify-center mb-4">
                        <div className="w-[70px] h-[70px] bg-gray-300 rounded-full"></div>
                        <div className={'mt-[70px]'}>
                            <p className="font-semibold text-[20px] text-gray-800">{testimonials[index].name}</p>
                            <p className="text-sm text-gray-500">{testimonials[index].role}</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center  md:space-x-4 mt-4">
                        <button
                            onClick={prev}
                            className=" border rounded-full hover:bg-gray-200 transition"
                        >
                            <img src={leftArrow} alt=""/>
                        </button>
                        <span
                            className="text-sm text-gray-500">{String(index + 1).padStart(2, '0')}/0{testimonials.length}</span>
                        <button
                            onClick={next}
                            className="p-2  rounded-full hover:bg-gray-200 transition"
                        >
                            <img src={rightArrow} alt=""/>
                        </button>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}
