
import ProjectDetails from "../Components/project.details.component"

export default function WorkSection() {

    return (
        <div>
            <h1 className="text-3xl font-bold ml-5 mt-6 mb-3 md:mb-14 md:mx-36">Works</h1>
            
            <div className="mx-5 md:mx-0">
                <ProjectDetails />

                <ProjectDetails />

                <ProjectDetails />

                <ProjectDetails />
            </div>
        </div>
    )
}
