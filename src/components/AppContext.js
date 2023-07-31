import { createContext, useEffect, useState } from "react";
import { baseUrl } from "../baseUrl";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

export const AppContext = createContext();

export default function AppContextProvider({children}){

    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [posts, setPosts] = useState([]);
    const [totalPages,setTotalPages] = useState(null);
    const navigation = useNavigate();
    const [searchParams] = useSearchParams();
    const location = useLocation();


    const fetchBlogPosts = async (page = 1, tag=null, category = null)=>{
        setLoading(true);
        let url = `${baseUrl}?page=${page}`
        if(tag){
            url += `&tag=${tag}`;
        }
        if(category){
            url += `&category=${category}`
        }

        try{
            const response = await fetch(url);
            const data = await response.json();

            setPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages);
        }
        catch(error){
            console.log("An error occured");
            setPage(1);
            setPosts([]);
            setTotalPages(null);
        }
        
        setLoading(false)
    
    }
    
    useEffect(()=>{
        const page = searchParams.get('page') ?? 1;

        if(location.pathname.includes('tags')){
            const tag = location.pathname.split('/').at(-1).replaceAll('-', ' ');
            fetchBlogPosts(Number(page),tag,null);
        }

        else if(location.pathname.includes("categories")){
            const category = location.pathname.split("/").at(-1).replaceAll('-', ' ');

            fetchBlogPosts(Number(page),null,category);
        }else{
            fetchBlogPosts(Number(page));
        }
    
    }, [location.pathname,location.search,searchParams,page ]);
    

    const pageChangeHandeler = (page) =>{
        navigation( { search: `?page=${page}`});
        setPage(page);
    }

    const values = {
        loading,
        setLoading,
        page,
        setPage,
        posts,
        setPosts,
        totalPages,
        setTotalPages,
        fetchBlogPosts,
        pageChangeHandeler
    };

    return <AppContext.Provider value={values}>
        {children}
    </AppContext.Provider>

}