import { createContext, useState } from "react";

// Creating Context.
const ProjectDataContext = createContext();

// Defining Context Provider.
const ProjectDataProvider = ({children}) => {
    // Defining State Variables.
    const [projectDetails , setProjectDetails] = useState([]);
    return(
        <ProjectDataContext.Provider value={{projectDetails , setProjectDetails}}>
            {children}
        </ProjectDataContext.Provider>
    )
}

export {ProjectDataContext , ProjectDataProvider};