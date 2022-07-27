import { Box, Image, Flex, Button, Slide, useDisclosure, useControllableState, Divider } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { motion } from 'framer-motion'
const Navbar = () => {
    const MenuLink: String[] = ['Gear VR', 'Design', 'Display', 'Experience', 'Spec', 'Gallery']
    const { isOpen, onToggle } = useDisclosure()
    const [selected, setSelected] = useControllableState({ defaultValue: 0 })
    return (
        <Flex w="100%" display={{base:'flex',xl:'none'}} direction='row' h='10vh' justify='space-between'  alignItems='center' px='5%'>
            <Image
                src='/logo.svg'
            />
            <Button onClick={onToggle} as={motion.button} colorScheme='transparent'  leftIcon={<HamburgerIcon color='white' boxSize='30px' />} />
            <Slide
                direction='top'
                in={isOpen}
                unmountOnExit={true}
                style={{ zIndex: '3', marginTop: '10vh', backgroundColor: '#160C6E' }}>
                {
                    MenuLink.map((link, index) =>
                        <Box
                        textAlign='center'
                            as={motion.div}
                            whileTap={{ scale: 1 }}
                            whileHover={{ scale: 1.4 }}
                            onClick={onToggle}
                            key={index}
                            fontWeight='700'
                            fontFamily='Montserrat'
                            fontSize='16px'
                            color={selected == index ? 'white' : 'grey'}
                            py="2%"
                            px='15%'>           
                            {link}
                            <Divider py='2%'/>
                        </Box>
                    )
                }
            </Slide>
        </Flex>
    )
}
export default Navbar