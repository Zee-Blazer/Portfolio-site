
import BlogContent from "../Components/blog.details.component"

export default function BlogSection() {

    return (
        <div>
            <h1 className="text-3xl font-bold ml-5 mt-6 mb-3 md:mb-14 blog_title_space_left">Blog</h1>
            
            <div className="md:mx-56">
                <div className="mx-5 pb-5 my-5 border_btm_color border-b-2 md:pb-5">
                    <BlogContent />
                </div>

                <div className="mx-5 pb-5 my-5 border_btm_color border-b-2 md:pb-5">
                    <BlogContent />
                </div>

                <div className="mx-5 pb-5 my-5 border_btm_color border-b-2 md:pb-5">
                    <BlogContent />
                </div>

                <div className="mx-5 pb-5 my-5 border_btm_color border-b-2 md:pb-5">
                    <BlogContent />
                </div>
            </div>
        </div>
    )
}
