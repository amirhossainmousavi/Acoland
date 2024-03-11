import { FC, useRef, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import ChevronIcon from '../../icons/chevron';
import Iframe from 'react-iframe' 
import useResponsive from '@/common/hooks/useResponsive';

interface VideoCarouselProps {
  videos: string[];
}

const VideoCarousel: FC<VideoCarouselProps> = ({ videos }) => {
    const [viewportRef, embla] = useEmblaCarousel({ direction: 'rtl' });
    const prevBtnRef = useRef<any>(null);
    const nextBtnRef = useRef<any>(null);
    const {isDesktop, isMobile} = useResponsive()

    useEffect(() => {
      if (!embla) return;
      const onSelect = () => {
        if (!embla) return;
      };
      embla.on('select', onSelect);
      onSelect();
      return () => {
        embla.off('select', onSelect);
      };
    }, [embla]);

    const scrollToNext =(index:any) =>{
      if (!embla) return;
      embla.scrollTo(index() + 1);
    }
    const scrollToPrev =(index:any) =>{
      if (!embla) return;
      embla.scrollTo(index() - 1);
    }
  return (
    <div className='flex flex-col md:flex-row justify-between gap-2'>   
    {isDesktop && ( 
    <button ref={prevBtnRef} onClick={() => scrollToPrev(embla?.selectedScrollSnap)}>
       <ChevronIcon dir='right' className='w-4 h-4 z-50 ml-2' />
    </button>
       )}
    <div className="embla">
      <div ref={viewportRef} className="embla__viewport flex justify-between">
        <div className="embla__container">
          {videos.map((video, index) => (
            <div className="embla__slide" key={index}>
               <iframe src={video} className='w-full h-[13.5rem] md:h-[21.3rem] rounded-lg' />
              </div>
            ))}
        </div>
      </div>
    </div>
    {isMobile && (
      <div className='flex gap-3 justify-center'>
          <button ref={prevBtnRef} onClick={() => scrollToPrev(embla?.selectedScrollSnap)}>
       <ChevronIcon dir='right' className='w-4 h-4 z-50 ml-2' />
    </button>
           <button ref={nextBtnRef} onClick={() => scrollToNext(embla?.selectedScrollSnap)}>
            <ChevronIcon dir='left' className='w-4 h-4 z-50 m-2' />
      </button> 
      </div>
    )}
    {isDesktop && (
      <button ref={nextBtnRef} onClick={() => scrollToNext(embla?.selectedScrollSnap)}>
            <ChevronIcon dir='left' className='w-4 h-4 z-50 m-2' />
      </button> 
    )}
    </div>
  );
};

export default VideoCarousel;
