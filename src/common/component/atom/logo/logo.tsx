import Image from 'next/image';
import LogoImage from '@/common/assets/ACOLAND-LOGO.png'
import useResponsive from '@/common/hooks/useResponsive';


interface LogoProps {
  width?: number;
  height?: number;
  src?:any
}

export const Logo: React.FC<LogoProps> = props => {
  const { width, height, src} = props;
  const {isDesktop} = useResponsive()
  
  return (
    <div className="flex items-center space-s-1 md:space-s-2">
      <Image src={src ?? LogoImage} alt="آکولند" width={width || 60} height={height || 60} priority />
    </div>
  );
};

export default Logo;
