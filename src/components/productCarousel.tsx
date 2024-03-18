import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./carousel";
import { EmblaCarouselType } from "embla-carousel";
import React, { useCallback } from "react";
// import pepper from "./img/pepper.png";
// import doughnut from "./img/doughnut.jpg";
// import goeyDoughnut from "./img/goeyDoughnut.jpg";

const ProductCarousel = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [slidesInView, setSlidesInView] = React.useState(1);

  //   useEffect(() => {
  //     if (emblaApi) emblaApi.on("slidesInView", logSlidesInView);
  //   }, [emblaApi, logSlidesInView]);

  return (
    <div className="px-52">
      <Carousel
        //   setApi={api}

        opts={{
          loop: true,
          slidesToScroll: 1,
        }}
      >
        <CarouselContent className="justify-center">
          <CarouselItem className="md:basis-1/4 lg:basis-1/4">
            <img src={require("../img/wildDoughnut.jpg")} />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/4">
            <img src={require("../img/fancyDoughnut.jpg")}></img>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/4">
            <img src={require("../img/goeyDoughnut.jpg")} />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/4">
            <img src={require("../img/goeyDoughnut.jpg")} />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );

  // ...
};
export default ProductCarousel;
