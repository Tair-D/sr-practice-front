import React, { useState } from 'react';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import PropTypes from 'prop-types';

function Carousel(links) {
  return (
    <div>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={50}
        totalSlides={links.links.length}
      >
        <Slider>
          {links.links.map((link, index) => {
            return (
              <Slide index={index}>
                <iframe className="w-full h-full" src={link.link}></iframe>
              </Slide>
            );
          })}
        </Slider>
        <span
          style={{
            position: 'relative',
            top: '-48px',
            zIndex: 1,
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <ButtonBack
            type="button"
            className="relative inline-flex items-center px-2 py-2 bg-red-600 text-sm leading-5 font-medium text-white hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150"
          >
            <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </ButtonBack>
          <ButtonNext
            type="button"
            className="-ml-px relative inline-flex items-center px-2 py-2 bg-red-600 text-sm leading-5 font-medium text-white hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150"
          >
            <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </ButtonNext>
        </span>
        {/* <p className="absolute flex justify-end mr-10 pb-8">1<span className="text-gray-500">/8</span></p> */}
      </CarouselProvider>
    </div>
  );
}

Carousel.propTypes = {
  links: PropTypes.array,
};

export default Carousel;
