import classNames from '@/common/utils/classNames';
import ChevronIcon from '@/common/component/icons/chevron';
import { HTMLAttributes, useState } from 'react';
import Text from '../text';

interface AccordionProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
}

const Accordion: React.FC<AccordionProps> = props => {
  const { title, children, className } = props;
  const [open, setOpen] = useState(false);
  return (
    <div className={classNames('rounded-lg bg-[#F9F9F9] flex flex-col', className)}>
      <div className="flex items-center justify-between select-none cursor-pointer p-4" onClick={() => setOpen(!open)}>
        <Text as="span" className='left-7 text-[0.8rem]' fontWeight="medium">
          {title}
        </Text>
        <ChevronIcon dir={open ? 'top' : 'bottom'} />
      </div>
      <div className={open ? 'block p-4 pt-0 text-black leading-7' : 'hidden'}>{children}</div>
    </div>
  );
};

export default Accordion;
