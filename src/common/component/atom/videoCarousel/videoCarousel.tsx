import { FC, useRef, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay"; // import Autoplay
import ChevronIcon from "../../icons/chevron";
import useResponsive from "@/common/hooks/useResponsive";

interface VideoCarouselProps {
  videos: string[];
}

const VideoCarousel: FC<VideoCarouselProps> = ({ videos }) => {
  const [viewportRef, embla] = useEmblaCarousel(
    {
      direction: "rtl",
      loop: true,
    },
    [
      Autoplay({
        playOnInit: true,
        delay: 3000,
        stopOnFocusIn: true,
        stopOnInteraction: true,
        stopOnMouseEnter: true,
      }),
    ]
  );

  const prevBtnRef = useRef<any>(null);
  const nextBtnRef = useRef<any>(null);
  const { isDesktop, isMobile } = useResponsive();

  useEffect(() => {
    if (!embla) return;
    const onSelect = () => {
      if (!embla) return;
    };
    embla.on("select", onSelect);
    onSelect();
    return () => {
      embla.off("select", onSelect);
    };
  }, [embla]);

  const scrollToNext = () => {
    if (!embla) return;
    embla.scrollNext();
  };
  const scrollToPrev = () => {
    if (!embla) return;
    embla.scrollPrev();
  };

  return (
    <div className="flex flex-col md:flex-row justify-between gap-2 w-full h-full">
      {isDesktop && (
        <button ref={prevBtnRef} onClick={scrollToPrev}>
          <ChevronIcon dir="right" className="w-4 h-4 z-50 ml-2" />
        </button>
      )}
      <div className="embla w-full">
        <div ref={viewportRef} className="embla__viewport w-[100%] rounded-md">
          <div className="embla__container">
            {videos.map((video, index) => (
              <div className="embla__slide w-full" key={index}>
                <div className="w-full md:max-h-[23rem] rounded-md mt-4 md:mt-0">
                  <div style={{ width: "100%", height: "100%" }}>
                    <div
                      dangerouslySetInnerHTML={{ __html: video }}
                      className="w-full h-full"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {isMobile && (
        <div className="flex gap-3 justify-center">
          <button ref={prevBtnRef} onClick={scrollToPrev}>
            <ChevronIcon dir="right" className="w-4 h-4 z-50 ml-2" />
          </button>
          <button ref={nextBtnRef} onClick={scrollToNext}>
            <ChevronIcon dir="left" className="w-4 h-4 z-50 m-2" />
          </button>
        </div>
      )}
      {isDesktop && (
        <button ref={nextBtnRef} onClick={scrollToNext}>
          <ChevronIcon dir="left" className="w-4 h-4 z-50 m-2" />
        </button>
      )}
    </div>
  );
};

export default VideoCarousel;
