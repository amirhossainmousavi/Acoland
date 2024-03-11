import getConfig from "next/config";
import { NextPageWithLayout } from "../_app";
import useResponsive from "@/common/hooks/useResponsive";
import { ReactElement, useEffect, useState } from "react";
import { LayoutWithHeaderAndFooter } from "@/common/component/layouts/layoutWithHeaderAndFooter";
import Text from "@/common/component/atom/text";
import { ProjectData } from "@/modules/project/data/project"
import ProjectCard from "@/common/component/atom/projectCard";
import VideoData from '@/modules/home/data/vidoe.json'
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

const ProjectPage:NextPageWithLayout =() => {
    const {publicRuntimeConfig} = getConfig();
    const {isDesktop} = useResponsive();
    const [data, setData] = useState<any>({});
    const [isLoading, setIsLoading] = useState(true);
    const { handleOpen, handleClose, modalProps } = useModal();
    const [phoneNumber, setPhoneNumber] = useState('');
    const [isFormHasError,setIsFormHasError] = useState<boolean>(false)

    const handleSubmitForm = () => {
        if(!phoneNumberValidator(phoneNumber)){
            setIsFormHasError(true)
            toast.error('شماره وارد شده صحیح نمی‌باشد!')
        } return
    }
    
    useEffect(() => {
        setIsLoading(true);
        setData(ProjectData());
        setTimeout(() => {
            setIsLoading(false)
        }, 3000);
    },[])
    
    return (    
        <>
        <div className="w-full flex justify-center flex-col items-center mt-[5rem] md:mt-[8rem] p-2 md:p-0" >
            <div className="md:w-[85%] flex flex-col md:flex-row w-full h-full">
                <ProjectCard images={data?.images} information={data?.information} status={data?.information?.status} infoCalssName="md:w-[30%] w-full md:rounded-xl md:border md:border-[#BBBCBC] md:border-solid -mt-9 md:mt-0 p-4" className="w-full flex !md:justify-between  !shadow-none" imagesCarouselCalssName="rounded-2xl !w-auto" imagesCalssName="!h-[90%]" />    
            </div>
            <div className="w-full md:w-[85%] flex flex-col md:flex-row md:justify-between md:mt-4">
                <div className="md:w-[55%] w-full flex flex-col gap-3">
                <Text fontSize={isDesktop ? 'lg' : 'base'} fontWeight="bold" className="text-[#0C0349] text-center md:text-start" >{data.name}: {data.title}</Text>
                <Text fontSize="sm" fontWeight="medium"  dangerouslySetInnerHTML={{__html:data.description}} className="leading-8 text-justify md:text-start" />
                </div>
                <div className="md:w-[40%] w-full h-[20rem] rounded-md mt-4 md:mt-0" dangerouslySetInnerHTML={{__html:data.video}} />
            </div>
            <div className="w-full flex flex-col items-center min-h-[10rem] bg-[#F9F9F9] md:mt-0 -mt-16">
                <div className="w-[85%] flex md:w-full justify-center items-center gap-3 flex-col">
                    <Text fontSize={isDesktop ? 'lg' : 'base'} fontWeight="bold" className="text-[#0C0349] text-center w-full mt-5">چرا باید بر روی {data.name} سرمایه گذاری کنیم؟</Text>
                    <div className="flex w-[85%] flex-col md:flex-row md:justify-between items-center gap-6 my-5">
                        {data.investment_reasons?.map((item:any, index:number) => (
                            <div key={index} className="flex flex-col items-center justify-center gap-2">
                                <Image src={item.image} alt={item.title} width={60} height={60} />
                                <Text fontSize='base' fontWeight="bold" className="text-[#0C0349] text-center">{item.title}</Text>
                                <Text fontSize='sm' fontWeight="medium" className="text-[#707070] text-center">{item.description}</Text>
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
               <div className="md:w-[85%] w-full flex flex-col items-center md:mt-8 mt-2 gap-3">
               <Text fontSize={isDesktop ? 'lg' : 'base'} fontWeight="bold" className="text-[#0C0349]" >مقایسه رشد {data.name} با سایز بازار ارزی</Text>
                <div className="w-full flex flex-wrap gap-6">
                    {data?.comparisons?.map((item:any, index:number) => (
                        <ProgressBar key={index} Percent={item.percent} score={item.score} title={item.title} parentClassName="md:w-[49%] w-full" />
                    ))}
                </div>
               </div>
            </div>
            <div className="w-full flex justify-center items-center">
               <div className="md:w-[85%] w-full flex flex-col items-center md:mt-8 mt-6 gap-3">
               <Text fontSize={isDesktop ? 'lg' : 'base'} fontWeight="bold" className="text-[#0C0349]" >موقعیت مکانی {data.name}</Text>
               <div className="w-full rounded-lg mt-2 h-[20rem] " dangerouslySetInnerHTML={{__html:data.location}} />
               </div>
            </div>
            <div className="w-full flex justify-center items-center ">
               <div className="md:w-[85%] w-full flex flex-col items-center md:mt-8 mt-4 gap-3 bg-[#08004D] py-10 rounded-lg">
               <Text onClick={handleOpen} fontSize='base' fontWeight="bold" className="text-white bg-[#35B34A] p-4 rounded-lg cursor-pointer" >همین الان خرید زمین را شروع کنید!</Text>
               </div>
            </div>
            <div className="w-full">
            <Support />
            </div>
        </div>
        <Modal {...modalProps} noHeader bodyClassName="p-4" className="z-[100]">
            <div className="w-full flex flex-col items-center gap-3">
                {!isBetween9To14?.(moment()) && (
                 <Alert severity="warning" className="text-black text-sm p-4">در حال حاضر پشتیبانی در دسترس نمی‌باشند، ما در اولین فرصت با شما تماس خواهیم گرفت</Alert>
                )}
                <Text className="text-[#0C0349] text-center w-full">شماره خود را وارد نمایید و منتظر تماس کارشناسان ما باشید</Text>
                <div className=" w-full flex flex-col items-center gap-4 ">
                        <TextField classNameWrapper="w-full" className='bg-[#F9F9F9] h-14 text-black focus-visible:outline-none rounded-lg' error={isFormHasError} onChange={(e) => setPhoneNumber(e.target.value)} />
                        <Button className="bg-[#35B34A] text-white w-full -mt-2 p-8 md:p-0" onClick={handleSubmitForm}>ارسال</Button>
                    </div>
            </div>
       </Modal>
        </>
        )
}

ProjectPage.getLayout = function getLayout(projectPage:ReactElement){
    return(
      <LayoutWithHeaderAndFooter>
        {projectPage}
      </LayoutWithHeaderAndFooter>
    )
  }
  
  
  export default ProjectPage;