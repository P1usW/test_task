import React, {useEffect, useMemo, useState} from 'react';
import SearchForm from "./copmonents/SearchForm/SearchForm";
import PostsTable from "./copmonents/PostsTable/PostsTable";
import getPosts from "./Api/getPosts";
import {IFilterParam, InitialStatePage, IPosts} from "./interface/interface";
import {useSelector} from "react-redux";
import Pagination from "./copmonents/Pagination/Pagination";
import {getPageCount} from "./Api/getPageCount";

import './style/App.css';


function App() {
    const [isLoading, setIsLoading] = useState(true)

    const [filterParam, setFilterParam] = useState<IFilterParam>({searchParam: '', sortParam: ''})
    const [posts, setPosts] = useState<IPosts[]>([]);

    const [url] = useState<string>('https://jsonplaceholder.typicode.com/posts');
    const [page, setPage] = useState<number>(1)
    const [totalPages, setTotalPages] = useState(0);
    const limit = useSelector((state: InitialStatePage) => state.postsNumber);

    let pageArray = [];
    for (let i = 0; i< totalPages; i++) {
        pageArray.push(i + 1);
    }

    useEffect(() => {
        getPosts<IPosts>(url)
            .then((result) => {
                if (typeof result !== 'string') {
                    setPosts([...result])
                }

            })
            .then(() =>
                setIsLoading(false)
            );
    }, [])

    const searchPosts = useMemo(() => {
        if (filterParam.searchParam) {
            return [...posts].filter((value) => value.body.includes(filterParam.searchParam) || value.title.includes(filterParam.searchParam))
        }
        return posts
    }, [filterParam.searchParam, posts])

    const sortedAndSearch = useMemo(() => {
        const sortParam = filterParam.sortParam;
        if (sortParam === 'title' || sortParam === 'body') {
            return [...searchPosts].sort((a, b) => a[sortParam].localeCompare(b[sortParam]))
        } else if (filterParam.sortParam === 'id') {
            return [...searchPosts].sort((a, b) => b.id - a.id)
        }
        return searchPosts
    }, [filterParam.sortParam, searchPosts])

    const postsOnPage = useMemo(() => {
        return [...sortedAndSearch].slice((page - 1) * limit, limit * page)
    }, [sortedAndSearch, page])

    useEffect(() => {
        setTotalPages(getPageCount(sortedAndSearch.length, limit));
    }, [sortedAndSearch])

    return (
        <div className='container'>
            <SearchForm filterParam={filterParam}
                        setFilterParam={setFilterParam}
            />
            {isLoading ?
                <div>load...</div> :
                <>
                    <PostsTable posts={postsOnPage}
                                filterParam={filterParam}
                                setFilterParam={setFilterParam}
                                page={page}
                    />
                    <Pagination page={page}
                                pageArray={pageArray}
                                setPage={setPage}
                    />
                </>
            }
        </div>
    );
}

export default App;
