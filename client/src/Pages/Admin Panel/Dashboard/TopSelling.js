import React from "react";

//Import Coursel Component
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";

//Import Style in page End
import "pure-react-carousel/dist/react-carousel.es.css";

//Top Products
const Topp = [
  {
    title: "Curry Powder",
    image:
      "https://images.unsplash.com/photo-1581600140682-d4e68c8cde32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
    to: "/",
    index: 0,
  },
  {
    title: "Garlic",
    image:
      "https://images.unsplash.com/photo-1540420828642-fca2c5c18abe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=382&q=80",
    to: "/",
    index: 1,
  },
  {
    title: "Coffee",
    image:
      "https://images.unsplash.com/photo-1459755486867-b55449bb39ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
    to: "/",
    index: 2,
  },
  {
    title: "Tea",
    image:
      "https://images.unsplash.com/photo-1551540827-6c8ae1aaedbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    to: "/",
    index: 3,
  },
  {
    title: "Clothe Art",
    image:
      "https://images.unsplash.com/photo-1632649027900-389e810204e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
    to: "/",
    index: 4,
  },
  {
    title: "Green Tea",
    image:
      "https://images.unsplash.com/photo-1582793988951-9aed5509eb97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
    to: "/",
    index: 5,
  },
];

export default function TopSelling() {
  return (
    <div className="2xl:mx-auto 2xl:container flex justify-center">
      <div className="py-12 w-full ">
        <h1 className="pt-2 pb-7 text-black-500  font-bold text-lg text-center">
          Top selling Products
        </h1>
        {/* Carousel for Medium and Large-Sized Screen */}
        <CarouselProvider
          className="relative hidden sm:block"
          naturalSlideWidth={100}
          isIntrinsicHeight={true}
          totalSlides={5}
          visibleSlides={1}
          step={1}
          infinite={true}
          currentSlide={1}
        >
          <div className="js-flickity flex justify-center items-center">
            <ButtonBack
              role="button"
              aria-label="slide backward"
              className="w-12 h-12 md:w-14 md:h-14 rounded-full flex justify-center items-center bg-white border border-gray-300 hover:bg-gray-400 absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
              id="prev"
            >
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 1L1 7L7 13"
                  stroke="black"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonBack>
            {/* Map Coursel */}
            <Slider className="carousel__sliderLarge">
              {Topp.map((product) => {
                return (
                  <Slide
                    className="carousel__inner-slideLarge"
                    index={product.index}
                  >
                    <div className="gallery-cell w-full h-full">
                      <div className="relative w-full h-full lg:block hidden">
                        <img
                          src={product.image}
                          alt="sitting area"
                          className="object-center object-cover w-full h-full"
                        />
                        <div className="pl-6 pb-6 lg:pl-8 lg:pb-8 absolute left-0 bottom-0">
                          <h1 className="text-xl leading-5 lg:text-2xl lg:leading-normal font-medium text-white">
                            {product.title}
                          </h1>
                        </div>
                      </div>
                      <div className="relative w-full h-full lg:hidden">
                        <img
                          src={product.image}
                          alt="sitting area"
                          className="object-center object-cover w-full h-full"
                        />
                        <div className="pl-6 pb-6 lg:pl-8 lg:pb-8 absolute left-0 bottom-0">
                          <h1 className="text-xl leading-5 lg:text-2xl lg:leading-normal font-medium text-white">
                            {product.title}
                          </h1>
                        </div>
                      </div>
                    </div>
                  </Slide>
                );
              })}
            </Slider>
            <ButtonNext
              role="button"
              aria-label="slide forward"
              className="w-12 h-12 md:w-14 md:h-14 rounded-full flex justify-center items-center bg-white border border-gray-300 hover:bg-gray-400 absolute z-30 right-0 mr-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
              id="next"
            >
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L7 7L1 13"
                  stroke="black"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonNext>
          </div>
        </CarouselProvider>
      </div>

      {/* Carousel for Small-Sized Screen
                <CarouselProvider className="relative block sm:hidden" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={5} visibleSlides={1} step={1} infinite={true}>
                    <div className="js-flickity flex justify-center items-center">
                        <ButtonBack role="button" aria-label="slide backward" className="w-12 h-12 md:w-14 md:h-14 rounded-full flex justify-center items-center bg-white border border-gray-300 hover:bg-gray-400 absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonBack>
                        <Slider>
                            <Slide index={0}>
                                <div className="gallery-cell lg:mr-7 mr-6 lg:w-1/2 sm:w-96 w-full h-full">
                                    <div className="relative w-full h-full lg:block hidden">
                                        <img src="https://i.ibb.co/VSsN4Jt/carousel-2.png" alt="sitting area" className="object-center object-cover w-full h-full" />
                                        <div className="pl-6 pb-6 lg:pl-8 lg:pb-8 absolute left-0 bottom-0">
                                            <h1 className="text-xl leading-5 lg:text-2xl lg:leading-normal font-medium text-white">Lounge Interior</h1>
                                        </div>
                                    </div>
                                    <div className="relative w-full h-full lg:hidden">
                                        <img src="https://i.ibb.co/tMB5CZW/behzad-ghaffarian-nh-Wg-ZNV85-LQ-unsplash-1-3-1.png" alt="sitting area" className="object-center object-cover w-full h-full" />
                                        <div className="pl-6 pb-6 lg:pl-8 lg:pb-8 absolute left-0 bottom-0">
                                            <h1 className="text-xl leading-5 lg:text-2xl lg:leading-normal font-medium text-white">Lounge Interior</h1>
                                        </div>
                                    </div>
                                </div>
                            </Slide>
                            <Slide index={1}>
                                <div className="gallery-cell lg:mr-7 mr-6 lg:w-1/2 sm:w-96 w-full h-full">
                                    <div className="relative w-full h-full lg:block hidden">
                                        <img src="https://i.ibb.co/phw8yGZ/sven-brandsma-Qz6-Zx4-Rjd-D8-unsplash-1.png" alt="chairs" className="object-center object-cover w-full h-full" />
                                        <div className="pl-6 pb-6 lg:pl-8 lg:pb-8 absolute left-0 bottom-0">
                                            <h1 className="text-xl leading-5 lg:text-2xl lg:leading-normal font-medium text-white">Lounge Interior</h1>
                                        </div>
                                    </div>
                                    <div className="relative w-full h-full lg:hidden">
                                        <img src="https://i.ibb.co/g74VYR2/Group-46.png" alt="chairs" className="object-center object-cover w-full h-full" />
                                        <div className="pl-6 pb-6 lg:pl-8 lg:pb-8 absolute left-0 bottom-0">
                                            <h1 className="text-xl leading-5 lg:text-2xl lg:leading-normal font-medium text-white">Lounge Interior</h1>
                                        </div>
                                    </div>
                                </div>
                            </Slide>
                            <Slide index={2}>
                                <div className="gallery-cell lg:mr-7 mr-6 lg:w-1/2 sm:w-96 w-full h-full">
                                    <div className="relative w-full h-full lg:block hidden">
                                        <img src="https://i.ibb.co/92ZYJyK/behzad-ghaffarian-nh-Wg-ZNV85-LQ-unsplash-1-1.png" alt="chair" className="object-center object-cover w-full h-full" />
                                        <div className="pl-6 pb-6 lg:pl-8 lg:pb-8 absolute left-0 bottom-0">
                                            <h1 className="text-xl leading-5 lg:text-2xl lg:leading-normal font-medium text-white">Lounge Interior</h1>
                                        </div>
                                    </div>
                                    <div className="relative w-full h-full lg:hidden">
                                        <img src="https://i.ibb.co/372ryYP/sven-brandsma-Qz6-Zx4-Rjd-D8-unsplash-3-1.png" alt="chair" className="object-center object-cover w-full h-full" />
                                        <div className="pl-6 pb-6 lg:pl-8 lg:pb-8 absolute left-0 bottom-0">
                                            <h1 className="text-xl leading-5 lg:text-2xl lg:leading-normal font-medium text-white">Lounge Interior</h1>
                                        </div>
                                    </div>
                                </div>
                            </Slide>
                            <Slide index={3}>
                                <div className="gallery-cell lg:mr-7 mr-6 lg:w-1/2 sm:w-96 w-full h-full">
                                    <div className="relative w-full h-full lg:block hidden">
                                        <img src="https://i.ibb.co/92ZYJyK/behzad-ghaffarian-nh-Wg-ZNV85-LQ-unsplash-1-1.png" alt="chair" className="object-center object-cover w-full h-full" />
                                        <div className="pl-6 pb-6 lg:pl-8 lg:pb-8 absolute left-0 bottom-0">
                                            <h1 className="text-xl leading-5 lg:text-2xl lg:leading-normal font-medium text-white">Lounge Interior</h1>
                                        </div>
                                    </div>
                                    <div className="relative w-full h-full lg:hidden">
                                        <img src="https://i.ibb.co/372ryYP/sven-brandsma-Qz6-Zx4-Rjd-D8-unsplash-3-1.png" alt="chair" className="object-center object-cover w-full h-full" />
                                        <div className="pl-6 pb-6 lg:pl-8 lg:pb-8 absolute left-0 bottom-0">
                                            <h1 className="text-xl leading-5 lg:text-2xl lg:leading-normal font-medium text-white">Lounge Interior</h1>
                                        </div>
                                    </div>
                                </div>
                            </Slide>
                            <Slide index={4}>
                                <div className="gallery-cell lg:mr-7 mr-6 lg:w-1/2 sm:w-96 w-full h-full">
                                    <div className="relative w-full h-full lg:block hidden">
                                        <img src="https://i.ibb.co/92ZYJyK/behzad-ghaffarian-nh-Wg-ZNV85-LQ-unsplash-1-1.png" alt="chair" className="object-center object-cover w-full h-full" />
                                        <div className="pl-6 pb-6 lg:pl-8 lg:pb-8 absolute left-0 bottom-0">
                                            <h1 className="text-xl leading-5 lg:text-2xl lg:leading-normal font-medium text-white">Lounge Interior</h1>
                                        </div>
                                    </div>
                                    <div className="relative w-full h-full lg:hidden">
                                        <img src="https://i.ibb.co/372ryYP/sven-brandsma-Qz6-Zx4-Rjd-D8-unsplash-3-1.png" alt="chair" className="object-center object-cover w-full h-full" />
                                        <div className="pl-6 pb-6 lg:pl-8 lg:pb-8 absolute left-0 bottom-0">
                                            <h1 className="text-xl leading-5 lg:text-2xl lg:leading-normal font-medium text-white">Lounge Interior</h1>
                                        </div>
                                    </div>
                                </div>
                            </Slide>
                        </Slider>
                        <ButtonNext role="button" aria-label="slide forward" className="w-12 h-12 md:w-14 md:h-14 rounded-full flex justify-center items-center bg-white border border-gray-300 hover:bg-gray-400 absolute z-30 right-0 mr-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800" id="next">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L1 13" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonNext>
                    </div>
                </CarouselProvider> */}

      <style>
        {`
                    .gallery-cell {
                        height: 386px;
                        padding-right:15px;
                    }
                    @media (min-width: 300px) and (max-width: 420px) {
                        .gallery-cell {
                            height: 286px !important;
                            
                        }
                    }
                    
                    @media (max-width: 640px) {
                        .gallery-cell {
                            padding-right:0;
                        }
                    }

                    .carousel__sliderLarge {
                        padding-left: 20%;
                        padding-right: 20%;
                    }

                    /* gives us the illusion of spaces between the slides */
                    .carousel__inner-slideLarge {
                        width: calc(100% - 20px);
                        height: calc(100% - 20px);
                        left: 10px;
                        top: 10px;
                        
                    }
                `}
      </style>
    </div>
  );
}
