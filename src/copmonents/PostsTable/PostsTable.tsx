import React, {useEffect, useState} from 'react';
import getPosts from "../../Api/getPosts";
import {InitialStatePage, IPosts} from "../../interface/interface";
import Post from "../Post/Post";

import '../../style/PostsTable.css'
import Pagination from "../Pagination/Pagination";
import {useSelector} from "react-redux";


const PostsTable = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [url] = useState<string>('https://jsonplaceholder.typicode.com/posts');
    const [posts, setPosts] = useState<IPosts[]>([]);
    const [page, setPage] = useState<number>(1)
    const [totalPages, setTotalPages] = useState(0);
    const limit = useSelector((state: InitialStatePage) => state.postsNumber);

    let pageArray = [];
    for (let i = 0; i< totalPages; i++) {
        pageArray.push(i + 1);
    }

    useEffect(() => {
        const refresh = window.location.protocol + "//" + window.location.host + window.location.pathname + `?arg=${page}`;
        window.history.pushState({ path: refresh }, '', refresh);

        getPosts<IPosts>(url, limit, page, setTotalPages)
            .then((result) => {
                if (typeof result !== 'string') setPosts([...result])
                else console.log(result)
        });
        setIsLoading(false);
    }, [page])

    return (
        <>
            <div className='posts'>
                <div className='posts_headers'>
                    <div className='posts_header'>id</div>
                    <div className='posts_header'>title</div>
                    <div className='posts_header'>Description</div>
                </div>
                {isLoading ?
                    <div>Load...</div>:
                    <>
                        {posts.map((post) =>
                            <Post
                                key={post.id}
                                post={post}
                            />
                        )}
                    </>
                }
            </div>
            <Pagination page={page}
                        pageArray={pageArray}
                        setPage={setPage}
            />
        </>



    );
};

export default PostsTable;