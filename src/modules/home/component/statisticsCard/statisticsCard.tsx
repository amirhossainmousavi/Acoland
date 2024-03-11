import Text from "@/common/component/atom/text";
import useResponsive from "@/common/hooks/useResponsive";
import Image from "next/image";

interface StatisticsCardProps {
    image: string;
    title: string;
    description: string
}

export const StatisticsCard = (props: StatisticsCardProps) =>{
    const {description,title,image} = props;
    const {isDesktop} = useResponsive()
    return(<>
        <div className="w-3/4 md:w-3/12 rounded-lg bg-[#0C0349] md:min-h-[14rem] h-[16rem]  p-2">
            <div className="w-full flex border-solid flex-col justify-center items-center text-center p-3 bg-[#0C0349] h-full border-[#67B058] border-2 rounded-lg">
                <Image src={image} alt={title} width={60} height={60} className="mb-4"/>
                <Text fontSize={isDesktop ? 'lg' : 'base'} fontWeight="bold" className="block text-white">{title}</Text>
                <Text fontSize={isDesktop ? 'base' : 'sm'} fontWeight="medium" className="leading-7 block text-white">{description}</Text>
            </div>
        </div>
    </>)
}

export default StatisticsCard