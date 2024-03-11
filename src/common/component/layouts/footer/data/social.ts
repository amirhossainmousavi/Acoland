import AparatIcon from '@/common/assets/Aparat-Logo.png'
import YoutubeIcon from '@/common/assets/youtube-white.png'
import Instagram from '@/common/assets/instagram-white.png'
import Telegram from '@/common/assets/telegram-white.png'


export const SocialIcon = () =>{
    return [
        {
            link: '#',
            icon:AparatIcon,
            alt: "آپارات"
        },
        {
            link: '#',
            icon:YoutubeIcon,
            alt: "یوتیوب"
        },
        {
            link: '#',
            icon:Instagram,
            alt: "اینستاگرام",
            size:25
        },
        {
            link: '#',
            icon:Telegram,
            alt: "تلگرام",
            size:25
        },
    ]
}

export default SocialIcon