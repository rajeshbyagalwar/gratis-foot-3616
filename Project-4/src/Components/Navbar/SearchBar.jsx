import { Input, InputLeftElement } from "@chakra-ui/react"
import {Search2Icon} from "@chakra-ui/icons"
function SearchBar(){
    return(
        <>
        <div>
        
        <input type="text" placeholder="" children={<Search2Icon/>}/>
   
        
        </div>
        </>
    )
}
export default SearchBar