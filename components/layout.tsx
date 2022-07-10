import Head from "next/head"
import { Box, Flex, Show, Hide } from "@chakra-ui/react"
import SideBar from "../components/sidebar"
import NavBar from "./navbar"

const Main = ({ children, router }) => {
    return (
        <Flex bg="#160C6E" w='100%' h={{xl:'100vh'}} direction={{base:'column',xl:'row'}} >
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title> 100 UI challenge</title>
            </Head>
            <Hide below="xl">
                <SideBar />
            </Hide>
            <Show below='xl'>
                <NavBar />
            </Show>
            <Box w='100vw' overflow={{base:'auto',xl:'hidden'}} h='100vh'>
                {children}
            </Box>
        </Flex>
    )
}
export default Main;