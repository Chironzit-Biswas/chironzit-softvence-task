import left_robot from '../imgaes/left_robot.png'
import right_robot from '../imgaes/right_robot.png'
import {CoursesCard} from "./CoursesCard.jsx";


export const Courses = () => {

    const courses =[

        {
            "id": 1,
            "img": left_robot,
            "tags": ["4Weeks","Beginner"],
            "title": "Web Design Fundamentals",
            "description": "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites."

        },
        {
            "id": 2,
            "img": right_robot,
            "tags": ["4Weeks","Beginner"],
            "title": "Web Design Fundamentals",
            "description": "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites."

        }
    ]

    return (

        <div className="w-[1920px] bg-[#FAFAFA] py-[30px]" id={'consulting'}>
            <div className="md:max-w-[1440px] md:mx-auto px-[10px] ">
                <div>
                    <h1 className={'text-[48px] font-semibold'}>Our Courses</h1>
                    <p className={'text-[18px] font-normal leading-[150%] w-[1010px] mb-[48px]'}>Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.</p>
                </div>
                <div className={'md:grid md:grid-cols-2  grid-cols-1 gap-[48px]'}>
                    {
                        courses.map(coursesCard => <CoursesCard coursesCard={coursesCard}></CoursesCard>)
                    }
                </div>
            </div>
        </div>
    )
}