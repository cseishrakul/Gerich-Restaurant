import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import {
  Header,
  AboutUs,
  Chef,
  FindUs,
  Footer,
  Gallery,
  Intro,
  Laurels,
  SpecialMenu,
} from "./container/";

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <Intro />
    <Laurels />
    <Gallery />
    <FindUs />
    <Footer />
  </div>
);

export default App;
