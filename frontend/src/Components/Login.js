import { ChakraProvider } from '@chakra-ui/react'
import {
    ChakraBaseProvider,
    extendBaseTheme,
    theme as chakraTheme,
  } from '@chakra-ui/react'
import {
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
} from '@chakra-ui/react'

import React from 'react';
import { withAuthInfo, useRedirectFunctions, useLogoutFunction } from '@propelauth/react'

const Login = withAuthInfo((props) => {
    const logoutFunction = useLogoutFunction()
    const { redirectToLoginPage, redirectToSignupPage, redirectToAccountPage } = useRedirectFunctions()

    if (props.isLoggedIn) {
        return (
            <ChakraProvider>
                <Menu>
                <MenuButton as={Button}>
                    <Image borderRadius='full' boxSize='30px' src={"/Assets/profilePic.png"} alt='Dan Abramov' />
                </MenuButton>
                <MenuList>
                    <MenuItem>
                        <p>You are logged in as {props.user.email}</p>
                    </MenuItem>
                    <MenuItem>
                        <Button colorScheme='purple' onClick={() => redirectToAccountPage()}>Account</Button>
                    </MenuItem>
                    <MenuItem>
                        <Button colorScheme='purple' onClick={() => logoutFunction(true)}>Logout</Button>
                    </MenuItem>
                </MenuList>
                </Menu>
            </ChakraProvider>
        )
    } else {
        return (
            <ChakraProvider>
                <Menu>
                <MenuButton as={Button}>
                     <Image borderRadius='full' boxSize='30px' src={"/Assets/profilePic.png"} alt='Dan Abramov' />
                </MenuButton>
                <MenuList>
                    <MenuItem>
                         <p>You are not logged in</p>
                    </MenuItem>
                    <MenuItem>
                        <Button colorScheme='purple' onClick={() => redirectToLoginPage()}>Login</Button>
                    </MenuItem>
                    <MenuItem>
                         <Button colorScheme='purple' onClick={() => redirectToSignupPage()}>Signup</Button>
                    </MenuItem>
                </MenuList>
                </Menu>
            </ChakraProvider>
        )
    }
})

export default Login
