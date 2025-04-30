export const CoursesCard = ({coursesCard}) => {
    const{img,tags,title,description}=coursesCard
    return (
        <div>
            <div className={'bg-[#F1F1F3] p-[50px] '}>
                <img src={img} alt=""/>

                <div className={'flex justify-between items-center mt-[30px]'}>
                    <div className={'flex gap-4  '}>
                        {tags.map(tag => <div className={'flex flex-row'}><h1
                            className={'bg-white px-[16px] py-[10px]'}>{tag}</h1></div>)}
                    </div>
                    <p>By John Smith</p>
                </div>

                <h1 className={'pt-[30px] text-[24px] font-normal leading-[150%]'}>{title}</h1>
                <p className={'pt-[14px] text-[18px] text-[#4C4C4D] leading-[150%]'}>{description}</p>
            </div>
        </div>
    )
}