import robot from '../imgaes/small-robot.png'
import leftIcon from '../imgaes/backup_table.png'
export const Hero = () => {
    return (
        <div className="w-[1920px] bg-[#FAFAFA] py-[30px]">
            <div className="max-w-[1440px] mx-auto px-4 py-4 flex items-center justify-between">

                <div>
                    <h1 className={'text-[80px] font-medium w-[516px] '}>Your AI-Powered Sales Coach</h1>
                    <div className={'flex justify-center items-center mt-[26px]'}>
                        <img src={robot} alt="robot"/>
                        <p className={'w-[346px] ml-[68px] text-[#05131DB2] text-[20px] font-medium leading-[168%]'}>Get
                            real-time coaching, script suggestions, and deal-closing strategies powered by advanced
                            AI technology.</p>
                    </div>
                    <div>
                        <div>

                        </div>
                    </div>
                </div>

                <div>

                </div>

            </div>
        </div>
    )
}