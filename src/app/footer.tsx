
import { FaXTwitter } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";

export default function Footer() {
    
    return (
        <div className="mt-16 p-6">
            <div className="flex text-center justify-center">
                <FaSquareFacebook className="text-2xl mx-2 cursor-pointer hover:text-blue-700" />
                <FaInstagram className="text-2xl mx-2 cursor-pointer hover:text-pink-600" />
                <FaXTwitter className="text-2xl mx-2 cursor-pointer hover:text-black" />
                <BsLinkedin className="text-2xl mx-2 cursor-pointer hover:text-blue-500" />
            </div>
            <p className="text-center mt-3 text-sm">
                Copyright @{new Date().getFullYear()} All rights reserved
            </p>
        </div>
    )
}
