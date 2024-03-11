import getConfig from "next/config";
import { NextPageWithLayout } from "../_app";
import useResponsive from "@/common/hooks/useResponsive";
import Text from "@/common/component/atom/text";
import { ReactElement } from "react";
import { LayoutWithHeaderAndFooter } from "@/common/component/layouts/layoutWithHeaderAndFooter";
import Representation from "@/modules/home/view/representation";
import RepresentationList from "@/modules/representatives/view/representationList";

const Representatives:NextPageWithLayout =() => {
    const {publicRuntimeConfig} = getConfig();
    const {isDesktop} = useResponsive()
    return <>
        <div className="w-full flex flex-col gap-3 items-center justify-center h-[40rem] bg-white bg-no-repeat bg-cover bg-center" style={{backgroundImage:`url(${publicRuntimeConfig.LIARA_IMAGE_S3_HOST}/Representatives/Header-representatives.png`}}>
            <div className="w-[85%] h-full flex flex-col gap-3 items-center justify-center">
            <Text fontSize={isDesktop ? 'lg' : 'base'} fontWeight='bold' className='block text-white text-center'>در آکولند، با اطمینان و آرامش به سرمایه‌گذاری بپردازید.</Text>
            <Text fontSize={isDesktop?'base' : 'sm'} className='block text-white md:w-[65%] text-center leading-7'>کارشناسان ما همراه شما هستند تا از میان بهترین امکانات و فرصت‌های بازار املاک، گزینه‌های برتر را برایتان به ارمغان بیاورند. تخصص و تجربه ما، تضمینی بر انتخاب‌های هوشمندانه شماست.</Text>
            </div>
        </div>
        <div className="w-full justify-center flex z-[5]">
          <RepresentationList />
        </div>
          <div className="mb-4 z-0">
            <Representation />
          </div>
    </>
}

Representatives.getLayout = function getLayout(representativesPage:ReactElement){
    return(
      <LayoutWithHeaderAndFooter>
        {representativesPage}
      </LayoutWithHeaderAndFooter>
    )
  }
  
  
  export default Representatives;