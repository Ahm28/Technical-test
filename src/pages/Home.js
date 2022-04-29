import { Box } from "@mui/system";
import React from "react";
import About from "../components/About/About";
import SearchAppBar from "../components/AppBar/SearchAppBar";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

export default function Home() {
  return (
    <>
      <Box>
        <SearchAppBar />
        <Header />
        <About />
        <Contact />
      </Box>
      <Footer />
    </>
  );
}
