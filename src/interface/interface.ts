import React from "react";

export interface IPosts {
    userId: number,
    id: number,
    title: string,
    body: string
}

export interface IPostProps {
    post: IPosts,
    page: number
}

export interface IFilterParam {
    searchParam: string,
    sortParam: string
}

export interface ISearchProps {
    filterParam: IFilterParam,
    setFilterParam: React.Dispatch<IFilterParam>
}

export interface InitialStatePage {
    postsNumber: number
}

export interface PostsTableProps {
    posts: IPosts[],
    page: number,
    filterParam: IFilterParam,
    setFilterParam: React.Dispatch<IFilterParam>
}