import Text from "@/common/component/atom/text"
import useResponsive from "@/common/hooks/useResponsive"
import { useState } from "react";
import SupportFromInput from "./supportFormInputs";
import every from 'lodash/every'
import toast from "react-hot-toast";
import Image from "next/image";
import getConfig from "next/config";
import TextField from "@/common/component/atom/textField";
import classNames from "@/common/utils/classNames";
import Button from "@/common/component/atom/button";

type SupportForm ={
    value:string,
    isValid: boolean,
    helperText?:string
}

export const Support = () => {
    const {isDesktop} = useResponsive();
    const {publicRuntimeConfig} = getConfig()
    const [supportFormData, setSupportFormData] = useState<Record<string, SupportForm>>({
        personaInfo:{
            value:'',
            isValid: true,
            helperText:'لطفا نام و نام خانوادگی خود را به صورت فارسی وارد کنید.'
        },
        phoneNumber:{
            value:'',
            isValid: true,
            helperText:"لطفا شماره موبایل خود را به صورت صحیح وارد کنید."
        },
        description:{
            value:'',
            isValid: true,
            helperText:"لطفا توضیحات خود را تکمیل کنید."
        },
    });
    const handleSubmitForm = () => {
        const updatedInformationData:Record<any, any> = {};
        const isValidForm = every(SupportFromInput, (item:any) => {
            const value = supportFormData[item.state].value;
            const helperText = item?.helperText;
            const isValid = item.isValid(value);
            updatedInformationData[item.state] = {
                value,
                isValid,
                helperText
            };
            return isValid;
        });
        
        setSupportFormData((prev:any) => ({
            ...prev,
            ...updatedInformationData
        }));
        if (isValidForm) {
            toast.success('درخواست مشاوره شما با موفقیت ثبت شد.')
        } else {            
            toast.error(Object.values(updatedInformationData)?.find?.((item:any) => !item?.isValid)?.helperText ?? '')
        }
    };
    return (
        <div className='p-2 md:p-0 flex  items-center relative justify-center w-full z-50 '>
            <div className='w-full md:w-[85%] flex flex-col md:justify-between md:mt-4 gap-2'>
                <div className="flex flex-col items-center w-full text-center md:gap-3 gap-1">
                    <Text fontSize={isDesktop ? 'lg' :'base'} className="block text-[#08004D] leading-7" fontWeight="bold">آیا نیاز به راهنمایی یا مشاوره دارید؟</Text>
                    <Text fontSize='sm' className="flex flex-col gap-2 text-[#35B34A] [&>span]:block  leading-7"><span>بدون شک، انتخاب درست یک مشاوره می‌تواند یکی از مهم‌ترین تصمیمات مالی زندگی شما باشد</span>
                    <span>پس اگر هنوز نیاز به مشاوره دارید و می‌خواهید از مشاوره‌ حرفه‌ای بهره‌مند شوید فرم زیرا تکمیل کنید تا با شما تماس گرفته شود</span>
                    </Text>
                </div>
                <div className="flex w-full gap-2 items-center">
                    {isDesktop && (
                    <div className="w-2/4">
                        <Image src={`${publicRuntimeConfig.LIARA_IMAGE_S3_HOST}/homePage/adsiz.png`} alt='پشتیبانی' objectFit='contain' width={600} height={600} />            
                    </div>
                    )}
                <div className=" w-full md:w-2/4 flex flex-col gap-3 ">
                        {SupportFromInput.map((item:any) =>(
                        <TextField type={item.type} key={item.id}classNameWrapper="md:w-[90%] w-full" className={classNames("bg-[#F9F9F9] h-14 text-black focus-visible:outline-none rounded-lg",{
                            "!h-[10rem]" : item.isMultiLine
                        })} error={!supportFormData[item.state].isValid} placeholder={item.text} multiLine={item.isMultiLine} required={item.required} 
                        onChange={e => setSupportFormData((prev:any) => ({
                            ...prev,
                            [item.state]:{
                                value:e.target.value,
                                isValid:supportFormData[item.state].isValid
                            } 
                        }))}
                        />
                        ))}
                        <Button className="bg-[#35B34A] text-white  md:w-40 w-full -mt-2 p-8 md:p-0" onClick={handleSubmitForm}>ارسال</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Support