import {  Alert, AlertDescription, AlertIcon, AlertTitle, Box, Button, Grid, Image, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const FetchData = async (page) => {
  try {
    let res = await fetch(
      `http://makeup-api.herokuapp.com/api/v1/products.json`
    );
    let data = res.json();
    return data;
  } catch (err) {
    console.log("error");
  }
};
 function Beauty() {
  const [post, setPost] = useState([]);
  const [loading, setloading] = useState(false);
  const [page, setPage] = useState(1);
  const [state,setState] = useState(false)
  useEffect(() => {
    FetchDataUpdate(page);
  }, [page]);

  const handleAlert = () =>{
   alert("Product Added Successfully To Basket")
  }
  const FetchDataUpdate = async (page = 1) => {
    try {
      setloading(true);
      let data = await FetchData(page);
      
     setPost(data);
    //  if(data!=undefined){
    //     setPost(data)
    //  }
    
      setloading(false);
    } catch (err) {
      console.log("error");
      setloading(true);
    }
  };

 

  console.log(post)
  const handleChangePage = (pageNum) => {
    setPage(page + pageNum);
  };
  if (loading) {

    return(
        <div margin="auto">
         <img src="https://thumbs.gfycat.com/FrigidBlueGraywolf-max-1mb.gif" alt="" />
     </div>
    )
  }


  
  return (
<>


      <Grid templateColumns='repeat(4, 1fr)' gap={4} marginLeft="40px">
    
{
    post.map((ele)=>(

      <Box key={ele.id} textAlign="left">
      
        <Image className="mensimg" src={ele.image_link} alt="" />
        <Text fontSize="1xl" marginLeft="">{ele.price_sign}{ele.price}</Text>
        <Text fontSize="1xl" marginLeft="">{ele.name}</Text>
        <Button bg="orange.00" color="white" padding="20px" margin="30px"  onClick={handleAlert}>Add To Basket</Button>
        </Box>
      
    ))
    
    
}
</Grid>     
  
<div>
      <Button onClick={() => handleChangePage(-1)}>prev</Button>
      <Button>{page}</Button>
      <Button onClick={() => handleChangePage(+1)}>next</Button>
     
  
      </div>

      
      </>
  );
}
export default Beauty