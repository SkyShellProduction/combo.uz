export async function httpClient(url, method, params) {
    const baseUrl = "https://combouz.pythonanywhere.com";
    const f = await fetch(`${baseUrl}${url}`, {
        method,
        ...params,
    });
    if(f.ok) return await f.json();
    else throw new Error(`Cannot ${method} data from ${url}`);
}