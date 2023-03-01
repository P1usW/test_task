export function getPageCount(xTotalCount: number | string | null, limit: number) {
    if (typeof xTotalCount === 'number') return Math.ceil(xTotalCount / limit)
    if (typeof xTotalCount === 'string') return Math.ceil(+xTotalCount / limit)
    else return 1
}