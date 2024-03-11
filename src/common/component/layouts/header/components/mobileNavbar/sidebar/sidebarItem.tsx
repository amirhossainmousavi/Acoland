import Link from 'next/link';
import { MenuItem } from './menuItem';
import SidebarNav from './sidebarNav';

const SidebarItem = ({ title, link }: MenuItem) => {
  return (
    <>
        <li className="px-3 border-b border-dashed border-slate-300">
          <Link prefetch={false} href={link ?? '#'} className="block py-3 font-light" title={title}>
            {title}
          </Link>
        </li>
    </>
  );
};

export default SidebarItem;
