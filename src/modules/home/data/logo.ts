import AcolandLogo from '@/common/assets/ACOLAND-ENGLISH-MAIN.png'
import AcometerLogo from '@/common/assets/acometr.png'
import AlirezaAmooeiLogo from '@/common/assets/alirezaamooei.png'
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
        }
    ]
}

export default Logos