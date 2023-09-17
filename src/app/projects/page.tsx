import AllProjectsHeadingComponent from "../components/AllProjectsHeadingComponent";
import ProjectsTableComponent from "../components/ProjectsTableComponent";

export default function ProjectsPage () {
    return(
        <>
            <div className="bg-blue-gradient">
                {/* Main Component */}
                <div className="max-w-6xl mr-auto ml-auto">
                    <AllProjectsHeadingComponent/>
                    <ProjectsTableComponent/>
                </div>
            </div>
        </>
    )
}