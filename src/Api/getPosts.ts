export default async function getPosts<I>(url: string | URL): Promise<I[] | string> {
    try {
        if (typeof url === 'string') url = new URL(url);

        let response: Response = await fetch(url);
        return await response.json()
    } catch (err) {
        return 'Error'
    }
}