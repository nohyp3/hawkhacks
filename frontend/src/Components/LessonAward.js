import React from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import {
    ChakraBaseProvider,
    extendBaseTheme,
    theme as chakraTheme,
  } from '@chakra-ui/react'
import data from "./Data"
import { Image, Stack, Heading, Divider, Link,
   Text, Box, HStack, VStack, Button, ButtonGroup, Card, 
   CardHeader, CardBody, CardFooter} from '@chakra-ui/react'


const LessonAward = ({props}) =>{
  const item = data[props];
  return (
    <ChakraProvider>
      <Card maxW='sm' m={10} _hover={{ transform: "translateY(-15px)", transition: "transform 0.3s ease-in-out"}}>
          <CardBody>
            <Image src={item.source} borderRadius='lg'/>
              <Stack mt='6' spacing='3'>
                <Heading size='md' color='#6868F7'>{item.title}</Heading>
                <Text>{item.desc} </Text>
              </Stack>
          </CardBody>
          <CardFooter>
            <Link href={item.link} isExternal size='lg' bg='#6868F7' p={5} borderRadius='15px' color="white"> CLAIM NFT! </Link> 
          </CardFooter>
        </Card>
    </ChakraProvider>

  );
}
export default LessonAward;
