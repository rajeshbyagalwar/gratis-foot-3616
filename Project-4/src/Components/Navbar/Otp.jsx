import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
    PinInput,
    HStack,
    PinInputField,
  } from "@chakra-ui/react";
import { useReducer } from "react";
  import { useState } from "react";
  import { Navigate } from "react-router-dom";
  import reducer from './Navbar'
  export default function SignUp() {
    const [navi, setNavi] = useState(false);
   const init = {
    isClicked:false
   }
 
    const [data,setData] = useReducer(reducer,init)


    if (navi) {
      return <Navigate to="/navigate" />;
    }
    return (
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        // bg={useColorModeValue('gray.50', 'gray.800')}
      
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}  border="2px solid red" margin="auto">
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>Sign up or Sign in</Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
            Enjoy the convenience of a single account across all participating brands✌️
            </Text>
            <Text >
            Verify with OTP
            </Text>
            <Text>
            sent to your mobile Number
            </Text>
          </Stack>
          <Box
            rounded={"lg"}
            // bg={useColorModeValue('white', 'gray.700')}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={5}>
                          <HStack marginLeft="100px">
                              <PinInput>
                                  <PinInputField />
                                  <PinInputField />
                                  <PinInputField />
                                  <PinInputField />
                                </PinInput>
                            </HStack>
  
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                
                 <Link  color={"orange.300"}>Didn't get it? resend?</Link>
                </Stack>
                <Button
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  onClick={() => setNavi(true)}
                >
                Submit
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }
  