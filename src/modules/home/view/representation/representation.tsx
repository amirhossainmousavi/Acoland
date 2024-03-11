import Text from "@/common/component/atom/text"
import useResponsive from "@/common/hooks/useResponsive"
import getConfig from "next/config";
import Image from "next/image"
import GraphImage from '@/common/assets/graph.png'
import MagnifyingImage from '@/common/assets/magnifying-glass.png'
import StatImage from '@/common/assets/stats.png'
import Button from "@/common/component/atom/button";
import { isBetween9To14 } from "@/common/utils/isBetween9To14";
import moment from "moment";
import Alert from "@/common/component/atom/alert";
import Modal from "@/common/component/atom/modal";
import TextField from "@/common/component/atom/textField";
import useModal from "@/common/hooks/useModal";
import RepresentationFormData from './representationForm'
import { useState } from "react";
import { every } from "lodash";
import toast from "react-hot-toast";
import classNames from "@/common/utils/classNames";
import Autocomplete from "@/common/component/atom/autocomplete";
import Province from '@/common/data/places/province.json'
import City from '@/common/data/places/city.json'

type RepresentationForm ={
    value:string,
    isValid: boolean,
    helperText?:string
}


export const Representation = () =>{
    const { handleOpen, handleClose, modalProps } = useModal();
    const {isDesktop} = useResponsive();
    const [provinceName, setProvinceName] = useState(null)
    const {publicRuntimeConfig} = getConfig()
    const provinces= Province.map((item) => ({label: item.name, value: item.name}))
    const citys = provinceName && provinceName !=='همه ایران' ? City.filter((item) => item.province === provinceName).map((item) => ({label: item.name, value: item.name})) : City.map((item) => ({label: item.name, value: item.name}))
    const [representationFormData, setRepresentationFormData] = useState<Record<string, RepresentationForm>>({
        personaInfo:{
            value:'',
            isValid: true,
        },
        phoneNumber:{
            value:'',
            isValid: true,
        },
        province:{
            value:'',
            isValid: true,
        },
        city:{
            value:'',
            isValid: true,
        }
    });
    const representationData = [
        {
            text:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
            icon:GraphImage
        },
        {
            text:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
            icon:StatImage
        },
        {
            text:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
            icon:MagnifyingImage
        }
    ]
    
    const handleSubmitForm = () => {
        const updatedInformationData:any = {};
        const isValidForm = every(RepresentationFormData, (item:any) => {
            const value = representationFormData[item.state].value;
            const helperText = representationFormData[item.state];
            const isValid = item.isValid(value);
            updatedInformationData[item.state] = {
                value,
                isValid,
                helperText
            };
            return isValid;
        });

        setRepresentationFormData((prev:any) => ({
            ...prev,
            ...updatedInformationData
        }));
            if (isValidForm) {
            console.log('Form is valid');
        } else {    
            toast.error('لطفا اطلاعات خود را به درستی وارد کنید!' )
        }
    };
    return (
        <>
                <div className='p-2 md:p-0 flex items-center relative justify-center w-full z-50 '>
            <div className='w-full md:w-[85%] flex flex-col md:flex-row md:justify-between md:mt-4 gap-2 md:gap-3'>
            <div className='w-full items-center md:items-start text-center md:text-start md:w-[50%] flex flex-col gap-2 md:gap-3 md:mt-6'>
                <Text className='flex flex-col gap-3 text-[#35B34A]' fontSize={isDesktop ? 'lg' :'base'} fontWeight='bold'>پیوستن به تیم نمایندگی آکولند</Text>
                <Text className='flex flex-col gap-3 text-[#08004D]' fontSize={isDesktop ? 'lg' :'base'} fontWeight='bold'>گامی اول به سوی موفقیت و پیشرفت شغلی</Text>
                <Text className='block leading-7 text-[#373737]' fontSize='sm'>با اخذ نمایندگی، شما فرصتی برای بهره‌مندی از مزایای همکاری با یک برند معتبر و رشد مستمر در حوزه فعالیت خود را خواهید داشت</Text>
            <div className='flex flex-col gap-6'>
                {representationData.map((item:any, index:number) =>(
                <Text key={index} className='flex flex-col md:flex-row justify-center items-center md:justify-start gap-3  text-[#707070]' fontSize={isDesktop?'base' : 'sm'} fontWeight='bold'><Image src={item.icon} alt={item.text} width={isDesktop ? 30: 50} height={isDesktop ? 30: 50} />{item.text}</Text>
                ))}
            </div>
            <Button onClick={handleOpen} className="bg-[#35B34A] text-white mt-5">درخواست اخذ نمایندگی</Button>
            </div>
                {isDesktop && (
                    <div className='w-[40%] p-2  rounded-lg flex justify-end'>
                    <Image src={`${publicRuntimeConfig.LIARA_IMAGE_S3_HOST}/homePage/shutterstock.png`} alt='اخذ نمایندگی' objectFit='contain' width={450} height={450} />            
                    </div>
                )}
            </div>
        </div>
        <Modal {...modalProps} noHeader bodyClassName="p-4" className="z-[100]">
            <div className="w-full flex flex-col items-center gap-3">
                {!isBetween9To14?.(moment()) &&(
                 <Alert severity="warning" className="text-black text-sm p-4">در حال حاضر پشتیبانی در دسترس نمی‌باشند، ما در اولین فرصت با شما تماس خواهیم گرفت</Alert>
                )}
                <Text className="text-[#0C0349] text-center w-full">درخواست اخد نمایندگی</Text>
                <div className=" w-full flex flex-col items-center gap-4 ">
                <div className="w-full flex flex-col md:flex-row md:justify-between gap-3">
                        <Autocomplete
                            searchable
                            options={provinces}
                            placeholder='استان'
                            name="province"
                            className='w-[100%] h-[3.5rem]'
                            onChange={e => {
                                setRepresentationFormData((prev:any) => ({
                                    ...prev,
                                    'province':{
                                        value:e.target.value,
                                        isValid:representationFormData['province'].isValid
                                    } 
                                }))                  
                                setProvinceName(e.target.value.value)
                            }}
                        />
                        <Autocomplete
                            searchable
                            options={citys}
                            placeholder='شهر'
                            name="city"
                            className='w-[100%] h-[3.5rem]'
                            onChange={e => setRepresentationFormData((prev:any) => ({
                                ...prev,
                                'city':{
                                    value:e.target.value,
                                    isValid:representationFormData['city'].isValid
                                } 
                            }))      }
                        />
                </div>
                {RepresentationFormData.map((item:any) =>(
                        <TextField type={item.type} key={item.id} classNameWrapper="w-full" className={classNames("bg-[#F9F9F9] h-14 text-black focus-visible:outline-none rounded-lg",{
                            "!h-[10rem]" : item.isMultiLine
                        })} error={!representationFormData[item.state].isValid} placeholder={item.text} multiLine={item.isMultiLine} required={item.required} 
                        onChange={e => setRepresentationFormData((prev:any) => ({
                            ...prev,
                            [item.state]:{
                                value:e.target.value,
                                isValid:representationFormData[item.state].isValid
                            } 
                        }))}
                        />
                ))}
                <Button className="bg-[#35B34A] text-white w-full -mt-2 p-8 md:p-0" onClick={handleSubmitForm}>ارسال</Button>
                </div>
            </div>
       </Modal>
        </>
    )
}

export default Representation