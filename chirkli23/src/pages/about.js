import AboutUs from "@/components/about/AboutUs"
import Head from "next/head"

export default function About() {
  return(
    <>
    <Head>
    <title>Chirkli-Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://cdn.shopify.com/s/files/1/0607/7287/6512/files/favicon_d5c9515a-64b4-47af-9ef1-236eddcc39a8_16x16.png?v=1637219740" />
    </Head>
    <main>
        <h1>
            Lorem ipsu dolor
        </h1>
        <AboutUs/>
    </main>
    </>
  )
}