import AboutMeComponent from "../components/AboutMeComponent";
import FormComponent from "../components/FormComponent";
import NameAndIntroComponent from "../components/NameAndIntroComponent";
import ProjectComponent from "../components/ProjectComponent";
import ResumeComponent from "../components/ResumeComponent";
import SideNavbarComponent from "../components/SideNavbarComponent";
import SocialHandlesComponent from "../components/SocialHandlesComponent";
import SpecialNoteComponent from "../components/SpecialNoteComponent";

export default function HomePage() {
    return(
        <div>
            <>
                {/* Main Component */}
                <div className="max-w-6xl mr-auto ml-auto flex h-screen">
                    {/* Left Container */}
                    <div className="mt-20 w-9/12 mr-10 ml-10">
                        <NameAndIntroComponent/>
                        <SideNavbarComponent/>
                        <SocialHandlesComponent/>
                    </div>
                    {/* Right Container */}
                    <div className="mt-20 w-9/12 mr-10 ml-10">
                        <AboutMeComponent/>
                        <ProjectComponent/>
                        <ResumeComponent/>
                        <FormComponent/>
                        <SpecialNoteComponent/>
                    </div>
                </div>
            </>
        </div>
    )
}
