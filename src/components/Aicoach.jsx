export const Aicoach = () => {
    return (
        <div className="w-[1920px] py-[30px] bg-blue-700">
             <div className="max-w-[1440px] mx-auto ">
                 <div>
                     <div>
                         <h1 className={'text-yellow-500 text-[24px] font-normal'}>Live Ai Coach</h1>
                         <h1 className={'text-[60px] text-white font-normal leading-[120%] mb-[60px]'}>Take a Suggestion Coaching </h1>
                     </div>
                     {/*Box*/}
                     <div className={'bg-[#F2F3F3] flex flex-col justify-between mx-[28px] h-[577px] w-[787px] rounded-[20px]'}>

                         <div className={'bg-white rounded-t-[12px] w-full '}>
                             <h1 className={'pt-[16px] pb-[24px] ml-[32px] text-[18px] leading-[120%] font-bold'}>AI
                                 Sales Coach</h1>
                         </div>

                         <div className={'px-[28px]'}>
                               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo nulla omnis perspiciatis quos sunt. Assumenda commodi consequatur cupiditate dolore, est fugiat minima, molestiae nesciunt nulla praesentium, quia quibusdam vitae! Doloribus eius error magni minima molestias officiis quod repudiandae ut. Accusamus dicta eos fuga nulla omnis perferendis provident sed veritatis voluptate?</p>
                         </div>

                         <div>
                             <div className={'flex w-full px-[28px] gap-[12px]'}>
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
                                 <input  className={'rounded-xl px-[24px] py-[17px] w-[600px] h-[48px]'} placeholder={'Ask anything you need'} type="text" name="" id=""/>
                                 <button className={'bg-[#002868] w-[100px] h-[48px] rounded-[8px] text-white'}>Send</button>
                             </div>
                         </div>

                     </div>
                 </div>
             </div>
        </div>
    )
}