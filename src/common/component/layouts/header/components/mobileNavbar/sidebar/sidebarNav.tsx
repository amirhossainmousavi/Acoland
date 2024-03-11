
import { useRef, useState } from 'react';
import { useClickAway } from 'react-use';
import { MenuItem } from './menuItem';
import SidebarItem from './sidebarItem';

const SidebarNav = ({ menu }: { menu: MenuItem }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useClickAway(
    ref,
    () => {
      if (open) {
        setOpen(false);
      }
    },
    ['click'],
  );

  return (
    <li className="border-b border-slate-200" ref={ref}>
      <SidebarItem  title={menu.title} link={menu.link} />
    </li>
  );
};

export default SidebarNav;
