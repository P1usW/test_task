import React from 'react';
import {IPostProps} from "../../interface/interface";

import '../../style/Post.css'

const Post = ({post}: IPostProps) => {
    return (
        <div className='post'>
            <div><p className='post_id'>{post.id}</p></div>
            <div><p className='post_title'>{post.title}</p></div>
            <div><p className='post_title'>{post.body}</p></div>
        </div>
    );
};

export default Post;