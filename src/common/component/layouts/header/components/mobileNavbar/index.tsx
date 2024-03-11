/* eslint-disable @next/next/no-html-link-for-pages */
import HumbuggerMenu from '@/common/component/icons/humbuggerMenu';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { useClickAway } from 'react-use';
import Logo from '@/common/component/atom/logo';
import PageList from '../../data/pages'
const Sidebar = dynamic(() => import('./sidebar'));

interface MobileNavbarProps {
  shouldShowBrand?: boolean;
}
const MobileNavbar = (props: MobileNavbarProps) => {
  const { shouldShowBrand = true} = props;
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => {
    setOpen(false);
  });
  return (
    <div ref={ref} className="block w-full text-sm z-infinity md:hidden">
      <div className="relative flex items-center justify-between max-w-screen-xl mx-auto">
        <div className="flex flex-row items-center gap-2">
          {true && (
            <div className="flex items-center justify-center w-8 h-8" onClick={() => setOpen(true)}>
              <HumbuggerMenu className='text-white' />
            </div>
          )}
          {shouldShowBrand && (
            <Link href="/" shallow prefetch={false} className='absolute left-4'>
              <Logo
                  width={80}
                  height={80}
              />
            </Link>
          )}
        </div>
        <Sidebar menus={PageList()} closeSidebar={() => setOpen(false)} isOpen={open} />
      </div>
    </div>
  );
};

export default MobileNavbar;
