import Image from "next/image";

import img from "../Images/project.png";

export default function ProjectDetails() {

    return (
        <>
            <div className="mt-10 border_btm_color md:flex pd-3 md:mx-36 border-b-2 md:pb-5">
                <Image 
                    className="md:mr-5"
                    src={img} alt="No image" width={399} height={399} 
                />
                <div>
                    <h1 className="text-2xl font-bold my-4 md:mt-0">Designing Dashboard</h1>
                    <div className="flex items-center">
                        <p className="mr-6 date_bg text-white px-3.5 py-1.5 rounded-3xl">2020</p>
                        <p className="text-xl text-gray-500">Dasboard</p>
                    </div>
                    <p className="my-6 text-base">
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                        Velit officia consequat duis enim velit mollit. 
                        Exercitation veniam consequat sunt nostrud amet.
                    </p>
                </div>
            </div>
        </>
    )
}
