import { useRouter } from "next/router"


export const PageList = () =>{
    const router = useRouter()
    return [
        {
            id: 1,
            title: "صفحه اصلی",
            link: "/",
            isActiveRoute: router.pathname === '/',
            inOutPage:false
          },
        {
          id: 2,
          title: "پروژه ها",
          link: "/projects",
          isActiveRoute: router.pathname === '/projects',
          inOutPage:false
        },
        {
          id: 3,
          title: "نمایندگی ها",
          link:"/representatives",
          isActiveRoute: router.pathname === '/representatives',
          inOutPage:false
        },
        {
          id: 4,
          title: "مقالات",
          link:"#",
          inOutPage:true
        },
        {
          id: 5,
          title: "درباره ما",
          link: "/aboutUs",
          isActiveRoute: router.pathname === '/aboutUs',
          inOutPage:false
        }
    ]
}

export default PageList