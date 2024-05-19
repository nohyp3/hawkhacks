import * as React from 'react'

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'
import {
  ChakraBaseProvider,
  extendBaseTheme,
  theme as chakraTheme,
} from '@chakra-ui/react'
import { Heading, Box, Text, Button, ButtonGroup } from '@chakra-ui/react'
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter as Router, Routes, Route
} from "react-router-dom";

// Import components
import Navbar from "./Components/Navbar";

// Import pages
import Home from "./Pages/Home";
import Lessons from "./Pages/Lessons";
import Collection from "./Pages/Collection";

import { AuthProvider } from "@propelauth/react";
export default function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <Router>
    <ChakraProvider>
      <AuthProvider authUrl="https://56311028.propelauthtest.com">
      {/* navbar IMPLEMENT ROUTING */}
      <Navbar/>
      <Routes>
        <Route path="/" exact element={<Home header={"sdlfsdjkfjs"} />}/>
        <Route path="/Lessons" exact element={<Lessons/>}/>
        <Route path="/Collection" exact element={<Collection/>}/>
      </Routes>
      </AuthProvider>
    </ChakraProvider>
    </Router>
  ) 
}