import { Box, Button, Input, Stack, Text, Textarea } from "@chakra-ui/react"

import { Image } from "@chakra-ui/react"
import { Link, Navigate } from "react-router-dom"
import Footer from "../Footer"
import Navbar from "./Navbar"
function Home(){
  
return (
    <>

   

   <Box  w="79%" h="550px" margin="auto" display="flex" marginTop="1rem" gap="5px">
 <Box  w="60%" h="90%">
<Image h="80%" w="100%" src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/b/2/tr:w-378.5,/b201684H_900600_1.jpg?rnd=20200526195200" alt="Image"/>

<Button color="orange" marginTop="-90px" bg="white" ><Link to="/womens">Women</Link></Button>
 </Box>
 <Box  w="53%" h="90%">
<Image h="80%" w="100%" src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/h/e/tr:w-275,/heutrap-ht17mkgraylw00288_1_bf5162c0.jpg?rnd=20200526195200" alt="Image"/>

<Button color="orange" marginTop="-90px" bg="white" ><Link to="/mens">Mens</Link></Button>
 </Box>
 <Box  w="50%" h="95%" >
<Image h="80%" w="100%"  src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/5/f/tr:w-275,/5fba6e2AN7792_1.jpg?rnd=20200526195200" alt="Image"/>

<Button color="orange" marginTop="-130px" bg="white" ><Link to="/kids">Kids</Link></Button>
 </Box>
 <Box  w="50%" h="90%">
<Image h="80%" w="100%" src="https://cdn.shopify.com/s/files/1/0280/6241/6930/products/ingredinets_360x.jpg?v=1649501951" alt="Image"/>
<Button color="orange" marginTop="-90px" bg="white" ><Link to="/kids">Beauty</Link></Button>


 </Box>

   </Box>
    
<Footer/>

    </>
)
}
export default Home