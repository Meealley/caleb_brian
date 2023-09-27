import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronLeft,
  faCircleChevronRight,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

const galleryImage = [
  {
    img: "https://calbrian.carrd.co/assets/images/image01.jpg?v=0d478f15",
  },
  {
    img: "https://calbrian.carrd.co/assets/images/image05.jpg?v=0d478f15",
  },
  {
    img: "https://calbrian.carrd.co/assets/images/image02.jpg?v=0d478f15",
  },
  {
    img: "https://calbrian.carrd.co/assets/images/image03.jpg?v=0d478f15",
  },
  {
    img: "https://davider.carrd.co/assets/images/gallery03/05543dfe.jpg?v=67180c83",
  },
  {
    img: "https://davider.carrd.co/assets/images/gallery04/613bcaa2.jpg?v=67180c83",
  },
];

const SlideGallery = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = (index) => {
    setSlideNumber(index);
    setOpenModal(true);
  };

  // Close Modal
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  // Previous Image
  const prevSlide = () => {
    slideNumber === 0
      ? setSlideNumber(galleryImage.length - 1)
      : setSlideNumber(slideNumber - 1);
  };

  // Next Image
  const nextSlide = () => {
    slideNumber + 1 === galleryImage.length
      ? setSlideNumber(0)
      : setSlideNumber(slideNumber + 1);
  };

  return (
    <>
      <div>
        {openModal && (
          <div className="fixed top-0 bottom-0 left-0 right-0 z-[99] flex bg-dark/75 items-center justify-center w-full h-auto">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="fixed cursor-pointer opacity-60 text-light z-[999] top-[40px] right-[40px] text-3xl hover:opacity-100 font-bold"
              onClick={handleCloseModal}
            />

            <FontAwesomeIcon
              icon={faCircleChevronLeft}
              className="fixed cursor-pointer opacity-60 text-light z-[999] top-[50%] translate-y-[-50%] left-[40px] hover:opacity-100 font-bold"
              onClick={prevSlide}
            />

            <FontAwesomeIcon
              icon={faCircleChevronRight}
              className="fixed cursor-pointer opacity-60 text-light z-[999] top-[50%] translate-y-[-50%] right-[40px] hover:opacity-100 font-bold"
              onClick={nextSlide}
            />

            <div className="w-full mx-4 h-full my-4 flex items-center justify-center">
              <img
                src={galleryImage[slideNumber].img}
                alt="slide"
                className="h-[70%]"
              />
            </div>
          </div>
        )}

        <div className="flex flex-wrap md:flex-col gap-[10px] items-center justify-center lg:mx-[24px] md:mx-[17px]">
          {galleryImage &&
            galleryImage.map((slide, index) => {
              return (
                <div
                  className="w-[200px] md:w-full items-center cursor-pointer"
                  key={index}
                  onClick={() => handleOpenModal(index)}
                >
                  <img
                    className="w-full max-h-[300px]"
                    src={slide.img}
                    alt="sl"
                  />
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default SlideGallery;
