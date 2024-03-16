import classNames from "@/common/utils/classNames";
import Text from "../text";
import { digitsEnToFa } from "@persian-tools/persian-tools";

interface ProgressBarProps {
  Percent: number | string;
  title: string;
  score?: number;
  parentClassName?: string;
  className?: string;
}

export const ProgressBar = (props: ProgressBarProps) => {
  const { Percent, title, score, className, parentClassName } = props;
  return (
    <div className={classNames("flex flex-col gap-y-1", parentClassName)}>
      <Text fontSize="sm" fontWeight="medium" className="whitespace-nowrap">
        {title}
      </Text>
      <div className="flex relative items-center w-full gap-x-3">
        <div className="w-full h-3 bg-[#c8cbcf] rounded-2xl">
          <div
            style={{ width: `${Percent}%` }}
            className={classNames(
              `relative h-3 rounded-2xl bg-[#35B34A]`,
              className
            )}
          ></div>
        </div>
        <Text
          className="text-center mt-1 absolute right-auto left-auto w-full text-[0.7rem] text-white"
          fontWeight="medium"
        >
          {digitsEnToFa(score ?? 0)}%
        </Text>
      </div>
    </div>
  );
};

export default ProgressBar;
