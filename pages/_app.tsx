import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import Layout from "../components/layout"

const MyApp = ({ Component, pageProps,router }:AppProps) => {
    return (
      <ChakraProvider>
        <Layout router={router}>
            <Component {...pageProps} key={router.route}/>
        </Layout>
      </ChakraProvider>
    )
  }  
  export default MyApp