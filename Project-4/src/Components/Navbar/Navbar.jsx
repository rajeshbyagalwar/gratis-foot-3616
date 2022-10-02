import { Search2Icon } from "@chakra-ui/icons"
import { IconName, IoPerson, IoPersonSharp } from "react-icons/io5";

import { Box, Button, Center, Divider, HStack, Image, Input, InputGroup, InputLeftElement, Text} from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { AiOutlineHeart, AiOutlineShopping } from "react-icons/ai";
import "./Navbar.css"
import { useState } from "react";




function Navbar() {
    const style = {
        textDecoration: "none",
        color: "black"
    }

    const [isVisible, setInvisible] = useState(false)
    const [state, setState] = useState(false)
    const [more,setMore] = useState(false)
    const [login,setLogin] = useState(false)

    return (
   <Box>
            <Box h="4rem" w="full" borderBottom="1px solid gray" bg="#f4f4f7">
                <HStack gap="0px" display="flex" justifyContent="space-around" w="90%" marginLeft="65px" bg="#f4f4f7">
                  
                     <Box>
                         <Link to="/"><img src="https://blog.lifestylestores.com/wp-content/uploads/2020/10/logo-lifestyle.png" alt=""/></Link>   
                            </Box>
                    
                    <Box className="items" display="inline-block" position="relative" p="1rem 0.5rem 1.4rem 0.5rem" fontSize="14px" fontFamily="Arial,sans-serif" onMouseOver={() => setInvisible(true)} onMouseOut={() => setInvisible(false)}>

                        <Link to="/womens">Womens</Link>

                    </Box>

                    <Box className="items" p="1rem 0.5rem 1.4rem 0.5rem" fontSize="14px" fontFamily="Arial,sans-serif" display="inline-block" position="relative"   onMouseOver={() => setState(true)} onMouseOut={() => setState(false)}>
                        <Link to="/mens">Mens</Link> 
                    </Box>

                    <Box className="items" p="1rem 0.5rem 1.4rem 0.5rem" fontSize="14px" fontFamily="Arial,sans-serif" display="inline-block" position="relative"  onMouseOver={() => setState(true)} onMouseOut={() => setState(false)}>
                        <Link to="/kids">Kids</Link>
                    </Box>


                    <Box className="items" p="1rem 0.5rem 1.4rem 0.5rem" fontSize="14px" fontFamily="Arial,sans-serif" display="inline-block"  onMouseOver={() => setState(true)} onMouseOut={() => setState(false)}>
                        <Link to="/shoes&bags">Shoes & Bags</Link>
                    </Box>
                    <Box className="items" p="1rem 0.5rem 1.4rem 0.5rem" fontSize="14px" fontFamily="Arial,sans-serif" display="inline-block" position="relative"  onMouseOver={() => setState(true)} onMouseOut={() => setState(false)}>
                        <Link to="/beauty">Beauty</Link>
                    </Box>

                    <Box  >
                        <InputGroup w="20rem"
                            border="1px solid black"
                            borderRadius="10px"
                        >
                            <InputLeftElement
                                pointerEvents='none'
                                children={<Search2Icon color='black.500' />}
                            />
                            <Input type='tel' placeholder='Search' />
                        </InputGroup>
                    </Box>

                    <Box className="items" p="1rem 0.5rem 1.4rem 0.5rem" fontSize="14px" fontFamily="Arial,sans-serif" display="inline-block" position="relative"  onMouseOver={() => setMore(true)} onMouseOut={() => setMore(false)}>
                        <Link to="/more" >More</Link>
                    </Box>
                    <Box onClick={()=>setLogin(!login) } color="black" className="items" p="1rem 0.5rem 1.4rem 0.5rem" fontSize="14px" fontFamily="Arial,sans-serif" >
                    <Link to="/signup/signin">Signup/Signin</Link>
                      
                    </Box>
                    <Box >
                        <AiOutlineHeart size="35px" />
                    </Box>
                    <Box  >

                        <AiOutlineShopping size="35px" />
                    </Box>
                </HStack>
            </Box>

            <Box border="1px solid red" h="auto" w="full" display={isVisible ? "block" : "none"} position="absolute" bg="#ffffff" className="box" >
                <Box display="flex" padding="20px">
                    <Text fontFamily="ProximaNova-Semibold">
                        <h3 fontSize="15px" >Ethnic & Fusion Wear</h3>
                        <p fontSize="5px">Kurtas & Kurtis</p>
                        <p>Ethnic Dresses</p>
                        <p>Tops & Tunics</p>
                        <p>Leggings</p>
                        <p>Churidars</p>
                        <p>Pants & Palazzos</p>
                        <p>Skirts</p>
                        <p>Dupattas & Stoles</p>

                    </Text>
                    <Center height='200px' marginTop="10px" marginLeft="20px" >
                        <Divider orientation='vertical' />
                    </Center>
                    <Text fontFamily="ProximaNova-Semibold" marginLeft="50px">
                        <h3 fontSize="15px" >Western Wear</h3>
                        <p fontSize="5px">Top & Tees</p>
                        <p>Ethnic Dresses & Jumpsuites</p>
                        <p>Jeans & Jeggings</p>
                        <p>Shorts & Skirts</p>
                        <p>Trousers</p>
                        <p>Jackets & Shrugs</p>
                        <p>Skirts</p>
                        <p>Dupattas & Stoles</p>

                    </Text>
                    <Center height='200px' marginTop="10px" marginLeft="20px" >
                        <Divider orientation='vertical' />
                    </Center>
                    <Text fontFamily="ProximaNova-Semibold" marginLeft="50px">
                        <h3 fontSize="15px" >Lingerie/Sleepwear</h3>
                        <p fontSize="5px">Bras</p>
                        <p>Briefs/Panties</p>
                        <p>Cami & Slips</p>
                        <p>Shapewear</p>
                        <p>Nightwears</p>
                        

                    </Text>
                    <Center height='200px' marginTop="10px" marginLeft="20px" >
                        <Divider orientation='vertical' />
                    </Center>
                    <Text fontFamily="ProximaNova-Semibold" marginLeft="50px">
                        <h3 fontSize="15px" >SportsWear</h3>
                        <p fontSize="5px">Top & Tees</p>
                        <p>Sports Bra</p>
                        <p>Legging</p>
                        <p>Joggers & Tracks</p>
                        <p>Sweatshirts & Jacket</p>
                  

                    </Text>

                    <Center height='200px' marginTop="10px" marginLeft="20px" >
                        <Divider orientation='vertical' />
                    </Center>
                    <Text fontFamily="ProximaNova-Semibold" marginLeft="50px">
                        <h3 fontSize="15px" >Western Wear</h3>
                        <p fontSize="5px">Top & Tees</p>
                        <p>Ethnic Dresses & Jumpsuites</p>
                        <p>Jeans & Jeggings</p>
                        <p>Shorts & Skirts</p>
                        <p>Trousers</p>
                        <p>Jackets & Shrugs</p>
                        <p>Skirts</p>
                        <p>Dupattas & Stoles</p>

                    </Text>
                    <Center height='200px' marginTop="10px" marginLeft="70px" >
                        <Divider orientation='vertical' />
                    </Center>
                    <Text fontFamily="open Sans" marginLeft="50px">
                        <h3 fontFamily="open Sans" fontSize="15px" >Winter wear</h3>
                        <h3 fontFamily="open Sans" fontSize="5px"  >Beauty</h3>
                        <h3 fontFamily="open Sans" fontSize="5px">Footwear/Bags</h3>
                        <h3 fontFamily="open Sans" fontSize="5px">Watches</h3>
                        <h3 fontFamily="open Sans" fontSize="5px">Frame Foreever</h3>
                        <h3 fontFamily="open Sans" fontSize="5px">Jewellery</h3>
                        <h3 fontFamily="open Sans" fontSize="5px">Fragrances</h3>
                       

                    </Text>
                    

                </Box>

            </Box>


{/* ************************************************************************************************************************************************ */}

            <Box border="1px solid red" h="auto" w="full" display={state ? "block" : "none"} position="absolute" bg="#ffffff"  className="box">
                <Box display="flex" padding="20px">
                    <Text fontFamily="ProximaNova-Semibold">
                        <h3 fontSize="15px" >TopWear</h3>
                        <p fontSize="5px">Casual Shirts</p>
                        <p>Formal Shirts</p>
                        <p>Polos</p>
                        <p>T-Shirts</p>
                        <p>Jackets</p>
                        <p>Hoodies & Sweatshirts</p>
                 
                        <h3 fontSize="15px" >Bottomwear</h3>
                        <p fontSize="5px">Casual </p>
                        <p>Formal </p>
                        <p>Trourses</p>
                        <p>Jeans</p>
                        <p>Track Pants</p>
                        <p>Shorts & 3/4ths</p>

                    </Text>
                    <Center height='200px' marginTop="10px" marginLeft="20px" >
                        <Divider orientation='vertical' />
                    </Center>
                    <Text fontFamily="ProximaNova-Semibold" marginLeft="50px">
                        <h3 fontSize="15px" >ActiveWear</h3>
                        <p fontSize="5px">Polos</p>
                        <p>Sports T-Shirts</p>
                        <p>Track Pants</p>
                        <p>Sports shoes</p>
                        <p>Trousers</p>
            

                        <h3 fontSize="15px" >Ethics</h3>
                        <p fontSize="5px">Kurtas</p>
                        <p>Waistcoats</p>
                        <p>Pyjamas</p>
                    
                        <h3 fontSize="15px" >Winterwear</h3>
                        <p fontSize="5px">Hoodies & Sweatshirts</p>
                        <p>Sweaters & Cardigans</p>
                        <p>Jackets</p>

                    </Text>
                    <Center height='200px' marginTop="10px" marginLeft="20px" >
                        <Divider orientation='vertical' />
                    </Center>
                    <Text fontFamily="ProximaNova-Semibold" marginLeft="50px">
                        <h3 fontSize="15px" >Innerwear</h3>
                        <p fontSize="5px">Boxer</p>
                        <p>Brief</p>
                        <p>Vests</p>
                        <p>Loungewear</p>
                       
                        <h3 fontSize="15px" >Top Brands</h3>
                        <p fontSize="5px">Us Polo</p>
                        <p>Fahrenheit</p>
                        <p>Jack & Jones</p>
                        <p>Levis</p>
                        <p>United Color of Benetton</p>
                        <p>Celio</p>
                        <p>Kappa</p>
                        <p>Bosini</p>
                        <p>CODE</p>
                        <p>Bosini</p>
                        <p>FameForever</p>


                    </Text>
                    <Center height='200px' marginTop="10px" marginLeft="20px" >
                        <Divider orientation='vertical' />
                    </Center>
                    <Text fontFamily="ProximaNova-Semibold" marginLeft="50px">
                        <h3 fontSize="15px" >SportsWear</h3>
                        <p fontSize="5px">Top & Tees</p>
                        <p>Sports Bra</p>
                        <p>Legging</p>
                        <p>Joggers & Tracks</p>
                        <p>Sweatshirts & Jacket</p>
                  

                    </Text>

                    <Center height='200px' marginTop="10px" marginLeft="20px" >
                        <Divider orientation='vertical' />
                    </Center>
                    <Text fontFamily="ProximaNova-Semibold" marginLeft="50px">
                        <h3 fontSize="15px" >Western Wear</h3>
                        <p fontSize="5px">Top & Tees</p>
                        <p>Ethnic Dresses & Jumpsuites</p>
                        <p>Jeans & Jeggings</p>
                        <p>Shorts & Skirts</p>
                        <p>Trousers</p>
                        <p>Jackets & Shrugs</p>
                        <p>Skirts</p>
                        <p>Dupattas & Stoles</p>

                    </Text>
                    <Center height='200px' marginTop="10px" marginLeft="70px" >
                        <Divider orientation='vertical' />
                    </Center>
                    <Text fontFamily="open Sans" marginLeft="50px">
                        <h3 fontFamily="open Sans" fontSize="15px" >Winter wear</h3>
                        <h3 fontFamily="open Sans" fontSize="5px"  >Beauty</h3>
                        <h3 fontFamily="open Sans" fontSize="5px">Footwear/Bags</h3>
                        <h3 fontFamily="open Sans" fontSize="5px">Watches</h3>
                        <h3 fontFamily="open Sans" fontSize="5px">Frame Foreever</h3>
                        <h3 fontFamily="open Sans" fontSize="5px">Jewellery</h3>
                        <h3 fontFamily="open Sans" fontSize="5px">Fragrances</h3>
                       

                    </Text>
                    

                </Box>

            </Box>
{/* 😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊 */}
  
  <Box display={more ? "block" : "none"} position="absolute" bg="#f4f4f8" className="box" border="0px solid grey"  marginLeft="70%" w="200px" >
  <h2 className="More">Download</h2>
  <h2 className="More">Online Gift Card</h2>
  <h2 className="More">Online Offers</h2>
  <h2 className="More">Store Locators</h2>
  <h2 className="More"> Store Details</h2>
  <h2 className="More">Lifestyle EDGE</h2>
  <h2 className="More">Shop on Whatsapp</h2>
  <h2 className="More">Blog</h2>
  <h2 className="More">SBI Offers</h2>

</Box>
  
     

</Box>

    )
}
export default Navbar






