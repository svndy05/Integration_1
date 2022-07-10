import {  Box, Image, Heading, Text, Circle, Button, Flex, Center, Show, HStack, IconButton } from "@chakra-ui/react";
import { motion} from 'framer-motion'
import { ArrowForwardIcon, SearchIcon} from "@chakra-ui/icons"
import React, { useState } from 'react'
const Index = () => {
    const [inputWidth, SetInputWidth] = useState(0)
    const [visibility, SetVisibility] = useState(false)
    const variantsCircle = {
        visible: {
            opacity: 1, transition: {
                type: 'tween',
                when: 'beforeChildren',
                staggerChildren: 0.2,
                duration: 1
            }
        },
        hidden: {
            opacity: 0, transition: {
                when: "afterChildren",
            },
        },
    }
    const variantsImage = {
        visible: {
            opacity: 1, transition: {
                type: 'tween',
                duration: 1
            }
        },
        hidden: { opacity: 0 },
    }
    return (
        <Center flexDirection={{ base: 'column', xl: 'row' }} pos='relative' h={{xl:'100vh'}} >
            <Show above='xl'>
            <IconButton
            pos='absolute'
            aria-label='Open search input'
            colorScheme='transparent'
            top="5%"
            left='90%'
            icon={<SearchIcon/>}
            />
            </Show>
            <Box pos='absolute' zIndex={1} left={{base:'20%',md:'298px'}} top='116px' border='2px' boxSize='30px' borderColor='white' borderRadius='100%' />
            <Box pos='absolute' zIndex={1} left={{base:'60%',md:'313px'}} top={{base:'50%', md:'411px'}} border='2px' boxSize='18px' borderColor='white' borderRadius='100%' />
            <Show above='xl'>
            <Box pos='absolute' zIndex={1} left='280px' top='848px' border='2px' boxSize='51px' borderColor='white' borderRadius='100%' />
            <Box pos='absolute' zIndex={1} left='906px' top='126px' border='2px' boxSize='13px' borderColor='white' borderRadius='100%' />
            <Box pos='absolute' zIndex={1} left='812px' top='773px' border='2px' boxSize='13px' borderColor='white' borderRadius='100%' />
            <Box pos='absolute' zIndex={1} left='920px' top='860px' border='2px' boxSize='18px' borderColor='white' borderRadius='100%' />
            <Box pos='absolute' zIndex={1} left='1221px' top='145px' border='2px' boxSize='18px' borderColor='white' borderRadius='100%' />
            <Box pos='absolute' zIndex={1} left='1277px' top='850px' border='2px' boxSize='18px' borderColor='white' borderRadius='100%' />
            </Show>
            <Circle
                as={motion.div}
                initial='hidden'
                animate='visible'
                variants={variantsCircle}
                bg='#3F21D0'
                size={{ base: '90vw', md: '75vw', xl: '60vw' }}
                pos={{xl:'absolute'}}
                top={{xl:'50%'}}
                left={{xl:'50%'}}
                transform={{xl:'translate(-50%,-50%)'}}>
                <Circle
                    as={motion.div}
                    variants={variantsImage}
                    size={{ base: '60vw', xl: '40vw' }}
                    bgGradient='linear(to-l,#DF387C,#FF602C)'
                    shadow='2xl'>
                        <Image boxSize={{ base: '70vw', xl: '40vw' }} src='gear-vr.png'/>
                </Circle>
            </Circle>
         
            <Flex
                pos={{ xl: 'absolute' }}
                zIndex={2}
                flexDirection='column'
                mt={{ base: '5vh', md: '5vh' }}
                mb={{ base: '5vh', xl: '0px' }}
                top={{ xl: '26%' }}
                left={{ xl: '38%' }}
                color='white'
                fontFamily='Montserrat'
                alignItems={{base:'center',xl:'end'}}
                w={{base:'80vw',xl:'50%'}}>
                <Heading as='h3' fontSize={{ base: '4xl', xl: '7em' }} fontFamily='Montserrat' fontWeight='900' >
                    GEAR VR
                </Heading><Box w={{xl:'40%'}}>
                <Text textAlign={{ base: 'center', xl: 'end' }}  fontSize='16px' noOfLines={3} fontFamily='Montserrat' fontWeight='700' lineHeight='28px'  >
                    It's easy to get lost in the world of virtual reality because the Gear VR is engineered to feel lighter.
                </Text>
                </Box>
                <Button
                    as={motion.button}
                    rightIcon={<ArrowForwardIcon fontWeight='700' fontSize='18px' />}
                    whileHover={{ scale: 1.1 }} transition='0.5s' p='25px'
                    bgGradient='linear(to-l,#DF387C,#FF602C)'
                    colorScheme='linear(to-r,#DF387C,#FF602C)'
                    fontFamily='Montserrat'
                    fontSize='14px'
                    shadow='dark-lg'
                    fontWeight='700'
                    borderRadius='100px'
                    marginTop='15px' >
                    Find out more
                </Button>
            </Flex>
            <Show below='xl'  >
                <HStack spacing='24px' alignSelf='center' mb='5vh'>
                    <Image
                        src='/facebook.svg' />
                    <Image
                        src='/twitter.svg' />
                </HStack>
            </Show>

        </Center>
    )
}
export default Index;