import Head from "next/head";
import { Heading } from "@chakra-ui/react";
import LandingPage from "@/components/LandingPage";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";



export default function Home() {
  return (
    <>
      <Head>
        <title>WEBSITE KPU CRUD</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <LandingPage/>
      <Footer/>
      
    </>

  )
}
