import { useState } from 'react';
import ModalLayout from '../modalLayout';
import { ImageContainer, iconSvgPath } from '@/components';

export default function ProjectGalleryModal({ onClose, projectSlides, projectTitle }) {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const goToPrevious = () => {
    setActiveSlideIndex((prev) =>
      prev === 0 ? projectSlides.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setActiveSlideIndex((prev) =>
      prev === projectSlides.length - 1 ? 0 : prev + 1
    );
  };

  const currentSlide = projectSlides[activeSlideIndex];

  return (
    <ModalLayout onClose={onClose}>
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-lg shadow-2xl w-[90%] max-w-[600px] mt-12 tablet:max-w-full"
      >
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10"
        >
          <img src={'/svg/close.svg'} className="w-7 h-7 cursor-pointer" alt="close" />
        </button>

        <button onClick={onClose} className="flex justify-end w-full pr-3">
               <img src={'/svg/cancel-red.svg'} className="w-8 h-8 mt-4" onClick={onClose}/>
            </button>
        <div className="px-8 pt-8">
            
          <h2 className="text-lg font-semibold text-gray-800 tablet:text-lg">
            {projectTitle}
          </h2>
        </div>

        <div className="relative mt-6 px-8">
          <div className="relative w-full h-[300px] tablet:h-[250px] rounded-md overflow-hidden bg-gray-200">
            <ImageContainer
              src={currentSlide.img}
              className="w-full h-full"
              imgClass="object-cover object-center"
              alt={currentSlide.caption}
            />

            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-all z-10"
              aria-label="Previous slide"
            >
              <img src={'/svg/caret-left.svg'} className="w-6 h-6" alt="previous" />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-all z-10"
              aria-label="Next slide"
            >
              <img src={'/svg/caret-left.svg'} className="w-6 h-6" alt="next" style={{transform:'rotate(180deg)'}}/>
            </button>
          </div>


          <p className="mt-4 text-center text-gray-700 text-sm tablet:text-xs">
            {currentSlide.caption}
          </p>

          <div className="flex justify-center gap-2 mt-6 pb-8">
            {projectSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlideIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                  index === activeSlideIndex
                    ? 'bg-green w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>


          <div className="text-center text-xs text-gray-500 pb-6">
            {activeSlideIndex + 1} / {projectSlides.length}
          </div>
        </div>
      </div>
    </ModalLayout>
  );
}
