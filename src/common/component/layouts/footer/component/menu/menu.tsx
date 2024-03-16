import Text from "@/common/component/atom/text";
import PageList from "../../../header/data/pages";
import Link from "next/link";
import classNames from "@/common/utils/classNames";
import PhoneIcon from "@/common/component/icons/phone";
import LocationImage from "@/common/assets/location-white.png";
import EmailImage from "@/common/assets/mail_white.png";
import useResponsive from "@/common/hooks/useResponsive";
import Image from "next/image";

export const Menu = () => {
  const { isDesktop } = useResponsive();
  return (
    <div className="flex gap-4 w-full md:w-[50%] mt-4">
      <div className="md:w-[30%] w-2/4 flex flex-col gap-3 mr-6">
        <Text
          className="block text-white"
          fontSize={isDesktop ? "lg" : "base"}
          fontWeight="bold"
        >
          دسترسی های سریع
        </Text>
        <nav className="flex flex-col justify-start w-full">
          <ul className="flex flex-col justify-start mb-3">
            <li>
              {PageList().map((item: any, index: number) => (
                <Link
                  prefetch={false}
                  key={index}
                  href={item.link ?? "#"}
                  className={classNames(
                    "block text-[0.9rem] font-medium text-start cursor-pointer my-2 text-white"
                  )}
                >
                  {item.title}
                </Link>
              ))}
            </li>
          </ul>
        </nav>
      </div>
      <div className="w-[60%] flex flex-col gap-3">
        <Text
          className="block text-white"
          fontSize={isDesktop ? "lg" : "base"}
          fontWeight="bold"
        >
          آدرس و اطلاعات تماس
        </Text>
        <nav className="flex flex-col justify-start w-full mt-3">
          <ul className="flex flex-col items-start justify-start mb-1 gap-4">
            <li
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => location.assign("tel:02191099118")}
            >
              <PhoneIcon /> ۰۲۱۹۱۰۹۹۱۱۸
            </li>
            <li
              className="flex gap-3 items-center cursor-pointer"
              onClick={() => location.assign("mailto:info@acoland.ir")}
            >
              <Image
                src={EmailImage}
                alt="email"
                width={30}
                height={30}
                className="fill-white w-6 h-6"
              />{" "}
              <Text className="text-white" fontSize="sm">
                info@acoland.ir
              </Text>
            </li>
            <li
              className="flex gap-3 items-start cursor-pointer"
              onClick={() =>
                location.assign("https://maps.app.goo.gl/jnNBgafYfoy3PRGZ8")
              }
            >
              <Image
                src={LocationImage}
                alt="location"
                width={20}
                height={20}
                className="w-6 h-6 mt-1"
              />{" "}
              <Text className="text-white text-[0.8rem]  block leading-7">
                آدرس دفتر: تهران، شهرک راه‌آهن، بلوار علامه قزوینی، کنتراست مال
                (برج یاس 3)، طبقه 5، واحد 7
              </Text>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Menu;
