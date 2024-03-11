import { isPersian, phoneNumberValidator} from '@persian-tools/persian-tools';

export const RepresentationForm = [
    {
        id:1,
        text:"نام و نام خانوادگی",
        state: "personaInfo",
        required: true,
        type: 'text',
        isMultiLine: false,
        helperText:'لطفا نام و نام خانوادگی خود را به صورت فارسی وارد کنید.',
        isValid: (e:any) => isPersian(e)
    },
    {
        id:2,
        text:"شماره موبایل",
        state: "phoneNumber",
        required: true,
        type: 'text',
        isMultiLine: false,
         helperText:"لطفا شماره موبایل خود را به صورت صحیح وارد کنید.",
        isValid: (e:any) => phoneNumberValidator(e)
    },
]

export default RepresentationForm