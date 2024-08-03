import Image from "next/image";

import img from '../Images/profile.jpg'

export default function Intro() {

    return (
        <div className="align_head mt-8 md:mx-36 md:m-40 md:flex ">
            <div className="md:max-w-xl">
                <h1
                    className="text-center md:text-4xl md:font-bold header_line_height md:tracking-wider"
                >Hi, I am Ganiyu Bolaji<br />Software Engineer(MERN Stack)</h1>
                <p className="text-base mt-3.5">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                    Velit officia consequat duis enim velit mollit. 
                    Exercitation veniam consequat sunt nostrud amet.
                </p>
                <button
                    className="bg-red-400 text-white px-3 py-2 rounded mt-8"
                >Download Resume</button>
            </div>
            <Image 
                className="w-44 h-44 mb-8 md:w-64 md:h-64 rounder_border_50 margin_space_around"
                src={img} alt="No image found"
            />
        </div>
    )
}
