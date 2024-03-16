import AcolandLogo from '@/common/assets/ACOLAND-ENGLISH-WHITE.png'
import AcometerLogo from '@/common/assets/ACOMETR-ENGLISH-WHITE.png'
import AlirezaAmooeiLogo from '@/common/assets/Alireza-Amooei-White.png'
import Acolock from '@/common/assets/ACOLOCK-ENGLISH-WHITE.png'
import useResponsive from '@/common/hooks/useResponsive'
export const Logos = () => {
    const {isDesktop} = useResponsive()
    return [
        {
            image:AcolandLogo,
            link:'https://acoland.ir/',
            width:150,
            height:150
        },
        {
            image: AcometerLogo,
            link: 'https://acometr.com/',
            width:150,
            height:150
        },
        {
            image: AlirezaAmooeiLogo,
            link: 'https://alirezaamooei.com/',
            width:isDesktop ? 70 : 60,
            height:isDesktop ? 70 : 60
        },
        {
            image: Acolock,
            link: 'https://Acolock.com/',
            width:150,
            height:150
        }
    ]
}

export default Logos