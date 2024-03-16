import Text from "@/common/component/atom/text";
import classNames from "@/common/utils/classNames";
import Image from "next/image";

interface BlogProps {
  image: string;
  title: string;
  description: string;
  className?: string;
}

export const Blog = (props: BlogProps) => {
  const { description, image, title, className } = props;
  return (
    <>
      <div
        className={classNames(
          className,
          "w-[32%] h-full relative cursor-pointer rounded-md "
        )}
      >
        <div className="w-full h-full filter brightness-50 overflow-hidden transition-all rounded-md ">
          <Image
            src={image}
            alt={title}
            width={1000}
            height={1000}
            className="rounded-md hover:scale-110 transition-all"
          />
        </div>
        <div className="flex flex-col justify-end gap-3 p-4 absolute bottom-0">
          <Text fontSize="lg" className="block text-white">
            {title}
          </Text>
          <Text
            fontSize="sm"
            className="block text-white leading-7 line-clamp-2"
            fontWeight="light"
          >
            {description}
          </Text>
        </div>
      </div>
    </>
  );
};

export default Blog;
