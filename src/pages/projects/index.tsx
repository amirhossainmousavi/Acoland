import { ReactElement } from "react";
import { NextPageWithLayout } from "../_app";
import { LayoutWithHeaderAndFooter } from "@/common/component/layouts/layoutWithHeaderAndFooter";
import getConfig from "next/config";
import Text from "@/common/component/atom/text";
import useResponsive from "@/common/hooks/useResponsive";
import Support from "@/modules/home/view/support";
import ProjectsCard from "@/modules/projects/view/projects/projects";
import Accordion from "@/common/component/atom/accordion";
import ProjectsFq from "@/modules/projects/data/projectsFq.json";

const Projects: NextPageWithLayout = () => {
  const { publicRuntimeConfig } = getConfig();
  const { isDesktop } = useResponsive();
  return (
    <>
      <div className="w-full justify-center flex md:mt-[6rem] mt-[5rem]">
        <ProjectsCard />
      </div>
      <div className="w-full flex flex-col mt-3 items-center md:mt-4 p-2 md:p-0">
        <Text className="w-full text-center text-[#08004D]" fontWeight="bold">
          سوالات متداول
        </Text>
        <div className="flex justify-between flex-wrap flex-col md:flex-row gap-3 md:w-[85%] bg-[#F9F9F9] rounded-md p-4 h-auto mt-4">
          {ProjectsFq.map((item: any) => (
            <Accordion
              key={item.id}
              title={item.question}
              className="md:w-[49%] bg-white border border-solid border-[#707070] !text-[0.8rem] font-medium h-fit"
            >
              {item.answer}
            </Accordion>
          ))}
        </div>
      </div>
      <div className="mb-4 mt-2">
        <Support />
      </div>
    </>
  );
};

Projects.getLayout = function getLayout(projectPage: ReactElement) {
  return <LayoutWithHeaderAndFooter>{projectPage}</LayoutWithHeaderAndFooter>;
};

export default Projects;
