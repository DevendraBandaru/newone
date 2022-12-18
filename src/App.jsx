// import Explore from "./Components/Explore"
import Hire from "./Components/Hire"
// import Menu from "./Components/Menu"
// import Navbar from "./Components/Navbar"
import Challenges from "./Components/Challenges"
import { BrowserRouter,Routes,Route } from "react-router-dom"

import Navbar from"./Components/Navbar"
import Explore from "./Components/Explore"

const App=()=>{
    return(
        <div>
            <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Explore/>}/>
                <Route path="/abc" element={<Hire/>}/>
             <Route path="/xyz" element={<Challenges/>}/>
            </Routes>
            
            </BrowserRouter>
            deva
           
            
        </div>
    )
}
export default App