import Logo from "@/common/component/atom/logo/logo"
import Text from "@/common/component/atom/text"
import SocialIcon from "../../data/social"
import Link from "next/link"
import Image from "next/image"


export const Info =()=>{
    return (<>
    <div className="flex flex-col items-center md:items-start gap-2 md:gap-4 w-full md:w-[25%]">
        <Logo height={130} width={130} />
        <Text className="block text-white leading-8 text-center md:text-start" fontSize="sm">آکولند، مرجع تخصصی سرمایه گذاری روی زمین، امکان سرمایه‌گذاری سودآور، بدون ریسک و با خاطر آسوده بابت مشکلات و مسائل حقوقی را برای شما فراهم می‌کند.</Text>
        <div className="flex items-center gap-4 md:gap-8">
        {SocialIcon().map((item:any) => (
            <Link href={item.link}>
                <Image src={item.icon} alt={item.alt} width={item.size ?? 30} height={item.size ?? 30} />
            </Link>
        ))}
        </div>
    </div>
    </>)
}

export default Info