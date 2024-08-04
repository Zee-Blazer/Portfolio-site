
import ProjectDetails from "./project.details.component"

export default function Project() {

    return (
        <div className="mx-5 mt-4">
            <h4 className="text-lg text-center mt-5 md:text-left md:mx-36 md:mb-5">
                Featured works
            </h4>

            <ProjectDetails />
            <ProjectDetails />
            <ProjectDetails />
        </div>
    )
}
