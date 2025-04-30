import robot from '../imgaes/small-robot.png'
import leftIcon from '../imgaes/backup_table.png'
import midIcon from '../imgaes/atr.png'
import bigrobot from '../imgaes/image.png'
export const Hero = () => {
    return (
        <div className="w-[1920px] bg-[#FAFAFA] py-[30px]">
            <div className="max-w-[1440px] mx-auto px-4 py-4 flex items-center justify-between">

                {/*right side*/}
                <div>
                    <h1 className={'text-[80px] font-medium w-[516px] '}>Your AI-Powered Sales Coach</h1>
                    <div className={'flex justify-center items-center mt-[26px]'}>
                        <img src={robot} alt="robot"/>
                        <p className={'w-[346px] ml-[68px] text-[#05131DB2] text-[20px] font-medium leading-[168%]'}>Get
                            real-time coaching, script suggestions, and deal-closing strategies powered by advanced
                            AI technology.</p>
                    </div>
                    <div className={'flex gap-[55px]'}>
                        <div className={'flex mt-[92px]'}>
                            <img className={'bg-[#FFFFFF] p-[20px] rounded-xl shadow'} src={leftIcon} alt=""/>
                            <div className={'pl-[34px]'}>
                                <h1 className={'text-[40px] font-bold leading-[110%] py-[5px]'}>2000+</h1>
                                <p className={'text-[20px] font-medium leading-[163%] opacity-[70%] '}>Your protection</p>
                            </div>
                        </div>
                        <div className={'flex mt-[92px]'}>
                            <img className={'bg-[#FFFFFF] p-[20px] rounded-xl shadow'} src={midIcon} alt=""/>
                            <div className={'pl-[34px]'}>
                                <h1 className={'text-[40px] font-bold leading-[110%] py-[5px]'}>2000+</h1>
                                <p className={'text-[20px] font-medium leading-[163%] opacity-[70%] '}>Your protection</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/*left side*/}
                <div className={'relative'}>
                    <img src={bigrobot} alt=""/>
                    <div className={'bg-white h-[367px] w-[459px] absolute  top-[350px] left-[-150px] rounded-[27px] shadow'}>
                         <div className={'flex justify-between px-[24px]'}>
                              <h1 className={'text-[50px] font-medium mt-[50px]'}>721+</h1>
                              <h1 className={'text-[50px] font-medium mt-[50px]'}>1000+</h1>
                         </div>
                        <div className={'px-[24px]'}>
                            <h1 className={'font-medium text-[28px] mt-[23px]'}>Growth is our priority.</h1>
                            <p className={'mt-[39px] text-[17px]'}>As a full-service business agency, we specialize in helping companies of all sizes optimize their operations</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}