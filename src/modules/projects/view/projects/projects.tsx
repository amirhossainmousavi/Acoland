import Autocomplete from '@/common/component/atom/autocomplete';
import TextField from '@/common/component/atom/textField';
import { ProjectData } from '@/common/data/project';
import ProjectCard from '@/common/component/atom/projectCard';
import Skeleton from '@/common/component/atom/skeleton';
import useResponsive from '@/common/hooks/useResponsive';
import isEmpty from 'lodash/isEmpty'
import { useCallback, useEffect, useState } from 'react';
import Text from '@/common/component/atom/text';
import Province from '@/common/data/places/province.json'
import City from '@/common/data/places/city.json'
import debounce from 'lodash/debounce';

export const ProjectsCard = () => {
    const [projectsData, setProjectsData] = useState<any[]>([])
    const [searchedProject, setSearchedProject] = useState<any>([])
    const [filterparams, setFilterParams] = useState<any>({})
    const [provinceName, setProvinceName] = useState(null)
    const [isLoading, setIsLoading] = useState(true);
    const [isNotFound, setIsnotfound] = useState(false)
    const [searchQuery, setSearchQuery] = useState("");
    const provinces= Province.map((item) => ({label: item.name, value: item.name}))
    const citys = provinceName && provinceName !=='همه ایران' ? City.filter((item) => item.province === provinceName).map((item) => ({label: item.name, value: item.name})) : City.map((item) => ({label: item.name, value: item.name}))


    const data = isEmpty(searchedProject) ? projectsData : searchedProject    
    const options: Record<string, any[]> = {    
        investOption : [
           {
               label: "همه موارد",
               value:  "همه موارد"
           },
           {
            label:"کوتاه مدت",
            value:"کوتاه مدت"
           },
           {
             label:"بلند مدت",
             value:"بلند مدت"
           }
       ],
        typeOfLandOption : [
           {
               label: "همه موارد",
               value:  "همه موارد"
           },
           {
               label:"کشاورزی",
               value:"کشاورزی"
           },
           {
               label:"ویلایی",
               value: "ویلایی"
           },
           {
               label:"مسکونی",
               value:"مسکونی"
           }
       ]
   }

    useEffect(() => {
        setProjectsData(ProjectData)
        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
    }, [])

    const handleSearch = useCallback(
        debounce((value: string) => {
            setSearchQuery(value);
            setIsLoading(true);
            setIsnotfound(false);
    
            if (!value) {
                setSearchedProject([]);
                setIsLoading(false);
                return;
            }
    
            const filteredProjects = projectsData.filter((item: any) =>
                Object.values(item.information).some((val: any) =>
                    String(val).toLowerCase().includes(value.toLowerCase())
                )
            );
    
            if (isEmpty(filteredProjects)) {
                setIsnotfound(true);
                setIsLoading(false);
                return;
            }
    
            setSearchedProject(filteredProjects);
            setIsLoading(false);
        }, 250),
        [projectsData]
    );

    const handleChangeFilter = (name: string, value: any) => {
        let searchResult = null;
        if (value === 'همه ایران' || value === 'همه موارد') {
            const { [name]: omitFilter, ...restFilters } = filterparams;
            setFilterParams(restFilters);
            searchResult = restFilters;
        } else {
            setFilterParams((prev: any) => ({ ...prev, [name]: value }));
            searchResult = { ...filterparams, [name]: value };
        }
        handleSearchData(searchResult);
    }

    const handleSearchData = (params: any) => {
        setIsLoading(true);
        setIsnotfound(false);
        
        const searchedProjectData = !params ? projectsData : projectsData.filter((item: any) => {
            const information = item.information;
            return Object.keys(params).every((key) => {
                if (key === "name") {
                    return information.name.includes(params[key]);
                } else {
                    return information[key] === params[key];
                }
            });
        });
    
        if (isEmpty(searchedProjectData)) {
            setIsnotfound(true);
        }
        setTimeout(() => {            
            setSearchedProject(searchedProjectData);
            setIsLoading(false);
        }, 500);
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchQuery(value);
        handleSearch(value);
    };

    return (
        <div className="md:w-[85%] w-full p-2 md:p-0 flex flex-col justify-center items-center mt-4">
            <div className='flex justify-center flex-col md:flex-row gap-3 w-full'>
                <Autocomplete
                    searchable
                    options={provinces}
                    placeholder='استان'
                    name="province"
                    className='w-[100%] md:w-auto'
                    onChange={e => {
                        handleChangeFilter('province', e.target.value.value)
                        setProvinceName(e.target.value.value)
                    }}
                />
                <Autocomplete
                    searchable
                    options={citys}
                    placeholder='شهر'
                    name="city"
                    className='w-[100%] md:w-auto'
                    onChange={e => handleChangeFilter('city', e.target.value.value)}
                />
                <Autocomplete
                    searchable
                    placeholder='نوع سرمایه گذاری'
                    name="invest"
                    options={options.investOption}
                    className='w-[100%] md:w-auto'
                    onChange={e => handleChangeFilter('invest', e.target.value.value)}
                />
                <Autocomplete
                    searchable
                    options={options.typeOfLandOption}
                    placeholder='نوع زمین'
                    name="typeOfLand"
                    className='w-[100%] md:w-auto'
                    onChange={e => handleChangeFilter('typeOfLand', e.target.value.value)}
                />
                <TextField
                    placeholder='جستجو کنید...'
                    className='focus-visible:outline-none text-black bg-[#F9F9F9]'
                    onChange={handleInputChange}
                />
            </div>
            <div className='w-full flex mt-4 gap-3 md:flex-row flex-col md:flex-wrap'>
                {isLoading ? (
                    <>
                        <LoadingCard />
                        <LoadingCard />
                        <LoadingCard />
                        <LoadingCard />
                    </>
                ) : isNotFound ? (
                    <div className='w-full h-[10rem] bg-[#F9F9F9] rounded-md flex justify-center items-center'>
                        <Text>موردی یافت نشد!</Text>
                    </div>
                ) : !isEmpty(data) ? (
                    data.map((item:any, index:number) => (
                        <div key={index} className='w-full md:w-[49.5%] p-3 border border-[#BBBCBC] border-solid rounded-md'>
                            <ProjectCard images={item.images} information={item.information} status={item.information.status} />
                        </div>
                    ))
                ) : null}
            </div>
        </div>
    );
}

const LoadingCard = () =>{
    const {isDesktop} = useResponsive()
    return (
        <div className='flex  flex-col-reverse md:flex-row w-full md:w-[49.5%] gap-2 p-3 border border-[#BBBCBC] border-solid rounded-md'>
            <div className='flex flex-col justify-between'>
                <div className='flex flex-col gap-3'>
                    <Skeleton w={isDesktop ? "19rem" : "23rem"} h={isDesktop ? "3rem" : "1rem"} rounded='md' />
                    <Skeleton w={isDesktop ? "19rem" : "23rem"} h={isDesktop ? "1.5rem" : "1rem"} rounded='md' />
                    <Skeleton w={isDesktop ? "19rem" : "23rem"} h={isDesktop ? "1.5rem" : "1rem"} rounded='md' />
                    <Skeleton w={isDesktop ? "19rem" : "23rem"} h={isDesktop ? "1.5rem" : "1rem"} rounded='md' />
                    <Skeleton w={isDesktop ? "19rem" : "23rem"} h={isDesktop ? "1.5rem" : "1rem"} rounded='md' />
                </div>
                <Skeleton w={isDesktop ? "19rem" : "23rem"} h='3rem' rounded='md' className='mt-6' />
            </div>
            <div>
                <Skeleton w='23rem' h={isDesktop ? "17rem" : "10rem"} rounded='md' />
            </div>
        </div>
    );
}

export default ProjectsCard;
