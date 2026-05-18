import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Footer from "./components/footer";
import OutputField from "./components/output";
import { button } from "./components/button";
import normal from "./pages/normal";
import pages from "next/dist/build/templates/pages";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    
 
    {button()}
    <Footer />
    </>
  );
}
