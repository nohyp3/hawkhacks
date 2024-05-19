import { ChakraProvider } from '@chakra-ui/react'
import LessonAward from '../Components/LessonAward'
import axios from 'axios'

import {
    ChakraBaseProvider,
    extendBaseTheme,
    theme as chakraTheme,
  } from '@chakra-ui/react'
  import { Heading, Box, Center, Text, HStack, Button, ButtonGroup, VStack } from '@chakra-ui/react'

import { withAuthInfo, useRedirectFunctions, useLogoutFunction } from '@propelauth/react'

import React, {useEffect, useState} from 'react';
const Collection = withAuthInfo((props) => {
  const logoutFunction = useLogoutFunction()
  const { redirectToLoginPage, redirectToSignupPage, redirectToAccountPage } = useRedirectFunctions()
  const [responseData, setResponseData] = useState("");
  const [lessonsCompleted, setLessonsCompleted] = useState(0);

  useEffect(() => {
    if (props.user) {
      axios.get(`http://localhost:4000/api/users/${props.user.email}`)
        .then((response) => {
          console.log("success")
          console.log(response.data);
          setResponseData(response.data);
          setLessonsCompleted(response.data.lessonsCompleted)
        })
        .catch((error) => {
          console.log('error!')
          if (error.response.status === 404) {
            console.log('ran error')
            // If a 404 status is returned, create a new account
            const newAccount = { email: props.user.email, lessonsCompleted: 0 };
            axios.post(`/api/createUser/`, newAccount)
              .then(response => {
                // Handle the response data...
                console.log(response.data);
              })
              .catch(error => {
                console.log(error);
              });
          }
          else{
            console.log(error);
          }
        });
    }
  }, [props.user]);

  if (props.isLoggedIn) 
  {
      return (
        <ChakraProvider>
          <Heading as='h1' size='2xl' p={10} noOfLines={1}>COLLECTION</Heading>
          <Text fontSize='2xl' pl={10}>You have completed {lessonsCompleted} lessons</Text>

          <HStack>
            {[...Array(lessonsCompleted)].map((_, index) => (
              //to change the numbers of cards displayed, change the hard coded value, 3
              <LessonAward key={index} props={index} />
            ))}
          </HStack>

        </ChakraProvider>);
  } else {  
      return (
        <ChakraProvider>
          <Center h="100vh">
            <VStack>
              <Button p={10} size='md' colorScheme='purple' onClick={() => redirectToLoginPage()}>LOGIN TO VIEW YOUR PROGRESS</Button>
            </VStack>

          </Center>
        </ChakraProvider>);
  }

})

export default Collection;