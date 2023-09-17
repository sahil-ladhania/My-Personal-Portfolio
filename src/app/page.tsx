import AboutMeComponent from "./components/AboutMeComponent";
import FormComponent from "./components/FormComponent";
import NameAndIntroComponent from "./components/NameAndIntroComponent";
import ProjectComponent from "./components/ProjectComponent";
import ResumeComponent from "./components/ResumeComponent";
import SideNavbarComponent from "./components/SideNavbarComponent";
import SkillsComponent from "./components/SkillsComponent";
import SocialHandlesComponent from "./components/SocialHandlesComponent";
import SpecialNoteComponent from "./components/SpecialNoteComponent";
import ViewProjectsComponent from "./components/ViewProjectsComponent";

export default function HomePage() {
    return(
        <>
        <div className="bg-blue-gradient">
            {/* Main Component */}
            <div className="max-w-6xl mr-auto ml-auto flex relative">
                {/* Left Container */}
                <div className="mt-16 w-5/12 mr-10 ml-10 flex flex-col justify-between h-screen sticky top-12 bottom-12">
                    <NameAndIntroComponent/>
                    <SideNavbarComponent/>
                    <SocialHandlesComponent/>
                </div>
                {/* Right Container */}
                <div className="mt-16 w-5/12 ml-10">
                    <AboutMeComponent/>
                    <SkillsComponent/>
                    <ResumeComponent/>
                    <ProjectComponent/>
                    <ViewProjectsComponent/>
                    <FormComponent/>
                    <SpecialNoteComponent/>
                </div>
            </div>
        </div>
        </>
    )
}
