import React from "react";
import logo from "./logo.svg";
import pepper from "./img/pepper.png";
import doughnut from "./img/doughnut.jpg";

import "./output.css";
import { Button } from "./components/button";
import NavBar from "./components/navbar";
import CardDemo from "./components/productCard";
import Test from "./components/test";
import Hero from "./components/hero";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./components/carousel";
import goeyDoughnut from "./img/goeyDoughnut.jpg";

function App() {
  return (
    <div className="h-auto w-auto">
      <NavBar />
      <Hero />
      {/* <div className="m-h-full -z-10 min-w-full bg-[url('./img/doughnut.jpg')] pt-10"></div> */}

      <div>dada</div>

      <Carousel
        className=""
        opts={{
          loop: true,
          slidesToScroll: 3,
          dragFree: true,
        }}
      >
        <CarouselContent className="justify-center">
          <CarouselItem className="md:basis-1/4 lg:basis-1/4">
            <img src={require("./img/wildDoughnut.jpg")} />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/4">
            <img src={require("./img/fancyDoughnut.jpg")}></img>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/4">
            <img src={require("./img/goeyDoughnut.jpg")} />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/4">
            <img src={require("./img/goeyDoughnut.jpg")} />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      {/* <p className="z-10">hello</p> */}
    </div>
  );
}

export default App;
