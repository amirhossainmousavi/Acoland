import classNames from "@/common/utils/classNames";
import ImageCarousel from "../imageCrousel/imageCrousel";
import Info from "../info";

interface ProjectCarousel {
  images: string[];
  information: any;
  className?: string;
  status?: string;
  infoCalssName?: string;
  imagesCalssName?: string;
  imagesCarouselCalssName?: string;
}

export const ProjectCard = (props: ProjectCarousel) => {
  const {
    images,
    information,
    className,
    status,
    infoCalssName,
    imagesCalssName,
    imagesCarouselCalssName,
  } = props;
  const projectStatus: any = {
    inProgress: {
      text: "درحال سرمایه‌گذاری",
      style:
        "w-[7rem] p-2 rounded-full bg-[#D4A129] text-white flex items-center justify-center text-[0.7rem] left-2 top-2",
    },
    completed: {
      text: "تکمیل شده",
      style:
        "w-[7rem] p-2 rounded-full bg-red-400 text-white flex items-center justify-center text-[0.8rem] text-[0.7rem] left-2 top-2",
    },
    secondarySales: {
      text: "فروش ثانویه",
      style:
        "w-[7rem] p-2 rounded-full bg-[#35B34A] text-white flex items-center justify-center text-[0.8rem] text-[0.7rem] left-2 top-2",
    },
  };
  return (
    <>
      <div
        className={classNames(
          "flex flex-col-reverse md:flex-row gap-3 relative md:justify-between items-start rounded-md shadow-sm h-full",
          className
        )}
      >
        <Info
          button={information?.button}
          name={information?.name}
          info={information?.info}
          parentClassName={infoCalssName}
        />
        <div className={classNames("h-full relative", imagesCarouselCalssName)}>
          <ImageCarousel images={images} className={imagesCalssName} />
          <div
            className={classNames("absolute", projectStatus?.[status!]?.style)}
          >
            {projectStatus?.[status!]?.text}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
