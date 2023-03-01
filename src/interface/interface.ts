import React from "react";

export interface IPosts {
    userId: number,
    id: number,
    title: string,
    body: string
}

export interface IPostProps {
    post: IPosts
}

export interface ISearchProps {
    setSearchParam: React.Dispatch<React.SetStateAction<string>>
}

export interface InitialStatePage {
    postsNumber: number
}