import Autocomplete from "@/common/component/atom/autocomplete"
import Province from '@/common/data/places/province.json'
import City from '@/common/data/places/city.json'
import { useCallback, useEffect, useState } from "react";
import debounce from 'lodash/debounce';
import isEmpty from 'lodash/isEmpty'
import TextField from "@/common/component/atom/textField";
import Text from "@/common/component/atom/text";
import Representationcard from "../../component/representationcard";
import { representationData } from "../../data/representationData";
import Skeleton from "@/common/component/atom/skeleton";
import LocationIcon from "@/common/component/icons/location";
import useResponsive from "@/common/hooks/useResponsive";

export const RepresentationList = () =>{
    const [representativesData, setRepresentativesData] = useState<any[]>([])
    const {isDesktop} = useResponsive()
    const [searchedRepresentatives, setSearchedRepresentatives] = useState<any>([])
    const [filterparams, setFilterParams] = useState<any>({})
    const [provinceName, setProvinceName] = useState(null)
    const [isLoading, setIsLoading] = useState(true);
    const [isNotFound, setIsnotfound] = useState(false)
    const [searchQuery, setSearchQuery] = useState("");
    const provinces= Province.map((item) => ({label: item.name, value: item.name}))
    const citys = provinceName && provinceName !=='همه ایران' ? City.filter((item) => item.province === provinceName).map((item) => ({label: item.name, value: item.name})) : City.map((item) => ({label: item.name, value: item.name}))
    const data = isEmpty(searchedRepresentatives) ? representativesData : searchedRepresentatives    

    useEffect(() => {
        setIsLoading(true);
        setRepresentativesData(representationData)
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
                setSearchedRepresentatives([]);
                setIsLoading(false);
                return;
            }
    
            const filteredProjects = representativesData.filter((item: any) =>
                Object.values(item).some((val: any) =>
                    String(val).toLowerCase().includes(value.toLowerCase())
                )
            );
    
            if (isEmpty(filteredProjects)) {
                setIsnotfound(true);
                setIsLoading(false);
                return;
            }
    
            setSearchedRepresentatives(filteredProjects);
            setIsLoading(false);
        }, 250),
        [representativesData]
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
        
        const searchedProjectData = !params ? representativesData : representativesData.filter((item: any) => {
            const information = item;
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
            setSearchedRepresentatives(searchedProjectData);
            setIsLoading(false);
        }, 500);
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchQuery(value);
        handleSearch(value);
    };

    return(
        <div className="md:w-[85%] p-2 md:p-0 flex flex-col overflow-x-auto justify-center items-center mt-4 z-0">
            <Text fontSize={isDesktop ? 'base' : 'sm'} className="flex justify-center items-center gap-2 flex-row-reverse mb-4 text-center md:text-start">استان و شهر و مورد نظر خود را انتخاب کنید تا آدرس و اطلاعات نماینده ها به شما نشان داده شود. <LocationIcon className="w-12 h-12 md:w-8 md:w-8" /></Text>
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
                <TextField
                    placeholder='جستجو کنید...'
                    className='focus-visible:outline-none text-black bg-[#F9F9F9]'
                    onChange={handleInputChange}
                />
            </div>
            <div className="w-full md:h-[40rem] mt-4 overflow-x-auto rounded-2xl">
            <div className=" min-w-max md:w-full bg-[#F9F9F9] md:flex-nowrap ">
                <div className="bg-[#08004D] w-full h-24 rounded-t-2xl flex items-center flex-nowrap ">
                    <Text className="w-[25%] md:w-1/5 block text-white text-center">نام و نام خانوادگی</Text>
                    <Text className="w-[10%] block text-white text-center">استان</Text>
                    <Text className="w-[10%] block text-white text-center">شهر</Text>
                    <Text className="w-[40%] block text-white text-center">آدرس</Text>
                    <Text className="w-1/5 block text-white text-center">شماره تماس</Text>
                </div>
                {isLoading ? (
                    <>
                        <LoadingCard />
                        <LoadingCard />
                        <LoadingCard />
                        <LoadingCard />
                        <LoadingCard />
                        <LoadingCard />
                    </>
                ): isNotFound ? (
                    <div className="w-full h-[85%] flex justify-center items-center">
                        <Text className="text-gray-400">نماینده ای با مشخصات درج شده، یافت نشد!</Text>
                    </div>
                ) : (
                    <div className="md:w-full">                    
                     {data.map((person:any, index:number) => (
                       <Representationcard key={index} city={person.city} province={person.province} name={person.name} address={person.address} phonNumber={person.phonNumber} image={person.image} slug={person.slugProfile} />
                     ))}
                    </div>
                )}

            </div>
            </div>
        </div>
    )
}

const LoadingCard = () =>{
    return (
        <div className='w-full flex items-center justify-start gap-12'>
            <div className="flex items-center justify-center gap-3 w-[25%] md:w-1/5 mx-2 my-4">
                <Skeleton w='4rem' h="4rem" rounded='full' />
                <Skeleton w='10rem' h="1rem" rounded='full' />
            </div>
            <div className="flex items-center justify-center w-[10%]">
            <Skeleton w='6rem' h="1rem" rounded='md' />
            </div>
            <div className="flex items-center justify-center w-[10%]">
            <Skeleton w='6rem' h="1rem" rounded='md' />
            </div>
            <div className="flex items-center justify-center w-[40%]">
            <Skeleton w='25rem' h="1rem" rounded='md' />
            </div>
            <div className="flex items-center justify-center w-[20%]">
            <Skeleton w='12rem' h="1rem" rounded='md' />
            </div>
        </div>
    );
}

export default RepresentationList