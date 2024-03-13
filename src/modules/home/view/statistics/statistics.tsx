import Text from "@/common/component/atom/text";
import StatisticsData from "@/modules/home/data/statistics";
import { StatisticsCard } from "../../component/statisticsCard/statisticsCard";
import useResponsive from "@/common/hooks/useResponsive";

export const Statistics = () => {
  const { isDesktop } = useResponsive();
  return (
    <div className="flex p-2 md:p-0 justify-center w-full md:mt-8 my-6 bg-[#F9F9F9] min-h-[15rem]">
      <div className="w-full md:w-[85%] flex flex-col md:items-center md:justify-between my-4 md:mt-8 gap-4">
        <div className="gap-2 md:gap-3 flex flex-col w-full items-center">
          <Text
            className="block text-[#08004D]"
            fontSize={isDesktop ? "lg" : "base"}
            fontWeight="bold"
          >
            آمار و دستاوردهای آکولند
          </Text>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 w-full mt-4 md:mt-6">
            {StatisticsData().map((item: any) => (
              <StatisticsCard
                key={item.id}
                title={item.title}
                description={item.description}
                image={item.image}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Statistics;
