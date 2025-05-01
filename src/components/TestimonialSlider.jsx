import { useState } from 'react';
import Footer from "./Footer.jsx";

const testimonials = [
    {
        name: 'Michael Kaizer',
        role: 'CEO of Basecamp Corp',
        text: `“ They thoroughly analyze our industry and target audience, allowing them to develop customized campaigns that effectively reach and engage our customers. Their creative ideas and cutting-edge techniques have helped us stay ahead of the competition.”`,
    },
    {
        name: 'Michael Kaizer',
        role: 'CEO of Basecamp Corp',
        text: `“ They thoroughly analyze our industry and target audience, allowing them to develop customized campaigns that effectively reach and engage our customers. Their creative ideas and cutting-edge techniques have helped us stay ahead of the competition.”`,
    },
    {
        name: 'Michael Kaizer',
        role: 'CEO of Basecamp Corp',
        text: `“ They thoroughly analyze our industry and target audience, allowing them to develop customized campaigns that effectively reach and engage our customers. Their creative ideas and cutting-edge techniques have helped us stay ahead of the competition.”`,
    },
    // Add more if needed
];

export default function TestimonialSlider() {
    const [index, setIndex] = useState(0);

    const next = () => setIndex((index + 1) % testimonials.length);
    const prev = () => setIndex((index - 1 + testimonials.length) % testimonials.length);

    return (
        <div className="w-[1920px] mx-auto px-[80px] flex flex-col justify-center items-center py-[115px] ">
            <div className={'w-[1280px]'}>
                <p className="text-[36px]  font-semibold italic text-gray-800 mb-6">
                    “{testimonials[index].text}”
                </p>
                <div className="text-left flex items-center gap-3 justify-center mb-4">
                    <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                    <div>
                        <p className="font-semibold text-gray-800">{testimonials[index].name}</p>
                        <p className="text-sm text-gray-500">{testimonials[index].role}</p>
                    </div>
                </div>
                <div className="flex items-center justify-center space-x-4 mt-4">
                    <button
                        onClick={prev}
                        className="p-2 border rounded-full hover:bg-gray-200 transition"
                    >
                        ←
                    </button>
                    <span
                        className="text-sm text-gray-500">{String(index + 1).padStart(2, '0')}/0{testimonials.length}</span>
                    <button
                        onClick={next}
                        className="p-2 border rounded-full hover:bg-gray-200 transition"
                    >
                        →
                    </button>
                </div>
            </div>
            <Footer/>
        </div>
    );
}
