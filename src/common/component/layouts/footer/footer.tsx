import Text from "../../atom/text"
import Info from "./component/info/info"
import Menu from "./component/menu"

export const Footer = () =>{
    return (
        <div className="w-full h-auto bg-[#0C0349] justify-center py-8 rounded-t-3xl flex flex-col items-center">
            <div className="w-full p-2 md:p-0 md:w-[85%] flex flex-col md:flex-row justify-between">
                <Info />
                <Menu />
                <div className="md:w-[25%] w-full flex justify-center mt-6 lg:mt-0">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3237.91180028028!2d51.21987788713269!3d35.7529725553015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8de4ded1ed501b%3A0x58d2de7e9058d875!2zVGVocmFuIFByb3ZpbmNlLCBUZWhyYW4sIERpc3RyaWN0IDIy2Iwg27PbtdmF2KrYsduMINin2LHYutmI2KfZhtiMINmF2KzYqtmF2Lkg2KrYrNin2LHbjCDYp9iv2KfYsduMINuM2KfYsyAzLCBJcmFu!5e0!3m2!1sen!2snl!4v1709875039314!5m2!1sen!2snl" className="h-[15rem] rounded-2xl" loading="lazy" />
                </div>
            </div>
            <div className="w-full p-2 mt-10 md:w-[85%] flex flex-col items-center border-t-2 border-t-white">
                <Text className="text-white mt-6 text-center md:text-start leading-8" fontWeight="bold">تمامی حقوق مادی و معنوی این سایت متعلق به هلدینگ آکو می‌باشد.</Text>
            </div>
        </div>
    )
}

export default Footer