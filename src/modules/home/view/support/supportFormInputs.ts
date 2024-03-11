import { isPersian, phoneNumberValidator} from '@persian-tools/persian-tools';

export const SupportFromInput = [
    {
        id:1,
        text:"نام و نام خانوادگی",
        state: "personaInfo",
        required: true,
        type: 'text',
        isMultiLine: false,
        isValid: (e:any) => isPersian(e)
    },
    {
        id:2,
        text:"شماره موبایل",
        state: "phoneNumber",
        required: true,
        type: 'text',
        isMultiLine: false,
        isValid: (e:any) => phoneNumberValidator(e)
    },
    {
        id:3,
        text:"توضیحات",
        state: "description",
        required: true,
        type: 'text',
        isMultiLine: true,
        isValid: (e:any) => e.length > 5
    }
]

export default SupportFromInput