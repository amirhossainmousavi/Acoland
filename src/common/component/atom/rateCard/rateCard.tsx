import classNames from "@/common/utils/classNames";
import Image from "next/image";
import Avatar from "../avatar";
import Text from "../text";
import useResponsive from "@/common/hooks/useResponsive";

export interface RateCardProps {
  image?: string;
  name: string;
  description: string;
  title: string;
  className?: string;
}

export const RateCard = (props: RateCardProps) => {
  const { description, name, title, image, className } = props;
  const { isDesktop } = useResponsive();
  return (
    <>
      <div
        className={classNames(
          className,
          "bg-[#F9F9F9] items-center flex w-full shadow-md rounded-lg p-4 flex-none"
        )}
      >
        <div className="w-full flex flex-col min-h-[13rem] justify-center gap-3">
          <div className="flex gap-3 items-center">
            <Avatar src={image} width={60} height={60} name={name} />
            <div className="flex flex-col gap-3">
              <Text
                className="block text-[#35B34A]"
                fontSize={isDesktop ? "lg" : "base"}
              >
                {name}
              </Text>
              <Text
                className="block text-[#08004D]"
                fontSize={isDesktop ? "base" : "sm"}
              >
                {title}
              </Text>
            </div>
          </div>
          <Text className="block leading-7 text-[#08004D]" fontSize="sm">
            {description}
          </Text>
        </div>
      </div>
    </>
  );
};

export default RateCard;
