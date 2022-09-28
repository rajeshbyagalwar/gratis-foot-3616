import {Routes,Route} from "react-router-dom"
import Beauty from "./Beauty"
import Kids from "./Kids"
import Mens from "./Mens"
import More from "./More"
import SearchBar from "./SearchBar"
import ShoesAndBags from "./ShoesAndBags"
import Signup from "./Signup/Signin"
import Womens from "./Womens"
function AllRoutes(){
return(
        <>
        <Routes>
            <Route path="/womens" element={<Womens/>}></Route>
            <Route path="/mens" element={<Mens/>}></Route>
            <Route path="/kids" element={<Kids/>}></Route>
            <Route path="/shoes&bags" element={<ShoesAndBags/>}></Route>
            <Route path="/beauty" element={<Beauty/>}></Route>
            <Route path="/searchbar" element={<SearchBar/>}></Route>
            <Route path="/more" element={<More/>}></Route>
            <Route path="/signup/signin" element={<Signup/>}></Route>
           
        </Routes>
        </>
    )
}
export default AllRoutes