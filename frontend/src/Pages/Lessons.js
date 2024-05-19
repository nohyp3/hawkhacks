import { ChakraProvider } from '@chakra-ui/react'
import {
    ChakraBaseProvider,
    extendBaseTheme,
    theme as chakraTheme,
  } from '@chakra-ui/react'
  import { Heading, Link, VStack, HStack, Box, Text, Button, ButtonGroup,
     Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import LessonContent from '../Components/LessonContent'
import React from 'react';

import LessonAward from '../Components/LessonAward';
import LessonQuestion from "../Components/LessonQuestion";
import { withAuthInfo, useRedirectFunctions, useLogoutFunction } from '@propelauth/react'

const Lessons = withAuthInfo((props) =>{
  return (
    <ChakraProvider>
    <Box display='flex' alignItems='center' justifyContent='center' width='100%' mb={10}>
    </Box>
    <Tabs variant='soft-rounded' colorScheme='purple'>
      <HStack alignItems="flex-start" width="100%"> 
        <Box p={5} pb="900px" rounded='lg' bg="gray.200">
            <TabList width="100%" ml={100}>
              <VStack>
                <Tab width="full">LESSON 1</Tab>
                <Tab width="full">QUIZ 1</Tab>
                <Tab width="full">LESSON 2</Tab>
                <Tab width="full">QUIZ 2</Tab>
                <Tab width="full">LESSON 3</Tab>
                <Tab width="full">QUIZ 3</Tab>
                <Tab width="full">LESSON 4</Tab>
                <Tab width="full">QUIZ 4</Tab> 
              </VStack>
          </TabList>
        </Box>

        
        <TabPanels ml={100}>
          {/* Lesson 1 */}
          <TabPanel>
            <LessonContent
              content={
                "A blockchain is a distributed ledger (a database synchronized and accessible across different sites by various people) and is open to everyone! Let’s break down some terms: \n \n "+
                "     - Block: Each “block” irepresents a box that holds data, a hash, and the previous block's hash. The data can vary based on the purpose of the blockchain (e.g. storing information about transactions). \n" + 
                "     - Hash: Represents the block “identity” and is always unique. Every time the block is changed, the hash is changed as well (i.e if it changes, it no longer is the same block) \n" + 
                "     - Chain: Each block has the hash of the previous block, creating a “Chain” \n" + 
                "     - Genesis block: The first block in the chain \n \n" + 
                "Ultimately the idea is that if any of the blocks are tampered with, it’s hash will change. Consequently, it will confuse the following blocks as it no longer recognizes the hash. This makes the blockchain super secure \n \n" + 
                "However, it is also entirely possible that a computer could change one block, and then change the hashes of consecutive blocks to ensure the blocks fit. To avoid this, we have “proof of work” which slows down the creation of blocks. \n \n" + 
                "To make blockchains more secure, there is a P2P network (peer 2 peer network). Everyone gets their own copy of the blockchain and when a new block is created, it is verified by every one person’s blockchain to agree on which blocks are valid or not. \n" 
              }
              heading={"WHAT IS BLOCKCHAIN"}
              imageSrc={"/Assets/lesson-images/BlockChain.PNG"}
            />
          </TabPanel>
          <TabPanel>
            <LessonQuestion login={props.user.email} heading={"WHAT IS BLOCKCHAIN"} question={"What is Blockchain?"} prewrittenAnswer={"Blockchain is a decentralized, immutable ledger technology used for secure and transparent recording of transactions across multiple parties."} lessonNumber={0}/>
          </TabPanel>

          {/* Lesson 2 */}
          <TabPanel>
            <LessonContent content={
              "Smart contracts are just like contracts in the real world, except it is completely digital. Smart contracts are essentially tiny programs stored inside a blockchain.\n \n "+
              "A common example is fundraising. Let's say you have a group of people who want to fund a project. Kickstarter serves as a middleman, ensuring the people’s money goes to the project / they get a refund should the project fail and ensuring people running the project get their money. \n \n " + 
              "This, however, can be replaced by a smart contract, therefore eliminating the need for a third party. We can program a smart contract to accept money from the people and pass the money to the project only if it succeeds." + 
              "And because this transaction is stored inside a blockchain, they are distributed and can’t be changed (refer back to lesson one about hashing!) \n \n" +
              "Some applications of this could be to make royalty payments easier for the music industry and banks could use it to issue loans. "
            } 
            
            heading={"WHAT ARE SMART CONTRACTS"}
            imageSrc={"/Assets/lesson-images/contractEx.png"}
            />
          </TabPanel>
          <TabPanel>
            <LessonQuestion login={props.user.email} heading={"WHAT IS SMART CONTRACTS"} question={"What is a smart contract?"} prewrittenAnswer={"Smart contracts are digital contracts stored on a blockchain that are automatically executed when predetermined terms and conditions are met."} lessonNumber={1}/>
          </TabPanel>

          {/* Lesson 3 */}
          <TabPanel>
            <LessonContent content={
              "In the realm of blockchain technology, public and private keys are vital cryptographic elements used to ensure security and facilitate transactions. Picture them as a digital lock and key mechanism.\n\n" +
              "Public keys are like your username or address in the blockchain network, accessible to anyone. They serve as your identity, allowing others to send you cryptocurrency or verify your transactions. However, they can\'t be used to reverse-engineer your private key.\n\n" +
              "Private keys, on the other hand, are akin to your password or PIN. They are kept secret and are known only to you. With the private key, you can access and control your digital assets stored on the blockchain. It\'s crucial to safeguard your private key diligently because whoever possesses it gains control over your assets.\n\n" +
              "Here\'s how it works: when you initiate a transaction, you use your private key to create a digital signature. This signature, along with your public key, validates the transaction\'s authenticity. Once verified by the network, the transaction is added to the blockchain.\n\n" +
              "In essence, public and private keys work together to ensure secure and authenticated transactions within the blockchain network, fostering trust and reliability in a decentralized ecosystem.\n\n"
            } 
            
            heading={"WHAT ARE PUBLIC AND PRIVATE KEYS"}
            imageSrc={"/Assets/lesson-images/Keys.PNG"}
            />
          </TabPanel>
          <TabPanel>
            <LessonQuestion heading={"WHAT ARE PUBLIC AND PRIVATE KEYS"} question={"What are public and private keys?"} prewrittenAnswer={"Public keys are like usernames, shared openly. Private keys are secret passwords, used for access and control."} lessonNumber={2}/>
          </TabPanel>

          {/* Lesson 4 */}
          <TabPanel>
            <LessonContent content={
              
"NFTs, or Non-Fungible Tokens, are the digital Mona Lisas of the blockchain world. Unlike the dollar bills in your wallet (which are all the same), NFTs are unique, like a fingerprint or that one sock you can never find a match for.\n\n" +

"They\'re created using smart contracts on blockchain platforms like Ethereum, which basically means they\'re super secure and can\'t be messed with, unlike that one time your little brother \"borrowed\" your favorite game and returned it scratched.\n\n" +

"These tokens can represent anything from digital art to virtual real estate, making them the cool kids on the blockchain block. So, when you buy an NFT, you\'re not just getting a file, you\'re getting a digital masterpiece with a fancy certificate of authenticity.\n\n" +

"Just remember, while NFTs may seem like magic internet money, they\'re actually backed by some serious tech and a whole lot of creativity. So go ahead, dive into the NFT rabbit hole, and let your digital adventures begin!\n\n"
            } 
            
            heading={"WHAT ARE NFTs"}
            imageSrc={"/Assets/lesson-images/NFT.PNG"}
            />
          </TabPanel>
          <TabPanel>
            <LessonQuestion heading={"WHAT ARE NFTs"} question={"What are NFTs?"} prewrittenAnswer={"NFTs are unique digital assets stored on blockchains, representing ownership of digital content or collectibles."} lessonNumber={3}/>
          </TabPanel>

        </TabPanels>
      </HStack>
    </Tabs>
    </ChakraProvider>
  );
});
export default Lessons;