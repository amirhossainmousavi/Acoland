import getConfig from "next/config";
import { NextPageWithLayout } from "../_app";
import useResponsive from "@/common/hooks/useResponsive";
import { ReactElement, useEffect, useState } from "react";
import { LayoutWithHeaderAndFooter } from "@/common/component/layouts/layoutWithHeaderAndFooter";
import Representation from "@/modules/home/view/representation";
import { representativeData } from "@/modules/representative/data/representative";
import Image from "next/image";
import Text from "@/common/component/atom/text";
import ProjectCard from "@/common/component/atom/projectCard/projectCard";

const RepresentativePage:NextPageWithLayout =() => {
    const {publicRuntimeConfig} = getConfig();
    const {isDesktop} = useResponsive();
    const [data, setData] = useState<any>({});
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        setIsLoading(true);
        setData(representativeData());
        setTimeout(() => {
            setIsLoading(false)
        }, 3000);
    },[])
    
    return (    
        <>
        <div className="w-full flex justify-center flex-col items-center mt-[5rem] md:mt-[8rem] p-2 md:p-0" >
            <div className="md:w-[85%] flex flex-col  w-full">
                <div className="flex flex-col md:flex-row justify-between items-start">
                    <Image src={data?.image} width={500} height={500} alt={data?.name ?? ''} className="md:w-[40%] w-full" />
                    <div className="flex flex-col gap-2 md:gap-3 md:items-start items-center w-full md:w-[55%] mt-4">
                    <Text className="text-[#08004D]" fontSize="lg" fontWeight="bold">{data.gender === 'man' ? 'آقای' : 'خانم'} {data.name}</Text> 
                    <Text dangerouslySetInnerHTML={{__html:data.description}} className="leading-10 text-[#707070] text-justify" fontWeight="light" />
                    </div>
                </div>
                <div className="flex flex-col items-center md:my-5">
                <Text className="text-[#08004D] text-center md:text-start" fontSize="lg" fontWeight="bold">پروژه هایی که توسط {data.gender === 'man' ? "آقای" : "خانم"} {data.name} تعریف شده اند</Text> 
                <div className="flex flex-col md:flex-row md:flex-wrap w-full h-full gap-3 my-3 md:my-5">
                    {data?.project?.map((item:any, index:number) => (
                        <div key={index} className='w-full md:w-[49.5%] p-3 border border-[#BBBCBC] border-solid rounded-md'>
                        <ProjectCard images={item.images} information={item.information} status={item.information.status} />
                        </div>
                    ))}
                </div>
                </div>
            </div>
        </div>
          <div className="mb-4 z-0">
            <Representation />
          </div>
        </>
        )
}

RepresentativePage.getLayout = function getLayout(representativePage:ReactElement){
    return(
      <LayoutWithHeaderAndFooter>
        {representativePage}
      </LayoutWithHeaderAndFooter>
    )
  }
  
  
  export default RepresentativePage;