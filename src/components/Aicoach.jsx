import circle from '../imgaes/circle.png'
export const Aicoach = () => {


    return (
        <div className="w-[1920px] py-[30px] bg-blue-700 ">
             <div className="max-w-[1440px] mx-auto flex gap-10">
                 <div>
                     <div className={''}>
                         <h1 className={'text-yellow-500 text-[24px] font-normal'}>Live Ai Coach</h1>
                         <h1 className={'text-[60px] text-white font-normal leading-[120%] mb-[60px] block'}>Take a Suggestion Coaching </h1>
                     </div>
                     {/*Box*/}
                     <div className={'bg-[#F2F3F3] flex flex-col justify-between  h-[577px] w-[870px] rounded-[20px]'}>

                         <div className={'bg-white rounded-t-[12px] w-full '}>
                             <h1 className={'pt-[16px] pb-[24px] ml-[32px] text-[18px] leading-[120%] font-bold'}>AI
                                 Sales Coach</h1>
                         </div>

                         <div className={'px-[28px]'}>
                             <div className={'flex gap-4 mt-[-180px]'}>
                                     <img className={'h-[40px] w-[40px]'} src={circle} alt="circle"/>
                                 <p className={'py-[8px] px-[24px] bg-white w-[630px]'}>Hello! I'm your AI sales coach. How can I help you improve your sales performance today?</p>
                             </div>
                         </div>

                         <div>
                             <div className={'flex w-full mx-[28px] gap-[8px]'}>
                                 <p className={'bg-[#00286814] w-[200px] rounded-[36px] py-[12px] text-center text-blue-500 text-[14px]'}>How
                                     do I handle objections?</p>
                                 <p className={'bg-[#00286814] w-[200px] rounded-[36px] py-[12px] text-center text-blue-500 text-[14px]'}>How
                                     do I handle objections?</p>
                                 <p className={'bg-[#00286814] w-[200px] rounded-[36px] py-[12px] text-center text-blue-500 text-[14px]'}>How
                                     do I handle objections?</p>
                                 <p className={'bg-[#00286814] w-[200px] rounded-[36px] py-[12px] text-center text-blue-500 text-[14px]'}>How
                                     do I handle objections?</p>
                             </div>
                             <div className={'flex w-full px-[28px] py-[16px] gap-[12px]'}>
                                 <input  className={'rounded-xl border-[#E5E7EB] border-[1px] px-[24px] py-[17px] w-[800px] h-[48px]'} placeholder={'Ask anything you need'} type="text" name="" id=""/>
                                 <button className={'bg-[#002868] w-[100px] h-[48px] rounded-[8px] text-white'}>Send</button>
                             </div>
                         </div>

                     </div>
                 </div>


                 {/* Right: Analysis & Actions */}
                 <div className="w-full lg:w-1/3 space-y-4 mt-[200px]">
                     {/* Real-time Analysis */}
                     <div className="bg-white text-black rounded-xl p-4 shadow-lg">
                         <h3 className="text-lg font-semibold">Real-time Analysis</h3>
                         <div className="mt-2">
                             <p className="text-green-600 font-medium">Confidence Level</p>
                             <div className="w-full bg-gray-200 rounded-full h-2.5">
                                 <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '60%' }}></div>
                             </div>
                             <p className="text-sm mt-2">85% improvement in objection handling</p>
                         </div>
                     </div>

                     {/* Quick Actions */}
                     <div className="bg-white text-black rounded-xl p-4 shadow-lg">
                         <h3 className="text-lg font-semibold">Quick Actions</h3>
                         <div className="mt-2 grid grid-cols-2 gap-2">
                             <button className="bg-blue-600 text-white rounded-lg py-2">Generate Script</button>
                             <button className="bg-blue-600 text-white rounded-lg py-2">Practice Pitch</button>
                         </div>
                     </div>
                 </div>
             </div>
        </div>
    )
}