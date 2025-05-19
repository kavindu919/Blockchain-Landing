import Image from "next/image";
import Navbar from "./components/Navbar";
import Head from "next/head";
import Homelayout from "./components/Homelayout";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Responsive Next.js Layout</title>
        <meta name="description" content="A responsive layout example" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-center px-4 py-8 md:flex-row">
        <Homelayout />
      </main>
      <Footer />
      <div />
    </>
  );
}
