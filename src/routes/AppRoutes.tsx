import {Router , Route} from "react-router-dom";

import Home from "./pages/Home/Home";
import AllProjects from ".pages/AllProjects/AllProjects";


function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/projects" element={<Projects/>}/>

            <Route path="/projects/:slug"
            element={<ProjectDetails/>}/>

<Route
        path="*"
        element={<div>404 - Page Not Found</div>}
      />
        </Routes>
    )
}