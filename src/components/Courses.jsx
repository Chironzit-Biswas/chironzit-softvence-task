import {useEffect, useState} from "react";
import {CoursesCard} from "./CoursesCard.jsx";

export const Courses = () => {

    const [courses, setCourses] = useState([])

    useEffect(() => {
        fetch('coursedetails.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, []);

    return (

        <div className="w-[1920px] bg-[#FAFAFA] py-[30px]">
            <div className="max-w-[1440px] mx-auto ">
                <div>
                    <h1>Our Courses</h1>
                    <p>Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.</p>
                </div>
                <div className={'grid grid-cols-2 gap-[48px]'}>
                    {
                        courses.map(coursesCard => <CoursesCard coursesCard={coursesCard}></CoursesCard>)
                    }
                </div>
            </div>
        </div>
    )
}