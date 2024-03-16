import Avatar from "@/common/component/atom/avatar";
import Text from "@/common/component/atom/text";
import PhoneIcon from "@/common/component/icons/phone";
import { useRouter } from "next/router";

interface RepresentationcardProps {
  image?: string;
  name: string;
  address?: string;
  phonNumber: string;
  province: string;
  city: string;
  slug: string;
}

export const Representationcard = (props: RepresentationcardProps) => {
  const { city, name, phonNumber, province, address, image, slug } = props;
  const router = useRouter();
  return (
    <div className="w-full py-4 items-center flex border-solid border-b-2">
      <div
        onClick={() => router.push(`/representative/${slug}`)}
        className="w-[25%] md:w-[20%] flex justify-center items-center gap-3 cursor-pointer"
      >
        <Avatar src={image} name={name} />
        <Text fontSize="sm">{name}</Text>
      </div>
      <div className="w-[10%] flex justify-center items-center">
        <Text fontSize="sm">{province}</Text>
      </div>
      <div className="w-[10%] flex justify-center items-center">
        <Text fontSize="sm">{city}</Text>
      </div>
      <div className="w-[40%] flex justify-center items-center">
        <Text fontSize="sm">{address}</Text>
      </div>
      <div className="w-[20%] flex justify-center items-center ">
        <Text fontSize="sm">{phonNumber}</Text>
        <div
          onClick={() => location.assign(`tel:${phonNumber}`)}
          className="bg-[#35B34A] rounded-lg p-1 cursor-pointer relative -left-3 md:-left-14"
        >
          <PhoneIcon className="fill-white w-6 h-6" />
        </div>
      </div>
    </div>
  );
};

export default Representationcard;
