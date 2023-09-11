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
                <div>
                    <NameAndIntroComponent/>
                    <SideNavbarComponent/>
                    <SocialHandlesComponent/>
                    <AboutMeComponent/>
                    <ProjectComponent/>
                    <ResumeComponent/>
                    <FormComponent/>
                    <SpecialNoteComponent/>
                </div>
            </>
        </div>
    )
}
