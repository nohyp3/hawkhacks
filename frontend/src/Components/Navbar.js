import React from 'react';
import {  Link } from "react-router-dom";
import Login from './Login'

import { ChakraProvider } from '@chakra-ui/react'
import {
    ChakraBaseProvider,
    extendBaseTheme,
    theme as chakraTheme,
  } from '@chakra-ui/react'
import { Image, Stack, Box, HStack, VStack } from '@chakra-ui/react'

import { AuthProvider } from "@propelauth/react";

const navbar= () =>{
  return (
    <ChakraProvider>

      <HStack justifyContent="space-between" p={4} borderBottom='1px' borderColor='gray.200'>
        <Link to="/">
          <Image boxSize='50px' src={"/Assets/logo.png"} alt='Image Description' />
          <p className="inline-block">BlockBRAIN</p>
        </Link>

        <HStack justify="flex-end" spacing='50px' style={{listStyleType: 'none'}}>
          <li>
            <Link to="/"  style={{ fontSize: '20px' }}>HOME</Link>
          </li>
          <li>
            <Link to="/Lessons" style={{ fontSize: '20px' }}>LESSONS</Link>
          </li>
          <li>
            <Link to="/Collection" style={{ fontSize: '20px' }}>COLLECTION</Link>
          </li>

          <AuthProvider authUrl="https://56311028.propelauthtest.com">
            <Login />
          </AuthProvider>,
        </HStack>
      </HStack>
    </ChakraProvider>
  );
}
export default navbar;