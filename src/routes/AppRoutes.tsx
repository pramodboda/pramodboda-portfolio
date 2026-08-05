import {Router , Route} from "react-router-dom";

import Home from "./pages/Home/Home";
import AllProjects from ".pages/AllProjects/AllProjects";


function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/projects" element={<Projects/>}/>

            
        </Routes>
    )
}