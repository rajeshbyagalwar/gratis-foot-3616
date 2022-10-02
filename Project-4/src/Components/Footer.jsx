import { EmailIcon, PhoneIcon } from "@chakra-ui/icons"
import { Box, Button, Heading, HStack, Image, Input, Stack, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { BsFillChatLeftQuoteFill, IconName } from "react-icons/bs"
import { AiFillFacebook, AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
function Footer(){
    return(
     <>
     <Box display="flex"  h="400px" gap="30%">

<Box marginLeft="60px">
  <Text fontSize="3xl" fontWeight="bold"  fontFamily="Helvetica-BoldOblique">Subscribe to our awesome emails.</Text>
  <Text fontSize="1xl">Get our latest offers and news straight in your inbox.</Text>

  <Box display="flex" marginTop="100px">
    <Input h="50px" type="text" bg="#c8c8dd" placeholder="Please enter an email addresss"/>
     <Button h="50px" bg="black" color="white" w="18rem">SubScribe</Button>
    </Box>
  


</Box>
<Box>
  <Text fontSize="3xl" fontWeight="bold"  fontFamily="Helvetica-BoldOblique">Download our apps</Text>
  <Text>Shop our products  and offers on-the-go</Text>

  <HStack bg="white">
<Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlDogSm_B_KGUTT3h9JhTGt1cc2b9QzEJzlA&usqp=CAU"/>
  </HStack>
</Box>

</Box>

<Box  marginLeft="60px" >
  <Box display="flex" gap="9rem">
  <Stack>
    <Heading fontSize="1.2xl">Women</Heading>
    <Text>Tops</Text>
    <Text>Ethnicwear</Text>
    <Text>Bottoms</Text>
    <Text>Dreasses & Jumpsuits</Text>
    <Text>Winterwear</Text>
    <Text>Lingerie</Text>
    <Text>Nightwear</Text>
    <Text>Sportwear</Text>
    <Text>Beauty</Text>
    <Text>Watches & Sunglasses</Text>
    
  </Stack>
  <Stack>
    <Heading fontSize="1.2xl">Men</Heading>
    <Text>Tops</Text>
    <Text>Ethnicwear</Text>
    <Text>Bottoms</Text>
    <Text>Dreasses & Jumpsuits</Text>
    <Text>Winterwear</Text>
    <Text>Lingerie</Text>
    <Text>Nightwear</Text>
    <Text>Sportwear</Text>
    </Stack>
    
  <Stack>
    <Heading fontSize="1.2xl">Kids</Heading>
    <Text>Girls Clothing</Text>
    <Text>Boys Clothing</Text>
    <Text>Infants Girls</Text>
    <Text>Infants Boys</Text>
    <Text>Winterwear</Text>
    <Text>Add ons</Text>
    <Text>the Teen Shop</Text>

    
  </Stack>
    
  <Stack>
    <Heading fontSize="1.2xl">Shoes & Bags</Heading>
    <Text>Women</Text>
    <Text>Men</Text>
    <Text>Boys</Text>
    <Text>Girls</Text>
    <Text>Women Accessories</Text>
    <Text>Men Accessories</Text>
    <Text>Essential</Text>

    
  </Stack>
  <Stack>
    <Heading fontSize="1.2xl">Beauty</Heading>
    <Text>Makeup Eyes</Text>
    <Text>Makeup Face</Text>
    <Text>Makeup Lips</Text>
    <Text>Makeup Nails</Text>
    <Text>Perfumes</Text>
   

    
  </Stack>
  </Box>
  <Box display="flex" marginTop="50px" gap="9rem">
  <Stack>
    <Heading fontSize="1.2xl" >Explore</Heading>
    <Text>Online Offers</Text>
    <Text>Store Offers</Text>
    <Text>Online Gift Card</Text>
    <Text>Store Gift Card</Text>
    <Text>Store Nearby</Text>
    <Text>EDGE Membership</Text>
    <Text>Shop on WhatsApp</Text>
    <Text>Fashion VLOG</Text>
    <Text>Join CIRCLEMAG</Text>
    <Text>SBI Offers</Text>
    
  </Stack>
  <Stack>
    <Heading fontSize="1.2xl">About</Heading>
    <Text>About us</Text>
    <Text>Careers</Text>
    <Text>Take a Tour</Text>
    <Text>Blog</Text>
    <Text>Store Locator</Text>
    <Text>Landmark Cares</Text>
    
    
  </Stack>

  <Stack>
    <Heading fontSize="1.2xl">Help</Heading>
    <Text>Contact us</Text>
    <Text>Shipping</Text>
    <Text>Returns Process</Text>
    <Text>Returns Policy</Text>
    <Text>Help Centre</Text>
    
    
    
  </Stack>
  </Box>
</Box>

<Box h="100px" marginLeft="60px" gap="3rem" marginTop="50px">
<hr/>
  <Box display="flex" > 
  <Box gap="2rem" display="flex" marginLeft="60px">
    <Stack  borderRadius="60%"  h="40px"  w="30px" marginTop="10px">
     <PhoneIcon fontSize="3xl" />
     </Stack>
     <Stack>
     <Text fontSize="2xl">Talk to us</Text>
      <Text>1800-123-1555</Text>
     </Stack>
     
      </Box>
      <Box gap="2rem" display="flex" marginLeft="60px" >
        <Stack borderRadius="50%"  h="40px" marginTop="10px" >
      <BsFillChatLeftQuoteFill size="2rem" />
      </Stack>
      <Stack>
      <Text>HELPCenter</Text>
      <Text>help.lifestylestores.com</Text>
      </Stack>
      </Box>
      <Box gap="2rem" display="flex" marginLeft="60px">
        <Stack borderRadius="50%"  h="40px"  marginTop="10px">
      <EmailIcon fontSize="30px"  />
      </Stack>
      <Stack>
      <Text>HELPCenter</Text>
      <Text>help.lifestylestores.com</Text>
      </Stack>
      </Box>
      <Box display="flex" marginLeft="7rem" gap="2rem">
    <AiFillFacebook size="2rem"/>
      <AiFillInstagram size="2rem"/>
      <AiOutlineTwitter size="2rem"/>
      </Box>

      </Box>
      <hr />
</Box>

     </>
    )
}

export default Footer