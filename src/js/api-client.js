export async function httpClient(url, method, params) {
    const csrf = document.querySelector("input[name=csrfmiddlewaretoken]")?.getAttribute("name") || "";
    const baseUrl = "https://combouz.pythonanywhere.com";
    const f = await fetch(`${baseUrl}${url}`, {
        method,
        ...params,
        headers: {
            "X-CSRFToken": csrf,
        }
    });
    if(f.ok) return await f.json();
    else throw new Error(`Cannot ${method} data from ${url}`);
}