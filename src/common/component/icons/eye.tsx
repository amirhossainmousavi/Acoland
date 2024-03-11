import { memo, SVGAttributes } from 'react';

const EyeIcon = memo(({ ...rest }: SVGAttributes<SVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.75 12C2.75 11.6616 2.88577 11.0954 3.24331 10.409C3.59385 9.73591 4.13459 8.9926 4.88371 8.3011C6.37297 6.9264 8.69232 5.75 12 5.75C15.3077 5.75 17.627 6.9264 19.1163 8.3011C19.8654 8.9926 20.4061 9.73591 20.7567 10.409C21.1142 11.0954 21.25 11.6616 21.25 12C21.25 12.3384 21.1142 12.9046 20.7567 13.591C20.4061 14.2641 19.8654 15.0074 19.1163 15.6989C17.627 17.0736 15.3077 18.25 12 18.25C8.69232 18.25 6.37297 17.0736 4.88371 15.6989C4.13459 15.0074 3.59385 14.2641 3.24331 13.591C2.88577 12.9046 2.75 12.3384 2.75 12ZM12 4.25C8.30768 4.25 5.62703 5.5736 3.86629 7.1989C2.99041 8.0074 2.34365 8.88909 1.91294 9.71605C1.48923 10.5296 1.25 11.3384 1.25 12C1.25 12.6616 1.48923 13.4704 1.91294 14.284C2.34365 15.1109 2.99041 15.9926 3.86629 16.8011C5.62703 18.4264 8.30768 19.75 12 19.75C15.6923 19.75 18.373 18.4264 20.1337 16.8011C21.0096 15.9926 21.6564 15.1109 22.0871 14.284C22.5108 13.4704 22.75 12.6616 22.75 12C22.75 11.3384 22.5108 10.5296 22.0871 9.71605C21.6564 8.88909 21.0096 8.0074 20.1337 7.1989C18.373 5.5736 15.6923 4.25 12 4.25ZM9.7499 12C9.7499 10.7574 10.7573 9.75002 11.9999 9.75002C13.2425 9.75002 14.2499 10.7574 14.2499 12C14.2499 13.2427 13.2425 14.25 11.9999 14.25C10.7573 14.25 9.7499 13.2427 9.7499 12ZM11.9999 8.25002C9.92883 8.25002 8.2499 9.92896 8.2499 12C8.2499 14.0711 9.92883 15.75 11.9999 15.75C14.071 15.75 15.7499 14.0711 15.7499 12C15.7499 9.92896 14.071 8.25002 11.9999 8.25002Z"
      fill="currentColor"
    />
  </svg>
));

EyeIcon.displayName = 'EyeIcon';

export default EyeIcon;
