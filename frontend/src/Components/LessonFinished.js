import React from 'react';
import {  Link } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'
import {
    ChakraBaseProvider,
    extendBaseTheme,
    theme as chakraTheme,
  } from '@chakra-ui/react'
import { Image, Stack, Heading, Text, Box, HStack, VStack, Button, ButtonGroup } from '@chakra-ui/react'

const LessonContent= ({heading, content}) =>{
  return (
    <div>
      <Heading as='h1' size='2xl'pb={10} noOfLines={1}>{heading}</Heading>
      
      <Text fontSize="2xl" whiteSpace="pre-line" width='75%'>
        {content}
      </Text>

      <Button mt={10} p={5} size='lg' colorScheme='purple'>Next</Button>

    </div>

  );
}
export default LessonContent;