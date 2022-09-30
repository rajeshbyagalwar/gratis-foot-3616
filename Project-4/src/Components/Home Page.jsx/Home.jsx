import { Box } from "@chakra-ui/react"
import AllRoutes from "../Navbar/AllRoutes"
import Navbar from "../Navbar/Navbar"

function Home(){
return (
    <>
    <Navbar/>

    <AllRoutes/>

   <Box border="1px solid red" w="70%" h="400px" margin="auto" display="flex" marginTop="1rem" gap="5rem">
 <Box border="2px solid black" w="30%">
<img src="" alt="" />

 </Box>
 <Box border="2px solid black" w="30%"></Box>
 <Box border="2px solid black" w="30%"></Box>
 <Box border="2px solid black" w="30%"></Box>

   </Box>
    


    </>
)
}
export default Home