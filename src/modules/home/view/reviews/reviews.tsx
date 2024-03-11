import Text from "@/common/component/atom/text"
import RateAndReview from "../../component/rate&review/rate&review"
import useResponsive from "@/common/hooks/useResponsive";
import { RateCardProps } from "@/common/component/atom/rateCard/rateCard";
import classNames from "@/common/utils/classNames";

interface ReviewsProps {
    title:string;
    description?:string,
    rateData: RateCardProps[],
    VideoData:string[],
    titleStyle?:string
}

export const Reviews = (props:ReviewsProps) => {
    const {VideoData,description,rateData,title,titleStyle} = props
    const {isDesktop} = useResponsive();
    return (
        <div className='p-2 md:p-0 flex justify-center w-full md:mt-8 '>
        <div className='w-full md:w-[85%] flex flex-col md:justify-between mt-4 gap-4'>
          <div className='gap-2 md:gap-3 text-center flex flex-col w-full'>
            <Text className={classNames('block text-[#35B34A]', titleStyle)} fontSize={isDesktop ? 'lg' : 'base'} fontWeight='bold'>{title}</Text>
            {!!description && (
            <Text className='block text-[#08004D] leading-7' fontSize={isDesktop ? 'base' : 'sm'}>{description}</Text>
            )}
          </div>
          <div className='md:mt-4 '>
              <RateAndReview rate={rateData} vidoes={VideoData} />
          </div>
        </div>
      </div>
    )
}

export default Reviews