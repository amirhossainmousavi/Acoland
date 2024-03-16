import { ReactElement } from "react";
import { NextPageWithLayout } from "../_app";
import { LayoutWithHeaderAndFooter } from "@/common/component/layouts/layoutWithHeaderAndFooter";
import getConfig from "next/config";
import Text from "@/common/component/atom/text";
import useResponsive from "@/common/hooks/useResponsive";
import Support from "@/modules/home/view/support";
import Statistics from "@/modules/home/view/statistics";
import TeamMember from "@/common/component/atom/teamMember";
import { Teams } from "@/modules/aboutUs/data/team";
import ServicesData from "@/modules/home/data/services";
import ServicesCard from "@/modules/home/component/servicesCard";

const AboutUs: NextPageWithLayout = () => {
  const { publicRuntimeConfig } = getConfig();
  const { isDesktop } = useResponsive();
  const infoVideo =
    '<style>.h_iframe-aparat_embed_frame{position:relative;}.h_iframe-aparat_embed_frame .ratio{display:block;width:100%;height:auto;}.h_iframe-aparat_embed_frame iframe{position:absolute;top:0;left:0;width:100%;height:100%;}</style><div class="h_iframe-aparat_embed_frame"><span style="display: block;padding-top: 57%"></span><iframe src="https://www.aparat.com/video/video/embed/videohash/Olnm2/vt/frame"  allowFullScreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe></div>';
  return (
    <div className="w-full">
      <div
        className="w-full flex flex-col gap-3 items-center justify-center h-[40rem] bg-white bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `url(${publicRuntimeConfig.LIARA_IMAGE_S3_HOST}/AboutUs/aboutUs.webp`,
        }}
      >
        <div className="w-[85%] h-full flex flex-col gap-3 items-center justify-center">
          <Text
            fontSize={isDesktop ? "lg" : "base"}
            fontWeight="bold"
            className="block text-white text-center"
          >
            بیش از ۱۰۰ میلیارد تومان سود برای شما
          </Text>
          <Text
            fontSize={isDesktop ? "base" : "sm"}
            className="block text-white md:w-[65%] text-center leading-7"
          >
            طی ۲ سال فعالیت در آکولند
          </Text>
        </div>
      </div>
      <div className="w-full flex justify-center p-2 md:p-0 mt-3 md:mt-0">
        <div className="w-full md:w-[85%] flex flex-col md:flex-row md:justify-between justify-center md:items-center md:mt-4 md:-mb-3">
          <div className="md:w-[50%] w-full flex flex-col gap-3">
            <Text
              fontSize={isDesktop ? "lg" : "base"}
              fontWeight="bold"
              className="text-[#0C0349] text-center md:text-start"
            >
              داستان آکولند
            </Text>
            <Text
              fontSize="sm"
              fontWeight="medium"
              className="leading-8 text-justify md:text-start"
            >
              مهندس علیرضا عمویی در سال ۱۴۰۰، پس از ۳ سال آموزش در حوزه املاک و
              مستغلات، اولین پروژه سرمایه گذاری در بازار املاک را تعریف کرد.
              چیزی که باعث شد اولین پروژه سرمایه گذاری در این مجموعه تعریف
              شود، تقاضای دانش‌پذیران (دوره جامع تجارت املاک) بود. در واقع
              سال‌ها آموزش، اعتماد دانش‌پذیران را به تخصص، صداقت و سلامت عملکرد
              ما جلب کرده بود. در کنار این اعتماد، نیاز به سرمایه گذاری با ریسک
              کم و سود بالا، تقاضای زیادی را برای تعریف پروژه‌های سرمایه گذاری
              تخصصی روی زمین با اجرا و مدیریت مهندس علیرضا عمویی ایجاد کرد.
            </Text>
          </div>
          <div className="md:w-[45%] w-full md:max-h-[23rem] rounded-md mt-4 md:mt-0 [&>div>iframe]:rounded-lg overflow-hidden">
            <div
              dangerouslySetInnerHTML={{ __html: infoVideo }}
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
      <div className="p-2 md:p-0">
        <Statistics />
      </div>
      <div className="w-full flex justify-center p-2 md:p-0">
        <div className="w-full md:w-[85%] flex flex-col-reverse md:flex-row md:justify-between md:items-center justify-center my-4">
          <div className="md:w-[45%] w-full md:max-h-[23rem] rounded-md mt-4 md:mt-0 [&>div>iframe]:rounded-lg overflow-hidden">
            <div
              dangerouslySetInnerHTML={{ __html: infoVideo }}
              className="w-full h-full"
            />
            <div />
          </div>
          <div className="md:w-[50%] w-full flex flex-col gap-3">
            <Text
              fontSize={isDesktop ? "lg" : "base"}
              fontWeight="bold"
              className="text-[#0C0349] text-center md:text-start"
            >
              ماموریت آکولند
            </Text>
            <Text
              fontSize="sm"
              fontWeight="medium"
              className="leading-8 text-justify md:text-start"
            >
              بدون سرمایه گذاری در وضعیت اقتصادی امروز، قطعا از نظر مالی متضرر
              می‌شوید. اما می‌دانیم همه افراد، یا اطلاعات لازم برای سرمایه گذاری
              را ندارند، یا به هر دلیلی توان ریسک کردن برای سرمایه گذاری را
              ندارند. آکولند ماموریت خود را در راستای همین مسئله تعریف می‌کند.
              ما در آکولند تلاش می‌کنیم، امکان سرمایه گذاری امن، با سودی جذاب و
              بالاتر از نرخ تورم را برای سرمایه گذاران خود ایجاد کنیم. ما به
              پشتوانه سال‌ها تجربه در بازار املاک و مستغلات (آموزش سرمایه گذاری
              و تعریف پروژه)، به شما کمک می‌کنیم تا نه تنها از تورم و رشد سریع
              بازار املاک جا نمانید، بلکه بتوانید با سرمایه گذاری بدون ریسک در
              این بازار، سود جذابی را بدست آورید.
            </Text>
          </div>
        </div>
      </div>
      <div className="p-2 md:p-0 flex items-center justify-center my-6 w-full relative">
        <div className="w-full md:w-[85%] flex flex-col md:items-center md:justify-between md:mt-6 gap-5 md:gap-3">
          <div className="w-full text-center md:text-start flex justify-center flex-col gap-5 md:gap-3">
            <Text
              className="block text-[#0C0349] text-center"
              fontSize={isDesktop ? "lg" : "base"}
              fontWeight="bold"
            >
              خدمات آکولند
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
        </div>
      </div>
      <div className="w-full flex justify-center p-2 md:p-0">
        <div className="w-full md:w-[85%] flex flex-col gap-4 justify-center items-center md:my-8">
          <Text
            className="text-[#0C0349] text-center md:text-start md:mb-2"
            fontSize={isDesktop ? "lg" : "base"}
            fontWeight="bold"
          >
            تیم آکولند
          </Text>
          <div className="w-full flex flex-col md:flex-row gap-3 md:justify-between">
            {Teams.map((item: any, index: number) => (
              <TeamMember
                key={index}
                imageSrc={item.image}
                name={item.name}
                jobTitle={item.job}
                likdin={item.linkdin}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="mb-4 md:-mt-6 p-2 md:p-0">
        <Support />
      </div>
    </div>
  );
};

AboutUs.getLayout = function getLayout(aboutUsPage: ReactElement) {
  return <LayoutWithHeaderAndFooter>{aboutUsPage}</LayoutWithHeaderAndFooter>;
};

export default AboutUs;
