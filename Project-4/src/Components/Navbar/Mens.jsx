import {  Alert, AlertDescription, AlertIcon, AlertTitle, Box, Button, Grid, Image, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import "./Mens.css"
const FetchData = async (page) => {
  try {
    let res = await fetch(
      `https://www2.hm.com/en_in/men/new-arrivals/view-all/_jcr_content/main/productlisting.display.json?_limit=10&_page=${page}`
    );
    let data = await res.json();
    return data.products;
  } catch (err) {
    console.log("error");
  }
};
 function Mens() {
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
      console.log(data+"papa")
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
        <div margin="auto" textalign="center">
         <img src="https://thumbs.gfycat.com/FrigidBlueGraywolf-max-1mb.gif" alt="" />
     </div>
    )
  }


  
  return (
<>


      <Grid templateColumns='repeat(4, 1fr)' gap={4} marginLeft="40px">
    
{
    post.map((ele)=>(

      <Box key={ele.id} textAlign="left" className="mensimg" marginTop="30px">
      
        <Image className="mensimg" src={ele.image[0].src} alt={ele.image[0].alt} />
        <Text fontSize="1xl" marginLeft="">{ele.price}</Text>
        <Text fontSize="1xl" marginLeft="">{ele.title}</Text>
        <Button bg="orange.00" color="white" padding="20px" margin="30px"  onClick={handleAlert}>Add To Basket</Button>
        </Box>
      
    ))
    
    
}
</Grid>     
  
<div>
      <Button disabled={page==1} onClick={() => handleChangePage(-1)}>prev</Button>
      <Button>{page}</Button>
      <Button  onClick={() => handleChangePage(+1)}>next</Button>
     
  
      </div>

      
      </>
  );
}
export default Mens