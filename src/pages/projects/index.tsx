import { ReactElement } from "react";
import { NextPageWithLayout } from "../_app";
import { LayoutWithHeaderAndFooter } from "@/common/component/layouts/layoutWithHeaderAndFooter";
import getConfig from "next/config";
import Text from "@/common/component/atom/text";
import useResponsive from "@/common/hooks/useResponsive";
import Button from "@/common/component/atom/button";
import Support from "@/modules/home/view/support";
import ProjectsCard from "@/modules/projects/view/projects/projects";
import Accordion from "@/common/component/atom/accordion";
import ProjectsFq from '@/modules/projects/data/projectsFq.json'

const Projects:NextPageWithLayout =() => {
    const {publicRuntimeConfig} = getConfig();
    const {isDesktop} = useResponsive()
    return <>
        <div className="w-full flex flex-col gap-3 items-center justify-center h-[40rem] bg-white bg-no-repeat bg-cover bg-center" style={{backgroundImage:`url(${publicRuntimeConfig.LIARA_IMAGE_S3_HOST}/Projects/Header-project.png`}}>
            <div className="w-[85%] h-full flex flex-col gap-3 items-center justify-center">
            <Text fontSize={isDesktop ? 'lg' : 'base'} fontWeight='bold' className='block text-white text-center'>بیش از ۱۰۰ میلیارد تومان سود برای شما</Text>
            <Text fontSize={isDesktop?'base' : 'sm'} className='block text-white md:w-[65%] text-center leading-7'>در صفحه پروژه‌ها، تمامی پروژه‌های زمینی موجود در آکولند گردآوری شده‌اند. اینجا جایی است که شما می‌توانید به دنبال پروژه‌هایی با پتانسیل سرمایه‌گذاری باشید و با دقت و هوشمندانه، بهترین انتخاب را برای سرمایه‌گذاری خود داشته باشید</Text>
            </div>
        </div>
        <div className="w-full justify-center flex">
          <ProjectsCard />
        </div>
        <div className="w-full flex flex-col items-center md:mt-4 p-2 md:p-0">
            <Text className="w-full text-center text-[#08004D]" fontWeight="bold">سوالات متداول</Text>
            <div className="flex justify-between flex-wrap flex-col md:flex-row gap-3 md:w-[85%] bg-[#F9F9F9] rounded-md p-4 h-auto mt-4">
            {ProjectsFq.map((item:any) => (
              <Accordion key={item.id} title={item.question} className="md:w-[49%] bg-white border border-solid border-[#707070] !text-[0.8rem] font-medium h-fit">{item.answer}</Accordion>
            ))}
            </div>
          </div>
          <div className="mb-4">
        <Support />
          </div>
    </>
}

Projects.getLayout = function getLayout(projectPage:ReactElement){
    return(
      <LayoutWithHeaderAndFooter>
        {projectPage}
      </LayoutWithHeaderAndFooter>
    )
  }
  
  
  export default Projects;