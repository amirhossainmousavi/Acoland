import getConfig from "next/config";
import { NextPageWithLayout } from "../_app";
import useResponsive from "@/common/hooks/useResponsive";
import { ReactElement, useEffect, useState } from "react";
import { LayoutWithHeaderAndFooter } from "@/common/component/layouts/layoutWithHeaderAndFooter";
import Text from "@/common/component/atom/text";
import { ProjectData } from "@/modules/project/data/project";
import ProjectCard from "@/common/component/atom/projectCard";
import VideoData from "@/modules/home/data/vidoe.json";
import Image from "next/image";
import Reviews from "@/modules/home/view/reviews";
import ProgressBar from "@/common/component/atom/progressBar";
import Support from "@/modules/home/view/support";
import Modal from "@/common/component/atom/modal";
import { isBetween9To14 } from "@/common/utils/isBetween9To14";
import moment from "moment";
import Alert from "@/common/component/atom/alert";
import TextField from "@/common/component/atom/textField";
import Button from "@/common/component/atom/button";
import useModal from "@/common/hooks/useModal";
import { phoneNumberValidator } from "@persian-tools/persian-tools";
import toast from "react-hot-toast";
import { BarChart } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts";

const ProjectPage: NextPageWithLayout = () => {
  const { publicRuntimeConfig } = getConfig();
  const { isDesktop } = useResponsive();
  const [data, setData] = useState<any>({});
  const [isLoading, setIsLoading] = useState(true);
  const { handleOpen, handleClose, modalProps } = useModal();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isFormHasError, setIsFormHasError] = useState<boolean>(false);

  const handleSubmitForm = () => {
    if (!phoneNumberValidator(phoneNumber)) {
      setIsFormHasError(true);
      toast.error("شماره وارد شده صحیح نمی‌باشد!");
      return;
    }
    toast.success("درخواست شما با موفقیت ثبت شد.");
  };

  useEffect(() => {
    setIsLoading(true);
    setData(ProjectData());
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  const chartSetting = {
    width: isDesktop ? 700 : 500,
    height: isDesktop ? 500 : 300,
    sx: {
      [`.${axisClasses.left} .${axisClasses.label}`]: {
        transform: "translate(-20px, 0)",
      },
    },
  };
  const dataset = [
    {
      "رشد پروژه سوم آکولند": 420,
      "رشد سکه": 117,
      "رشد دلار": 86,
      "شاخص کل بورس": 120,
      "رشد سپرده گذاری": 54,
      "رشد خودرو": 117,
      "رشد بیت کوین": 200,
      "میانگین قیمت مسکن تهران": 117,
      data: "رشد پروژه سوم آکولند",
    },
  ];

  const valueFormatter = (value: number) => `${value}%`;

  return (
    <>
      <div className="w-full flex justify-center flex-col items-center mt-[5rem] md:mt-[8rem] p-2 md:p-0">
        <div className="md:w-[85%] flex flex-col md:flex-row w-full h-full">
          <ProjectCard
            images={data?.images}
            information={data?.information}
            status={data?.information?.status}
            infoCalssName="md:w-[30%] w-full md:rounded-xl md:border md:border-[#BBBCBC] md:border-solid -mt-9 md:mt-0 p-4"
            className="w-full flex !md:justify-between  !shadow-none"
            imagesCarouselCalssName="rounded-2xl !w-auto"
            imagesCalssName="!h-[90%]"
          />
        </div>
        <div className="w-full md:w-[85%] flex flex-col md:flex-row md:justify-between my-4 md:my-4">
          <div className="md:w-[55%] w-full flex flex-col gap-3">
            <Text
              fontSize={isDesktop ? "lg" : "base"}
              fontWeight="bold"
              className="text-[#0C0349] text-center md:text-start"
            >
              {data.name}: {data.title}
            </Text>
            <Text
              fontSize="sm"
              fontWeight="medium"
              dangerouslySetInnerHTML={{ __html: data.description }}
              className="leading-8 text-justify md:text-start"
            />
          </div>
          <div className="md:w-[40%] w-full md:max-h-[23rem] rounded-md my-6 md:mt-0 overflow-hidden">
            <div
              dangerouslySetInnerHTML={{ __html: data.video }}
              className="w-full h-full"
            />
          </div>
        </div>
        <div className="w-full flex flex-col items-center min-h-[10rem] bg-[#F9F9F9] md:mt-0 ">
          <div className="w-[85%] flex md:w-full justify-center items-center gap-3 flex-col">
            <Text
              fontSize={isDesktop ? "lg" : "base"}
              fontWeight="bold"
              className="text-[#0C0349] text-center w-full mt-5"
            >
              چرا باید بر روی {data.name} سرمایه گذاری کنیم؟
            </Text>
            <div className="flex w-[85%] flex-col md:flex-row md:justify-between items-center gap-12 md:gap-6 my-5">
              {data.investment_reasons?.map((item: any, index: number) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center gap-2"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={60}
                    height={60}
                  />
                  <Text
                    fontSize="base"
                    fontWeight="bold"
                    className="text-[#0C0349] text-center"
                  >
                    {item.title}
                  </Text>
                  <Text
                    fontSize="sm"
                    fontWeight="medium"
                    className="text-[#707070] text-center"
                  >
                    {item.description}
                  </Text>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="md:-mt-6 mt-0 w-full">
          <Reviews
            title={`تجربه سرمایه گذاران از مشارکت در ${data.name}`}
            VideoData={VideoData}
            rateData={data.review}
            titleStyle="text-[#0C0349]"
          />
        </div>
        <div className="w-full flex justify-center items-center">
          <div className="md:w-[85%] w-full flex flex-col items-center -mb-9 gap-3">
            <Text
              fontSize={isDesktop ? "lg" : "base"}
              fontWeight="bold"
              className="text-[#0C0349]"
            >
              مقایسه رشد {data.name} با سایز بازار ارزی
            </Text>
            <div className="w-full flex flex-wrap gap-12 md:gap-6">
              <BarChart
                dataset={dataset}
                xAxis={[{ scaleType: "band", dataKey: "data" }]}
                series={[
                  {
                    dataKey: "رشد پروژه سوم آکولند",
                    label: "رشد پروژه سوم آکولند",
                    valueFormatter,
                  },
                  { dataKey: "رشد سکه", label: "رشد سکه", valueFormatter },
                  { dataKey: "رشد دلار", label: "رشد دلار", valueFormatter },
                  {
                    dataKey: "شاخص کل بورس",
                    label: "شاخص کل بورس",
                    valueFormatter,
                  },
                  {
                    dataKey: "رشد سپرده گذاری",
                    label: "رشد سپرده گذاری",
                    valueFormatter,
                  },
                  { dataKey: "رشد خودرو", label: "رشد خودرو", valueFormatter },
                  {
                    dataKey: "رشد بیت کوین",
                    label: "رشد بیت کوین",
                    valueFormatter,
                  },
                  {
                    dataKey: "میانگین قیمت مسکن تهران",
                    label: "میانگین قیمت مسکن تهران",
                    valueFormatter,
                  },
                ]}
                {...chartSetting}
              />
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          <div className="md:w-[85%] w-full flex flex-col items-center md:mt-8 mt-10 gap-3">
            <Text
              fontSize={isDesktop ? "lg" : "base"}
              fontWeight="bold"
              className="text-[#0C0349]"
            >
              موقعیت مکانی {data.name}
            </Text>
            <div
              className="w-full rounded-lg mt-2 h-[20rem] "
              dangerouslySetInnerHTML={{ __html: data.location }}
            />
          </div>
        </div>
        <div className="w-full flex justify-center items-center ">
          <div className="md:w-[85%] w-full flex flex-col items-center md:mt-8 mt-8 mb-4 gap-3 bg-[#08004D] py-10 rounded-lg">
            <Text
              onClick={handleOpen}
              fontSize={isDesktop ? "base" : "sm"}
              fontWeight="bold"
              className="text-white bg-[#35B34A] p-4 rounded-lg cursor-pointer"
            >
              همین الان خرید زمین را شروع کنید!
            </Text>
          </div>
        </div>
        <div className="w-full">
          <Support />
        </div>
      </div>
      <Modal {...modalProps} noHeader bodyClassName="p-4" className="z-[100]">
        <div className="w-full flex flex-col items-center gap-3">
          {!isBetween9To14?.(moment()) && (
            <Alert severity="warning" className="text-black text-sm p-4">
              در حال حاضر کارشناسی در دسترس نمی‌باشند، ما در اولین فرصت با شما
              تماس خواهیم گرفت.
            </Alert>
          )}
          <Text
            fontSize={isDesktop ? "base" : "sm"}
            className="text-[#0C0349] text-center w-full"
          >
            برای درخواست خرید قطعه زمین، شماره خود را وارد کنید تا کارشناسان ما
            با شما تماس برقرار کنند
          </Text>
          <div className=" w-full flex flex-col items-center gap-4 ">
            <TextField
              classNameWrapper="w-full"
              className="bg-[#F9F9F9] h-14 text-black focus-visible:outline-none rounded-lg"
              error={isFormHasError}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <Button
              className="bg-[#35B34A] text-white w-full -mt-2 p-8 md:p-0"
              onClick={handleSubmitForm}
            >
              ارسال
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

ProjectPage.getLayout = function getLayout(projectPage: ReactElement) {
  return <LayoutWithHeaderAndFooter>{projectPage}</LayoutWithHeaderAndFooter>;
};

export default ProjectPage;
