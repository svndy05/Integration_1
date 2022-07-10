import { Box, Stack, Flex, HStack, Image, useControllableState } from "@chakra-ui/react"
import { motion} from 'framer-motion'
const Sidebar = () => {
    const SidebarLink: String[]= ['Gear VR', 'Design', 'Display', 'Experience', 'Spec', 'Gallery']
    const [selected, setSelected] = useControllableState({defaultValue:0})
    return (
        <Flex direction='column' w='12vw' h='100vh' justify='space-between' pl='5%' py='1.5%'>
            <Box>
                <Box boxSize='100%'>
                    <Image
                        onClick={()=>console.log('test')}
                        src='/logo.svg'
                    />
                </Box>
            </Box>
            <Stack spacing='19px' align='start'>
                {
                    SidebarLink.map((link, index) =>
                        <Box
                            as={motion.button}
                            whileTap={{ scale: 1 }}
                            whileHover={{ scale: 1.4}}
                            onClick={() => setSelected(index)}
                            key={index}
                            fontWeight='700'
                            fontFamily='Montserrat'
                            fontSize='16px'
                            color={selected == index ? 'white' : 'grey'}
                        >
                            {link}  
                        </Box>
                    )
                }
            </Stack>
            <Box>
                <HStack spacing='24px'>
                    <Image
                        src='/facebook.svg' />
                    <Image
                        src='/twitter.svg' />
                </HStack>
            </Box>
        </Flex>
    )
}
export default Sidebar