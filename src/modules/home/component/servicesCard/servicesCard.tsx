import Text from "@/common/component/atom/text";
import classNames from "@/common/utils/classNames";
import Image from "next/image";

interface ServicesCardProps {
  image: string;
  title: string;
  description: string;
  calssName?: string;
}

export const ServicesCard = (props: ServicesCardProps) => {
  const { description, title, image, calssName } = props;
  return (
    <div
      className={classNames(
        "bg-[#F9F9F9] w-full md:w-[33.33%] min-h-[13rem] shadow-lg rounded-lg p-4",
        { calssName }
      )}
    >
      <div className="flex items-center gap-3 justify-between">
        <Text className="text-[#08004D]" fontSize="base" fontWeight="bold">
          {title}
        </Text>
        <Image
          src={image}
          alt={title}
          width={60}
          height={60}
          className="block w-12 h-12 !bg-white rounded-[50%]"
        />
      </div>
      <Text fontSize="sm" className="leading-7 w-[70%] text-[#08004D]">
        {description}
      </Text>
    </div>
  );
};

export default ServicesCard;
