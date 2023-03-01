import React, {useEffect} from 'react';
import {PostsTableProps} from "../../interface/interface";
import Post from "../Post/Post";

import '../../style/PostsTable.css'


const PostsTable: React.FC<PostsTableProps> = ({posts, page, filterParam, setFilterParam}) => {
    useEffect(() => {
        const refresh = window.location.protocol + "//" + window.location.host + window.location.pathname + `?arg=${page}`;
        window.history.pushState({ path: refresh }, '', refresh);
    }, [page])

    function sortHeader(sortedValue: string) {
        if (sortedValue === filterParam.sortParam) setFilterParam({...filterParam, sortParam: ''})
        else setFilterParam({...filterParam, sortParam: sortedValue});
    }

    return (
        <div className='posts'>
            <div className='posts_headers'>
                <div className='posts_header' onClick={() => sortHeader('id')}>id</div>
                <div className='posts_header' onClick={() => sortHeader('title')}>title</div>
                <div className='posts_header' onClick={() => sortHeader('body')}>Description</div>
            </div>
            <>
                {posts.map((post) =>
                    <Post
                        key={post.id}
                        post={post}
                        page={page}
                    />
                )}
            </>
        </div>
    );
};

export default PostsTable;