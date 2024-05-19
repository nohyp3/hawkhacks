import { ChakraProvider } from '@chakra-ui/react'
import {
    ChakraBaseProvider,
    extendBaseTheme,
    theme as chakraTheme,
  } from '@chakra-ui/react'
  import { Heading, Box, Button, CardBody, Card, Text, ButtonGroup, VStack, HStack } from '@chakra-ui/react'
import {useNavigate} from "react-router-dom"
import React from 'react';
import Lottie from 'react-lottie';
// import '@fontsource/raleway/400.css'
// import theme from '../theme.fonts';
// import animationData from "./animations/blockchain_animate_1";

const Home = () =>{
  // React Router for Button 
  const navigate = useNavigate()
  const goToNewPage=()=>{
    navigate("/lessons") // Navigate to the lessons page when 'Get Started' is clicked
  }

  // Lottie animation
  // const defaultOptions = {
  //   loop: true,
  //   autoplay: true,
  //   animationData: animationData,
  //   rendererSettings: {
  //     preserveAspectRatio: "xMidYMid slice"
  //   }
  // };


  return (
    <ChakraProvider>
    {/* home page */}
    <Box alignItems='center' justifyContent='center' width='100%' mb={2}>

      <HStack my={200}>
        <Box my={0}>
          <Heading as='h1' fontSize={"100px"} pl={10} py={2} noOfLines={2} mx={2} mt={100}>BlockBRAIN</Heading>

          <Text fontSize='2xl' pl={10} py={2} mx={2} my={2} >Introducing the First Blockchain Education Platform Designed To Build Your Blockchain Knowledge <span style={{fontWeight: 'bold'}}>Block</span> BY <span style={{fontWeight: 'bold'}}>Block</span></Text>

          <Button color="#EEEEEE" bg='#6868F7' size='lg' px={12} py={8} ml={10} my={10} onClick={() => goToNewPage()}>Get Started</Button>

        </Box>

        <Box>
          <Box my={0}>
              <iframe class="w-full h-full" src="https://lottie.host/embed/99f583eb-3c36-444f-bce2-e528a9ba6980/a6tAxVXiKU.json" width="1000" height="500"></iframe>
          </Box>
        </Box>
      </HStack>

        
      <Box display="flex" justifyContent='center' width='100%'>
          <VStack mt={100}>
            <Card ml="10" mb="10" bg="#A167A5" boxShadow="md"  width="750px" height="250px">
              <CardBody>
                <Text color="white" fontSize='2xl' pl={10} py={2} mx={2} my={5} ><span style={{fontWeight: 'bold'}}>LACK OF BLOCKCHAIN KNOWLEDGE</span></Text>
                <Text color="white" fontSize='xl' pl={10} py={2} mx={2} my={5} >Through a survey conducted at HawkHacks, <span style={{fontWeight: 'bold'}}>9/10</span> developers never touched blockchain before.</Text>
              </CardBody>
            </Card>
            <Card ml="10" mb="10" bg="#6868F7" boxShadow="md"  width="750px" height="300px">
              <CardBody>
                <Text color="white" fontSize='2xl' pl={10} py={2} mx={2} my={5} ><span style={{fontWeight: 'bold'}}>GAMIFY LEARNING</span></Text>
                <Text fontSize='xl' color="white" pl={10} py={2} mx={2} my={5} >BlockBRAIN <span style={{fontWeight: 'bold'}}>gamifies</span> the learning experience and uncovers common misconceptions about the applicatins of blockchain, including NFTs, cryptocurrency, online transactions, and cybersecurity!</Text>
              </CardBody>
            </Card>
          </VStack>
          <Card ml="10" mb="10" bg="#b3b3fb" boxShadow="md"  width="750px" height="600px" mt={100}>
            <CardBody>
              <Text color="white" fontSize='2xl' pl={10} py={2} mx={2} my={5} ><span style={{fontWeight: 'bold'}}>POWERED BY AI</span></Text>
              <Text fontSize='xl' color="white" pl={10} py={2} mx={2} my={5} >BlockBRAIN stands out as a premier blockchain education platform due to its comprehensive yet accessible approach to learning. Its courses are tailored to suit beginners, offering a well-paced curriculum that covers an extensive array of topics. From fundamental concepts to advanced techniques, BlockBRAIN ensures that learners receive a holistic understanding of blockchain technology.</Text>
              <Text fontSize='xl' color="white" pl={10} py={2} mx={2} my={5} >Your online assessments include short answer questions that are analyzed and scored based off <span style={{fontWeight: 'bold'}}>artificial intelligence powered by Cohere</span>.</Text>
          </CardBody>
        </Card>
        </Box>

      <Box display='flex' alignItems='center' justifyContent='center' width='100%' my={40}>
        <Box ml={20} mr={60}>
          <iframe class="w-full h-full" src="https://lottie.host/embed/21db5904-e250-4578-bbed-abb072347647/w73QxfeXKI.json" width="400" height="500"></iframe>
        </Box>
         <Heading as='h1' fontSize={"50px"} pl={10} py={2} mx={2} mt={100}>READY TO LEARN SOMETHING AMAZING?</Heading>
    </Box>
  </Box>
  </ChakraProvider>
  );
}
export default Home;