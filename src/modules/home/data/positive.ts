import RevenumeImage from "@/common/assets/revenue.png";
import LegalImage from "@/common/assets/Legal.png";
import SalePriceImage from "@/common/assets/SalePrice.png";

export const PositiveConfirmation = () => {
    return [
        {
            id:1,
            text:'سودی بالاتر از نرخ تورم کسب کنید.',
            photo:RevenumeImage
        },
        {
            id:2,
            text:'بدون نگرانی از مسائل حقوقی',
            photo: LegalImage
        },
        {
            id:3,
            text: 'از نگرانی‌های مربوط به مسائل حقوقی و کارشناسی ملک خلاص شوید.',
            photo: SalePriceImage
        }
    ]
}

export default PositiveConfirmation