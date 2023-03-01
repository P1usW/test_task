import React from "react";
import {getPageCount} from "./getPageCount";

export default async function getPosts<I>(url: string | URL,
                                          limit: number = 100,
                                          page: number = 1,
                                          setPage: React.Dispatch<number>): Promise<I[] | string> {
    try {
        if (typeof url === 'string') url = new URL(url);
        url.searchParams.set('_limit', `${limit}`)
        url.searchParams.set('_page', `${page}`)

        let response: Response = await fetch(url);
        setPage(getPageCount(response.headers.get('x-total-count'), limit));
        return await response.json()
    } catch (err) {
        return 'Error'
    }
}