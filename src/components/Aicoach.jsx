import circle from '../imgaes/circle.png'
import graph from '../imgaes/graph.png'

import { MdOutlineRestartAlt } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { IoClipboardOutline } from "react-icons/io5";
import { IoVolumeHighOutline } from "react-icons/io5";

export const Aicoach = () => {


    return (
        <div className="md:w-[1920px] px-[10px] py-[30px] bg-blue-700 ">
             <div className="md:max-w-[1440px] md:mx-auto md:flex ">
                 <div>
                     <div className={''}>
                         <h1 className={'text-yellow-500 text-[24px] font-normal'}>Live Ai Coach</h1>
                         <h1 className={'md:text-[60px] text-[35px] text-white font-normal leading-[120%] mb-[60px] block'}>Take a Suggestion Coaching </h1>
                     </div>
                     {/*Box*/}
                     <div className={'bg-[#F2F3F3] flex flex-col justify-between w-[400px]  md:h-[577px] md:w-[870px]  rounded-[20px]'}>

                         <div className={'bg-white rounded-t-[12px] md:w-full '}>
                             <h1 className={'pt-[16px] pb-[24px] ml-[32px] text-[18px] leading-[120%] font-bold'}>AI
                                 Sales Coach</h1>
                         </div>

                         <div className={'md:px-[28px] px-[10px]'}>
                             <div className={'md:flex  gap-4 md:mt-[-180px]'}>
                                     <img className={'h-[40px] w-[40px]'} src={circle} alt="circle"/>
                                 <p className={'py-[8px] md:px-[24px] bg-white  md:w-[630px]'}>Hello! I'm your AI sales coach. How can I help you improve your sales performance today?</p>
                             </div>
                         </div>

                         <div>
                             <div className={'flex w-full md:mx-[28px] px-[10px] md:gap-[8px]'}>
                                 <p className={'bg-[#00286814] w-[100px] md:w-[200px] rounded-[36px] md:py-[12px] text-center text-blue-500 md:text-[14px] text-[12px]'}>How
                                     do I handle objections?</p>
                                 <p className={'bg-[#00286814] w-[100px] md:w-[200px] rounded-[36px] md:py-[12px] text-center text-blue-500 md:text-[14px] text-[12px]'}>How
                                     do I handle objections?</p>
                                 <p className={'bg-[#00286814] w-[100px] md:w-[200px] rounded-[36px] md:py-[12px] text-center text-blue-500 md:text-[14px] text-[12px]'}>How
                                     do I handle objections?</p>
                                 <p className={'bg-[#00286814] w-[100px] md:w-[200px] rounded-[36px] md:py-[12px] text-center text-blue-500 md:text-[14px] text-[12px]'}>How
                                     do I handle objections?</p>
                             </div>
                             <div className={'md:flex w-full px-[28px] py-[16px] gap-[12px]'}>
                                 <input  className={'rounded-xl border-[#E5E7EB] border-[1px] px-[24px] py-[17px] md:w-[800px] h-[48px]'} placeholder={'Ask anything you need'} type="text" name="" id=""/>
                                 <button className={'bg-[#002868] w-[100px] h-[48px] rounded-[8px] text-white'}>Send</button>
                             </div>
                         </div>
                     </div>
                 </div>

                  <div className={'bg-white md:h-[60%] mx-auto gap-10 md:w-[40px] p-[8px] rounded-xl md:flex-col flex md:mt-[280px] m-5'}>
                      <MdOutlineRestartAlt className={'md:mt-[30px] hover:bg-blue-700 rounded-full text-2xl'}/>
                      <AiOutlineLike className={'md:mt-[30px] hover:bg-blue-700 rounded-full text-2xl'}/>
                      <AiOutlineDislike className={'md:mt-[30px] hover:bg-blue-700 rounded-full text-2xl'}/>
                      <IoClipboardOutline className={'md:mt-[30px] hover:bg-blue-700 rounded-full text-2xl'}/>
                      <IoVolumeHighOutline className={'md:mt-[30px] hover:bg-blue-700 rounded-full text-2xl'}/>
                  </div>


                 {/* Right: Analysis & Actions */}
                 <div className="w-full lg:w-1/3 space-y-4 mt-[200px]">
                     {/* Real-time Analysis */}
                     <div className="bg-[#E7E7E7] text-black rounded-xl p-4 shadow-lg">
                         <h3 className="text-lg font-semibold">Real-time Analysis</h3>
                         <div className="mt-2 bg-white rounded-xl p-5">
                             <p className="text-green-600 font-medium">Confidence Level</p>
                             <div className="w-full bg-gray-200 rounded-full h-2.5">
                                 <div className="bg-green-500 h-2.5 rounded-full" style={{width: '60%'}}></div>
                             </div>
                             <p className="text-sm mt-2"></p>
                         </div>

                         <div className="mt-2 bg-white p-5 rounded-xl">
                             <div className={'flex'}>
                                 <img src={graph} alt=""/>
                                 <p className="text-[#171D25] font-medium">Confidence Level</p>
                             </div>

                             <p className="text-sm mt-2">85% improvement in objection handling</p>
                         </div>

                     </div>

                     {/* Quick Actions */}
                     <div className="bg-white text-black rounded-xl p-4 shadow-lg">
                         <h3 className="text-lg font-semibold">Quick Actions</h3>
                         <div className="mt-2 grid grid-cols-2 gap-2">
                             <div className={'flex'}>
                                 <img src={graph} alt=""/>
                                 <p className="text-[#171D25] font-medium">Confidence Level</p>
                             </div>
                             <div className={'flex'}>
                                 <img src={graph} alt=""/>
                                 <p className="text-[#171D25] font-medium">Confidence Level</p>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
        </div>
    )
}