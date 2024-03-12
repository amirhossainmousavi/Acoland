import { memo, SVGAttributes } from 'react';

export const EmailIcon = memo(({ ...rest }: SVGAttributes<SVGElement>) => (
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
<path fillRule="evenodd" clipRule="evenodd" d="M8.33335 2.58331H8.29656H8.29656C7.08159 2.58331 6.11881 2.5833 5.34578 2.65336C4.55466 2.72506 3.88896 2.87486 3.29169 3.21969C2.5696 3.63659 1.96997 4.23622 1.55307 4.95831C1.20823 5.55559 1.05844 6.22129 0.986737 7.01241C0.916676 7.78543 0.916681 8.7482 0.916687 9.96316V9.96319V9.99998V10.0368V10.0368C0.916681 11.2518 0.916676 12.2145 0.986737 12.9876C1.05844 13.7787 1.20823 14.4444 1.55307 15.0416C1.96997 15.7637 2.5696 16.3634 3.29169 16.7803C3.88896 17.1251 4.55466 17.2749 5.34578 17.3466C6.11881 17.4167 7.0816 17.4167 8.29659 17.4166H8.33336H11.6667H11.7035C12.9184 17.4167 13.8812 17.4167 14.6543 17.3466C15.4454 17.2749 16.1111 17.1251 16.7084 16.7803C17.4304 16.3634 18.0301 15.7637 18.447 15.0416C18.7918 14.4444 18.9416 13.7787 19.0133 12.9876C19.0834 12.2145 19.0834 11.2518 19.0834 10.0368V9.99998V9.96316C19.0834 8.7482 19.0834 7.78543 19.0133 7.01241C18.9416 6.22129 18.7918 5.55559 18.447 4.95831C18.0301 4.23622 17.4304 3.63659 16.7084 3.21969C16.1111 2.87486 15.4454 2.72506 14.6543 2.65336C13.8812 2.5833 12.9185 2.58331 11.7035 2.58331H11.6667H8.33335ZM4.04169 4.51873C4.37261 4.32767 4.7941 4.20951 5.48118 4.14724C6.17857 4.08403 7.0734 4.08331 8.33335 4.08331H11.6667C12.9266 4.08331 13.8215 4.08403 14.5189 4.14724C15.2059 4.20951 15.6274 4.32767 15.9584 4.51873C16.4524 4.80398 16.8627 5.21425 17.1479 5.70831C17.339 6.03924 17.4572 6.46072 17.5194 7.1478C17.5826 7.8452 17.5834 8.74002 17.5834 9.99998C17.5834 11.2599 17.5826 12.1548 17.5194 12.8522C17.4572 13.5392 17.339 13.9607 17.1479 14.2916C16.8627 14.7857 16.4524 15.196 15.9584 15.4812C15.6274 15.6723 15.2059 15.7904 14.5189 15.8527C13.8215 15.9159 12.9266 15.9166 11.6667 15.9166H8.33336C7.0734 15.9166 6.17858 15.9159 5.48118 15.8527C4.7941 15.7904 4.37261 15.6723 4.04169 15.4812C3.54763 15.196 3.13735 14.7857 2.85211 14.2916C2.66104 13.9607 2.54289 13.5392 2.48061 12.8522C2.41741 12.1548 2.41669 11.2599 2.41669 9.99998C2.41669 8.74002 2.41741 7.8452 2.48061 7.1478C2.54289 6.46072 2.66104 6.03924 2.85211 5.70831C3.13735 5.21425 3.54763 4.80398 4.04169 4.51873ZM5.41605 6.04261C5.0714 5.81284 4.60575 5.90598 4.37598 6.25062C4.14622 6.59527 4.23935 7.06092 4.584 7.29068L9.584 10.624C9.83592 10.792 10.1641 10.792 10.416 10.624L15.416 7.29068C15.7607 7.06092 15.8538 6.59527 15.6241 6.25062C15.3943 5.90598 14.9286 5.81284 14.584 6.04261L10 9.09859L5.41605 6.04261Z" fill="#fff"/>
</svg>
));

EmailIcon.displayName = 'EmailIcon';

export default EmailIcon;
