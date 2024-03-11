import getConfig from "next/config"
import TradeIcon from '@/common/assets/trade.png'
import PixelIcon from '@/common/assets/pixel.png'
import ClockIcon from '@/common/assets/clock.png'
import ExcessIcon from '@/common/assets/excess.png'
import InformationIcon from '@/common/assets/information.png'
import LocationIcon from '@/common/assets/location-pin.png'

export const representativeData = () =>{
    const {publicRuntimeConfig} = getConfig()
    return {
        name:"امیرشهریار موسوی",
        image: `${publicRuntimeConfig.LIARA_IMAGE_S3_HOST}/Representations/1399-5-2-fe4c24e4-004d-4e5d-b107-1b3d4d3e3501.png`,
        description: '<p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p><ul><li><p>تهران، شهرک راه&zwnj;آهن، بلوار علامه قزوینی، میلاد یکم، کنتراست مال (برج یاس 3)، طبقه 5، واحد 7</p></li><li><p>ساعت کاری از 11:00 الی 21:00 روزهای هفته</p></li><li><p>02191099118</p></li></ul>',
        gender: "man",
        project:[
            {
                images:[
                    `${publicRuntimeConfig.LIARA_IMAGE_S3_HOST}/homePage/windows.jpg`,
                    `${publicRuntimeConfig.LIARA_IMAGE_S3_HOST}/homePage/windows.jpg`,
                    `${publicRuntimeConfig.LIARA_IMAGE_S3_HOST}/homePage/windows.jpg`,
                    `${publicRuntimeConfig.LIARA_IMAGE_S3_HOST}/homePage/windows.jpg`
                ],
                information:{
                    name:"پروژه سوم آکولند",
                    status:"inProgress",
                    city: "تهران",
                    province: "تهران",
                    invest:"کوتاه مدت",
                    typeOfLand:"کشاورزی",
                    button:{
                        text:"اطلاعات بیشتر",
                        icon: InformationIcon,
                        action: '/project/project-3'
                    },
                    info:[
                        {
                            text:"تهران، تهران، منطقه 15، خیابان مفید، انتهای بلوار نور",
                            type:"address",
                            icon: LocationIcon,
                            name:"آدرس"
                        },
                        {
                            text:"قطعات فروش رفته",
                            type:"range",
                            Percentage: "50",
                            icon: TradeIcon,
                            name:"درصد پیشرفت"
                        },
                        {
                            text:"مسکونی",
                            name:"زمین",
                            type:"string",
                            icon: PixelIcon,
                        },
                        {
                            text:"8 ماه",
                            name:"مدت زمان",
                            type:"string",
                            icon: ClockIcon
                        },
                        {
                            text:"320 متر",
                            name:"متراژ زمین",
                            type:"string",
                            icon: ExcessIcon
                        },
                        {
                            text:"200 متر",
                            name:"متراژ مفید",
                            type:"string",
                            icon: ExcessIcon
                        }
                    ]
                }
            },
            {
                images:[
                    `${publicRuntimeConfig.LIARA_IMAGE_S3_HOST}/homePage/windows.jpg`,
                    `${publicRuntimeConfig.LIARA_IMAGE_S3_HOST}/homePage/windows.jpg`,
                    `${publicRuntimeConfig.LIARA_IMAGE_S3_HOST}/homePage/windows.jpg`,
                    `${publicRuntimeConfig.LIARA_IMAGE_S3_HOST}/homePage/windows.jpg`
                ],
                information:{
                    status:"completed",
                    city: "یزد",
                    province: "یزد",
                    name:"پروژه دوم آکولند",
                    invest:"کوتاه مدت",
                    typeOfLand:"ویلایی",
                    button:{
                        text:" به من اطلاع بده",
                        icon: InformationIcon
                    },
                    info:[
                        {
                            text:"یزد، یزد، منطقه 15، خیابان مفید، انتهای بلوار نور",
                            type:"address",
                            icon: LocationIcon,
                            name:"آدرس"
                        },
                        {
                            text:"قطعات فروش رفته",
                            type:"range",
                            Percentage: "100",
                            icon: TradeIcon,
                            name:"درصد پیشرفت"
                        },
                        {
                            text:"مسکونی",
                            name:"زمین",
                            type:"string",
                            icon: PixelIcon,
                        },
                        {
                            text:"8 ماه",
                            name:"مدت زمان",
                            type:"string",
                            icon: ClockIcon
                        },
                        {
                            text:"320 متر",
                            name:"متراژ زمین",
                            type:"string",
                            icon: ExcessIcon
                        },
                        {
                            text:"200 متر",
                            name:"متراژ مفید",
                            type:"string",
                            icon: ExcessIcon
                        }
                    ]
                }
            },
            {
                images:[
                    `${publicRuntimeConfig.LIARA_IMAGE_S3_HOST}/homePage/windows.jpg`,
                    `${publicRuntimeConfig.LIARA_IMAGE_S3_HOST}/homePage/windows.jpg`,
                    `${publicRuntimeConfig.LIARA_IMAGE_S3_HOST}/homePage/windows.jpg`,
                    `${publicRuntimeConfig.LIARA_IMAGE_S3_HOST}/homePage/windows.jpg`
                ],
                information:{
                    status:"completed",
                    city: "مهریز",
                    province: "یزد",
                    name:"پروژه دوم آکولند",
                    invest:"کوتاه مدت",
                    typeOfLand:"مسکونی",
                    button:{
                        text:" به من اطلاع بده",
                        icon: InformationIcon 
                    },
                    info:[
                        {
                            text:"یزد، مهریز، منطقه 15، خیابان مفید، انتهای بلوار نور",
                            type:"address",
                            icon: LocationIcon,
                            name:"آدرس"
                        },
                        {
                            text:"قطعات فروش رفته",
                            type:"range",
                            Percentage: "100",
                            icon: TradeIcon,
                            name:"درصد پیشرفت"
                        },
                        {
                            text:"مسکونی",
                            name:"زمین",
                            type:"string",
                            icon: PixelIcon,
                        },
                        {
                            text:"8 ماه",
                            name:"مدت زمان",
                            type:"string",
                            icon: ClockIcon
                        },
                        {
                            text:"320 متر",
                            name:"متراژ زمین",
                            type:"string",
                            icon: ExcessIcon
                        },
                        {
                            text:"200 متر",
                            name:"متراژ مفید",
                            type:"string",
                            icon: ExcessIcon
                        }
                    ]
                }
            }
        ]

    }
}

export default representativeData