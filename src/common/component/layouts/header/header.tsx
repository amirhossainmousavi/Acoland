/* eslint-disable @next/next/no-html-link-for-pages */
import useResponsive from '@/common/hooks/useResponsive';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { useClickAway } from 'react-use';
import Logo from '@/common/component/atom/logo';
const MobileNavbar = dynamic(() => import('./components/mobileNavbar'));
import PageList from './data/pages'
import classNames from '@/common/utils/classNames';
import Button from '../../atom/button';
import PhoneIcon from '../../icons/phone';
import { useRouter } from 'next/router';
interface HeaderProps {
  shouldShowBrand?: boolean;
}
const Header = (props: HeaderProps) => {
  const { shouldShowBrand = true} = props;
  const [open, setOpen] = useState(false);
  const {isDesktop} = useResponsive();
  const router = useRouter()
  const isSpecialRoute = router.pathname ==='/project/[name]' || router.pathname ==='/representative/[name]'
  const ref = useRef(null);
  useClickAway(ref, () => {
    setOpen(false);
  });

  console.log(router);
  

  return (
    <>
      <header className={classNames("z-50 flex items-center justify-center w-full h-20 px-3 text-lg bg-transparent print:hidden pwa:hidden text-slate-700 md:px-4 md:h-20 border-slate-100 md:mt-4 md:w-[85%] md:rounded-lg mt-0 rounded-none absolute left-0 right-0 mx-auto", 
      {"bg-[#08004D] md:mt-0 md:w-full md:h-24 rounded-b-3xl": isSpecialRoute }
      )}>
        <div className={classNames("container relative items-center hidden w-full h-full mx-auto md:flex gap-4", {
          "md:w-[85%]" :  isSpecialRoute
        })}>
          {shouldShowBrand && (
            <div className="flex items-center space-s-4">
              <Link href="/" shallow prefetch={false}>
                <Logo
                  height={90}
                  width={90}
                />
              </Link>
            </div>
          )}
          {isDesktop && (
            <nav className='flex justify-between w-full items-center'>
              <ul className={classNames("flex justify-center  mb-3", {
                "mb-0": isSpecialRoute
              })}>
                <li ref={ref}>
                    {PageList().map((item:any, index:number) => (
                        <Link prefetch={false} key={index} href={item.link ?? '#'} className={classNames("inline-block text-[0.9rem] font-medium text-center cursor-pointer mx-5 text-white", {
                         "text-[#66D178] border-solid border-b-[#66D178] border-b-[3px]":item.isActiveRoute,
                        })} >
                          {item.title}
                        </Link>
                    ))}
                </li>
              </ul>
              <Button className='flex gap-2 rounded-[2rem] bg-[#35B34A] border-none font-medium ' onClick={() => location.assign('tel:02191099118')}><PhoneIcon />درخواست مشاوره</Button>
            </nav>
          )}
        </div>
        <MobileNavbar  shouldShowBrand={shouldShowBrand} />
      </header>
    </>
  );
};

export default Header;
