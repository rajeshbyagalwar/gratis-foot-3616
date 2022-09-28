import {  Search2Icon} from "@chakra-ui/icons"
import { Box, HStack, Image, Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import { Link } from "react-router-dom"

function Navbar() {
    const style = {
        textDecoration: "none",
        color: "black"
    }
    return (
        <>
            <Box border="1px solid red" h="4rem" w="full" >
                <HStack gap="0.5rem" bg="#ffffff">
                    <Box border="1px solid red">
                        <Image src="https://blog.lifestylestores.com/wp-content/uploads/2020/10/logo-lifestyle.png" />
                    </Box>
                    <Box border="1px solid red">
                        <Link to="/womens">Womens</Link>
                    </Box>

                    <Box border="1px solid red">
                        <Link to="/mens">Mens</Link>
                    </Box>

                    <Box border="1px solid red">
                        <Link to="/kids">Kids</Link>
                    </Box>


                    <Box border="1px solid red">
                        <Link to="/shoes&bags">Shoes & Bags</Link>
                    </Box>
                    <Box border="1px solid red">
                        <Link to="/beauty">Beauty</Link>
                    </Box>
                    <Box border="1px solid red">

                    </Box>
                    <Box >
                        <InputGroup>
                            <InputLeftElement
                                pointerEvents='none'
                                children={<Search2Icon color='gray.300' />}
                            />
                            <Input type='tel' placeholder='Search' />
                        </InputGroup>
                    </Box>

                    <Box border="1px solid red">
                        <Link to="/more" >More</Link>
                    </Box>
                    <Box border="1px solid red" color="black">
                   <Link to="/signup/signin">SignUp/Sign In</Link>
                    </Box>

                   
                </HStack>
            </Box>

        </>
    )
}
export default Navbar