
import BlogContent from "./blog.details.component"

export default function Blog() {

    return (
        <div className="blog_bg py-8 mt-2">
            
            <div className="md:mx-36">

                <div className="md:flex justify-between md:mx-3">
                    <h4 className="text-lg text-center recent_txt_color md:text-xl">Recent Posts</h4>
                    <p className="hidden text-base md:block text-blue-500 cursor-pointer">View all</p>
                </div>

                <div className="md:flex">
                    <div className="bg-white m-3 px-5 py-4 my-4">
                        <BlogContent />
                    </div>

                    <div className="bg-white m-3 px-5 py-4 my-4">
                        <BlogContent />
                    </div>
                </div>

            </div>

        </div>
    )
}
