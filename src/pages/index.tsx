import { ReactElement, useState } from "react";
import type { NextPageWithLayout } from "./_app";
import { LayoutWithHeaderAndFooter } from "@/common/component/layouts/layoutWithHeaderAndFooter";
import Text from "@/common/component/atom/text";
import Button from "@/common/component/atom/button";
import ServicesCard from "@/modules/home/component/servicesCard";
import ServicesData from "@/modules/home/data/services";
import VideoData from "@/modules/home/data/vidoe.json";
import getConfig from "next/config";
import Image from "next/image";
import RevenumeImage from "@/common/assets/revenue.png";
import LegalImage from "@/common/assets/Legal.png";
import SalePriceImage from "@/common/assets/SalePrice.png";
import useResponsive from "@/common/hooks/useResponsive";
import CommunityData from "@/modules/home/data/community";
import BlogData from "@/modules/home/data/blog.json";
import TextField from "@/common/component/atom/textField";
import Blogs from "@/modules/home/component/blogs";
import Representation from "@/modules/home/view/representation";
import Support from "@/modules/home/view/support";
import Statistics from "@/modules/home/view/statistics";
import Reviews from "@/modules/home/view/reviews";
import Logos from "@/modules/home/data/logo";
import Link from "next/link";
import { phoneNumberValidator } from "@persian-tools/persian-tools";
import toast from "react-hot-toast";
import ProjectCard from "@/common/component/atom/projectCard";
import { ProjectData } from "@/common/data/project";
import PolygonIcon from "@/common/component/icons/polygon";
import PhoneIcon from "@/common/component/icons/phone";

const Home: NextPageWithLayout = () => {
  const { publicRuntimeConfig } = getConfig();
  const { isDesktop, isMobile } = useResponsive();
  const [phoneNumber, setPhoneNumber] = useState("");
  const rateData: any = [
    {
      image: "",
      name: "امیرشهریار",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است،",
      title: "سرمایه گذار پروژه سوم آکولند",
    },
    {
      image: "",
      name: "امیرشهریار",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است،",
      title: "سرمایه گذار پروژه سوم آکولند",
    },
    {
      image: "",
      name: "امیرشهریار",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است،",
      title: "سرمایه گذار پروژه سوم آکولند",
    },
    {
      image: "",
      name: "امیرشهریار",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است،",
      title: "سرمایه گذار پروژه سوم آکولند",
    },
    {
      image: "",
      name: "امیرشهریار",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است،",
      title: "سرمایه گذار پروژه سوم آکولند",
    },
  ];
  const handleSubmitCommiutyForm = () => {
    if (!phoneNumberValidator(phoneNumber))
      return toast.error("شماره موبایل اشتباه می‌باشد!");
  };
  return (
    <>
      <main>
        <video
          autoPlay
          loop
          style={{ width: "100%" }}
          className="z-10 w-[100vw] h-[100vh] md:h-[102vh] object-cover"
        >
          <source src="/herobanner.mp4" />
        </video>
        <div className="p-2 md:p-0 w-full  h-[100vh] md:h-[102vh] absolute top-0 bg-black/70 flex flex-col justify-center items-center">
          <div className="mt-8 flex flex-col justify-center items-center gap-3 md:z-50">
            <Text
              fontSize={isDesktop ? "lg" : "base"}
              fontWeight="bold"
              className="block text-white text-center"
            >
              <span className="text-[#66D178]">آکولند، </span>مرجع تخصصی
              سرمایه‌گذاری آسان، سودآور و امن
            </Text>
            <Text
              fontSize={isDesktop ? "base" : "sm"}
              className="block text-[#D4A129] text-center leading-7"
            >
              آکولند خیال شما را درباره مسائل حقوقی و دغدغه‌های سرمایه‌گذاری
              آسوده می‌کند
            </Text>
            {isMobile && (
              <Button
                className="flex gap-2 rounded-lg bg-[#35B34A] border-none font-medium "
                onClick={() => location.assign("tel:02191099118")}
              >
                <PhoneIcon />
                درخواست مشاوره
              </Button>
            )}
          </div>
        </div>
        <div className="p-2 md:p-0 flex items-center relative justify-center w-full my-6 z-50 ">
          <div className="w-full md:w-[85%] flex flex-col md:flex-row md:items-center md:justify-between mt-4 gap-4 md:gap-3">
            <div className="w-full items-center md:items-start text-center md:text-start md:w-[50%] flex flex-col gap-4  md:gap-3">
              <Text
                className="flex flex-col gap-3"
                fontSize="lg"
                fontWeight="bold"
              >
                <span className="text-[#35B34A] text-lg">
                  بیش از ۱۰۰ میلیارد تومان سود، حاصل اعتماد شما به آکولند
                </span>
                <span className="text-[#08004D] text-base">
                  در آکولند، سودآوری و آسودگی خاطر شما، رسالت ماست.
                </span>
              </Text>
              <Text className="block leading-10 text-[#373737]" fontSize="sm">
                افتخار ماست که در دو سال فعالیت خود، بیش از ۱۰۰ میلیارد تومان
                سود برای سرمایه‌گذاران‌مان به ارمغان آورده‌ایم. ما در آکولند با
                ارائه فرصت‌های سرمایه‌گذاری امن و سودآور در بازار املاک و
                مستغلات، به شما کمک می‌کنیم تا:
              </Text>
              <div className="flex flex-col gap-6">
                <Text
                  className="flex flex-col md:flex-row justify-center items-center md:justify-start gap-3  text-[#707070]"
                  fontSize={isDesktop ? "base" : "sm"}
                  fontWeight="bold"
                >
                  <Image
                    src={RevenumeImage}
                    alt="کسب سود بالاتر از نرخ تورم"
                    width={isDesktop ? 30 : 50}
                    height={isDesktop ? 30 : 50}
                  />
                  سودی بالاتر از نرخ تورم کسب کنید.
                </Text>
                <Text
                  className="flex flex-col md:flex-row justify-center items-center md:justify-start gap-3  text-[#707070]"
                  fontSize={isDesktop ? "base" : "sm"}
                  fontWeight="bold"
                >
                  <Image
                    src={LegalImage}
                    alt="بدون نگرانی از مسائل حقوقی"
                    width={isDesktop ? 30 : 50}
                    height={isDesktop ? 30 : 50}
                  />
                  از نگرانی‌های مربوط به مسائل حقوقی و کارشناسی ملک خلاص شوید.
                </Text>
                <Text
                  className="flex flex-col md:flex-row justify-center items-center md:justify-start gap-3  text-[#707070]"
                  fontSize={isDesktop ? "base" : "sm"}
                  fontWeight="bold"
                >
                  <Image
                    src={SalePriceImage}
                    alt="سرمایه گذاری امن"
                    width={isDesktop ? 30 : 50}
                    height={isDesktop ? 30 : 50}
                  />
                  با اطمینان از به قیمت بودن معامله، سرمایه‌گذاری پرسودی را
                  تجربه کنید.
                </Text>
              </div>
            </div>
            {isDesktop && (
              <div className="w-[40%] p-2 md:p-0 rounded-lg text-end">
                <Image
                  src={`${publicRuntimeConfig.LIARA_IMAGE_S3_HOST}/homePage/Iran-Satelite.png`}
                  alt="اطلاعات آکولند"
                  objectFit="contain"
                  width={600}
                  height={600}
                />
              </div>
            )}
          </div>
        </div>
        <div className="p-2 md:p-0 flex items-center justify-center my-6 w-full relative">
          <div className="w-full md:w-[85%] flex flex-col md:items-center md:justify-between md:mt-6 gap-5 md:gap-3">
            <div className="w-full text-center md:text-start flex justify-center flex-col gap-5 md:gap-3">
              <Text
                className="block text-[#35B34A]"
                fontSize="lg"
                fontWeight="bold"
              >
                خدمات آکولند: همراهی شما در تمام مراحل سرمایه‌گذاری
              </Text>
              <Text
                className="block text-[#08004D]"
                fontSize="base"
                fontWeight="bold"
              >
                سرمایه‌گذاری آسان و امن در زمین، با ارائه خدمات جامع و تخصصی
                توسط آکولند
              </Text>
            </div>
            <div className="w-full flex flex-col md:flex-row gap-6 md:gap-3 z-50 mt-4 md:mt-0">
              {ServicesData.map((service: any) => (
                <ServicesCard
                  key={service.id}
                  title={service.title}
                  description={service.description}
                  image={service.image}
                  link={service.link}
                />
              ))}
            </div>
            {isDesktop && (
              <PolygonIcon className="w-[35rem] h-[35rem] absolute -left-[7rem] z-10 -top-[8rem]" />
            )}
          </div>
        </div>
        <div className="p-2 md:p-0 flex items-center justify-center w-full md:mt-8 -mb-10">
          <div className="w-full md:w-[85%] flex flex-col md:items-center md:justify-between md:mt-4  gap-4">
            <div className="gap-5 md:gap-3 text-center md:text-start flex flex-col w-full">
              <Text
                className="block text-[#35B34A]"
                fontSize={isDesktop ? "lg" : "base"}
                fontWeight="bold"
              >
                سرمایه‌گذاری خود را آغاز کنید، آینده‌ درخشان مالی در انتظار
                شماست!
              </Text>
              <Text className="block text-[#08004D] leading-7" fontSize="base">
                فردایی روشن با سرمایه‌گذاری امروز
                <br />
                آینده‌ مالی شما، به دستان خودتان رقم می‌خورد. با سرمایه‌گذاری
                هوشمندانه می‌توانید از امروز برای آینده‌ خود برنامه‌ریزی کنید و
                به اهدافتان برسید.
              </Text>
            </div>
            <div className="w-full mb-4">
              <div className="flex flex-col md:flex-row gap-8 md:gap-2 p-2 overflow-x-auto">
                {ProjectData.slice(0, 3).map((item: any, index: number) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-full md:w-[50%] p-3 border border-[#BBBCBC] border-solid rounded-md"
                  >
                    <ProjectCard
                      images={item.images}
                      information={item.information}
                      status={item.information.status}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Reviews
          title="تجربه سرمایه گذاران از مشارکت در پروژه‌های آکولند"
          description="با خواندن نظرات و تجربیات سرمایه‌گذاران آکولند می‌توانید با اطمینان خاطر و خیالی آسوده، گامی ‌مطمئن در مسیر سودآوری بردارید."
          VideoData={VideoData}
          rateData={rateData}
        />
        <div className="p-2 md:p-0 flex justify-center w-full md:mt-8 my-6 ">
          <div className="w-full md:w-[85%] flex md:justify-between md:mt-4 gap-4">
            {isDesktop && (
              <div className="w-2/5 z-50">
                <Image
                  src={`${publicRuntimeConfig.LIARA_IMAGE_S3_HOST}/homePage/DB-AI-Crowdstorm-new.png`}
                  alt="جامعه سرمایه گذاران"
                  objectFit="contain"
                  width={600}
                  height={600}
                />
              </div>
            )}
            <div className="flex flex-col gap-2 md:gap-3 items-center md:items-start w-full md:w-2/4 md:mt-12">
              <Text
                className="block text-[#35B34A]"
                fontSize={isDesktop ? "lg" : "base"}
                fontWeight="bold"
              >
                به جمع ۱۵۰۰+ عضو
              </Text>
              <Text
                className="block text-[#08004D] leading-7"
                fontSize="base"
                fontWeight="bold"
              >
                جامعه سرمایه گذاران آکولند بپیوندید
              </Text>
              <Text
                className="block text-[#373737] leading-7 text-center md:text-md md:text-start"
                fontSize="sm"
              >
                با عضویت در باشگاه مشتریان آکولند، شما به جمع بیش از ۱۵۰۰
                سرمایه‌گذار موفق می‌پیوندید و از مزایای زیر بهره‌مند خواهید شد:
              </Text>
              <div className="flex flex-col gap-12 md:gap-7 mt-2 md:mt-0">
                {CommunityData.map((item: any, index: number) => (
                  <Text
                    key={index}
                    className="flex flex-col md:flex-row justify-center items-center md:justify-start gap-3  text-[#707070]"
                    fontSize={isDesktop ? "base" : "sm"}
                    fontWeight="bold"
                  >
                    <Image
                      src={item.icon}
                      alt={item.text}
                      width={isDesktop ? 30 : 50}
                      height={isDesktop ? 30 : 50}
                    />
                    {item.text}
                  </Text>
                ))}
              </div>
              <div className="flex flex-col gap-4">
                <Text
                  className="block text-[#373737] leading-7 text-center md:text-start mt-4 md:mt-0"
                  fontSize={isDesktop ? "base" : "sm"}
                >
                  برای عضویت به جامعه سرمایه گذاران شماره موبایل خود را وارد
                  کنید
                </Text>
                <div className="flex items-center">
                  <TextField
                    type="text"
                    placeholder="شماره موبایل را وارد کنید"
                    className="bg-[#F9F9F9] focus-visible:outline-none p-7 text-black border-none rounded-l-none"
                    onChange={(e: any) => setPhoneNumber(e.target.value)}
                  />
                  <Button
                    className="bg-[#35B34A] p-7 text-white rounded-r-none w-36"
                    onClick={handleSubmitCommiutyForm}
                  >
                    ارسال
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Statistics />
        <Representation />
        <div className="p-2 md:p-0 flex items-center justify-center w-full md:mt-8 my-6 relative">
          <div className="w-full md:w-[85%] flex flex-col md:items-center md:justify-between md:mt-4  gap-4 z-50">
            <div className="gap-2 md:gap-3 text-center md:text-center flex flex-col w-full">
              <Text
                className="block"
                fontSize={isDesktop ? "lg" : "base"}
                fontWeight="bold"
              >
                <span className="text-[#35B34A]">آموزش‌ها و مقالات:</span>{" "}
                <span className="text-[#08004D]">
                  راهنمای شروع سرمایه‌گذاری و موفقیت مالی{" "}
                </span>
              </Text>
            </div>
            <div className="flex flex-col md:flex-row md:flex-wrap md:gap-3 gap-8 md:mt-4 w-full overflow-auto">
              {BlogData.map((blog: any, index: number) => (
                <Blogs
                  key={index}
                  description={blog.description}
                  image={blog.image}
                  title={blog.title}
                  className="!w-full md:!w-[32%]"
                />
              ))}
            </div>
          </div>
        </div>
        <Support />
        <div className="w-full h-36 bg-[#35B34A] flex my-6 justify-center">
          <div className="w-full md:w-[85%] flex items-center justify-center md:mt-4 mt-2 gap-4 md:gap-16 px-4">
            {Logos().map((item: any, index: number) => (
              <Link href={item.link} key={index}>
                <Image
                  src={item.image}
                  alt={item.link}
                  width={item.width}
                  height={item.height}
                />
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

Home.getLayout = function getLayout(homePage: ReactElement) {
  return <LayoutWithHeaderAndFooter>{homePage}</LayoutWithHeaderAndFooter>;
};

export default Home;
