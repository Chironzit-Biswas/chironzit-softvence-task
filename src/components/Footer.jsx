import footerlogo from '../imgaes/footerlogo.png'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className=" w-[1920px] bg-gradient-to-b from-[#e5e7eb] to-[#cbd5e1] text-gray-700 py-10 px-6 md:px-20">
            <div className={'mx-auto max-w-[1440px] justify-center'}>
                <div
                    className={' flex flex-col items-center bg-blue-800 max-w-[1440px] mx-auto h-[353px] rounded-[24px] '}>
                    <div className={'mt-[80px]'}>
                        <h1 className={'text-white text-[38px] leading-[130%] '}>Ready to Hire Smarter?</h1>
                        <p className={'text-[#B9BDC7] mt-[12px]'}>Unlock Exclusive Insights Subscribe to Our
                            Newsletter</p>
                    </div>
                    <button className={'bg-[#FCE38A] px-[36px] py-[16px] rounded-[50px] mt-[48px]'}>Join Now</button>
                </div>

                <div className=" max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-6 mt-[112px] gap-8">


                    {/* Logo and Description */}
                    <div className={'md:col-span-3'}>
                        <div className="flex items-center mb-4">
                            <img src={footerlogo} alt=""/>
                        </div>
                        <p className="text-[14px] w-[534px] h-[120px] ">
                            SalesRank.AI offers a comprehensive suite of AI-powered solutions to help you find expert
                            sales
                            professionals who can elevate every aspect of your business. From performance rankings and
                            skill
                            verification to industry benchmarking and real-time analytics, we provide the insights and
                            tools
                            to optimize your sales strategy and drive growth.
                        </p>

                        {/* Social Icons */}
                        <div className="flex space-x-4 mt-4 text-gray-600">
                            <FaFacebookF/>
                            <FaTwitter/>
                            <FaLinkedinIn/>
                            <FaInstagram/>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h3 className="font-semibold mb-2">Navigation</h3>
                        <ul className="space-y-1 text-sm">
                            <li>Service</li>
                            <li>Agency</li>
                            <li>Case Study</li>
                            <li>Resources</li>
                            <li>Contact</li>
                        </ul>
                    </div>

                    {/* Licence */}
                    <div>
                        <h3 className="font-semibold mb-2">Licence</h3>
                        <ul className="space-y-1 text-sm">
                            <li>Privacy Policy</li>
                            <li>Copyright</li>
                            <li>Email Address</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-semibold mb-2">Contact</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-center space-x-2">
                                <FaPhoneAlt className="text-blue-600"/>
                                <span>(408) 555-0120</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <FaEnvelope className="text-blue-600"/>
                                <span>Hey@eccotim.com</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <FaMapMarkerAlt className="text-blue-600"/>
                                <span>2927 Westheimer Rd, Santa Ana, Illinois 85486</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}
