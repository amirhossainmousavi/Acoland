import classNames from "@/common/utils/classNames";
import Text from "../text";
import ProgressBar from "../progressBar";
import Button from "../button";
import Image, { StaticImageData } from "next/image";
import useModal from "@/common/hooks/useModal";
import Modal from "../modal";
import { useState } from "react";
import TextField from "../textField";
import { phoneNumberValidator } from "@persian-tools/persian-tools";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import { isBetween9To14 } from "@/common/utils/isBetween9To14";
import moment from "moment";
import Alert from "../alert";

type InfoType = {
        text?:string,
        name:string,
        icon:StaticImageData,
        type: 'address' | 'string' | 'range',
        Percentage?:string
    }


export interface InfoProps{
    name:string,
    parentClassName?:string,
    button:{
        text:string,
        icon?:StaticImageData,
        action?: string
    }
    info?:InfoType[];
}

export const Info = (props: InfoProps) => {
    const {button,name,info, parentClassName} = props
    const { handleOpen, handleClose, modalProps } = useModal();
    const [phoneNumber, setPhoneNumber] = useState('');
    const [isFormHasError,setIsFormHasError] = useState<boolean>(false)
    const router = useRouter()

    const handleSubmitForm = () => {
        if(!phoneNumberValidator(phoneNumber)){
            setIsFormHasError(true)
            toast.error('شماره وارد شده صحیح نمی‌باشد!')
        } return
    }
    const routerpush = () => {
        router.push(button?.action!)
    }
    
    return <>
        <div className={classNames('w-full h-auto flex flex-col justify-between gap-3 rounded-md', parentClassName)}>
            <Text className="text-white block w-full p-3 bg-[#35B34A] text-center rounded-md" fontSize="sm" fontWeight="bold">{name}</Text>
            <div className={classNames('flex flex-col w-full h-auto gap-3')}>
                {info?.map((item:InfoType) => (
                    <>
                        {item.type === 'address' && (
                            <div className="flex items-center gap-3"><Image src={item.icon} alt={item.name} width={20} height={20}  /> <Text className="text-[0.8rem] line-clamp-1">{item.text}</Text></div>
                        )}
                        {item.type === 'range' && (
                            <div className="flex flex-row items-center justify-between gap-3 w-full">
                                <Text className="flex items-center gap-3 text-[0.8rem]"><Image src={item.icon} alt={item.name} width={20} height={20}  /> {item.text}</Text>
                                <ProgressBar Percent={item.Percentage ?? 0} score={item.Percentage ? +item.Percentage : 0} title="" parentClassName="w-[50%]" />
                            </div>
                        )}
                        {item.type === 'string' && (
                            <div className="flex flex-row items-center justify-between gap-3">
                                <Text className="flex items-center gap-3 text-[0.8rem]"><Image src={item.icon} alt={item.name} width={20} height={20}  /> {item.name}:</Text>
                                <Text className="flex items-center gap-3 text-[#BBBCBC] text-[0.8rem]">{item.text}</Text>
                            </div>
                        )}
                    </>
                ))}
                <Button className="flex items-center !p-3 gap-3 bg-[#0C0349] text-[0.8rem]" onClick={!button?.action ? handleOpen : routerpush}>{!!button?.icon && <Image src={button.icon} alt='button' width={20} height={20}  />}{button?.text}</Button>
            </div>
        </div>  
        <Modal {...modalProps} noHeader bodyClassName="p-4" className="z-[100]">
            <div className="w-full flex flex-col items-center gap-3">
                {!isBetween9To14?.(moment()) && button?.text ==='درخواست خرید قطعه' && (
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
}

export default Info;