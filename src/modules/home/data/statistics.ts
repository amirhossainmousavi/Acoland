import MeasurementIcon from '@/common/assets/measurement-white.png'
import NetworkIcon from '@/common/assets/network-white.png'
import SocialIcon from '@/common/assets/social-justice-white.png'
import BriefingIcon from '@/common/assets/briefing-white.png'

export const StatisticsData = () => {
    return [
        {
            title:"+۴۷۰۰ متر مربع",
            description:"پروژه تعریف شده",
            image:MeasurementIcon,
            id:1
        },
        {
            title:"+۱۷۰ نفر",
            description:"سرمایه گذار فعال",
            image:NetworkIcon,
            id:2
        },  {
            title:"+۱۵۰۰ عضو",
            description:"جامعه سرمایه گذاران",
            image:SocialIcon,
            id:3
        },
        {
            title:"+۷ پروژه",
            description:"تعریف شده موفق",
            image:BriefingIcon,
            id:4
        }
    ]
}

export default StatisticsData