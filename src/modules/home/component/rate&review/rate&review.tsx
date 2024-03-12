import RateCard from "@/common/component/atom/rateCard";
import { RateCardProps } from "@/common/component/atom/rateCard/rateCard";
import VideoCarousel from "@/common/component/atom/videoCarousel";

interface RateAndReviewProps {
  vidoes: string[];
  rate: RateCardProps[];
}

export const RateAndReview = (props: RateAndReviewProps) => {
  const { rate, vidoes } = props;
  return (
    <>
      <div className="flex flex-col-reverse md:flex-row w-full h-full gap-4">
        <div className="flex md:flex-col overflow-x-auto gap-4 md:w-2/4 w-full  overflow-y-auto flex-none md:h-[21rem]">
          {rate?.map((item: RateCardProps, index) => (
            <RateCard
              key={index}
              description={item.description}
              name={item.name}
              title={item.title}
              image={item.image}
            />
          ))}
        </div>
        <div className="md:w-[60%] w-full h-full flex items-start">
          <VideoCarousel videos={vidoes} />
        </div>
      </div>
    </>
  );
};

export default RateAndReview;
