import React, { useEffect, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import classNames from '@/common/utils/classNames';

interface ImageCarouselProps {
  images: string[];
  className?:string
}

export const ImageCarousel: React.FC<ImageCarouselProps> = ({ images,className }) => {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [viewportRef, embla] = useEmblaCarousel({ direction: 'rtl' });

  useEffect(() => {
    if (!!embla && carouselRef.current) {
      return
    }
  }, [embla, images]);

  return (
    <div ref={carouselRef} className='h-full'>
          <div className="embla h-full">
      <div ref={viewportRef} className="embla__viewport flex justify-between h-full">
        <div className="embla__container h-full">
          {images?.map((image, index) => (
            <div className="embla__slide" key={index}>
               <img key={index} src={image} alt={`Slide ${index}`} className={classNames('w-full h-full rounded-lg', className)} />
              </div>
            ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default ImageCarousel;