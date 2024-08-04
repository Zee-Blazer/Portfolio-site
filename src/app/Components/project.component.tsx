import Image from "next/image";

import img from "../Images/project.png";

export default function Project() {

    return (
        <div className="mx-5 mt-4">
            <h4>Featured works</h4>

            <div>
                <Image 
                    className=""
                    src={img} alt="No image" width={399} height={399} 
                />
                <div>
                    <h1>Designing Dashboard</h1>
                    <div>
                        <p>2020</p>
                        <p>Dasboard</p>
                    </div>
                    <p>
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                        Velit officia consequat duis enim velit mollit. 
                        Exercitation veniam consequat sunt nostrud amet.
                    </p>
                </div>
            </div>
        </div>
    )
}
